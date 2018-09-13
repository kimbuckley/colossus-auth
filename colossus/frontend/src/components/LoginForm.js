import React from 'react'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api-token-auth/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          this.props.setAuth(res.token)
        }
      })
      .catch(err => console.log('an error occurred', err))
  }

  set = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Email Address</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.set}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.set}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default LoginForm
