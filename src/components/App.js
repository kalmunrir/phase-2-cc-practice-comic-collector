import React, {useState, useEffect} from "react";
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {
  const [comicList, setComicList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/comics")
    .then(r => r.json())
    .then(comics => setComicList(comics))
  }, [])

  function addComic(comicObj){
    fetch("http://localhost:8004/comics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(comicObj),
    })
    .then((res) => res.json())
    .then((newComic) => setComicList([...comicList, newComic]));
  }
  function deleteComic(comicObj){
    fetch(`http://localhost:8004/comics/${comicObj[`id`]}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((newComic) => setComicList(comicList.filter((comic) => comic !== comicObj)));
  }


  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comicList={comicList} deleteComic={deleteComic}/>
        </div>

        <div className="sidebar">
          <ComicForm addComic={addComic}/>
        </div>

      </div>


    </div>
  );
}

export default App;
