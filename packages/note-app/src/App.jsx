import { Header, NoteList, NewNote } from './components';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <NewNote />
      <NoteList />
    </div>
  );
};

export default App;