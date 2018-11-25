import React, { Component } from "react";
import "./App.scss";
import { Row, Col } from "reactstrap";
import { subscribeToTimer } from "./api";
import Navigation from "./components/Navigation";
import LoadBtn from "./components/loadBtn";
import Parameters from "./components/Parameters";
import Graph from "./components/Graph";
import TextData from "./components/TextData";
import ReferenceVideos from "./components/ReferenceVideos";
import AlertComp from "./components/Alert";
import YTsearch from "youtube-api-search";
import config from "./config.js";

//API key for youtube
const API_KEY = config.config[0].API_KEY; //place your youtube API key here

class App extends Component {
  constructor(props) {
    super(props);

    //set state from server time
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );

    this.state = {
      videos1: [],
      videos2: [],
      videos3: [],
      videos4: [],
      selectedVideo: null,
      data: undefined,
      alert: false,
      timestamp: "time"
    };

    //search for youtube videos
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
      console.log(this.state.data);
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
      <div className="app--background-image">
        <Navigation />
        {this.state.alert === true ? (
          <AlertComp onDismiss={() => this.setState({ alert: false })} />
        ) : (
          false
        )}

        <Row>
          <Col xs="6" sm={{ size: 4, offset: 1 }}>
            <LoadBtn
              onUpdate={this.getData}
              onDismiss={() => this.setState({ alert: true })}
            />
            <Parameters data={this.state.data} />
          </Col>
          <Col xs="6" sm="4">
            <Graph />
            <TextData />
          </Col>
          <Col sm="3">
            <div className="navigation__clock--position">
              <p className="navigation__clock--style">{this.state.timestamp}</p>
            </div>
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
