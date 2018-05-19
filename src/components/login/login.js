import React, { Component } from 'react';
import { Card, CardBody,
  CardHeader, Input, Col, Row, Form, FormGroup, Label, Button } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    return(
      <Row>
        <Col sm={4} />
        <Col sm={4}>
          <Card>
            <CardHeader>Login</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="example@domain.com" onChange={this.onChangeEmail} />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="*******" onChange={this.onChangePassword} />
                </FormGroup>
                <Button onClick={this.handleLogin}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
      </Col>
      <Col sm={4} />
    </Row>
    )
  }

  handleLogin() {
    fetch('http://localhost:3001/api/v0/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify({user: this.state}),
      headers: {'content-Type': 'application/json'}
    }).then((response) => {
      response.json()
      .then(response2 => {
        console.log(response2);
        console.log(response.status)

      }).catch((b) => {
        alert("EROOOOR!!")
      })
    }).catch((errorResonse) => {
      errorResonse.json()
      .then(errorResonse2 => {
        alert(errorResonse2);

      }).catch((b) => {
        alert("EROOOOR!!")
      })
    })
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  onChangePassword(e) {
    this.setState({password: e.target.value});
  }
}

export default Login;
