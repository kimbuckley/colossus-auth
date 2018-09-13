import React from 'react'
import Cookies from 'js-cookie'
import TenantHeader from 'components/TenantHeader'
import TenantFooter from 'components/TenantFooter'
import LoginForm from 'components/LoginForm'
import AuthedArea from 'components/AuthedArea'

class App extends React.Component {
  state = {
    tenantData: {},
    authed: false,
  }

  componentDidMount() {
    let token = Cookies.get('token')
    if (token) {
      fetch(`/api/v1/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
      })
        .then(res => {
          if (res.status === 200) {
            this.setAuth(token)
          }
        })
    }
    fetch(`/tenant/`)
      .then(res => res.json())
      .then(res => this.setState({ tenantData: res }))
      .catch(err => console.log(err))
  }

  setAuth = (token) => {
    this.setState({ authed: true }, () =>
      Cookies.set('token', token)
    )
  }

  render() {
    return (
      <div className="App">
        <TenantHeader
          tenant={this.state.tenantData}
          authed={this.state.authed}
        />
        <hr />
        {this.state.authed ? (
          <AuthedArea />
        ) : (
          <LoginForm setAuth={this.setAuth} />
        )}
        <TenantFooter tenant={this.state.tenantData} />
      </div>
    )
  }
}

export default App
