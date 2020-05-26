import React from 'react'

import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/2e95dca5-49e3-407b-962c-029dc251bf6c"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
