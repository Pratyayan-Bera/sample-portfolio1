
import './App.css';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Project from './components/Project';
function App() {
  return (
    <>
        <body>
    <header>
        <NavBar/>
    </header>
    <div>
        <About/>
    </div>
    <div>
        <Skills/>
    </div>
    <div>
        <Project/>
    </div>
    <footer>
        <div class="footer">
            <p>&copy; 2024 Pratyayan Bera. All rights reserved.</p>
        </div>
    </footer>
</body>
    </>
  );
}

export default App;
