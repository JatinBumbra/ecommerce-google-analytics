import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/Home';
import ProductScreen from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product' element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
