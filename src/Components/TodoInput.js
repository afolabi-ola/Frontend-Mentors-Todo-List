import "../styles/TodoInput.css";

function TodoInput({onAddTodo,userInput,onInput}) {

  return (
    <div className="form-cont">
      <form className="input-container" onSubmit={onAddTodo}>
        <span className="disabled-cont">
          <input type="checkbox" className="disabled" disabled />
        </span>
        <input
          type="text"
          className="input"
          placeholder="Currently typing"
          value={userInput}
          onChange={(e) => onInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoInput;
