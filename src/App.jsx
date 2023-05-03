import { useState } from "react";
import "./App.css";
import FortuneCard from "./components/FortuneCard";
import phrases from "./data/package.json";
import Author from "./components/Author";

function App() {
  const backgrounds = [
    "/background1.jpg",
    "/background2.jpg",
    "/background3.jpg",
    "/background4.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [author, setAuthor] = useState(phrases[0].author);

  const actualPhrase = phrases[index];

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * 10));
    setAuthor(actualPhrase.author)
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[Math.floor(index/2.5)]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="App"
    >
      <h1>GALLETAS DE LA FORTUNA</h1>
      <FortuneCard 
      phrase={actualPhrase} 
      />
      <button onClick={changePhrase}>Ver otro</button>
      <Author 
      author={author} 
      />
    </div>
  );
}

export default App;
