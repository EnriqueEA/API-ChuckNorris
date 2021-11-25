import { Component } from "react";

class Number extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return (
        <label>
          <b>Amount:</b>
          <input type="number" min="0" onChange={ e => this.props.eventChange(e.target.value) } />
        </label>
      );
   }
}
 
export default Number;