import styled from 'styled-components';
import InfoTable from './InfoTable';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  margin-left: 1rem;
  background-color: white;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
  }
`;

function InfoBox({ movie }) {
  return (
    <Wrapper>
      <InfoTable movie={movie} />
    </Wrapper>
  );
}

export default InfoBox;
