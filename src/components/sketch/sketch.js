import * as React from 'react';
import Swarm from './swarm';
import styled from 'styled-components';
import { css } from 'styled-components';

const ReactP5Wrapper = React.lazy(() => 
  import('react-p5-wrapper').then(module => ({
    default: module.ReactP5Wrapper
  }))
)

const SketchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
  }
`;

const Sketch = () => {
  const isSSR = typeof window === 'undefined'

  return (
    <SketchContainer>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <ReactP5Wrapper sketch={ Swarm } />
        </React.Suspense>
      )}
    </SketchContainer>
  );
}

export default Sketch;