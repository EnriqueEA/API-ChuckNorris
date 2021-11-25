import { Component } from "react";
import fetchData from "../config";
import Select from "../Select/Select";
import BodyJoke from "../BodyJoke/BodyJoke";
import "./Jokes.css";
import Number from "../Number/Number";
import InputText from "../InputText/InputText";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      amountJokes: 1,
      amountResult: 0,
      category: '',
      firstName: '',
      lastName: '',
      jokes: [],
    };
  }

  async getData(e) {
    const jokes = await fetchData(false, {
      victimsName: { firstName: this.state.firstName, lastName: this.state.lastName },
      multipleJokes: this.state.amountJokes,
      limitTo: [this.state.category]
    });
    // const jokes = await fetchData(false, { multipleJokes: this.state.amountJokes });

    if (typeof jokes === 'string') {
      this.setState({ show: true });
      return;
      
    }

    if (!Array.isArray(jokes)) {
      this.setState({
        show: true,
        message: '',
        jokes: [<BodyJoke joke={jokes} key={jokes.id} />],
        amountResult: 1
      });
      return;
    }

    const bodysJoke = jokes.map(joke => (<BodyJoke joke={ joke } key={ joke.id } />));

    this.setState({
      show: true,
      jokes: bodysJoke,
      amountResult: typeof jokes === 'string'? 0 : jokes.length
    });
  }

  getCategory(category) {
    this.setState({ category: category });
  }
  
  getAmount(amountJokes) {
    this.setState({ amountJokes: amountJokes });
  }

  getName(firstName, lastName) {
    this.setState({ firstName: firstName, lastName: lastName });
  }

  render() {
    return (
      <>
        <div className="container">
          <h2>Chuck Norris Jokes</h2>
          <Select eventChange={ this.getCategory.bind(this) } />
          <Number eventChange={ this.getAmount.bind(this) } />
          <InputText eventKeyUp={ this.getName.bind(this) } />
          <button onClick={ this.getData.bind(this) }>Show Jokes</button>
        </div>
        {this.state.show === true ? (
          <div className="results">
            <b>{ this.state.amountResult } results found</b>
          </div>
        ) : (
          ""
        )}
        {this.state.show === true ? this.state.jokes : ""}
      </>
    );
  }
}

export default Jokes;
