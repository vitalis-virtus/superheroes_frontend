import './App.css';
import NavBar from './component/NavBar/NavBar';
import Routes from './routes'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes className="container"/>
      <ToastContainer/>
    </div>
  );
}

export default App;
