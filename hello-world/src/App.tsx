import './App.css'
interface props{

  title?:string;
  year?:number;
  img?:string;

}

function Movies({title, year, img}:props){
    return(
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    );
}

function App(){
  return(
    <div>
      <div>
      <h1>filmy</h1><br />
      <div className='filmy'>
        <Movies title="Pionek" year={2014} img="./pionek.jpg"/>
        <Movies title="Queen's gambit" year={2020} img="./gambit.jpg"/>
        <Movies title="The Coldest Game" year={2019} img="./gra.jpg"/>
      </div>
      </div>
    </div>
  );
}


export default App