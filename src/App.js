import "./App.css";

//import the navbar
import AppNavBar from "./components/AppNavBar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <div>
        <AppNavBar />
        <Banner />
        <h1>Hello Love Radio Manila</h1>
      </div>
    </div>
  );
}
export default App;
