import React, {Fragment} from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
// import { Wrapper, ClearBoth } from '../../Core/reusable-styles';
import { render } from '@testing-library/react';

const BackGround = styled.div`
    background-color: red
`
const Wrapper= styled.div`
    font: 20
`
class Landing extends React.Component{
    render(){
        return(
            <Wrapper>
            NOTFOUND
            </Wrapper>
        )
  
    }
}
export default withRouter(Landing)