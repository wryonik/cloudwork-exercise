import React, { PureComponent } from 'react';

import { WorkloadListContainer } from '../WorkloadList';
import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-mainColumn">
          <WorkloadListContainer />
        </div>
        <div className="App-asideColumn">
          {/* <WorkloadFormContainer /> */}
        </div>
      </div>
    );
  }
}

export default App;
