import React from 'react'
import './decor.css'
import { Feature } from '../../components'
const Decor = () => {
  return (
    <div className='decor'>
      <div className='decor_feature'>
        <Feature title ="What is DecorYourWay" text="Some text explaining what this amazing app does!"/>
      </div>
      <div className='decor_heading'>
        <h1 className='gradient_text'>The only Limit is your Imagination</h1>
        <p>Pick Your poison</p>
      </div>
      <div className='decor_container'>
        <Feature title="Creativity" text="Thousands of tools to use for your projects"/>
        <Feature title="Speed" text="Fast and reliable UI because of many reasons that would be placed in this section if this app actually existed(Oh Well...)"/>
        <Feature title="Support" text="Get help at any moment from our Customer Service or Community"/>
      </div>
    </div>
  )
}

export default Decor