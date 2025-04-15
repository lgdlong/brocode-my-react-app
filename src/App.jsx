import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Food from './components/food/Food'
import CardList from './components/card-list/CardList'

export default function App() {
  return (
    <>
      <Header />
      <Food />
      <CardList />
      <Footer />
    </>
  )
}
