import React from "react"
import Comic from "./Comic"
import { v4 as uuid } from 'uuid';

function ComicsContainer({comicList, deleteComic}) {

  return (
    <>
      {
        comicList.map(comic => <Comic key={uuid()} comic={comic} deleteComic={deleteComic}/>)
      }
    </>
  )

}

export default ComicsContainer
