import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"; //modals

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

  //create modal that will play chosen youtube video
  render() {
    const video = this.props.video;
    const imgUrl = video.snippet.thumbnails.default.url;
    const videoId = video.id.videoId;
    const url = "https://www.youtube.com/embed/" + videoId;

    return (
      <div className="video-list media" style={{ marginTop: -10 }}>
        <div className="media-left">
          <Button className="videos__thumbnail" onClick={this.toggle}>
            <img className="media-object" src={imgUrl} />
          </Button>
        </div>

        <div className="media-body">
          <div className="media-heading videos__description">
            <a onClick={this.toggle} className="videos__description--links">
              {video.snippet.title}
            </a>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          video={this.props.video}
          className="videos__modal"
        >
          <ModalHeader toggle={this.toggle} className="videos__modal--header">
            {video.snippet.title}
          </ModalHeader>
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
          <ModalFooter className="videos__modal--footer">
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default VideoListItem;
