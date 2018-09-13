import React from 'react'

class TenantFooter extends React.Component {
  render() {
    const { tenant } = this.props
    return (
      <footer>
        <hr />
        {tenant.legal_name}
      </footer>
    )
  }
}

export default TenantFooter
