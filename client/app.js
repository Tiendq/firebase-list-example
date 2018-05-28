import React from 'react';
import ScreenManagerContainer from './screen-manager';
import './app.scss';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12">Firebase Redux Example</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <ScreenManagerContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
