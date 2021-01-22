import React from 'react'

const hwmHeroImage = 'https://i.ibb.co/VSPk1rP/HWM-HERO-IMG.jpg'
const hwmCrazy8s = 'https://i.ibb.co/bXyV52r/HWM-CRAZY8-S-3x.jpg'
const hwmCreateEvent = 'https://i.ibb.co/C57BNcN/HWM-CREATING-EVENT.jpg'
const hwmEventSummary = 'https://i.ibb.co/3SjmxxF/HWM-Event-Summary.jpg'
const hwmHiFi = 'https://i.ibb.co/JQ2x8x9/HWM-HI-FI.jpg'
const hwmPersonas = 'https://i.ibb.co/hc4jvRj/HWM-PERSONAS.jpg'
const hwmUserSurvy = 'https://i.ibb.co/pW52PhP/HWM-user-survey-example.png'
const hwmUserFlow = 'https://i.ibb.co/kccv0pN/HWM-USER-FLOW-DIAGRAM.jpg'

const HikeWithMe = () => {
  return (
    <section className='case-study'>
      <div className='case-study-content'>
        <h1>Hike With Me</h1>
        <img src={hwmHeroImage} alt='Hike With Me' />

        <h3>Brief</h3>
        <p>
          I have been hired to create a user flow for a new outdoors app called
          “Hike with Me”. Their team has completed their research and are shared
          with me their business goals and user personas. It is important to
          them that the app flows in a logical order with the least amount of
          clicks a user must push to schedule and complete a hike. The flow must
          be designed with the users in mind, but also I have to work to meet
          their business goals.
        </p>

        <h3>App Description</h3>
        <p>
          <b>
            Hike with Me is a Mobile app for scheduling a hike with others.{' '}
          </b>
        </p>

        <h3>Business Goals</h3>
        <ul>
          <li>
            Create healthier communities and more active individuals by giving
            people an easy way to schedule a hike.{' '}
          </li>
          <li>Increase the number of hikes users go on. </li>
          <li>Increase the number of app downloads</li>
        </ul>

        <h2>Discovery </h2>

        <h3>User Research</h3>
        <p>
          Although my clients’ team conducted a research to find their users’
          needs, for me, it wasn’t enough to understand how hikers plan to go
          for a hiking, that’s why I decided to conduct another user research. I
          conducted user research by creating a user survey with google forms.
          The context was a combination of Qualitative and Quantitative
          questions.
        </p>
        <img src={hwmUserSurvy} alt='Hike with Me - user survey' />

        <h3>Personas</h3>
        <img src={hwmPersonas} alt='Hike with Me - Personas' />

        <h2>Ideation</h2>
        <h3>User-Flow</h3>
        <p>
          I started by designing a user-flow to see how the user flows through
          different screens of th app.
        </p>
        <img src={hwmUserFlow} alt='Hike with Me - User-Flow' />

        <h3>Sketching</h3>
        <p>
          In the Ideation phase, I started by sketching some low-tech wireframes
          by using a technique called, CRAZY 8s, this technique is a great way
          to generate some ideas quickly, although, they are not as pretty as
          they should be, they are just enough to know what is going one in a
          particular step
        </p>
        <img src={hwmCrazy8s} alt='Hike with Me - Sketchs' />

        <h3>Low-Fi Prototype</h3>
        <p>
          <b>Creating Event: </b>This phase is the primary goal of the app, it
          must be carefuly optimized . This feature determines the success of
          the project.
        </p>
        <img src={hwmCreateEvent} alt='Hike with Me - Creating Events' />

        <h3>Hi-Fi Prototype</h3>
        <img src={hwmHiFi} alt='Hike with Me - Hi-Fi Prototype' />

        <h2>Problems &amp; Solutions</h2>
        <h3>The Problem</h3>
        <p>
          As the user research suggests, most of the hikers go hiking by groups,
          and the group may not agree with each other which Trail to go, so this
          should be a serious problem that faces the hikers.
        </p>

        <h3>Solution</h3>
        <p>
          Upvoting a Trail within a particular event is the solution to this
          problem. during the process of creating a Hiking event, you are
          allowed to add more than One Trails, then when you invite other hikers
          to the event, they can upvote their favorite Trail, this way, you make
          the hikers avoid any uncertainty and conflict
        </p>

        <img src={hwmEventSummary} alt='Hike with Me - Event Summary' />

        <h3>Next Step</h3>
        <p>
          This prototype is an MVP, and it’s not tested on the real users, and
          my next move should be conducting a usability test to determine what
          works and what’s not, after users pains being solved, I have to
          iterate through the current prototype and make it ready to hand-off
          phase.
        </p>

        <h3>What did I learn?</h3>
        <p>
          Throughout the process of designing this product, I learned that, at
          every stage of the process, if you or your team encountered an
          uncertainty, user-research is the best action to take, and it’s always
          there, it’s not Rocket Science. It’s as easy as it if you have the
          right plan to do it, with the right tools, and the right target
          audiences.
        </p>

        <h3>See the Prototype</h3>
        <iframe
          title='Videos'
          width='100%'
          height='100%'
          src='https://drive.google.com/file/d/1wLYeCeDAFL_8jzzv_80dY95TBUI7U4hr/preview'
        ></iframe>
      </div>
    </section>
  )
}

export default HikeWithMe
