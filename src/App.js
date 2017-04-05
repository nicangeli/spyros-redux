import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './actions/auth'

import './App.css';

class App extends Component {
  state = {
    email: null,
    password: null
  }
  handleLogin = () => {
    const { email, password } = this.state
    return this.props.login(email, password)
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.setState({email: e.target.value})} />
        <input type="password" onChange={e => this.setState({password: e.target.value})} />
        <button onClick={this.handleLogin}>Login</button>
        <h2>token: {this.props.token}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}
const mapDispatchToProps = {
  login: actions.login
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
