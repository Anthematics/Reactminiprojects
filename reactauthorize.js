import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = <form action = "#" onSubmit = {this.authorize}>
            <input type = "password" placeholder= "Password" /> <input type = "submit" />  </form>
    const contactInfo = (
      <ul>
          <li>
            Jasonharder2@gmail.com
          </li>
          <li>
            555.666.7777
          </li>
        </ul>
      );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact": "Enter The Password"}
          {this.state.authorized ? contactInfo : login}</h1>


      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);
