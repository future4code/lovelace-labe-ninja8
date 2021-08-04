import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import CardServiços from './CardServiços'
import { baseUrl, headerPostman } from "./constants"

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
    state={
        minFilter: '',
        maxFilter: '',
        nameFilter: '',
        ordenacao: ''
    }

    onChangeMinFilter = (event) => {
        this.setState({minFilter: event.target.value})
      }
    
      onChangeMaxFilter = (event) => {
        this.setState({maxFilter: event.target.value})
      }
    
      onChangeNameFilter = (event) => {
        this.setState({nameFilter: event.target.value})
      }
      
      onChangeOrdenacao = (event) => {
          this.setState({ordenacao: event.target.value})
      }
    render () {

        return (

            <ContainerPrincipal>

            <InputBuscar placeholder="Buscar"/>
           
            <ContainerInputs>
           
                <Inputs onChange={this.onChangeMinFilter}  value={this.state.minFilter} type="number" placeholder="Valor mínimo"/>
                <Inputs value={this.state.maxFilter} onChange={this.onChangeMaxFilter}  type="number" placeholder="Valor máximo"/>
                
            <Select onChange={this.onChangeOrdenacao} value={this.state.ordenacao}>
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