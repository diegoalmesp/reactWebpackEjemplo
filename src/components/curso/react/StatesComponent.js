'use strict';

import React from 'react';
import CajaComponent from './../global/CajaComponent';

require('styles/curso/react/States.scss');

class StatesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input : 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="states-component">
        <CajaComponent color="red">
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
          <h1>{this.state.input}</h1>
        </CajaComponent>
      </div>
    );
  }
}

StatesComponent.displayName = 'CursoReactStatesComponent';

// Uncomment properties you need
// StatesComponent.propTypes = {};
// StatesComponent.defaultProps = {};

export default StatesComponent;
