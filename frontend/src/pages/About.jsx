import React from 'react'
import '../../../frontend/src/styles/aboutus.css'

const About = () => {
  return (
    <div className='content'>
      <div className='welcome'>
        <h2>Welcome to B-Tracker</h2>
        <p>At B-Tracker, we're passionate about making your journey seamless and stress-free. Our mission is to revolutionize the way you experience bus travel by providing a user-friendly and efficient scheduling platform.</p>

      </div>


      <div className='who'>
        <h2>Who We Are..?</h2>

        <p>We are a team of dedicated software developers who understand the challenges that passengers face when it comes to planning their bus journeys. Our diverse team brings together expertise in software development, user experience design, and a shared commitment to improving the transportation experience for everyone.</p>
      </div>

      <div className='vision'>
        <h2>Our vision</h2>

        <p>Our vision is to create a world where planning your bus travel is as simple as a few clicks. We believe that efficient transportation is a cornerstone of thriving communities, and we are committed to contributing to that vision through cutting-edge technology.</p>
      </div>

      <div className='works'>
        <h2>How B-Tracker works</h2>

        <li>Search and Plan: Simply enter your departure and arrival locations, and our app will provide you with a range of available bus schedules.</li>
        <li>Real-Time Updates: Stay informed with real-time updates on bus arrivals, departures, and any changes to the schedule.</li>
      </div>

    </div>
  )
}

export default About