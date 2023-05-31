function MenuItem({name, price}) {
  return(
    <>
      <p>
        <strong>{name}</strong>  |  {price}
      </p>
    </>
  );
}

function App(){
  return(
    <>
      <h1>Uncle Roger Fried Rice</h1>
      <MenuItem name={"Nasi Goreng Kampung"} price={"RM100"}/>
      <MenuItem name={"Miso Ramen"} price={"RM50"}/>
      <MenuItem name={"Nasi Lemak"} price={"RM10"}/>
    </>
  );
}

function Category( {title,foods} ){
  return(
    
      <div>
        <h2>{title}</h2>
        {foods}
      </div>
    
  );
}
export default App;