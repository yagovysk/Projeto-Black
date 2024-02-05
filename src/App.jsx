import { Menu } from './Components/Menu/Menu';
import { Home } from './Components/Home/Home';
import { Sobre } from './Components/About/Sobre';
import { Services } from './Components/Services/Services';
import { Galeria } from './Components/Galeria/Galeria';
import { Depoiments } from './Components/Depoiments/Depoiments';
import { Footer } from './Components/Footer/Footer';
import './App.css';

export function App() {
  return (
    <main className="container-app">
      <Menu />
      <Home />
      <Sobre />
      <Services />
      <Galeria />
      <Depoiments />
      <Footer />
    </main>
  );
}
