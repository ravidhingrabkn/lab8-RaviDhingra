import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Question from './components/Question';
import backimage from './backimage.jpg';

function App() {
  return (
    <div className="page">
      <Header />
      <img className="topbanner" src={backimage} alt='bannerimage' />
      <div>
          <h1 className='main-heading'>Welcome to Trivia</h1>
      </div>
      <div className='main-text'>
        <p >Here's your random question.</p>
        <h2>True or false:</h2>
      </div>
      
      <div className='question'>
        <Question />
      </div>
      <Footer />
    </div>
  );
}

export default App;