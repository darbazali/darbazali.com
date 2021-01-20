import React, { useState, useEffect } from 'react'
import axios from 'axios'
import repoIcon from '../assets/ICON/repository_icon.svg'

const GithubAPI = () => {
  const [repos, setRepos] = useState([])
  const url =
    'https://api.github.com/users/DarbazAli/repos?direction=desc&sort=created&per_page=8'
  useEffect(() => {
    const getRepos = async () => {
      const { data } = await axios.get(url, {
        'Content-Type': 'application/vnd.github.v3+json',
      })
      setRepos(data)
    }

    getRepos()
  }, [])

  return (
    <section>
      <h3 className='section-title'>GitHub Wall</h3>
      <div className='container flex flex-jc-sb flex-fw-w'>
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
      <img
        width='24'
        height='32'
        src={repoIcon}
        alt='repo icon'
        style={{
          display: 'inline-block',
          marginBottom: '-10px',
          marginRight: '1em',
        }}
      />
      <a href={html_url}>{name}</a>
      <p>{description}</p>
      <span>{language || 'None'}</span>
    </div>
  )
}

export default GithubAPI
