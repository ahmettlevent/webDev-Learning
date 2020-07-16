import React, { Component } from 'react';
import { Form } from 'reactstrap';

class FormDemo extends Component {
  state = { userName: "", city: "" }

  onSubmitHandler = (event) => {
    alert(this.state.userName)
    event.preventDefault()

  }
  onChangeHandler = (event) => {
    // this.setState({ userName: event.target.value })
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <h3>Username</h3>
          <input name="userName" onInput={this.onChangeHandler} id="input_un" type="text"></input>
          <h3>Username is {this.state.userName}</h3>
          <br></br>
          <h3>City</h3>
          <input name="city" onInput={this.onChangeHandler} id="input_city" type="text"></input>
          <h3>City is {this.state.city}</h3>

          <input type="submit" value="Save" />
        </Form>
      </div>
    );
  }
}

export default FormDemo;