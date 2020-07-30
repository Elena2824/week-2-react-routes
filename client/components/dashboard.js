import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
// import MyInput from './input'
// import Head from './head'
// import Home from './home'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {/* <input type="text" />
            <button type="button">Кнопка</button> */}
          {/* <Route exact path="/" component={() => <MyInput />} />
            <Route exact path="/:username" component={() => <MyInput />} /> */}
          <Route exact path="/:username/:repository" component={() => <Dashboard />} />
          This is DASHBOARD component
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
