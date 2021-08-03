import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerPrincipal = styled.div`
background-color: #F5F5FD;
`

const ContainerHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin: 10px;
`

const ContainerButtons = styled.div`
display: flex;
justify-content: center;
padding: 30px;
`

const Buttons = styled.button `
margin: 15px;
padding: 10px;
background-color:#7C66C5;
color: white;
border: solid 1px #7C66C5;
border-radius: 5px;
cursor: pointer;
`


class Home extends React.Component {

    render () { 

        return (
            <ContainerPrincipal>

            <ContainerHome>
                <img src="https://rude-yoke.surge.sh/static/media/ninjaLogo.3a055d2a.png" alt="logo" />
            </ContainerHome>

            <ContainerButtons>
                <Buttons onClick={this.props.irParaCadastro}>QUERO SER UM NINJA</Buttons>
                <Buttons onClick={this.props.irParaBuscaServicos}>CONTRATAR UM NINJA</Buttons>
            </ContainerButtons>

            </ContainerPrincipal>
        )
    }
}

export default Home