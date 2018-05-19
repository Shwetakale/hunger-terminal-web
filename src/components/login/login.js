import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Login extends Component {
  render() {
    return(
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
    )
  }
}

export default Login;
