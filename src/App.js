import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import BuscarServiços from './components/BuscarServiços'
import Carrinho from './components/Carrinho'
import CardServiços from './components/CardServiços'
import VerDetalhes from './components/VerDetalhes'
import { baseUrl, headerPostman } from './components/constants'


const Header = styled.div `
background-color:#7C66C5;
display: flex;
justify-content: space-between;
`
const Button = styled.button`
background-color:#7C66C5;
color: white;
display: flex;
align-items: center;
border: 1px solid #7C66C5;
font-size: 20px;
cursor: pointer;
`
const Img = styled.img`
width: 40px;
background-color: #7C66C5;
padding: 13px;
`

class App extends React.Component {

	state = { 

		telaAtual: "home",
		minFilter: '',
		maxFilter: '',
		nameFilter: '',
    	ordenacao: '',

		estadotela: "todos",
		servicos:[],

		titulo:"",
		descricao:"",
		preco:'',
		formaDePagamento:[],
		data:"",
	
		}

		componentDidMount () {
			this.todosServicos()
	 
	}

	todosServicos = () => {

			axios.get(`${baseUrl}/jobs`, headerPostman)

			.then(response => {
					console.log(response.data)
					this.setState({servicos:response.data.jobs})
					

			}).catch(err => {
					console.log(err)
			})
	};

	mostraTela =()=>{
		switch(this.state.telaAtual){
		case "home":
			return <Home irParaCadastro={this.irParaCadastro} irParaBuscaServicos={this.irParaBuscaServicos} />
		case "cadastro":
			return <Cadastro state={this.state} />
		case "buscar-servicos":
			return <BuscarServiços state={this.state}
			setState={this.setState}/>
		case "carrinho":
			return <Carrinho/>
		default: 
		return <div>Erro Página não encontrada! Tente novamente</div>
		
	}
	}

	irParaHome =()=>{
		this.setState({telaAtual:"home"})
	}

	irParaCadastro =()=>{
		this.setState({telaAtual:"cadastro"})
	}
	

	irParaBuscaServicos =()=>{
		this.setState({telaAtual:"buscar-servicos"})
	}

	irParaCarrinho =()=>{
		this.setState({telaAtual:"carrinho"})
	}


	


	render ()
	 {
		return (

			<div>
			<Header>
				<Button onClick={this.irParaHome}><Img src="https://rude-yoke.surge.sh/static/media/ninjaIconOutline.8ba90ce1.png"></Img>Labeninjas</Button>
				<Button onClick={this.irParaCarrinho}>Carrinho</Button>
			</Header>
			
		
			{this.mostraTela()}

			
			</div>
		)
	}
}

export default App