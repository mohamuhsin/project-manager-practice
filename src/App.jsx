import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
