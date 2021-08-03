import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import BuscarServiços from './components/BuscarServiços'
import Carrinho from './components/Carrinho'
import CardServiços from './components/CardServiços'
import VerDetalhes from './components/VerDetalhes'

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

	render ()
	 {
		return (

			<div>
			<Header>
				<Button><Img src="https://rude-yoke.surge.sh/static/media/ninjaIconOutline.8ba90ce1.png"></Img>Labeninjas</Button>
				<Button>Carrinho</Button>
			</Header>
			

		
			
			</div>
		)
	}
}

export default App