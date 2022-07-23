import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyForm from './MyForm';
import Display from './DisplayUsers'

function App() {
  return (
    <div className="App">
      <h1 >User information</h1>

      <MyForm />
      <br></br>
      <h2>Current Users:-</h2>
      <Display />
    </div>
  );
}

export default App;
