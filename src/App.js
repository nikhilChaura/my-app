import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <> 
<Navbar title="Solicious!" dropper="dropper"/>
<div className="container my-3"/>
<div className="container">
<TextForm heading="this is my login page"/>
</div>
    </>
  );
}

export default App;
