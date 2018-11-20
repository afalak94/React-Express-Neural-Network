import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import Navigation from "./components/Navigation";
import LoadBtn from "./components/loadBtn";
import Parameters from "./components/Parameters";
import Graph from "./components/Graph";
import TextData from "./components/TextData";
import ReferenceVideos from "./components/ReferenceVideos";
import YTsearch from "youtube-api-search";
import config from "./config.js";

//API key for youtube
const API_KEY = config.config[0].API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos1: [],
      videos2: [],
      videos3: [],
      videos4: [],
      selectedVideo: null,
      data: undefined
    };

    this.videoSearch("Neural networks");
    this.videoSearch("radial basis");
    this.videoSearch("6 types classification algorithms");
    this.videoSearch("statquest k means");

    this.getData = this.getData.bind(this);
  }

  //when starting the App, connect to the backend server
  componentDidMount() {
    this.callApi()
      .then(res => console.log(res.welcome))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("http://localhost:5000/api/welcome");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  //set data into state
  getData = val => {
    this.setState({ data: val }, function() {
      //console.log(this.state.data);
    });
  };

  //search 4 youtube videos for rendering thumbnails and playing videos
  videoSearch(term) {
    if (term === "Neural networks") {
      YTsearch({ key: API_KEY, term: term, maxResults: 1 }, data => {
        this.setState({
          videos1: data,
          selectedVideo: data[0]
        });
      });
    } else if (term === "radial basis") {
      YTsearch({ key: API_KEY, term: term, maxResults: 1 }, data => {
        this.setState({
          videos2: data,
          selectedVideo: data[0]
        });
      });
    } else if (term === "6 types classification algorithms") {
      YTsearch({ key: API_KEY, term: term, maxResults: 1 }, data => {
        this.setState({
          videos3: data,
          selectedVideo: data[0]
        });
      });
    } else if (term === "statquest k means") {
      YTsearch({ key: API_KEY, term: term, maxResults: 1 }, data => {
        this.setState({
          videos4: data,
          selectedVideo: data[0]
        });
      });
    }
  }

  render() {
    return (
      <div className="Component-Bg">
        <Navigation />

        <Row>
          <Col xs="6" sm={{ size: 4, offset: 1 }}>
            <LoadBtn onUpdate={this.getData} />
            <Parameters data={this.state.data} />
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
