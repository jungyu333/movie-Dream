import styled from 'styled-components';
import SearchItem from '../search/SearchItem';
import ReviewTable from './ReviewTable';
import ReviewSkeleton from './ReviewSkeleton';

// import ClassifyButton from './ClassifyButton';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 290px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  alignItems: 'center';
  background-color: white;
  padding : 5px 10px 5px 10px;
  margin :0 0 1rem 0;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
  }
`;


function ReviewBox(reviews, isLoading) {
    return (
      
      <Wrapper>
        {isLoading ? (
        <ReviewTable container spacing={{ xs: 0, sm: 2 }}>
          {new Array(5).fill(1).map((_, index) => (
            <ReviewSkeleton key={index} />
          ))}
        </ReviewTable>
      ) : (
        <ReviewTable>
          {reviews.map(review => (
              <SearchItem key={review.movie_id} review={review} />
            ))}
        </ReviewTable>
      )}
      </Wrapper>
      );
}

export default ReviewBox;