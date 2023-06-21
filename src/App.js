
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const title = "The Dojo Blog";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
