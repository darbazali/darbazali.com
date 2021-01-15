import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, image, subtitle, link, cta_label }) => {
  return (
    <section className={'project'}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '1em' }}>
        <div className='project-content'>
          <h4 style={{ maxWidth: '500px', margin: '12px auto' }}>{title}</h4>
          <p style={{ marginBottom: '2em' }}>{subtitle}</p>

          {/\b(http|https)/.test(link) ? (
            <a
              href={link}
              rel='noreferrer'
              target='_blank'
              className='button button-secondary'
            >
              {cta_label}
            </a>
          ) : (
            <Link to={link} className='button button-secondary'>
              {cta_label}
            </Link>
          )}
        </div>

        <img
          src={image}
          alt={title}
          style={{ width: '100%', marginTop: '2em' }}
        />
      </div>
    </section>
  )
}

export default ProjectCard
