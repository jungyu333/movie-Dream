import styled from 'styled-components';
import SearchItem from '../search/SearchItem';
import ReviewTable from './ReviewTable';
// import ClassifyButton from './ClassifyButton';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 290px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  margin-left: 1rem;
  background-color: white;
  padding : 5px 10px 5px 10px;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
  }
`;


function ReviewBox(reviews, isLoading) {
    return (
      
      <Wrapper>
        <ReviewTable>
          {reviews.map1(review => (
              <SearchItem key={review.movie_id} review={review} />
            ))}
        </ReviewTable>
      </Wrapper>
      );
}

export default ReviewBox;