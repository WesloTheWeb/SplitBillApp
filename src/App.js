import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import Button from './components/Button/Button';
import Expenses from './containers/Expenses/Expenses';
import Party from './containers/Party/Party';
import TotalSum from './containers/TotalSum/TotalSum';
import OverlayModal from './components/OverlayModal/OverlayModal';
import { expenseModal } from './app/modalSlice';
import { toggleOverlay } from './app/overlaySlice';

function App() {
  // const modal = useSelector((state) => state.modal);
  const overlay = useSelector((state) => state.overlay);
  const dispatch = useDispatch();

  const exampleClick = () => {
    console.log('clicked from prop!')
  }

  return (
    <div className="App">
      {
        overlay.overlay ? <OverlayModal /> : null
      }
      {console.log(overlay.overlay)}
      {/* {console.log(overlay.state)} */}
      <nav >
        <TotalSum
          amount={0.00}
        />
        <Button title='Add to party' />
        <Button title='Edit party' />
        <Button
          title='Add expense'
          action={() => dispatch(toggleOverlay())}
          test={exampleClick}
        />
        <Button title='Edit expense' />
      </nav>
      <Party />
      <Expenses />
    </div>
  );
};

export default App;