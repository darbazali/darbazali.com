import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlexContainer from '../components/FlexContainer'

const repoStyle = {
  marginBottom: '1em',
  borderRadius: '15px',
  padding: '30px',
  marginRight: '1em',
  width: '302px',
  height: '302px',
  backgroundColor: '#fff',
  filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))',
}

const GithubAPI = () => {
  const [repos, setRepos] = useState([])
  const url =
    'https://api.github.com/users/DarbazAli/repos?direction=desc&sort=created&per_page=8'
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
      <h5 className='section-title'>My GitHub Wall</h5>
      <FlexContainer
        className='container'
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
    <div style={repoStyle} className='repo'>
      <a href={html_url}>{name}</a>
      <p>{description}</p>
      <span>{language || 'Node'}</span>
    </div>
  )
}

export default GithubAPI
