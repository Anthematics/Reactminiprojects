import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name ={this.state.name}/>;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'))

/* Great work! You just passed information from a stateful component to a stateless component. You will be doing a lot of that.

You learned earlier that a component can change its state by calling this.setState(). You may have been wondering: how does a component change its props?

The answer: it doesn't!

A component should never update this.props. Look at Bad.js to see an example of what not to do.

This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?

A React component should use props to store information that can be changed, but can only be changed by a different component.

A React component should use state to store information that the component itself can change. */
