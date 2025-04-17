import React from 'react'
import NavigationButton from '../components/button/NavigationButton'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function StateExPage() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("");
    const [paymentMethod, setPaymentMethod] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [car, setCar] = React.useState({
        brand: "None",
        model: "None",
        year: 1980,
    });

    const foodList = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];
    const [foods, setFood] = React.useState(foodList);
    const CarList = [
        {
            brand: "Ford",
            model: "Mustang",
            year: 1900
        },
        {
            brand: "Chevrolet",
            model: "Camaro",
            year: 1967
        },
        {
            brand: "Dodge",
            model: "Charger",
            year: 1968
        },
        {
            brand: "Toyota",
            model: "Supra",
            year: 1993
        },
        {
            brand: "Nissan",
            model: "Skyline GT-R",
            year: 1999
        }];

    const [carList, setCarList] = React.useState(CarList);


    function handleAddFood() {
        setFood([...foods, "New Food"]);
    }

    function handleFullName() {
        setFirstName('John');
        setLastName('Doe');
        setFullName(`${firstName} ${lastName}`);
    }

    function handleAddFood(newFood) {
        if (newFood === "") {
            alert("Please enter food name");
            return;
        }
        setFood([...foods, newFood]);
    }

    return (
        <>
            <Header />

            {/* Navigation Button */}
            <div className='text-center mt-4'>
                <NavigationButton to="/" label="Go to Main Page" className="btn btn-primary" />
            </div>

            {/* Counter in State */}
            <div className='card container text-center mt-4 p-2 shadow'>
                <h1>Counter in State</h1>
                <p className='fs-1'>{count}</p>
                <div className='d-flex justify-content-center gap-3'>
                    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className='btn btn-secondary' onClick={() => setCount(0)}>Reset</button>
                    <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            </div>

            <div className='card container p-2 mt-4 shadow'>
                <h2>Name: {name}</h2>
                <input type="text" className='form-control' id='input-name' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                <div className='d-flex gap-3'>
                    <button className='btn btn-primary mt-3' onClick={() => {
                        setName("");
                        document.getElementById('input-name').value = "";
                    }}>Clear</button>
                </div>
            </div>

            <div className='card container mt-4 p-2 shadow'>
                <h2>Payment: {paymentMethod}</h2>
                <select className='form-select' onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="Cash">Cash</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>

            {/* Async in State */}
            <div className='d-flex card container mt-4 p-2 shadow'>
                <h1 className='text-center'>Async in State</h1>
                <p className='fs-3'>First Name: {firstName}</p>
                <p className='fs-3'>Last Name: {lastName}</p>
                <p className='fs-3'>Full Name: {fullName}</p>
                <div className='d-flex mt-4 gap-3'>
                    <button className='btn btn-primary' onClick={() => handleFullName()}>Action</button>
                    <button className='btn btn-primary' onClick={() => {
                        setFirstName("");
                        setLastName("");
                        setFullName("");
                        document.getElementById('input-first-name').value = "";
                        document.getElementById('input-last-name').value = "";
                    }}>Clear</button>
                </div>
            </div>

            {/* Update Object in State */}
            <div className='d-flex gap-3 card container mt-4 p-2 shadow'>
                <h1 className='text-center'>Update Object in State</h1>
                <h2>Car: {car.brand} {car.model} {car.year} </h2>
                <input type="text" className='form-control' id='car-brand' placeholder='Enter car brand...' />
                <input type="text" className='form-control' id='car-model' placeholder='Enter car model...' />
                <input type="number" className='form-control' id='car-year' placeholder='Enter car year...' />
                <div className='d-flex'>
                    <button className='btn btn-success' onClick={() => {
                        setCar({
                            brand: document.getElementById('car-brand').value,
                            model: document.getElementById('car-model').value,
                            year: document.getElementById('car-year').value,
                        })
                    }}>Submit</button>
                </div>
            </div>

            {/* Array in State */}
            <div className='card container mt-4 p-2 shadow'>
                <h1 className='text-center'>Array in State</h1>
                <h2>Food List:</h2>
                <ul>
                    {foods.map((food, index) => (
                        <li key={index}>{food}</li>
                        // index % 2 !== 0 && <li key={index}>{food}</li> ----//(if show food has even index in array)
                    ))}
                </ul>

                <h2>Add new food:</h2>
                <div className='d-flex gap-3'>
                    <input type="text" className='form-control' id='input-food' placeholder='Enter food name...' />
                    <button className='btn btn-success' onClick={() => {
                        handleAddFood(document.getElementById('input-food').value);
                        document.getElementById('input-food').value = "";
                    }}>Enter</button>
                </div>
            </div>

            {/* Array of Object in State */}
            <div className='card container mt-4 p-2 shadow'>
                <h1 className='text-center'>Array of Object in State</h1>
                <h2>Car List</h2>
                <ul>
                    {carList.map((car, index) => (
                        <li key={index}>
                            {car.brand} - {car.model} - {car.year}
                        </li>
                    ))}

                </ul>

                <div>
                    <h2>Add new car: </h2>
                    <div className='d-flex gap-3 flex-column'>
                        <input type="text" className='form-control' id='car-brand-1' placeholder='Enter car brand...' />
                        <input type="text" className='form-control' id='car-model-1' placeholder='Enter car model...' />
                        <input type="number" className='form-control' id='car-year-1' placeholder='Enter car year...' />
                        <div>
                            <button className='btn btn-success' onClick={() => {
                                const newCar = {
                                    brand: document.getElementById('car-brand-1').value,
                                    model: document.getElementById('car-model-1').value,
                                    year: document.getElementById('car-year-1').value,
                                }
                                setCarList(prev => [...prev, newCar]);
                                document.getElementById('car-brand-1').value = "";
                                document.getElementById('car-model-1').value = "";
                                document.getElementById('car-year-1').value = "";
                            }}>Add</button>
                        </div>
                    </div>
                </div>
            </div>



            <br />
            <Footer />
        </>
    )
}
