import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <>
    <Particles params = {{
            "particles": {
              "number": {
                "value": 20,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 3,
                  "color": "#fff"
                },
                "polygon": {
                  "nb_sides": 5
                }
              },
              "opacity": {
                "value": 0.9,
                "random": false
              },
              "size": {
                "value": 8,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 20,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 50,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 5,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": true,
                  "rotateX": 300,
                  "rotateY": 1200
                }
              }
            }}}
    
        />
    <Navbar/>
    <Header/>
    <Aboutme/>
    </>
  );
}

export default App;
