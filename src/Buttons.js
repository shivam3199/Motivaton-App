import React from "react";
import { CgTwitter } from "react-icons/cg";
import {AiOutlineInstagram} from "react-icons/ai";

const Buttons = ({ author, text, getRandomValue }) => {
  let link = `https://twitter.com/intent/tweet?text=${text + " - " + author}`;

  const downloadToFile = () => {
    const a = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });

    a.href = URL.createObjectURL(file);
    a.download = author;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="btn-box">
      <button id="new-quote" onClick={() => getRandomValue()}>
        New Quote
      </button>

      <button className="btn-save" onClick={() => downloadToFile()}>
        Save
      </button>

      <button className="twitter-btn">
        <a
          id="tweet-quote"
          className="twitter-share-button"
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          <CgTwitter />
        </a>
      </button>

      <a
        className="Shivam"
        href="https://www.instagram.com/shivam_raskonda/"
        target="-blank"
      >
        <AiOutlineInstagram />
        Shivam Raskonda
      </a>
    </div>
  );
};

export default Buttons;
