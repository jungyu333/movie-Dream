import { useEffect, useState } from 'react';
import { Container, Paper } from '@mui/material';
import styled from 'styled-components';
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
  Rating
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Wrapper = styled(Container)`
  width:100%;
  height: 330px;
  justify-content: center;
  text-align: center;
  
`;

 const Title = styled.div`
 font-weight: 600;
 & h1 {
   margin-right: 10px;
   font-size: 1.2rem;
   text-align: center;
   
 }
 & h2 {
   color: gray;
 }
`;
 
const NicnameContainer = styled.div`
  display: flex;
  font-size: 1rem;
  margin: 5px 0;
  & h1 {
    font-weight: 600;
    margin-right: 10px;
  }

  & div {
    margin-left : 13px;
    color: gray;
    margin-right: 5px;
    }
  }
`;

const CommentContainer = styled.div`
  display: flex;
  font-size: 1rem;
  margin: 5px 0;
  & h1 {
    font-size: 1rem;
    font-weight: 600;
    display: flex;

  }
  & div {
    margin-left : 10px;
    color: gray;
    margin-right: 5px;
    }
  }
`;
const TimeContainer = styled.div`
  display: flex;  
  font-size: 1rem;
  margin: 5px 0;
  & h1 {
    font-size: 1rem;
    font-weight: 600;
    display: flex;

  }
  & div {
    margin-left : 10px;
    color: gray;
    margin-right: 5px;
  }
`;

const ReviewInfo = styled.div`
  margin-top: 0.3rem;
`;

const array1 = [0,1,2,3,4];
const map1 = array1.map();

function ReviewTable() {
  const params = useParams();
  const [reviewData, setReviewData] = useState({
    positive: [],
    negative: [],
    isLoading : true,
  });

  useEffect(() => {
    axios.get(`/api/search/review?movie_id=${params.id}&sentimentFlag=true`).then(res =>
      setReviewData({
        positive: [...res.data.review.data.positive] ,
        negative: [...res.data.review.data.negative],
        isLoading : false,
      }),
    );
  }, [params.id]);
 
  console.log(reviewData.positive);

  
  return (

    <ReviewInfo>
    {!reviewData.isLoading ? <NicnameContainer>
        <h1>닉네임</h1>
        <div>{ reviewData.positive[map1.get()].review_id}</div>
      </NicnameContainer> : null
    }
   {!reviewData.isLoading ?   <CommentContainer>
        <h1>댓글내용</h1>
        <div>{ reviewData.positive[map1.get()].review_txt}</div>
      </CommentContainer> : null
    }
    {!reviewData.isLoading ? <TimeContainer>
        <h1>작성시간</h1>
        <div>{reviewData.positive[map1.get()].review_date}</div>
      </TimeContainer> : null
    }
      <Divider />
    </ReviewInfo>
    
);
}

export default ReviewTable;
