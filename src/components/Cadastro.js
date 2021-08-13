import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { baseUrl, headerPostman } from "./constants"
import App from '../App'

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
            description:this.state.descricao,
            price:parseInt(this.state.preco),
            paymentMethods:[this.state.formaDePagamento],
            dueDate:this.state.data
        };

        console.log(body)


        Axios.post(`${baseUrl}/jobs`, body, headerPostman)
        .then(() => {
            alert('serviço cadastrado')
        }).catch(err =>{
            console.log(err)
        });
    };



    render () {

        const {titulo,descricao,preco,data,formaDePagamento}= this.props
        return (
            <ContainerPrincipal> 

                <Titulo>
                    <h1>Cadastre o seu serviço</h1>
                </Titulo>

                <ContainerInputs>
                    <Inputs
                    value={titulo}
                    onChange={this.criarTitulo}
                    placeholder="Título"
                    type="text"
                    />

                    <Inputs 
                     value={descricao}
                     onChange={this.criarDescricao}
                     placeholder="Descrição"
                     type="text"
                    />

                    <Inputs 
                    value={preco}
                    onChange={this.criarPreco}
                    type="Number"
                    placeholder="Preço"
                    />
                    
                   
                         <Select 
                         value={formaDePagamento}
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
                    value={data}
                    onChange={this.criarData}
                    placeholder="Prazo do Serviço" 
                    type="date" />

                    <Buttons onClick={this.criarServiço}>CADASTRAR SERVIÇO</Buttons>
                   
                    
                </ContainerInputs>

            </ContainerPrincipal>
        )
    }
}

export default Cadastro