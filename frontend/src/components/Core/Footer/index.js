import React from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import {Wrapper} from '../reusable-styles/index'
import logo from '../Header/AFRICABROWN.png'
var Hi = "name";
const FixedFooter = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    height: 150px;
    width: 100%;
    left: 0;
    bottom: 0;
    position: fixed;
    right: 0;
    z-index: 1000;
    @media screen and (min-width: 1600px) {
        width: 100%; 
        margin: auto;
    }
`
const FooterInner = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 1141px;
    box-sizing: border-box;
    height: 100%;
    padding:30px;
`

const FooterLeft = styled.div`
    float: left;
    width: 20%
`
class FooterComponent extends React.Component {

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
      <Wrapper>
          <FixedFooter>
            <FooterInner>
              <FooterLeft>
                <Link to="/home">
                  <img src={logo} alt="Logos" height="50px"/>

                </Link>
              </FooterLeft>
            </FooterInner>
          </FixedFooter>
      </Wrapper>
    )
  }
}

export default withRouter(FooterComponent);

