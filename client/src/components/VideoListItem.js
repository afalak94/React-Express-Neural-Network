import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"; //modals
import "../styles/videoText.css";

class VideoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const video = this.props.video;
    const imgUrl = video.snippet.thumbnails.default.url;
    const videoId = video.id.videoId;
    const url = "https://www.youtube.com/embed/" + videoId;

    return (
      <div className="video-list media" style={{ marginTop: -10 }}>
        <div className="media-left">
          <Button
            onClick={this.toggle}
            style={{
              backgroundColor: "transparent",
              border: "none"
            }}
          >
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
            <a onClick={this.toggle} className="links">
              {video.snippet.title}
            </a>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          video={this.props.video}
          className="myModal"
        >
          <ModalHeader toggle={this.toggle}>{video.snippet.title}</ModalHeader>
          <ModalBody className="modal-body">
            {/* Embedding youtube video in modal body*/}
            <div className="video-detail col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title={video.snippet.title}
                  className="embed-responsive-item"
                  src={url}
                />
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default VideoListItem;
