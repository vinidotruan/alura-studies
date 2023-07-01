import React from "react";

import Form from "../components/Forms";
import List from "../components/List";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form></Form>
      <List></List>
    </div>
  );
}

export default App;
