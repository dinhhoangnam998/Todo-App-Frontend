import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "https://todo-app-recode-backend.herokuapp.com";
console.log("🚧 -->  process.env.BACKEND_URL", process.env.BACKEND_URL);

function App() {
  return (
    <div className="App">
      <div style={{ width: "50%", margin: "auto" }}>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
