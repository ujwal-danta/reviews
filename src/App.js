import logo from './logo.svg';
import './App.css';
import Review from './Review';
function App() {
  return (
    <div className='container'>
     <div className="heading">
       <h1>Our Reviews</h1>
       <div className="underline"></div>
     </div>
     <div className="reviews">
       <Review/>
     </div>
    </div>
  );
}

export default App;