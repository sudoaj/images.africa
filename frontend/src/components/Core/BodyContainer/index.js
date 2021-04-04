import React from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import Trending from '../Trending'
const Wrapper = styled.section `
    height:100vh;
    margin-bottom:100px;
`
const Text = styled.p `
    color: blue;    
`
class BodyContainer extends React.Component {

  render() {
    return (
      <Trending>
      </Trending>
    )
  }
}
export default withRouter(BodyContainer);

