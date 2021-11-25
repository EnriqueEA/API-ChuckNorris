import { Component } from "react";
import './BodyJoke.css'
import Categories from "../Categories/Categories";

class BodyJoke extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="body">
          <span className="id">
            <b>Joke number: </b>#{this.props.joke.id}
          </span>
          <div className="categoriesContainer">
            <b>Categories: </b>
            <Categories categories={ this.props.joke.categories } />
          </div>
          <div className="joke">
            <b>Joke: </b>
            {this.props.joke.joke}
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default BodyJoke;
