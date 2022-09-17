import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

function App() {

  return (
    <main className="bg-zinc-800 h-screen">
      <div>
      <TasksForm />
      <TasksList />
      </div>
    </main>
  );
}

export default App;
