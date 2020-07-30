import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Header from './header'
// import Header from './header'
// import Head from './head'
// import Home from './home'

const Readme = () => {
  const [repos, setRepos] = useState([]) // выводит массив репозиториев
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(
      (it) => {
        const list = it.data
        setRepos(list)
      }
    )
  }, [userName, repositoryName])
  return (
    <div>
      <Header />
      <div id="description">
        <ReactMarkdown>{repos}</ReactMarkdown>
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
