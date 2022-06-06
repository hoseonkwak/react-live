import React, { ReactNode } from 'react';
import Span from './SpanComponent'

// function Div (props: { name1: string, children: ReactNode}) {
//   console.log(props);
//   return (
//     <div>
//       div: {props.name1} <br/>
//       {props.children}
//     </div>
//   );
// }
// const Div = (props: any) => {
//   return (
//     <div>
//       {props.span1}
//       <br/>
//       {props.name1}
//       <br/>
//       {props.span2}
//     </div>
//   );
// }

const Div = (props: any) => {
  return (
    <div>
      {/* <props.span1 />
      {props.span1()}
      <br/>
      {props.name1()}
      <br/>
      {props.span2()} */}
    </div>
  );
}

export default Div;