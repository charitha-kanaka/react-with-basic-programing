
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <div>
      <Header></Header>

      <main className="container mt-5 pt-2">
     <HomePage />
      </main>

<Footer></Footer>
    </div>
    
  );
}

export default App;
