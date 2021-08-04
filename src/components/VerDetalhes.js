import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl, headerPostman } from "./constants"

const ContainerPrincipal = styled.div`
background-color: #F5F5FD;
text-align: center;
`
const ContainerSecundario = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin: 10px;
`
const Buttons = styled.button `
margin: 5px;
padding: 5px;
width: 200px;
background-color:#7C66C5;
color: white;
border: solid 1px #7C66C5;
border-radius: 5px;
cursor: pointer;
`
const Titulo = styled.div `
color: #7C66C5;
margin: 70px auto;
`

class VerDetalhes extends React.Component {
    render () {
        return (

            <ContainerPrincipal>

            <Titulo>
                <h1>Serviço</h1>
            </Titulo>

            <ContainerSecundario>
                <p>Aceita: </p>
                <p>Prazo: Valor:</p>
                <p>Descrição</p>
            </ContainerSecundario>
            
            <div>
                <Buttons>Adicionar ao Carrinho</Buttons>
                <Buttons>Voltar para a Lista</Buttons>
            </div>

            </ContainerPrincipal>

        )
    }
}

export default VerDetalhes