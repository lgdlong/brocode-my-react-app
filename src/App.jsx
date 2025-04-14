import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Hello World</h1>
        <p>Welcome to my React app!</p>

        <Food />
        <p>Here is a list of my favorite foods:</p>
      </main>
      <Footer />
    </>
  )
}
