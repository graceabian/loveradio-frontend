import "./App.css";

//import the navbar
import AppNavBar from "./components/AppNavBar";
import Banner from "./components/Banner";
import Highlights from "./components/Highlights";
import Content from "./components/Content";
// import Kabisyo from "./pages/Kabisyo";
import Dj from "./components/Dj";

function App() {
  return (
    <div className="App">
      <div>
        <AppNavBar />
        <Banner />
        <Highlights />
        <Content />
        <Dj />
      </div>
    </div>
  );
}
export default App;
