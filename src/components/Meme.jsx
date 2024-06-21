import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImgs, setAllMemeImgs] = React.useState([]);

  React.useEffect(() => {
    // (*) async method:
    // async function getMemes() {
    //   const res = await fetch("https://api.imgflip.com/get_memes");
    //   const data = await res.json();
    //   setAllMemes(data.data.memes);
    // }
    // getMemes();

    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImgs(data.data.memes));
  }, []);

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemeImgs.length);
    const { url } = allMemeImgs[randomNumber];
    setMeme((prevMeme) => ({ ...prevMeme, randomImg: url }));
  }

  function handleChange() {
    const { name, value } = event.target;

    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getMemeImg} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
