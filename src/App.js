import './App.scss';
import Button from './components/Button/Button';
import Expenses from './containers/Expenses/Expenses';
import Party from './containers/Party/Party';
import TotalSum from './containers/TotalSum/TotalSum';

function App() {
  return (
    <div className="App">
      <nav >
        <TotalSum amount={0.00} />
        <Button title='Add to party' />
        <Button title='Edit party' />
        <Button title='Add expense' />
        <Button title='Edit expense' />
      </nav>
      <Party />
      <Expenses />
    </div>
  );
}

export default App;
