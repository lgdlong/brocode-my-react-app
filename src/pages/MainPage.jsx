import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CardList from '../components/card-list/CardList'
import NavigationButton from '../components/button/NavigationButton'

export default function MainPage() {
    return (
        <>
            <Header />
            <div className="text-center mt-4">
                <NavigationButton to="/state-example" label="Go to State Example Page" className="btn btn-primary " />
            </div>
            <CardList />
            <Footer />
        </>
    )
}
