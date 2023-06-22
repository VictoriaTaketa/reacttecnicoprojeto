
// import "./style.css"

// function Header(){

//     return(
//         <header>
//             <h2 className="titulo">Header</h2>
//         </header>
//     )
// }

// export default Header

import { ContainerHeader } from "./styled"

function Header(){

    return(
        // <header>
        <ContainerHeader>
            <h1>Video</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </ContainerHeader>
        // </header>
    )
}

export default Header