import React from "react";
import "./Bottom.scss";

export default function Bottom({prof}) {
  function BottomEvent() {
    document.body.scrollTop = document.documentElement.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.documentElement.scrollHeight; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    const threshold = window.innerHeight / 2;
    let op =  (document.documentElement.scrollHeight - window.innerHeight - document.documentElement.scrollTop) / threshold;
    console.log(document.documentElement.scrollTop);
    if( op <= 0 ){
      document.getElementById("fixed-profile-image").style.visibility = "hidden";
      document.getElementById("bottomButton").style.visibility = "hidden";

    } else {
      document.getElementById("fixed-profile-image").style.visibility = "visible";
      document.getElementById("bottomButton").style.visibility = "visible";

    }
    document.getElementById("fixed-profile-image").style.opacity = op.toString();
    document.getElementById("bottomButton").style.opacity = op.toString();


    // if (
    //   Math.round(document.body.scrollTop + 50) < Math.round(document.documentElement.scrollHeight - window.innerHeight) ||
    //   Math.round(document.documentElement.scrollTop + 50) < Math.round(document.documentElement.scrollHeight - window.innerHeight) // 6429 - 6329
    // ) {
    //   console.log("Vis" + + Math.round(document.documentElement.scrollTop + 50) + " < " + Math.round(document.documentElement.scrollHeight - window.innerHeight));
    //   document.getElementById("fixed-profile-image").style.visibility = "hidden";
    //
    // } else {
    //   console.log("Hidden")
    //   document.getElementById("fixed-profile-image").style.visibility = "visible";
    // }

  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    // <button onClick={BottomEvent} id="bottomButton" title="Go to bottom">
      <div onClick={BottomEvent} id="bottomButton" className="image-content-profile">
        <img
          src={prof.avatarUrl}
          alt={prof.name}
          className="fixed-profile-image"
          id="fixed-profile-image"
        />
      </div>
    // </button>
  );
}