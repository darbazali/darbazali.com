import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlexContainer from '../components/FlexContainer'

const repoStyle = {
  width: 'calc(50% - 16px)',
  marginBottom: '1em',
  height: '140px',
  borderRadius: '10px',
  backgroundColor: 'transparent',
  border: '1px solid rgba(105, 114, 133, 0.47)',
  padding: '2em',
  marginRight: '1em',
}

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
      <h5 className='section-title'>my github wall</h5>
      <FlexContainer
        className='container'
        container
        alignItems='stretch'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='wrap'
        maxWidth='1028px'
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
    <div style={repoStyle}>
      <a href={html_url}>
        <h5 style={{ display: 'inline', fontWeight: '500' }}>{name}</h5>
      </a>{' '}
      <span style={{ float: 'right' }}>{`{${language || 'Node'}}`}</span>
      <p style={{ marginTop: '1em', height: '20px', overflow: 'hidden' }}>
        {description}
      </p>
    </div>
  )
}

export default GithubAPI
