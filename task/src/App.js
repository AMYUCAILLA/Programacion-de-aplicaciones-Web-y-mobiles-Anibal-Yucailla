import logo from './logo.svg';
//import './App.css';

const data =["Alexis","Michelle","Renny","Anibal"];
const color_alexis ={
  color:"red"
}

function Button (){
  return(
    <button className="button">click Me</button>
  )
}

function Header(){
  return(
    <header className ="App-header">
    <img src="" alt="Logo"/>
    <nav>
    <ul>
    <li><a style={
      {color:"red"}
    }href="#"> {data [0]}</a></li>
    <li><a href="#"> {data [1]}</a></li>
    <li><a href="#"> {data [2]}</a></li>
    <li><a href="#"> {data [3]}</a></li>
    <li><a href="#"> {data [4]}</a></li>
    <Button/>
    </ul>
    </nav>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Button/>
      <h1>Bienvenidos </h1>
    </div>
  );
}

export default App;
