import "./App.css";

function App() {
  function incrementCount() {
    // implement this function
  }

  function decrementCount() {
    // implement this function
  }

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <span> {/* show count here */}</span>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default App;
