// class component
// import react and Component class
import React, { Component } from 'react';

// class Car extends Component {
//     render() {
//         console.log(this.props.cars);
//         let carList = this.props.cars.map((car, idx) => {
//             return <li key={idx}>{car}</li>
//         })
//         return (
//             <div>
//                 <h1>Car</h1>
//                 <ul>{carList}</ul>
//             </div>
//         )
//     }
// }

function Car(props) {
    console.log(props.cars);
    /*
    The reason for the index is because react will give you a warning if you don't specify
    what array you're mapping and the location of that element in the array. 
    */
    let carList = props.cars.map((car, idx) => {
        return <li key={idx}>{car}</li>
    })

    return (
        <div>
            <h1>Cars</h1>
            <ul>{carList}</ul>
        </div>
    )
}

export default Car; // gives you the ability to use this component throughout your application
