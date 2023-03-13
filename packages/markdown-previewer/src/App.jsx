import { MarkdownEditor, MarkdownPreview, Header } from './components';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <MarkdownEditor />
        <MarkdownPreview />
      </div>
    </>
  );
}

export default App;
