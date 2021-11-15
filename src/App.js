import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

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
