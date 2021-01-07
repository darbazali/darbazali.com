import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlexContainer from '../components/FlexContainer'

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
      <h5 className='section-title'>My GitHub Wall</h5>
      <FlexContainer
        className='repos'
        container
        alignItems='stretch'
        justifyContent='center'
        alignContent='center'
        flexWrap='wrap'
        width='auto'
        margin='0 auto'
      >
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </FlexContainer>
    </section>
  )
}

const Repo = ({ repo: { name, html_url, language, description } }) => {
  return (
    <div className='repo'>
      <a href={html_url}>{name}</a>
      <p>{description}</p>
      <span>{language || 'Node'}</span>
    </div>
  )
}

export default GithubAPI
