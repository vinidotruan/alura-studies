import "./style.scss";

export default function List() {
  const tasks = [
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "javascript",
      time: "01:00:00",
    },
    {
      name: "typescript",
      time: "03:00:00",
    },
  ];
  return (
    <aside className="taskList">
      <h2> Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="item">
            <h3> {task.name}</h3>
            <span> {task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
