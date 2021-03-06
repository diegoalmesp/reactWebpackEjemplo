'use strict';

import React from 'react';

require('styles/curso/global/Caja.scss');

class CajaComponent extends React.Component {
  render() {
    const style = {backgroundColor: this.props.color};

    return (
      <div className="caja-component" style={style}>
        {/*Please edit src/components/curso/global//CajaComponent.js to update this component!*/}
        {this.props.children}
      </div>
    );
  }
}

CajaComponent.displayName = 'CursoGlobalCajaComponent';

// Uncomment properties you need
// CajaComponent.propTypes = {};
// CajaComponent.defaultProps = {};

export default CajaComponent;
