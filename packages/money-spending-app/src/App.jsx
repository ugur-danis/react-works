import './App.css';
import { Header, MoneyBar, ProductList, ReceiptList } from './components';

function App() {
  return (
    <div className='container'>
      <Header />
      <MoneyBar />
      <ProductList />
      <ReceiptList />
    </div>
  );
}

export default App;