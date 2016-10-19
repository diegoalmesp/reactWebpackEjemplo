'use strict';

import React from 'react';
import Caja from './../global/CajaComponent';

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
        <Caja color="red">
          <input
            type="text"
            value={this.state.input}
            // onChange={this.handleInputChange}
          />
        </Caja>
      </div>
    );
  }
}

StatesComponent.displayName = 'CursoReactStatesComponent';

// Uncomment properties you need
// StatesComponent.propTypes = {};
// StatesComponent.defaultProps = {};

export default StatesComponent;
