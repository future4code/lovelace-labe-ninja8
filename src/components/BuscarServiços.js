import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import CardServiços from './CardServiços'

const ContainerPrincipal = styled.div`
background-color: #F5F5FD;
text-align: center;
`

const ContainerInputs = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
margin: 10px;
`
const Inputs = styled.input`
padding: 10px;
margin: 15px;
width: 150px;
background-color:#F5F5FD;
border: solid 1px #7C66C5;
border-radius: 5px;
`
const InputBuscar = styled.input`
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
width: 150px;
background-color:#F5F5FD;
border: solid 1px #7C66C5;
border-radius: 5px;
`


class BuscarServiços extends React.Component {

    render () {

        return (

            <ContainerPrincipal>

            <InputBuscar placeholder="Buscar"/>
           
            <ContainerInputs>
                <Inputs placeholder="Valor mínimo"/>
                <Inputs placeholder="Valor máximo"/>
                
            <Select>
              <option selected>Ordenação</option>
              <option>Maior valor</option>
              <option>Menor valor</option>
              <option>Título</option>
              <option>Prazo</option>
            </Select>
       
            </ContainerInputs> 

            <CardServiços />

            </ContainerPrincipal>

        )
    }
}

export default BuscarServiços