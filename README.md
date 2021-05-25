# Car and Truck Exercise

## Part A

### `1` `App` Component
```jsx
import './App.css';
import Car from './components/Car'
import Truck from './components/Truck'

function App() {

  return (
    <div className="App">
      <Car />
      <Truck /> 
    </div>
  );
}

export default App;
```

### `2` `Car` Functional Component
```jsx
function Car() {
    return (
        <div>
            <h1>Car</h1>
        </div>
    )
}

export default Car;
```

### `3` `Truck` Functional Component
```jsx
function Truck() {
    return (
        <div>
            <h1>Truck</h1>
        </div>
    )
}

export default Truck;
```

### `4` `Car` Class Component
```jsx
import React, { Component } from 'react';

class Car extends Component {
    render() {
        return (
            <div>
                <h1>Car</h1>
            </div>
        )
    }
}

export default Car;
```

### `5` `Truck` Class Component
```jsx
import React, { Component } from 'react';

class Truck extends Component {
    render() {
        return (
            <div>
                <h1>Truck</h1>
            </div>
        )
    }
}

export default Truck;
```

## Part B

## `1` `App` Component w/Props
```jsx
import './App.css';
import Car from './components/Car'
import Truck from './components/Truck'

function App() {
  const cars = ['Mercedes', 'Tesla', 'Toyota'];
  const trucks = ['Hummer', 'Ford F150', 'Silverado'];
  // DONT FORGET TO PASS trucks as props to Truck component like so: <Truck trucks={trucks} />
  return (
    <div className="App">
      <Car cars={cars}/>
      <Truck trucks={trucks}/> 
    </div>
  );
}

export default App;
```

## `2` `Car` Class Component w/ Props
```jsx
import React, { Component } from 'react';

class Car extends Component {
    render() {
        console.log(this.props.cars);
        let carList = this.props.cars.map((car, idx) => {
            return <li key={idx}>{car}</li>
        })
        return (
            <div>
                <h1>Car</h1>
                <ul>{carList}</ul>
            </div>
        )
    }
}

export default Car;
```

## `3` `Car` Functional Component With Props
```jsx
function Car(props) {
    console.log(props.cars);
    /*
    The reason for the index is because react will give you a warning if you don't specify
    what array you're mapping and the location of that element in the array. 
    */
    const carList = props.cars.map((car, idx) => {
        return <li key={idx}>{car}</li>
    })
    return (
        <div>
            <h1>Cars</h1>
            <ul>{carList}</ul>
        </div>
    )
}

export default Car;
```

## `4` `Truck` Class Component w/ Props
```jsx
import React, { Component } from 'react';

class Truck extends Component {
    render() {
        console.log(this.props.trucks);
        const truckList = this.props.trucks.map((truck, idx) => {
            return <li key={idx}>{truck}</li>
        })
        return (
            <div>
                <h1>Trucks</h1>
                <ul>{truckList}</ul>
            </div>
        )
    }
}

export default Truck;
```

## `5` `Truck` Functional Component With Props
```jsx
function Truck(props) {
    console.log(props.trucks);
    /*
    The reason for the index is because react will give you a warning if you don't specify
    what array you're mapping and the location of that element in the array. 
    */
    const truckList = props.trucks.map((truck, idx) => {
        return <li key={idx}>{truck}</li>
    })
    return (
        <div>
            <h1>Trucks</h1>
            <ul>{truckList}</ul>
        </div>
    )
}

export default Truck;
```