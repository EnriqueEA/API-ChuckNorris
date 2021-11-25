import { Component } from "react";
import fetchData from "../config";
import "./Select.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      value: "1",
    };
  }

  async componentDidMount() {
    let categories = await fetchData(true);
    categories = categories.map((ctg) => (
      <option value={ctg} key={ctg}>
        {ctg}
      </option>
    ));
    this.setState({ categories: categories });
  }

  render() {
    return (
      <label>
        <b>Category: </b>
        <select
          onChange={(e) => this.props.eventChange(e.target.value)}
          className="select"
        >
          <option value="1">Seleccione</option>
          {this.state.categories}
        </select>
      </label>
    );
  }
}

export default Select;
