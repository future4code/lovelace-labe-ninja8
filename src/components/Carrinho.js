import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { baseUrl, headerPostman } from "./constants"
import App from '../App'

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 30px;
color: #7C66C5;
`

const ContainerImagemCarrinho = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 20px;
`
const Img = styled.img`
display: flex;
flex-direction: column;
width: 250px;
padding: 20px;
align-items: center;
justify-content: center;
`

class Carrinho extends React.Component {

    render () {

        return (
            <ContainerPrincipal>

            <ContainerImagemCarrinho>
                <Img src="https://rude-yoke.surge.sh/static/media/add-to-cart.56fa6416.png" alt="foto carrinho"></Img>
            </ContainerImagemCarrinho>

            <h1>Seu carrinho está vazio!</h1>

            </ContainerPrincipal>
        )
    }
}

export default Carrinho