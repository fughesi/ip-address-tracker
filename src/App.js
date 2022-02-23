import './App.css';
import Coordinates from './components/Coordinates/Coordinates';
import Map from './components/Map/Map';
import TopFrame from './components/TopFrame/TopFrame';

function App() {
  return (
    <div className="AppWrap">
      <TopFrame />
      <Map />
      <Coordinates />
    </div>
  );
}

export default App;
