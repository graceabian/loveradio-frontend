import "./App.css";

//import the navbar
import AppNavBar from "./components/AppNavBar";
import Banner from "./components/Banner";
import Highlights from "./components/Highlights";

function App() {
  return (
    <div className="App">
      <div>
        <AppNavBar />
        <Banner />
        <Highlights />
        <h1>Hello Love Radio Manila</h1>
      </div>
    </div>
  );
}
export default App;
