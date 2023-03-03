import "./App.css";
import Title from './components/Title';

function App() {
  console.log('Test console log');
  const testVariable = true;
  return (
    <div className="App">
      {testVariable ?
      <>
        <Title/>
        <p>hello</p>
      </>
      :
      <p>You cannot see the test</p>
    }


      
    </div>
  );
}

export default App;