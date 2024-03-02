import "./App.scss";
import {
  Header,
  Navbar,
  Partners,
  Experiences,
  Services,
  Projects,
  Testimonials,
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
      <Testimonials />
    </div>
  );
};

export default App;
