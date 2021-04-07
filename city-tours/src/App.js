import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Card from './components/Card'
import places from './content/places'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card />
    </div>
  );
}

export default App;
