import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import Button from './components/Button/Button';
import Expenses from './containers/Expenses/Expenses';
import Party from './containers/Party/Party';
import TotalSum from './containers/TotalSum/TotalSum';
import OverlayModal from './components/OverlayModal/OverlayModal';
import { setModal } from './app/modalSlice';
import { toggleOverlay } from './app/overlaySlice';

function App() {
  const overlay = useSelector((state) => state.overlay);
  const dispatch = useDispatch();

  function openExpenseModal() {
    dispatch(setModal('expense'));
    dispatch(toggleOverlay());
  };

  function openAddToPartyModal() {
    dispatch(setModal('addPartyMembers'));
    dispatch(toggleOverlay());

  }

  return (
    <div className="App">
      {
        overlay.overlay ? <OverlayModal /> : null
      }
      <nav >
        <TotalSum
          amount={0.00}
        />
        <Button
          title='Manage Party'
          action={openAddToPartyModal}
        />
        {/* <Button title='Edit party' /> */}
        <Button
          title='Add expense'
          action={openExpenseModal}
        />
        {/* <Button title='Edit expense' /> */}
      </nav>
      <Party />
      <Expenses />
    </div>
  );
};

export default App;