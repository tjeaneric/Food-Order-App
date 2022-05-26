import { Fragment } from 'react';
import Header from '../src/components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Cart />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
