import styled from 'styled-components';
import { css } from 'styled-components';
import * as React from 'react'
import Sketch from '../components/sketch/sketch';

const HeaderContainer = styled.div`
  height: 100vh;
`
const HeaderTextContainer = styled.div`
  height: 29%;
  padding: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
`

const HeaderColumn = styled.div`
  flex: 1;
  padding: 1rem;s
`

const Name = styled.span`
  font-size: 3rem;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Sketch />
      <HeaderTextContainer>
        <HeaderColumn>
          <Name>Alex Shabib Hoggett</Name>
          <br/>
          London, UK
        </HeaderColumn>
        <HeaderColumn>

        </HeaderColumn>
        <HeaderColumn>

        </HeaderColumn>
        
      </HeaderTextContainer>
    </HeaderContainer>
  )
}

export default Header;