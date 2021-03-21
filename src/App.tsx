import React from "react";
import "./App.css";
import { LoginScreen } from "./screens/login";
import { ProjectListScreen } from "./screens/project-list";
// import { TsReactTest } from "./screens/try-use-array";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen> */}
      {/* <TsReactTest></TsReactTest> */}
      <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
