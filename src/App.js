import "./App.css";

function App() {
  const title = "welcome to the new blog";
  const likes = 50;
  const link = "https://www.youtube.com/@AmaneKanata";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes}</p>
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link} target="blank">
          Kanata
        </a>
      </div>
    </div>
  );
}

export default App;
