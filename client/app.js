import React from 'react';
import PropTypes from 'prop-types';
import './app.scss';

function App({ children, className }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12">Firebase Redux Example</h1>
      </div>
      <div className="row">
        <div className={`col-12 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default App;
