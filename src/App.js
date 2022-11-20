import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Overlay from './components/Overlay/Overlay';
import Expenses from './containers/Expenses/Expenses';
import Party from './containers/Party/Party';
import TotalSum from './containers/TotalSum/TotalSum';

function App() {

  // TODO: Convert this to redux state and function to pass. Need to be global slice state that changes based on buttons.
  const [overlay, setOverlay] = useState(false);

  const amountHandler = () => {
    setOverlay(!overlay);
  };

  return (
    <div className="App">
      {
        overlay ? (
          <>
            <Overlay
              close={amountHandler}
            />
            <Modal
              // type='expense'
            />
          </>
        )
          :
          null
      }
      <nav >
        <TotalSum
          amount={0.00}
        />
        <Button title='Add to party' />
        <Button title='Edit party' />
        <Button 
          title='Add expense'
          action={amountHandler}
          />
        <Button title='Edit expense' />
      </nav>
      <Party />
      <Expenses />
    </div>
  );
};

export default App;