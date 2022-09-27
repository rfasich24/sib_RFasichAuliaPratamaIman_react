import './App.css';
import CounterClass from "./features/counter/CounterClassComponent";
import CounterFn from "./features/counter/CounterFnComponent";

function App() {
  return (
    <main className='App'>
      <CounterFn/>
      <CounterClass/>
    </main>
  );
}

export default App;
