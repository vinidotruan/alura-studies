import React from "react";
import Button from "../Button";
import "./style.scss";

class Form extends React.Component {
  render() {
    return (
      <form className="task">
        <div className="inputContainer">
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar"
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="time"> Tempo </label>
          <input type="time" id="tempo" name="time" step="1" min="00:00:00" />
        </div>
        <Button></Button>
      </form>
    );
  }
}

export default Form;
