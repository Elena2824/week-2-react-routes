import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()

  return (
    <nav className="flex items-left justify-center flex-wrap bg-teal-500 p-6">
      <div className="flex items-between flex-shrink-0 text-white mr-6" id="repository name">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <button type="button" id="toggle-button" className="font-semibold text-xl tracking-tight">
          Главная {userName}
        </button>
        <div className="text-white mr-6" id="go-back">
          <Link to="/">Go Back</Link>
        </div>
        {typeof repositoryName !== 'undefined' ? (
          <div className="text-white mr-6" id="go-repository-list">
            <Link to={`/${userName}`}>Go To Repository List</Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}
export default React.memo(Header)
