import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Index from './pages/products/index';
import CreateForm from './pages/products/create_form';
import NotFound from './pages/not_found';

import NavBar from './components/nav_bar';
import { ProductsContextProvider } from './context/ProductContext';

class App extends Component {
  render() {
    return (
      <div className='bg-zinc-300 h-screen'>
        <div className='mx-2'>
          <ProductsContextProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Index></Index>} />
              <Route path="/create" element={<CreateForm></CreateForm>} />
              <Route path="/edit/:id" element={<CreateForm></CreateForm>} />
              <Route path="/*" element={<NotFound></NotFound>} />
            </Routes>
          </ProductsContextProvider>
        </div>
      </div>
    );
  }
}

export default App;
