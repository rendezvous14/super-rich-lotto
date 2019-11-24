import React, { Component } from "react";
import axios from "axios";
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeHostName = this.onChangeHostName.bind(this);
    this.onChangePort = this.onChangePort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      configs: [
        {
          order_num: "",
          limit: ""
        }
      ]
    };
  }
  onChangeHostName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePort(e) {
    this.setState({
      port: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`name is ${this.state.name} and port is ${this.state.port}`);

    const configuration = {
      name: this.state.name,
      port: this.state.port
    };
    axios
      .post("https://demo5460031.mockable.io/qa/orders", configuration)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      port: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Add New Server</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Host Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeHostName}
            />
          </div>
          <div className="form-group">
            <label>Add Server Port: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.port}
              onChange={this.onChangePort}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Node server"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
