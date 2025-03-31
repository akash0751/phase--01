import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">MERN STACK</h1>
        <p className="home-description">
          MERN (MongoDB, Express.js, ReactJS, and Node.js) is a source-available JavaScript stack for building dynamic websites and applications.
          A variation known as **MEAN** replaces ReactJS with Angular, and **MEVN** uses Vue.js as the front-end.
          <br /><br />
          MERN applications can be written in **JavaScript for both server-side and client-side** execution. Unlike traditional stacks like LAMP, MEAN focuses on higher-level web app components.
          <br /><br />
          The term **MERN** was introduced by *Valeri Karpov* in 2013, and its logo was initially designed by *Austin Anderson* for the original MERN stack LinkedIn group.
        </p>
      </div>
    </div>
  )
}

export default Home