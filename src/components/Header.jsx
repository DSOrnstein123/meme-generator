import { getImageURL } from "../utils/insert-img.js";

function Header() {
  return (
    <div className="header">
      <img className="header-img" src={getImageURL("troll-face.png")} alt="" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Course</h4>
    </div>
  );
}

export default Header;
