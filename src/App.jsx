import Header from "./components/Header";
import "./App.css";
import { slide as Menu } from 'react-burger-menu'

function App() {
  return (
    <>
      <section>
        <Header />
        <div className="imgSide">
        <a id="home" className="menu-item" href="/">Home</a>
        </div>
      </section>
    </>
  );
}

export default App;
