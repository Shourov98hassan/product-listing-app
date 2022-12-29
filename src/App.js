import Items from '../src/products.json'
import './App.css';
import Products from './components/Products/Products';





function App() {
  return (

    <div className="App">

      <div className="navbar">
        <h1>Online Store</h1>
      </div>
    {
      Items.map((item)=><Products
      item={item}
      key={item.id}
      ></Products>)
    }
    </div>
  );
}

export default App;
