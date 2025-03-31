import React from 'react'

const About = () => {
  return (
    <div className="about-container">
    <p className="about-text">
      <strong>React.js Front End</strong><br />
      The top tier of the MERN stack is <strong>React.js</strong>, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.
      <br /><br />
      React's strong suit is handling stateful, data-driven interfaces with minimal code and hassle. It has all the features you'd expect from a modern web framework: great support for forms, error handling, events, lists, and more.
      <br /><br />

      <strong>Express.js and Node.js Server Tier</strong><br />
      The next level down is the <strong>Express.js</strong> server-side framework, running inside a <strong>Node.js</strong> server. Express.js bills itself as a "fast, unopinionated, minimalist web framework for Node.js," and that is exactly what it is. It has powerful models for URL routing and handling HTTP requests and responses.
      <br /><br />

      By making GET or POST requests from your React.js front end, you can connect to Express.js functions that power your application. These functions use MongoDB's Node.js drivers to access and update data in your MongoDB database.
      <br /><br />

      <strong>MongoDB Database Tier</strong><br />
      If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you're going to want a database that's just as easy to work with as React, Express, and Node.js.
      <br /><br />

      MongoDB stores JSON documents, which can be directly sent from React.js to the Express.js server, processed, and stored in MongoDB. If you're building in the cloud, you can use <strong>MongoDB Atlas</strong>.
      <br /><br />

      <strong>Example of a Simple MERN Request/Response</strong><br />
      A typical HTTP request performs one of four operations - POST, GET, PUT, DELETE, which correspond to Create, Read, Update, and Delete (CRUD) respectively. Express.js provides request and response objects to handle these requests.
      <br /><br />

      <strong>Unified Data Format</strong><br />
      One of the key features of the MERN stack is that all components store data in the same format:
      <ul>
        <li>React stores data as JavaScript objects.</li>
        <li>Express handles JSON using the <code>.json()</code> method.</li>
        <li>MongoDB stores data in BSON (Binary JSON) format.</li>
      </ul>
      <br />

      <strong>Example Use Case: Updating a Mobile Number</strong><br />
      Suppose a customer wants to update their mobile number via an online portal. The frontend, built with React.js, contains a form where the user enters their number. React's <code>useState</code> stores this input.
      <br /><br />
      Express.js processes the request, maps it to the data model, and executes an update operation (e.g., <code>findByIdAndUpdate()</code>). The updated data is stored in MongoDB, and a success/failure message is returned.
    </p>
  </div>
  )
}

export default About