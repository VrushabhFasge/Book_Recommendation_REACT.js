import { useState } from "react";
import "./styles.css";
import { BookData } from "./DataSet";

//to map keys of the dictionary
const bookPlace = Object.keys(BookData);

export default function App() {
  var [selectBook, setBook] = useState("SciFi");

  function getBook(book) {
    setBook(book);
  }

  return (
    <div className="App">
      <h1 className="Header-Title">Book Recommendation App</h1>

      <div>
        {bookPlace.map((book) => {
          return (
            <button
              className="button"
              key={book}
              onClick={() => getBook(book)}
              style={{
                position: "relative",
                display: "block",
                padding: "1rem",
                margin: "1rem auto",
                borderRadius: "20px",
                border: "0",
                textAlign: "center",
                minWidth: "240px", 
                fontSize: "1.2rem",
                cursor: "pointer"
              }}
            >
              {book}
            </button>
          );
        })}

        <div className="output">
          <p style={{ fontSize: "15px", margin: "0px", paddingTop: "1.2 rem" }}>
            Books based on your selection:{" "}
          </p>
          {BookData[selectBook].map((place) => {
            return <h1>{place.name}</h1>;
          })}
        </div>
        <div class="clear"></div>

        <div className="footer">
          <p style={{ margin: "auto" }}>
            {" "}
            &nbsp; &nbsp; &nbsp; Code. Connect. Socially.
          </p>
          <ul className="unordered">
            <li>
              <a href="https://www.instagram.com/_dope_indian_dude_/">
                Instagram
              </a>
            </li>

            <li>
              <a href="https://twitter.com/VrushabhFasge">Twitter</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/vrushabh-fasge-1b39a4190/?originalSubdomain=in">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://github.com/vrushabhFasge/">github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
