import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'

const Wrapper = styled.section `
    background-color: blue;
    height:100vh;
    overflow:scroll;
`
const InnerWrapper = styled.div `
overflow:scroll;
    text-align: center;
    color:red;
`
const MainDiv = styled.div `

`
const Text = styled.p `
    color: red;
`
class MediaBox extends React.Component {

  render() {
    return (

        <Wrapper>
            <MainDiv>
                <Text>Hi there</Text>
            </MainDiv>
        </Wrapper>

    )
  }
}

export default withRouter(MediaBox);

