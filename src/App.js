import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import Navigation from "./components/Navigation";
import LoadBtn from "./components/loadBtn";
import JumbotronParameters from "./components/Parameters";
import Graph from "./components/Graph";
import TextData from "./components/TextData";
import ReferenceVideos from "./components/ReferenceVideos";
import YTSearch from "youtube-api-search";
import _ from "lodash";
const API_KEY = "AIzaSyCSfVQ46iLqj4mb6Y6VrmjbvSFfozs2_mY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos1: [],
      videos2: [],
      videos3: [],
      videos4: [],
      selectedVideo: null
    };

    this.videoSearch("Neural networks");
    this.videoSearch("radial basis");
    this.videoSearch("6 types classification algorithms");
    this.videoSearch("statquest k means");
  }

  videoSearch(term) {
    if (term === "Neural networks") {
      YTSearch({ key: API_KEY, term: term }, data => {
        this.setState({
          videos1: data,
          selectedVideo: data[0]
        });
      });
    } else if (term === "radial basis") {
      YTSearch({ key: API_KEY, term: term }, data => {
        this.setState({
          videos2: data,
          selectedVideo: data[0]
        });
      });
    } else if (term === "6 types classification algorithms") {
      YTSearch({ key: API_KEY, term: term }, data => {
        this.setState({
          videos3: data,
          selectedVideo: data[0]
        });
      });
    } else if (term === "statquest k means") {
      YTSearch({ key: API_KEY, term: term }, data => {
        this.setState({
          videos4: data,
          selectedVideo: data[0]
        });
      });
    }
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 1000);
    console.log(this.state.videos);
    return (
      <div className="Component-Bg">
        <Navigation />
        <Row>
          <Col xs="6" sm={{ size: 4, offset: 1 }}>
            <LoadBtn />
            <JumbotronParameters />
          </Col>
          <Col xs="6" sm="4">
            <Graph />
            <TextData />
          </Col>
          <Col sm="3">
            <ReferenceVideos
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos1={this.state.videos1}
              videos2={this.state.videos2}
              videos3={this.state.videos3}
              videos4={this.state.videos4}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
