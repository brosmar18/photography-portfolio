import "./App.scss";
import { Header, Navbar, Service, Experiences } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Service />
      <Experiences />
    </div>
  );
};

export default App;
