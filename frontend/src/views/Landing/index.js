import React, {Fragment} from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';
import HeaderComponent from '../../components/Core/Header'
import FooterComponent from '../../components/Core/Footer'
import Background from  './ele.jpeg'

const Wrapper= styled.div`
    display: grid;
    top:0;
`
const SearchInput = styled.input`
    height: 60px;
    width: 585px;
    border-radius: 10px;
    background-color: white;
    color: #949494;
    font-size: 13px;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 0 16px;
    margin: auto;
    display: block;
    &::placeholder {
        color: #949494;
        font-size: 13px;
        text:jrs;
    }
`
const Jumbo = styled.section `
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    height: 400px;

`
const JumboContent = styled.div `
    color: white;
    font-weight: bold;
    border: 1px  #f1f1f1;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
`
const Text = styled.p `
    font-size:${(props) => props.size};
    font-weight: 600;
    text-align:${(props) => props.align};
    color: ${({theme}) => theme.colors.brown};
    padding-right: 40px;
    padding-bottom:${(props) => props.borderBottom};
    border-bottom: ${(props) => props.borderBottom};
`
const SpanText = styled.span `
    

    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */

    background-color:rgba(255,255,255,0.5);
    padding: 5px;
    color: ${({theme}) => theme.colors.brown};

    animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white; }
      }
`

const SpanText1 = styled.span `
    
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */

    background-color:rgba(255,255,255,0.5);
    padding: 5px;
    color: ${({theme}) => theme.colors.brown};

`
const SecondMenu = styled.section `
    background-color: #FFF8EF;  
    `
const SecondMenuInner = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;

`
class Landing extends React.Component{
    render(){
        return(
            
            <Wrapper>
                <HeaderComponent/>
                <JumboContent>
                <Text size="30px" align="center">Free Stock Images That Represents <SpanText>Africa</SpanText></Text>
                    <SearchInput placeholder="Search for melanin"/>
                    <Text align="center"><SpanText1>Suggested:</SpanText1> Yoruba, Igbo, Nigerian, Ghana, Liberia, Zoo, Happy</Text>
                </JumboContent>
                <SecondMenu>
                    <SecondMenuInner>
   
                    <Text  borderBottom="solid 4px">Trending</Text>
                    <Text >Photo</Text>
                    <Text >Video</Text>
                    <Text >Gifs</Text>


                   

                    </SecondMenuInner>
                </SecondMenu>
                <FooterComponent/>
            </Wrapper>
        )
  
    }
}
export default withRouter(Landing)