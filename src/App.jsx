import "./App.scss";
import { Header, Navbar, Service } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Service />
    </div>
  );
};

export default App;
