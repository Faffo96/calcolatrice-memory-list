import React, { Component } from 'react';
import Tasto from './components/tasto-calcolatrice';
import Display from './components/display-calcolatrice';

class App extends Component {
  render() {
    return (
      <form>
        <div className="container mt-5 rounded bg-dark" style={{ maxWidth: '300px', border: "3px solid #ffc107", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.25)'}}>
          <div className="row mt-4 mb-4 rounded" style={{justifyContent: 'center'}}>
            <Display />
          </div>
          <div className="row m-0">
            <Tasto
              tasto="7"
              value="7"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="8"
              value="8"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="9"
              value="9"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="+"
              value="+"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-warning rounded" />
          </div>
          <div className="row m-0">
            <Tasto
              tasto="4"
              value="4"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="5"
              value="5"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="6"
              value="6"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="-"
              value="-"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-warning rounded" />
          </div>
          <div className="row m-0">
            <Tasto
              tasto="1"
              value="1"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="2"
              value="2"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="3"
              value="3"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="X"
              value="*"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-warning rounded" />
          </div>
          <div className="row m-0">
            <Tasto
              tasto="."
              value="."
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="0"
              value="0"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-secondary rounded" />
            <Tasto
              tasto="C"
              value="C"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-danger rounded" />
            <Tasto
              tasto="/"
              value="/"
              col="col-3"
              width="20%"
              buttonStyle="btn btn-warning rounded" />
          </div>
          <div className="row m-0 mb-3">
            <Tasto
              tasto="="
              value="="
              col="col-12"
              width="95%"
              buttonStyle="btn btn-warning rounded" />
          </div>
        </div>
      </form>
    );
  }
}

export default App;
