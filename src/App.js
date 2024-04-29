import Melike from './components/melike.jsx'
import Deneme from './components/Deneme.jsx';


function App() {
  const test = "props mantıgı";

  const arr = [
    {name:'array1', id:0},
    {name:'array2', id:1},
    {name:'array3', id:2},

  ]
  
console.log(arr,"arr");
  const clickFunc = () => {
    console.log("butona tıkladınn!!")
  }
  
  return (
    <div className="App">
      {/* component mantıgı */}
        <Melike degisken = {test}/>
        <Deneme/>
    {
      arr.map((ar) => (
        <div key={ar.id}>{ar.name}</div>
      ))
    }



        <button  onClick={clickFunc}>tıkla</button>
    </div>
  );
}

export default App;
