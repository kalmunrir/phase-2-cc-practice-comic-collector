import React, {useState} from "react"

function ComicForm({addComic}) {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [issueNum, setIssueNum] = useState("");
  const [description, setDescription] = useState("");

  function onImgChange(e){
    setImage(e.target.value);
  }
  function onTitleChange(e){
    setTitle(e.target.value);
  }
  function onIssueNumChange(e){
    setIssueNum(e.target.value);
  }
  function onDescChange(e){
    setDescription(e.target.value);
  }
  function onSubmit(e){
    e.preventDefault();
    addComic({
      "title": title,
      "issue": issueNum,
      "image_url": image
    });
  }


  return (

    <form className="comic-form" onSubmit={onSubmit}>

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" onChange={onImgChange}/>

      <label htmlFor="title">Title: </label>
      <input name="title" onChange={onTitleChange}/>

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" onChange={onIssueNumChange}/>

      <label htmlFor="description">Description: </label>
      <input name="description" onChange={onDescChange}/>

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
