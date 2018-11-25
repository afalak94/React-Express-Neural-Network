import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink //modals
} from "reactstrap";
import Iris from "../datasets/irisData.csv";
import Seeds from "../datasets/seedsData.csv";
import Cancer from "../datasets/cancerData.csv";
import Transfusion from "../datasets/transfusionData.csv";

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      tempData: undefined
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    //render data set button links if its the "Quick Start" modal
    if (this.props.buttonLabel === "Quick Start") {
      var datasets = (
        <div>
          <a href={Iris} download>
            <Button color="info" className="button--right">
              Iris data set{" "}
            </Button>
          </a>
          <a href={Seeds} download>
            <Button color="info" className="button--right">
              Seeds data set
            </Button>
          </a>
          <a href={Cancer} download>
            <Button color="info" className="button--right">
              Breast cancer data set
            </Button>
          </a>
          <a href={Transfusion} download>
            <Button color="info" style={{ marginRight: 215 }}>
              Blood transfusion data set
            </Button>
          </a>
        </div>
      );
      var bodyText = (
        <div>
          <h4 className="navigation__modal--title-family">1. Load data set</h4>
          <p>
            Click on a button <strong>Load data set</strong> and choose a csv
            file from your computer. You can find large collections of data sets
            on sites like:
          </p>
          <ul>
            <li>
              <a href="http://archive.ics.uci.edu/ml/index.php" target="_blank">
                UCI Machine Learning Repository
              </a>
            </li>

            <li>
              <a href="https://www.kaggle.com/" target="_blank">
                Kaggle
              </a>
            </li>
          </ul>
          <p>
            Alternatively, for a quick start, you can download some of the
            available data sets on the bottom.
          </p>
          <br />
          <h4 className="navigation__modal--title-family">
            2. Choose parameters
          </h4>
          <p>
            RBFNN consists of 3 important parameters:{" "}
            <strong>network size, centers and spread</strong>. You can choose to
            manually set how many hidden neurons RBFNN will have, or you can
            choose to automatically calculate for optimal network size using
            mean squared error (MSE) evaluation. By choosing the MSE option,
            user will see generated graph which represents correlation between
            MSE and the number of hidden neurons.
          </p>
          <br />
          <h4 className="navigation__modal--title-family">
            3. Train and test neural network
          </h4>
          <p>
            After loading data set and choosing parameters, click on the{" "}
            <strong>Train and test </strong>
            button. After some time, user will receive RBFNN results in the text
            area and a graph if they selected automatic method for determining
            network size.
          </p>
        </div>
      );
    } else if (this.props.buttonLabel === "About") {
      var bodyText = (
        <div>
          <h3 className="navigation__modal--title-family">
            Radial basis function neural network for classification using
            cluster analysis
          </h3>
          <br />
          <h4 className="navigation__modal--title-family">Classification</h4>
          <p>
            In machine learning and statistics, classification is a supervised
            learning approach in which the computer program learns from the data
            input given to it and then uses this learning to classify new
            observation. This data set may simply be bi-class (like identifying
            whether the person is male or female or that the mail is spam or
            non-spam) or it may be multi-class too. Some examples of
            classification problems are: speech recognition, handwriting
            recognition, bio metric identification, document classification etc.
            There are many types of classification algorithms in machine
            learning and here you can use radial basis function neural network
            (RBFNN) as a classifier.
          </p>

          <h4 className="navigation__modal--title-family">Cluster analysis</h4>
          <p>
            Cluster analysis or clustering is the task of grouping a set of
            objects in such a way that objects in the same group (called a
            cluster) are more similar (in some sense) to each other than to
            those in other groups (clusters). It is a main task of exploratory
            data mining, and a common technique for statistical data analysis,
            used in many fields, including machine learning, pattern
            recognition, image analysis, information retrieval, bioinformatics,
            data compression, and computer graphics. In this project, RBFNN
            implements clustering algorithm called k-means.
          </p>

          <h4 className="navigation__modal--title-family">
            Radial basis function neural network
          </h4>
          <p>
            This type of NN is descibed by three layers of neurons (input,
            hidden and output layer). RBFNN implements activation functions in
            the neurons of the hidden layer. These activation functions are
            called radial basis functions (RBF), hence the apropriate name of
            neural network. The number of neurons in the hidden layer determine
            <strong> network size</strong>. Every RBF has two parameters:{" "}
            <strong>center</strong> of the function, and <strong>spread</strong>{" "}
            around that center. K-means algorithm can be used to find optimal
            center locations in the input space. RBFNN represents input space
            with RBFs and makes classification decision by measuring levels of
            RBF activation.
          </p>
        </div>
      );
    }

    return (
      <div>
        <NavLink onClick={this.toggle} className="navigation__modal-button">
          {this.props.buttonLabel}
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="navigation__modal"
        >
          <ModalHeader
            toggle={this.toggle}
            className="navigation__modal-header"
          >
            <div className="navigation__modal-header--size">
              {this.props.buttonLabel}
            </div>
          </ModalHeader>

          <ModalBody className="navigation__modal-body">{bodyText}</ModalBody>

          <ModalFooter style={{ fontFamily: "Open+Sans" }}>
            {datasets}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
