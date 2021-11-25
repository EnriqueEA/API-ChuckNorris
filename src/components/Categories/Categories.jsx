import { Component } from "react";
import "./Categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const ctgs = this.props.categories.map((ctg) => (
      <span className="categories" key={ctg}>
        {ctg}
      </span>
    ));

    this.setState({ categories: ctgs });
  }

   render() {
      const uncategorized = <span className="categories">Uncategorized</span>;
    return (
      <span className="categoriesContainer">
        { this.state.categories.length === 0 ? uncategorized : this.state.categories }
      </span>
    );
  }
}

export default Categories;
