import React, { useState } from 'react'
// import { Route, Switch, Router } from 'react-router-dom'
// import Profile from './profile'
import Header from './header'
import { history } from '../redux'

const Home = () => {
  const [userName, setUser] = useState('')
  const onChange = (event) => {
    setUser(event.target.value)
  }

  const onClick = () => {
    history.push(`${userName}`)
  }

  return (
    <div>
      <Header />

      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-yellow font-bold rounded-lg border shadow-lg p-10">
          <div>
            <input
              className="shadow-appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Username"
              id="input-field"
              value={userName}
              onChange={onChange}
            />
          </div>
          <div>
            <button type="button" id="toggle-button" onClick={onClick}>
              Кнопка
            </button>
            {/* <Router>
              <Switch>
                <Route exact path="/:userName" component={() => <Profile />} />
              </Switch>
            </Router> */}
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
