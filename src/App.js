import logo from './logo.svg';
import './App.css';
import BottomAppBar from './Components/Navbar/Navbar';
import { AddIcon } from './Components/Navbar/AddIcon';
import { ChatList } from './Components/Home/Home';
import { AllRouters } from './Components/AllRouters/Routers';

function App() {
  return (
    <div className="App">
      {/* <AddIcon/> */}
      <AllRouters/>
    </div>
  );
}

export default App;
