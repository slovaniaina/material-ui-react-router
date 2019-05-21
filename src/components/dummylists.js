import React from "react";
import dummylist from "../dummy";
import List from "./customlist";

class DummyListPage extends React.Component {

  state = {
    currentIndex: -1
  };

  handleChange = (i) => {
    console.log(`nandalo ${i} : ${this.state.currentIndex}`);
    this.setState({
        currentIndex:i
    })
  };

  render() {

    const { handleChange } = this;
    const { currentIndex } = this.state;

    return (
      <div>
        <p>the selected answer is {this.state.index}</p>
        {dummylist.map(function(e, i) {
          return (
            <List
              question={e.question}
              answer={e.answer}
              handleChange={handleChange}
              key={i}
              index={i}
              currentIndex = {currentIndex}
            />
          );
        })}
      </div>
    );
  }
}

export default DummyListPage;