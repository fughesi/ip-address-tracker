import './App.css';
import Coordinates from './components/Coordinates/Coordinates';
import Map from './components/Map/Map';
import Search from './components/Search/Search';
import TopFrame from './components/TopFrame/TopFrame';

function App() {
  return (
    <div className="AppWrap">
      <TopFrame />
      <Coordinates />
      <Map />
      <Search />
    </div>
  );
}

export default App;
