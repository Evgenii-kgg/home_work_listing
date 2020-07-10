import React from "react";
import "./App.css";

import  {data}  from "./data";
import Listing from "./Listing";

class App extends React.Component {


  item = data;

  render() {
    return (
      <div className="App">
        <div>
          <Listing items={this.item}/>
        </div>
      </div>
    );
  }
}

export default App;
