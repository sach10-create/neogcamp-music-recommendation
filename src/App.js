import "./styles.css";
import { useState } from "react";
var musicList = {
  EDM: [
    { name: "Hardwell", rating: "5/5" },
    { name: "MarshMellow", rating: "4/5" },
    { name: "DJ Snake", rating: "4.5/5" }
  ],
  Jazz: [
    { name: "Dizzy Gillespie ", rating: "5/5" },
    { name: "A Night In Tunisia", rating: "4/5" }
  ],
  Blues: [
    { name: "Lonely Bed", rating: "5/5" },
    { name: "I Remember You", rating: "3.5/5" }
  ]
};

var musicArray = Object.keys(musicList);
export default function App() {
  const [selectedGenre, setGenre] = useState("Jazz");
  function genreClickHandler(genre) {
    console.log("hi");
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Vibing Music! </h1>
      <h2> Here is my Music collection </h2>
      <div>
        {musicArray.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {musicList[selectedGenre].map((music) => (
              <li
                key={music.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {""}
                <div style={{ fontSize: "larger", color: "yellowgreen" }}>
                  {" "}
                  {music.name}{" "}
                </div>
                <div style={{ fontSize: "smaller", color: "yellowgreen" }}>
                  {" "}
                  {music.rating}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
