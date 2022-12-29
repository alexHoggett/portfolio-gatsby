import styled from 'styled-components';
import { css } from 'styled-components';
import * as React from 'react'
import Sketch from '../components/sketch/sketch';

const SketchContainer = styled.div`
  height: 800px;
  width: 100%;
`

const Header = () => {
  return (
    // <SketchContainer>
      <Sketch />
    // </SketchContainer>
  )
}

export default Header;