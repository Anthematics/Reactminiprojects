import React from 'react';
import Parent from './Parent2'

export class Child extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    const name = e.target.value
    this.props.onChange(name)
  }
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names"onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
/* This is an example of a stateless component that can update its parents state.

a stateful, parent component passes down an event handler to a stateless, child component. 
The child component then uses that event handler to update its parent's state.
