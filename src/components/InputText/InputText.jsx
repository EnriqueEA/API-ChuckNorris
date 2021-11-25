import { Component } from "react";

class InputText extends Component {
  constructor(props) {
    super(props);
     this.state = {
        first: '',
        last: ''
    };
  }
   
   componentDidMount() {
      
   }

   getFirst(e) {
      this.setState({ first: e.target.value });
   }

   getLast(e) {
      this.setState({ last: e.target.value });
   }
   
   render() {
    return (
      <div className="containerInput" onKeyUp={() => this.props.eventKeyUp(this.state.first, this.state.last) }>
        <label><b>First Name: </b><input type="text" onChange={ e => this.getFirst(e) } /></label>
        <label><b>Last Name: </b><input type="text" onChange={ e => this.getLast(e) } /></label>
      </div>
    );
  }
}

export default InputText;
