// https://github.com/donavon/hook-flow
import { useState, useEffect } from "react";

function Child() {
  console.log(`%c     Child: render start`, `color: MediumSpringGreen`);

  const [count, setCount] = useState(() => {
    console.log(`%c   Child: useState(() => 0)`, "color: tomato");
    return 0;
  });

  /* There are three different versions of useEffect
  1. no dependencies - depend on everything
  2. an array of empty dependencies - no depende of anything
  3. single or more dependencies -
   */

  useEffect(() => {
    console.log(`%c   Child: useEffect(() => {})`, `color: LightCoral`);
    return () => {
      console.log(`%cChild: useEffect(() => {}) CLEANUP`, `color: LightCoral`);
    };
  });

  useEffect(() => {
    console.log(`%cChild: useEffect(() => {}, [])`, `color: MediumTurquoise`);

    return () => {
      console.log(
        `c%Child: useEffect(() => {}, []) CLEANUP`,
        `color: MediumTurquoise`
      );
    };
  }, []);

  useEffect(() => {
    console.log(`c%Child: useEffect(() => {}, [count])`, `color: HotPink`);

    return () => {
      console.log(`%cChild: useEffect(() => {}, []) CLEANUP`, `color: HotPink`);
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );

  console.log(`%cChild: render end`, `color: MediumSpringGreen`);

  return element;
}

function App() {
  console.log(`%cApp: render start`, `color: MediumSpringGreen`);

  const [showChild, setShowChild] = useState(() => {
    console.log(`%cApp: useState(() => false)`, `color: tomato`);
    return false;
  });

  useEffect(() => {
    console.log(`%cApp: useEffect(() => {})`, `color: LightCoral`);

    return () => {
      console.log(`%cApp: useEffect(() => {}) cleanup`, `color: LightCoral`);
    };
  });

  useEffect(() => {
    console.log(`%cApp: useEffect(() => {}, [])`, `color:MediumTurquoise`);

    return () => {
      console.log(
        `%cApp: useEffect(() => {} , []) cleanup`,
        `color: MediumTurquoise`
      );
    };
  }, []);

  useEffect(() => {
    console.log(`%cApp: useEffect(() => {}, [showChild])`, `color: HotPink`);

    return () => {
      console.log(
        `%cApp: useEffect(() => {}, [showChild]) cleanup`,
        `color: HotPink`
      );
    };
  }, [showChild]);

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </>
  );

  console.log(`%cApp: render end`, `color: MediumSpringGreen`);

  return element;
}

export default App;
