import React from 'react'

class TenantHeader extends React.Component {
  render() {
    const { tenant, authed } = this.props
    return (
      <header>
        <img
          className="masthead"
          src={tenant.branding && tenant.branding.logo}
          alt="SmartCoverage Insurance"
        />
        <small>authed: {authed ? 'Yes' : 'No'}</small>
      </header>
    )
  }
}

export default TenantHeader
