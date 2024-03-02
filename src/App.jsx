import "./App.scss";
import { Header, Navbar, Partners, Experiences, Services } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Partners />
      <Experiences />
      <Services />
    </div>
  );
};

export default App;
