import React from 'react'

const quadCaptchaImage = 'https://i.ibb.co/CmyXjRb/QUAD-CAPTCHA.jpg'
const qcPersona = 'https://i.ibb.co/gRqpJT4/QC-PERSONA.png'
const qcWire = 'https://i.ibb.co/YbSR8xb/qc-proto-wire.jpg'
const qcMVP = 'https://i.ibb.co/vQd2J4g/QUAD-CAPTCHA-MVP.jpg'
const qcHiFi = 'https://i.ibb.co/Mh2zZX9/qc-proto-hi-fi.jpg'
const qcDev = 'https://i.ibb.co/8D4dSyv/qc-dev.jpg'

const QuadCaptcha = () => {
  return (
    <section className='case-study'>
      <div className='case-study-content'>
        <h1>QUAD CAPTCHA MVP</h1>
        <img src={quadCaptchaImage} alt='QUAD CAPTCHA' />

        <a
          className='button-primary'
          href='https://quad-captcha.herokuapp.com'
          rel='noreferrer'
          target='_blank'
          style={{ marginBottom: '30px' }}
        >
          Visit the MVP
        </a>

        <h2>The Project</h2>
        <p>
          QQUAD CAPTCHA is an (open source) gamified bot detector web
          application. The project aims to create a light-weight MVP to reach
          early customers and show potential companies how the app can be a
          game-changer in the fraud prevention industry.
        </p>

        <h3>Role</h3>
        <p>
          <b>Product Developer</b>
        </p>

        <h3>Process</h3>
        <p>
          <b>Research -&gt; Ideate -&gt; Prototype -&gt; develop -&gt; Test</b>
        </p>

        <h3>Research methods</h3>
        <ul>
          <li>Market Research</li>
          <li>Competitor Analysis</li>
          <li>Personas</li>
        </ul>
        <img src={qcPersona} alt='QUAD CAPTCHA - Persona' />

        <h3>Ideate &amp; Prototype</h3>
        <img src={qcWire} alt='QUAD CAPTCHA - Wireframe' />
        <img src={qcHiFi} alt='QUAD CAPTCHA - Prototype' />

        <h3>Development</h3>
        <img src={qcDev} alt='QUAD CAPTCHA - Development' />
        <h2>MVP</h2>
        <img src={qcMVP} alt='QUAD CAPTCHA - MVP' />

        <h2>Applying for YC2020</h2>
        <p>
          Despite the fact that the website was far from even good, I tried to
          give it a shot and apply it to YC2020. And the outcome was a
          rejection.
        </p>
        <p>
          YC (Y Combinator) is a VC (Venture Capital) firm and accelerator based
          in the US, they help companies grow from just an idea to become a
          potential hyper-growth startup, through investing money and provining
          remarkable business and marketing insights to the founders.
        </p>

        <h2>Testing with Companies</h2>
        <p>
          After the project has been turned down from YC, I tried to test the
          idea with fraud prevention companies, I looked for a tiny window of
          interest as positive feedback so that I can continue with the project
          without been worry about being in the wrong direction.
        </p>
        <p>
          The first Target was Cloudflare. I reached out to Mr. Mathew Prince
          (CEO of Cloudflare), I discussed the idea with him, and thankfully
          after he interacted with the app, he told me, "I found it really tough
          to understand what to do when I tried it."
        </p>
        <p>
          A usability issue, that is what the feedback suggests. Then I realized
          the problem is with the user onboarding, it's kinda hard to teach
          users how to solve the CAPTCHA
        </p>

        <h2>What is next?</h2>
        <p>
          My job for the next iteration is to solve this problem and conduct a
          usability test with real users, then going for the next level, which
          is shipping.
        </p>

        <h2>What did I learn?</h2>
        <p>
          The initial idea may work very well and solve a real-world problem,
          but not exactly as you planned, so you have to be open to any
          structural change that needs toward the perfection of the product
        </p>
        <p>
          Testing early is the best action to take if you want to find out
          whether your design decisions are right or wrong. This way, you won’t
          waste a lot of energy and time(money) going in the wrong direction.
        </p>
        <a
          className='button-primary'
          href='https://quad-captcha.herokuapp.com'
          rel='noreferrer'
          target='_blank'
          style={{ marginBottom: '30px' }}
        >
          Visit the MVP
        </a>
      </div>
    </section>
  )
}

export default QuadCaptcha
