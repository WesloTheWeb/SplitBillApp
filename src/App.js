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
    dispatch(setModal('manageParty'));
    dispatch(toggleOverlay());
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Split The Bill</h1>
        <sub>It always come due...</sub>
      </div>
      {
        overlay.overlay ? <OverlayModal /> : null
      }
      <nav>
        <TotalSum
        />
        <Button
          title='Manage Party'
          action={openAddToPartyModal}
        />
        <Button
          title='Add expense'
          action={openExpenseModal}
        />
        {/* <Button title='Edit expense' /> */}
      </nav>
      <Party
        minified={false}
      />
      <Expenses />
    </div>
  );
};

export default App;

// TODO: Work on naming for files and organization. ActivityItem --> Bucket, at some point.