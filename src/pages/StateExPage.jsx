import React from 'react'
import NavigationButton from '../components/button/NavigationButton'
import Header from '../components/header/Header'

export default function StateExPage() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <Header />
            <div className='text-center mt-4'>
                <NavigationButton to="/" label="Go to Main Page" className="btn btn-primary" />
            </div>

            <div className='text-center mt-4'>
                <h1>State Example Page</h1>
                <p className='fs-1'>{count}</p>
                <div className='d-flex justify-content-center gap-3'>
                    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className='btn btn-secondary' onClick={() => setCount(0)}>Reset</button>
                    <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            </div>
        </>
    )
}
