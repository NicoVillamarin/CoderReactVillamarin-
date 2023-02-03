import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  return(
    <>
        <NavBar />
        <ItemListContainer greeting="Hola mundo!"/>
    </> 
  )
}

export default App
