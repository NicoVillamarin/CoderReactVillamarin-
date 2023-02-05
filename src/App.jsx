import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";


const App = () => {
  return(
    <>
        {/* Componente NavBar que incluye componente CardWidget */}
        <NavBar />
        {/* Componente Item sera donde se componga el cuerpo de la pagina */}
        <ItemListContainer greeting="CompuSearch"/>
    </> 
  )
}

export default App
