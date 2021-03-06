import React from 'react'
import Link from 'gatsby-link'
import Maps from '../components/maps'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Maps></Maps>
  </div>
)

export default IndexPage
