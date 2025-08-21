import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="about/" element={<About/>}/>
        <Route path="contact/" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
