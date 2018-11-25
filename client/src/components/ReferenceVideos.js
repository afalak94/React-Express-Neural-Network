import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  Row
} from "reactstrap";
import Octicon from "react-octicon";
import VideoListItem from "./VideoListItem";

class ReferenceVideos extends React.Component {
  render() {
    if (
      !this.props.videos1[0] ||
      !this.props.videos2[0] ||
      !this.props.videos3[0] ||
      !this.props.videos4[0]
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div className="videos--margin">
        <Nav tabs>
          <NavItem>
            <NavLink className="videos__learnMore">
              <Octicon mega name="arrow-down" style={{ paddingLeft: 10 }} />
              LEARN MORE {"   "}
              <Octicon mega name="arrow-down" style={{ marginLeft: 5 }} />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane>
            <Row>
              <Card body className="videos__card--bg-color">
                <CardTitle
                  className="videos__card-title"
                  style={{
                    marginLeft: 60
                  }}
                >
                  Neural Networks
                </CardTitle>
                <VideoListItem
                  onVideoSelect={this.props.onVideoSelect}
                  key={this.props.videos1[0].etag}
                  video={this.props.videos1[0]}
                />
              </Card>
            </Row>

            <Row>
              <Card body className="videos__card--bg-color">
                <CardTitle
                  className="videos__card-title"
                  style={{
                    marginLeft: 110
                  }}
                >
                  RBFN
                </CardTitle>
                <VideoListItem
                  onVideoSelect={this.props.onVideoSelect}
                  key={this.props.videos2[0].etag}
                  video={this.props.videos2[0]}
                />
              </Card>
            </Row>

            <Row>
              <Card body className="videos__card--bg-color">
                <CardTitle
                  className="videos__card-title"
                  style={{
                    marginLeft: 80
                  }}
                >
                  Classification
                </CardTitle>
                <VideoListItem
                  onVideoSelect={this.props.onVideoSelect}
                  key={this.props.videos3[0].etag}
                  video={this.props.videos3[0]}
                />
              </Card>
            </Row>

            <Row>
              <Card body className="videos__card--bg-color">
                <CardTitle
                  className="videos__card-title"
                  style={{
                    marginLeft: 60
                  }}
                >
                  K-means clustering
                </CardTitle>
                <VideoListItem
                  onVideoSelect={this.props.onVideoSelect}
                  key={this.props.videos4[0].etag}
                  video={this.props.videos4[0]}
                />
              </Card>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default ReferenceVideos;
