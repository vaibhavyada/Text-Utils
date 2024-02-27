import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import ReactForm from './Components/ReactForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container my-3">
        {/**/}
        <ReactForm heading = "Enter yout Text : " />
        <About />
      </div>
    </>
  );
}

export default App;
