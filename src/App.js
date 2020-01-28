import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      mostrar: true
    };

    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  toggle() {
    this.setState({
      mostrar: !this.state.mostrar
    });
  }

  render() {
    const fecha = (
      <div className="display-date">
        {this.state.date.getDate()}/{this.state.date.getMonth() + 1}/
        {this.state.date.getFullYear()}
      </div>
    );
    return (
      <div>
        <nav className="header navbar navbar-dark bg-dark">
          <div className="container">
            <div className="row m-auto">
              <i className="fa fa fa-clock-o fa-4x text-white" />
              <div className="h1 ml-3 my-auto text-light" href="/">
                Reloj
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="container">
            <div className="d-flex flex-row">
              <div className="col-md-4 mx-auto">
                <div className="panel">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.toggle()}
                  >
                    {this.state.mostrar ? "Ocultar fecha" : "Mostrar fecha"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="d-flex flex-row">
              <div className="col-md-4 mx-auto">
                <div className="display">
                  <div className="display-time">
                    {this.state.date.getHours()}:
                    {(this.state.date.getMinutes() < 10 ? "0" : "") +
                      this.state.date.getMinutes()}
                    :
                    {(this.state.date.getSeconds() < 10 ? "0" : "") +
                      this.state.date.getSeconds()}
                  </div>
                  {this.state.mostrar && fecha}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
