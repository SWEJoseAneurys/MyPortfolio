import './App.css';

function App() {
  const testFunction = async () => {
    const response = await fetch('/test_route');
  }
  testFunction()
  
  return (
    <div className="App">
      <h1>SWE: Jose A. Castro</h1>
      <div className='screenshots'>
        <div>
          <h4>Spacebattle<br/>Game</h4>
          <a href='https://github.com/SWEJoseAneurys/SpaceBattle.git'><img src='https://iili.io/HXfBc67.md.png' /></a>
        </div>
        <div>
          <h4>Product Store<br/>App</h4>
          <a href='https://github.com/SWEJoseAneurys/ProductStore.git'><img src='https://iili.io/HXfBFTv.md.png' /></a>
        </div>
        <div>
          <h4>To-Do List<br/>App</h4>
          <a href='https://github.com/SWEJoseAneurys/ToDoListApp.git'><img src='https://iili.io/HXK9lyP.md.png'/></a>
        </div>
      </div>
      <div className='buttons'>
        <div>
          <p>Visit my</p>
          <button onClick={ () => window.open('https://github.com/SWEJoseAneurys', '_blank')}>Github</button>
        </div>
        <div>
          <p>Connect via</p>
          <button onClick={ () => window.open('https://www.linkedin.com/in/joséacastro/', '_blank')}>LinkedIn</button>
        </div>
        <div>
          <p>View my</p>
          <button onClick={ () => window.open('https://drive.google.com/file/d/1J2aL4RA893qwqeRmj03uwNePKY5Tv9Kd/view?usp=share_link', '_blank')}>Resume</button>
        </div>
      </div>
    </div>
  );
}

export default App;
