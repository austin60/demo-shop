import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/heading';
import ProductsList from './components/productsList';
import ProductDetail from './components/productDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/products">
         <ProductsList/>
        </Route>
       <Route exact path="/product/:productId">
        <ProductDetail/>
       </Route>
      </Router>
    </div>
  );
}

export default App;
