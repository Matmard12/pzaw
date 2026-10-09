function Filmy({tytul,plakat,rok}){
  return(
    <div>
      <img src={plakat} />
      <h1>{tytul}</h1>
      <p>{rok}</p>
    </div>
  )
  


}


function App(){

  return(
    <div>
      <Greeter name="Mario" age={1} />
      <Greeter name="Luigi" age={31}/>
    </div>
  );


}
export default App

