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
      <div style={{ marginLeft: 70, marginTop: 50, width: 300 }}>
        <Nav tabs>
          <NavItem>
            <NavLink
              style={{
                color: "white",
                borderColor: "white",
                marginLeft: 55,
                marginBottom: 10
              }}
            >
              <Octicon mega name="arrow-down" />
              Learn more {"   "}
              <Octicon mega name="arrow-down" style={{ marginLeft: 5 }} />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane>
            <Row>
              <Card body style={{ backgroundColor: "transparent" }}>
                <CardTitle style={{ color: "white", marginLeft: 60 }}>
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
              <Card body style={{ backgroundColor: "transparent" }}>
                <CardTitle style={{ color: "white", marginLeft: 110 }}>
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
              <Card body style={{ backgroundColor: "transparent" }}>
                <CardTitle style={{ color: "white", marginLeft: 80 }}>
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
              <Card body style={{ backgroundColor: "transparent" }}>
                <CardTitle style={{ color: "white", marginLeft: 60 }}>
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
