import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerPrincipal = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;

`
const Card = styled.div`
background-color: #DFDBF0;
text-align: center;
width: 350px;
padding: 10px;
border: 1px solid #DFDBF0;
border-radius: 5px;
box-shadow: 2px 2px 2px #DFDBF0;
margin: 15px;
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
`


class CardServiços extends React.Component {

    render () {

        return (

            <ContainerPrincipal> 
            <Card>
            <Titulo>
                <h1>Serviço</h1>
            </Titulo>
            <div>
                <p>Preço:</p>
                <p>Prazo:</p>
            </div>
            <div>
                <Buttons>Adicionar ao carrinho</Buttons>
                <Buttons>Ver detalhes</Buttons>
            </div>
            </Card>

            <Card>
            <Titulo>
                <h1>Serviço</h1>
            </Titulo>
            <div>
                <p>Preço:</p>
                <p>Prazo:</p>
            </div>
            <div>
                <Buttons>Adicionar ao carrinho</Buttons>
                <Buttons>Ver detalhes</Buttons>
            </div>
            </Card>

            <Card>
            <Titulo>
                <h1>Serviço</h1>
            </Titulo>
            <div>
                <p>Preço:</p>
                <p>Prazo:</p>
            </div>
            <div>
                <Buttons>Adicionar ao carrinho</Buttons>
                <Buttons>Ver detalhes</Buttons>
            </div>
            
            </Card>

            

            </ContainerPrincipal>
        )   
    }
}

export default CardServiços