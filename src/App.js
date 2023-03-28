import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import Cart from "./componets/Cart/Cart";
import {useState} from 'react';
import CartProvider from "./store/CartProvider";

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const modalOpenHandeler = () => {
    setModalOpen(true)
  }
  const modalCloseHandler = () => {
    setModalOpen(false)
}
  return (
    <CartProvider>
      {modalOpen &&  <Cart onModalClose = {modalCloseHandler}/>}
      <Header onModalOpener = {modalOpenHandeler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
