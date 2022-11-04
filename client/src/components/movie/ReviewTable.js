import styled from 'styled-components';
import MultiReview from './MultiReview';
import NoResult from './NoResult';
import ReviewItem from './ReviewItem';
import ReviewNoResult from './ReviewNoResult';

const Wrapper = styled.div`
  width: 100%;
  max-height: 290px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function ReviewTable({ negative, positive, isNegative, isMobile }) {
  return (
    <Wrapper>
      {isMobile === 1 ? (
        <MultiReview positive={positive} negative={negative} />
      ) : (
        <>
          {isNegative === 0 ? (
            <>
              {positive.length > 0 ? (
                <>
                  {positive.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                  ))}
                </>
              ) : (
                <ReviewNoResult />
              )}
            </>
          ) : null}

          {isNegative === 1 ? (
            <>
              {negative.length > 0 ? (
                <>
                  {negative.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                  ))}
                </>
              ) : (
                <ReviewNoResult />
              )}
            </>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}

export default ReviewTable;
