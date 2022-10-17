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
} from '@mui/material';
import { Link } from 'react-router-dom';

const CustomList = styled(List)`
  margin: 1rem 0;
`;

const CustomAvatarItem = styled(ListItemAvatar)`
  margin: 0;
  margin-right: 10px;
  & div {
    width: 100%;
    height: 10vh;
    & img {
      object-fit: cover;
    }
  }
`;

const CustomListItem = styled(ListItem)`
  padding: 10px 0;
  &:hover {
    background-color: #cdcfd4;
  }
`;

const CustomDivider = styled(Divider)`
  border-color: lightgray;
`;

const Wrapper = styled(Container)`
  width: 1500px;
  height: 330px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 920px;
  height: 300px;
  margin: 30px 10px;
  border-radius: 15px;
  border: 1px;
  background-color: white;
  overflow-y: scroll;
`;

function ReviewBox() {
  return (
    <Wrapper>
      <CustomPaper className="contentbox" elevation={3}>
        <b>Comment</b>
        <Grid item xl={6} md={3} xs={6}>
          <CustomList>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Link to={'/'}>
                <CustomListItem alignItems="flex-start">
                  <CustomAvatarItem>
                    <Avatar variant="square" alt="Remy Sharp" />
                  </CustomAvatarItem>
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
                        {`  시간`}
                      </>
                    }
                  />
                </CustomListItem>
              </Link>
            ))}
            <CustomDivider component="div" />
          </CustomList>
        </Grid>
      </CustomPaper>
    </Wrapper>
  );
}

export default ReviewBox;
