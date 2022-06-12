import React, { PureComponent } from "react";

import { WorkloadListContainer } from "../WorkloadList";
import { WorkloadFormContainer } from "../WorkloadForm";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="Navbar">CloudWork</h1>
        <div className="WorkloadContainer">
          <div>
            <WorkloadFormContainer />
          </div>

          <div>
            <h2>Workloads</h2>
            <WorkloadListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
