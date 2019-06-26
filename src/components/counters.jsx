import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    imageUrl: "http://picsum.photos/200",
    tags: [],
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log("Event handler added .", counterId);
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
    return (
      <div>
        <img src={this.state.imageUrl} alt="" className="float-right" />
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
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
