import React from "react";
import { Button, a } from "reactstrap";
import "../styles/videoText.css";

const VideoListItem = ({ video }) => {
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="video-list media" style={{ marginTop: -10 }}>
      <div className="media-left">
        <Button style={{ backgroundColor: "transparent", border: "none" }}>
          <img className="media-object" src={imgUrl} />
        </Button>
      </div>

      <div className="media-body">
        <div
          className="media-heading"
          style={{
            fontSize: "14px",
            marginLeft: 10,
            backgroundColor: "transparent",
            color: "white",
            marginTop: 10
          }}
        >
          <a href="/" className="links">
            {video.snippet.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
