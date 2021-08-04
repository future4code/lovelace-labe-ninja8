import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl, headerPostman } from "./constants"


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
    
    state = {

     servicos:[],
     
           
    }

    componentDidMount () {
        this.todosServicos()
     
    }

    todosServicos = () => {

        axios.get(`${baseUrl}/jobs`, headerPostman)

        .then(response => {
            this.setState({servicos:response.data.jobs})
            

        }).catch(err => {
            console.log(err)
        })
    };
    
   

    render () {

        const listaTodosOsServicos= this.state.servicos.map((serv)=>{
           return <Card key= {serv.id}>
           <Titulo>
               <h1>{serv.title}</h1>
               <hr />
           </Titulo>
           <div>
               <p><strong>Descrição:</strong> {serv.description}</p>
               <p><strong>Prazo:</strong> {serv.dueDate}</p>
               <p><strong>Froma de Pagamento:</strong> {serv.paymentMethods}</p>
               <p><strong>Valor:</strong> {serv.price}</p>
               
           </div>
           <div>
               <Buttons>Adicionar ao carrinho</Buttons>
               <Buttons onClick={this.props.irParaDetalhes}>Ver detalhes</Buttons>
           </div> 
           </Card>
                   
       })
        return (
            
            <ContainerPrincipal> 

                {listaTodosOsServicos}
           
            </ContainerPrincipal>
        )   
    }
}

export default CardServiços