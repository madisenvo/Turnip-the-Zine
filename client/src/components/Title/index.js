import React from "react";
import titleVideo from "./title.mp4";

export default function Title() {
  return (
    <div>
        <video className="video" autoPlay muted loop>
          <source src={titleVideo} type="video/mp4" />
        </video>
    </div>
  );
}
