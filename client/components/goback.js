import React from 'react'
import { Link } from 'react-router-dom'

const GoBack = () => {
  return (
    <div className="flex items-center justify-left">
      <div className="bg-indigo-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  )
}
export default React.memo(GoBack)
