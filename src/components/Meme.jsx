import memesData from "../assets/memes-data.js";
import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImgs, setAllMemeImgs] = React.useState(memesData);

  function getMemeImg() {
    const memesArray = allMemeImgs.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    setMeme((prevMeme) => ({ ...prevMeme, randomImg: url }));
  }

  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top text" />
        <input className="form-input" type="text" placeholder="Bottom text" />
        <button onClick={getMemeImg} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImg} className="meme-img" />
    </main>
  );
}

export default Meme;
