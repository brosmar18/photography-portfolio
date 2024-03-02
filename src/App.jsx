import "./App.scss";
import {
  Header,
  Navbar,
  Partners,
  Experiences,
  Services,
  Projects,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Partners />
      <Experiences />
      <Services />
      <Projects />
    </div>
  );
};

export default App;
