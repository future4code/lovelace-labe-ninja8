import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { baseUrl, headerPostman } from "./constants"

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
    state={
        titulo:"",
        descricao:"",
        preco:"",
        formaDePagamento:[],
        data:""
    }
    
    criarTitulo=(e)=>{
        this.setState({titulo: e.target.value})
    }

    criarDescricao=(e)=>{
        this.setState({descricao:e.target.value})
    }
    
    criarPreco=(e)=>{
        this.setState({preco:e.target.value})
    }

    criarFromaDePagamento=(e)=>{
        this.setState({formaDePagamento:e.target.value})
    }

    criarData=(e)=>{
        this.setState({data:e.target.value})
    }


    criarServiço = (e) => {
        const body = {
            title:this.state.titulo,
            description:this.state,
            price:this.state.preco,
            paymentMethods:this.state.formaDePagamento,
            dueDate:this.state.data
        };

        Axios.post(baseUrl,headerPostman,body)
        .then(() => {
            alert('serviço cadastrado')
        }).catch(err =>{
            console.log(err)
        });
        this.setState({titulo:""});
    };



    render () {

        return (
            <ContainerPrincipal> 

                <Titulo>
                    <h1>Cadastre o seu serviço</h1>
                </Titulo>

                <ContainerInputs>
                    <Inputs
                    value={this.state.titulo}
                    onChange={this.criarTitulo}
                    placeholder="Título"
                    type="text"
                    />

                    <Inputs 
                     value={this.state.descricao}
                     onChange={this.criarDescricao}
                     placeholder="Descrição"
                     type="text"
                    />

                    <Inputs 
                    value={this.state.preco}
                    onChange={this.criarPreco}
                    type="number"
                    placeholder="Preço"
                    />
                    
                   
                         <Select 
                         value={this.state.formaDePagamento}
                         onChange={this.criarFromaDePagamento}
                         >
                            <option selected>Forma de Pagamento:</option>
                            <option>Cartão de Crédito</option>
                            <option>Cartão de Débito</option>
                            <option>Pix</option>
                            <option>PayPal</option>
                            <option>Boleto</option>
                         </Select>
                    
                    <Inputs
                    value={this.state.data}
                    onChange={this.criarData}
                    placeholder="Prazo do Serviço" 
                    type="date" />

                    <Buttons>CADASTRAR SERVIÇO</Buttons>
                   
                    
                </ContainerInputs>

            </ContainerPrincipal>
        )
    }
}

export default Cadastro