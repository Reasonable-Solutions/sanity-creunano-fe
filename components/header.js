import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
  render() {
    return (
      <header>
       <p>this is header</p>
            <nav style={{display: 'flex', justifyContent: 'space-between', margin: '0 10rem'}}>
         <Link href='/work-at'>Work at Creuna</Link>
         <Link href='/events'>Events</Link>
         <Link href='/news'>News</Link>
         <Link href='/contact'>Contact us</Link>
       </nav>
      </header>
    )
  }
}

