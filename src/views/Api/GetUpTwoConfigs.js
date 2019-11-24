import React, { Component } from "react";
import axios from "axios";

export default class getUpTwoConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configuration: [],
      isLoading: false
    };
    axios
      .get(
        "https://demo5460031.mockable.io/ order-down-two-configs",
        {
          params: {
            period: "2019-11-01"
          }
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        this.setState({
          configuration: response.data.configs,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, configuration } = this.state;
    return (
      <React.Fragment>
        <h2>Random User</h2>
        <div>
          {!isLoading ? (
            configuration.map(config => {
              const { order_num, limit } = config;
              return (
                <div key={order_num}>
                  <p>{order_num}</p>
                  <p>{limit}</p>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
