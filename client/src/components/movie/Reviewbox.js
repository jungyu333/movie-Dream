import { useState } from 'react';
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
import { Link } from 'react-router-dom';




const CustomList = styled(List)`
margin: 1rem 0;
`;

const CustomAvatarItem = styled(ListItemAvatar)`
  margin: 10px;
  margin-right: 10px;
  & div {
    width: 100%;
    height: 10vh;
    & img {
      
    }
  }
`;


const CustomListItem = styled(ListItem)`
  padding: 10px;
`;
  
const CustomDivider = styled(Divider)`
  border-color: lightgray;
`;

const Wrapper = styled(Container)`
  width:100%;
  height: 330px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const CustomPaper = styled(Paper)`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  background-color: white;
  overflow-y:scroll;
  &::-webkit-scrollbar {
    display: none;
  }
 `;

 

function ReviewBox() {
  return (
    <Wrapper>
      <CustomPaper className="contentbox" elevation={3}>
        <Typography>Review Reply</Typography>
        <Grid item xl={6} md={3} xs={6}>
          <CustomList>
            {[1, 2, 3, 4].map((item, index) => (
              <>
         
                <CustomListItem alignItems="flex-start">
                    <ListItemText
                    primary="닉네임"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          댓글 내용
                        </Typography>
                        <Typography
                        variant="body2"
                        color="text.primary">
                          시간
                        </Typography>
                      </>
                    }
                  />
                </CustomListItem>
            
            
              </>
            
            ))}
          
          </CustomList>
        </Grid>
      </CustomPaper>
    </Wrapper>
  );
}

export default ReviewBox;
