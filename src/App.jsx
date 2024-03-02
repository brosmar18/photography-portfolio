import "./App.scss";
import {
  Header,
  Navbar,
  Partners,
  Experiences,
  Services,
  Projects,
  Testimonials,
  Footer,
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
      <Footer />
    </div>
  );
};

export default App;
