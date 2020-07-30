import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Header from './header'
// import Head from './head'
// import Home from './home'

const Profile = () => {
  const [repos, setRepos] = useState([]) // выводит массив репозиториев
  const { userName } = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const list = it.data.map((repo) => repo.name)
      setRepos(list)
    })
  }, [userName])
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {/* <input type="text" />
            <button type="button">Кнопка</button> */}
          {/* <Route exact path="/" component={() => <MyInput />} />
            <Route exact path="/:username" component={() => <MyInput />} /> */}
          {/* <Route exact path="/:username/:repository" component={() => <Dashboard />} /> */}
          List of repos:
          {repos.map((item) => {
            return (
              <Link to={`/${userName}/${item}`}>
                <div key={item} style={{ display: 'flex', width: '300px' }}>
                  {item}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
