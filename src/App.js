
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import NavBar from './components/NavigationBar/NavBar';
import requests from './components/HeroSection/requests';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
       
      <Content
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Content
        title="Trendig Now"
        fetchUrl={requests.fetchTrending}
      />

      <Content
        title="Action Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Content
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Content
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Content
        title="Documentraies"
        fetchUrl={requests.fetchDocumentaries}
      />
      

    <Footer />

    </div>
  );
}

export default App;
