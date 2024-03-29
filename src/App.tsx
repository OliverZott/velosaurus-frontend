import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/tours" element={<Tours />} >
              <Route index element={<Tours />} />
              <Route path=":id" element={<TourDetails />} />
            </Route> */}
            <Route path="/tours" element={<Tours />} />
            <Route path="/tourdetails/:id" element={<TourDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
