import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/repos.css'

const GithubAPI = () => {
  const [repos, setRepos] = useState([])
  const url =
    'https://api.github.com/users/DarbazAli/repos?direction=desc&sort=created&per_page=10'
  useEffect(() => {
    const getRepos = async () => {
      const { data } = await axios.get(url, {
        'Content-Type': 'application/vnd.github.v3+json',
      })
      console.log(data)
      setRepos(data)
    }

    getRepos()
  }, [])

  return (
    <section>
      <p className='section-title'>my github wall</p>
      <div className='repo-container'>
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  )
}

const Repo = ({ repo: { name, html_url, language, description } }) => {
  return (
    <div className='repo'>
      <a href={html_url}>
        <h4>{name}</h4>
      </a>{' '}
      <span>{language || 'Node'}</span>
      <p>{description}</p>
    </div>
  )
}

export default GithubAPI
