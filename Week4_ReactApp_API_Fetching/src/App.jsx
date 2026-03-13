import { useState } from "react";
import "./App.css";
import GetAPI from "./components/Challenge_1/GetAPI";
import LoadingError from "./components/Challenge_2/Loading_Error";
import GetID from "./components/Challenge_3/GetID";
import SearchFilter from "./components/Challenge_4/SearchFilter";

function App() {
  return (
    <>
      {/* <GetAPI></GetAPI> */}
      {/* <LoadingError></LoadingError> */}
      {/* <GetID></GetID> */}
      <SearchFilter></SearchFilter>
    </>
  );
}

export default App;
