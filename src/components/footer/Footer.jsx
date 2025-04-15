import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-dark text-light text-center py-3'>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved. Made by LGD</p>
    </footer>
  )
}
