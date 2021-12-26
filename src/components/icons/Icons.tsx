import React from 'react';
import styled from 'styled-components';
import { rem } from 'utils/styles';

const Container = styled.div`
  padding: ${rem(20)};
`;

const Wrapper = styled.div`
  display: grid;
  // 공부해야 할 속성
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
`;

const Icons = ({ children }: any) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Icons;
