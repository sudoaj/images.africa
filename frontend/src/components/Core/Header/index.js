import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import {Wrapper, ClearBoth} from '../reusable-styles/index'
import logo from '../Header/AFRICABROWN.png'
import Background from  './ele.jpeg'



const FixedHeaderWrap = styled.header`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color:rgba(255,255,255,0.1);
    border-bottom: 1px solid #402519;
    height: 400px;
    width:100%
`
const FixedHeader = styled.div`
    height: 62px;
    left: 0;
    top: 0;
    position: fixed;
    right: 0;
    z-index: 1000;
    @media screen and (min-width: 1600px) {
        margin: auto;
    }
`
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
`

const HeaderLeft = styled.div`
    float: left;
    width: 50%;
    padding:20px;
`


const HeaderRight = styled.div`
    display:flex;
    float: right;
    width: 50%;
`
const SearchInput = styled.input`
    height: 30px;
    width: 585px;
    border-radius: 15px;
    background-color: #F2F2F2;
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
    }
`
const Text = styled.p`
    color: ${({theme}) => theme.colors.brown};
    font-size:18px;
    font-weight:600;
    padding-right: 40px;
    text-align: right;
    `

const Button = styled.a `
      background: #402519;
      background-image: -webkit-linear-gradient(top, #402519, #000000);
      background-image: -moz-linear-gradient(top, #402519, #000000);
      background-image: -ms-linear-gradient(top, #402519, #000000);
      background-image: -o-linear-gradient(top, #402519, #000000);
      background-image: -webkit-gradient(to right, #402519, #000000);
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      height: 0;
      line-height: 0;
      color: #FFFFFF;
      font-family: Arial;
      width: 100px;
      font-size: 20px;
      font-weight: 600;
      margin:10px;
      padding: 23px;
      -webkit-box-shadow: -1px -1px 4px 1px #000000;
      -moz-box-shadow: -1px -1px 4px 1px #000000;
      box-shadow: -1px -1px 4px 1px #000000;
      text-shadow: 6px 1px 38px #000000;
      border: solid #0059A0 0;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      text-align: center;

      &: hover{
        border: solid #0059A0 0;
        background: #3F2A21;
        background-image: -webkit-linear-gradient(top, #3F2A21, #322622);
        background-image: -moz-linear-gradient(top, #3F2A21, #322622);
        background-image: -ms-linear-gradient(top, #3F2A21, #322622);
        background-image: -o-linear-gradient(top, #3F2A21, #322622);
        background-image: -webkit-gradient(to bottom, #3F2A21, #322622);
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        text-decoration: none;

      }
`
class HeaderComponent extends React.Component {

  state = {
    profileEnable: false,
    searchEnable: false,
    notificationEnable: false
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (

        <FixedHeaderWrap>
          <FixedHeader>
            <HeaderInner>
              <HeaderLeft>
                <Link to="/home">
                  <img src={logo} alt="Logos" height="40px"  />
                </Link>
              </HeaderLeft>
              {/* <HeaderCenter>
                <SearchInput placeholder="Search university" type="text"/>
              </HeaderCenter> */}
              <HeaderRight>
                <Text>Explore</Text>
                <Text>Upload</Text>
                <Text>Country<span>NGN</span></Text>
                <Link to="/home">
              <Button>SignUp</Button> 
                </Link>
              </HeaderRight>
              <ClearBoth/>
            </HeaderInner>
          </FixedHeader>
        </FixedHeaderWrap>

    )
  }
}

export default withRouter(HeaderComponent);

