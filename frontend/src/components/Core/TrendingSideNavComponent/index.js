import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'




const Wrapper = styled.section `
    background-color: #FFF8EF;
    height:100vh;
    overflow:scroll;
`
const InnerWrapper = styled.div `
overflow:scroll;
    text-align: center;
    color:red;
`
const SideNa = styled.nav `
    font-weight: bold;
	padding: 1.5em;
	font-size: 120%;
	padding: 20px;
	text-align: left;
    
`
const MainDiv = styled.div `

`
const Text = styled.p `
color: ${({theme}) => theme.colors.brown};
text-decoration:none;
`
class TrendingSideNavComponent extends React.Component {

  render() {
    return (

        <Wrapper>
            <MainDiv>
                <SideNa>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <Text>Stories</Text>
                    </Link>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <Text>Media</Text>
                    </Link>
                </SideNa>
            </MainDiv>
        </Wrapper>

    )
  }
}

export default withRouter(TrendingSideNavComponent);

