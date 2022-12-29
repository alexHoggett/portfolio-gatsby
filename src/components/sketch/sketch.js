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
  width: 400px;
  height: 200px;
`

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