import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    imageUrl: "http://picsum.photos/200",
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags .</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {

    // ejectable , then replace onReset , counters ... with this.props.onReset , this.props.counters ,.....
    const { onReset, counters, onDelete, onIncrement} = this.props;

    console.log("Counters - Rendered");

    return (
      <div>
        <button
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
        <img src={this.state.imageUrl} alt="" className="float-right" />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
        <br />
        {this.state.tags.length === 0 && "Create a new tag ."}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counters;
