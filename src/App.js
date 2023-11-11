import "./App.css";
import CanvasModel from "./canvas/CanvasModl";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;
