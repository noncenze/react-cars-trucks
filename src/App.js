import './App.css';
import Car from './components/Car'
import Truck from './components/Truck'

function App() {
  const cars = ['Mercedes', 'Tesla', 'Toyota'];
  const trucks = ['Hummer', 'Ford F150', 'Silverado'];

  return (
    <div className="App">
      <Car cars={cars}/>
      <Truck />
    </div>
  );
}

export default App;
