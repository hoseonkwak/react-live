// import React, { createContext, useContext, useMemo, useState } from "react";
import SignUpReactRedux from "./ReduxEx/SignUpReactRedux";
// import Prac3 from "./ContextPractice/Prac3";
// import Prac3_2 from "./ContextPractice/Prac3-2";
// import SignUpContext from "./ContextPractice/signUpEx";
// import StateTest from "./StateTest/StateTest";
// import StateComponent from "./StateComonent/StateComponent";
// import StateComponent2 from "./StateComonent/StateComponent2";
// import ThirdPrac2 from "./ThirdPrac/ThirdPrac2";
// import UseRefEx from "./UseRefEx/UseRefEx";
// import YuHyo from "./UseRefEx/YuHyo";

// import Counter from "./ReduxEx/Counter";
import SignUpRedux from "./ReduxEx/SignUpRedux";

// import UseEffect1 from "./UseEffect/UseEffect1";
// import UseEffect2 from "./UseEffect/useEffect2";
// import UseEffect3 from "./UseEffect/UseEffect3";
// import Route1 from "./ReactRouter/Route1";
// import Example2 from "./ReactRouter/Example2";npm
// import StyleEx from "./StyledComponent/StyleEx";
//import Hello1 from "./ContextPractice/Hello1";

// const NameContext = createContext("");

// const Hello1 = () => {
//   const name = useContext(NameContext);
//   const hello4 = useMemo(() => {
//     console.log("rerender in hello1");
//     return <Hello4 />;
//   }, []);
//   return (
//     <div>
//       this is Hello1. and Name is {name} {Hello4}
//       <Hello4 />
//     </div>
//   );
// };
// const Hello4 = () => {
//   console.log("rerender in hello4");
//   const name = useContext(NameContext);
//   return (
//     <div>
//       this is Hello4
//       <div>Hello {name}!</div>
//     </div>
//   );
// };
const App = () => {
  // const [test, setTest] = useState("");

  return (
    <>
      {/* <ThirdPrac2 /> */}
      {/* <StateComponent /> */}
      {/* <StateComponent2 /> */}
      {/* <StateTest /> */}
      {/* <UseRefEx /> */}
      {/* <YuHyo /> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffect3 /> */}
      {/* <Route1 /> */}
      {/* <Example2 /> */}
      {/* <StyleEx /> */}
      {/* <input
        type="text"
        onChange={(e) => setTest(e.target.value)}
        value={test}
      />
      <NameContext.Provider value={test}>
        <Hello1 />
      </NameContext.Provider> */}
      {/* <Counter /> */}
      {/* <input
        type="text"
        onChange={(e) => {
          setTest(e.target.value);
          // console.log(test);
        }}
        value={test}
      />
      <NameContext.Provider value={test}>
        <Hello1 />
      </NameContext.Provider> */}
      {/* <SignUpContext /> */}
      {/* <Prac3 /> */}
      {/* <Prac3_2 /> */}
      <SignUpRedux />
      {/* <SignUpReactRedux /> */}
    </>
  );
};

export default App;
