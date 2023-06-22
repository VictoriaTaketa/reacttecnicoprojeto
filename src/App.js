import "./style.css"
import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import StyledGlobal from "./styledGlobal.jsx"
import { TelaInteira } from "./styledGlobal.jsx"
import Nav from "./components/Nav/Nav"

function App() {


  return(
    <>
    <StyledGlobal/>
    {/* <div class="tela-inteira"></div> */}
    <TelaInteira>
    <Header />
    
    <main>
      
    <Nav/>

            <section class="painel-de-videos">
        <Card />
            </section>
        </main>
        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </TelaInteira>
    </>
  )

}

export default App