import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

const Hello = () => {
  const params = useParams();
  console.log(params); // Object { id: '5' }
  return <Link to="/">to home</Link>;
};

const Main = () => <Link to="/hello/5">to hello with id 5</Link>;

export default function Route1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello/:id" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}
