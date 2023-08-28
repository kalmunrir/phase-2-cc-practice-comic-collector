import React, {useState} from "react";

function Comic({comic, deleteComic}) {
  const [disp, setDisp] = useState(false);

  function onDispClick(){
    setDisp(!disp);
  }
  const detailDisplay =
  <>
    <h3 onClick={onDispClick}>{comic[`title`]}</h3>
    <h4>{comic[`issue`]}</h4>
    <button onClick={() => deleteComic(comic)}>Remove</button>
  </>

  return (
    <div className="comic-item">
      {
        disp ? detailDisplay : <img src={comic[`image_url`]} alt={"Comic Issue Image"} onClick={onDispClick}/>
      }
    </div>
  )

}

export default Comic
