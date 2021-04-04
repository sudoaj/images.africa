import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import Myimg from './sunset.jpg'
const Wrapper = styled.div `
display:grid;
grid-row: ${(props) => props.gridRow};
grid-column: ${(props) => props.gridColumn};
align-item:center;
height:100%;
`
const MainDiv = styled.div `
    margin:5px;
    background-color:#FAFAFA;
    border: 1px solid;
    box-shadow: 5px 5px ${({theme}) => theme.colors.brown};
    width:95%;
    height:80%;
`
const Text = styled.p `
    background-color:#fafafa;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};

`
const TextContainer = styled.div `
margin-top:-10px;    
background-color: ${(props) => props.color};
    

`
const PostPic = styled.img `
    width:100%;
    heigth: 100%;
`
PostPic.defaultProps = {
    src: Myimg,
  };
class PostBox extends React.Component {

  render() {
    return (

        <Wrapper>
            <MainDiv>
                <PostPic ></PostPic>
                <TextContainer color="white">
                    <Text color={({theme}) => theme.colors.brown} size="20px">Hi There</Text>
                    <Text color="black" size="15px">This article will be awesome, but for now lorem ipsum bitch</Text>
                </TextContainer>
            </MainDiv>
        </Wrapper>

    )
  }
}

export default withRouter(PostBox);

