import React from 'react'

export default function Contact() {
  return (
    <div>
        <h1>Contact ME</h1>
        <form>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='Phone number' />
            <textarea placeholder='Message'></textarea>
            
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}
