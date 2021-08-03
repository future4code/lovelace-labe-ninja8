import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const ContainerPrincipal = styled.div`
background-color: #F5F5FD;
text-align: center;
`
const Titulo = styled.div`
color: #7C66C5;
`
const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin: 10px;
`
const Inputs = styled.input `
padding: 10px;
margin: 15px;
width: 400px;
background-color:#F5F5FD;
border: solid 1px #7C66C5;
border-radius: 5px;
`
const Select = styled.select`
padding: 10px;
margin: 15px;
width: 420px;
background-color:#F5F5FD;
border: solid 1px #7C66C5;
border-radius: 5px;
`
const Buttons = styled.button `
margin: 15px;
padding: 10px;
width: 420px;
background-color:#7C66C5;
color: white;
border: solid 1px #7C66C5;
border-radius: 5px;
cursor: pointer;
`

class Cadastro extends React.Component {

    render () {

        return (
            <ContainerPrincipal> 

                <Titulo>
                    <h1>Cadastre o seu serviço</h1>
                </Titulo>

                <ContainerInputs>
                    <Inputs placeholder="Título"/>
                    <Inputs placeholder="Descrição"/>
                    <Inputs placeholder="Preço"/>
                    
                   
                         <Select>
                            <option selected>Forma de Pagamento:</option>
                            <option>Cartão de Crédito</option>
                            <option>Cartão de Débito</option>
                            <option>Pix</option>
                            <option>PayPal</option>
                            <option>Boleto</option>
                         </Select>
                    
                    <Inputs placeholder="Prazo do Serviço" type="date" />

                    <Buttons>CADASTRAR SERVIÇO</Buttons>
                   
                    
                </ContainerInputs>

            </ContainerPrincipal>
        )
    }
}

export default Cadastro