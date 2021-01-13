import React from 'react'
import {
  Html5,
  Css3,
  Javascript,
  ReactJs,
  Redux,
  D3DotJs,
  Sass,
  Mocha,
  Mongodb,
  Git,
  NodeDotJs,
  Adobexd,
  Heroku,
  Firebase,
  Adobephotoshop,
  Linux,
  Jsonwebtokens,
  Npm,
  Sketch,
  Microsoftaccess,
  Slack,
} from '@icons-pack/react-simple-icons'
import FlexContainer from '../components/FlexContainer'

const Tools = () => (
  <section>
    <h5 className='section-title'>Tools</h5>

    <FlexContainer
      className='tools'
      container
      alignItems='center'
      justifyContent='space-between'
      alignContent='center'
      flexWrap='wrap'
      maxWidth='816px'
      margin='2em auto'
    >
      <Html5 size={74} />
      <Css3 size={74} />
      <Javascript size={74} />

      <ReactJs size={74} />
      <Redux size={74} />
      <D3DotJs size={74} />
      <Mocha size={74} />
      <Sass size={74} />

      <Git size={74} />
      <NodeDotJs size={74} />
      <Npm size={74} />
      <Mongodb size={74} />
      <Microsoftaccess size={74} />
      <Jsonwebtokens size={74} />
      <Heroku size={74} />
      <Firebase size={74} />
      <Linux size={74} />

      <Adobephotoshop size={74} />
      <Adobexd size={74} />
      <Sketch size={74} />
      <Slack size={74} />
    </FlexContainer>
  </section>
)

export default Tools
