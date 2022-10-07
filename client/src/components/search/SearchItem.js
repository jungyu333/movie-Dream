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
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function SearchItem() {
  return (
    <Grid item xl={12} sm={6}>
      <CustomList>
        <Link to={'/'}>
          <CustomListItem alignItems="flex-start">
            <CustomAvatarItem>
              <Avatar variant="square" alt="Remy Sharp" />
            </CustomAvatarItem>
            <ListItemText
              primary="영화이름"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    장르
                  </Typography>
                  {`- 액션`}
                </>
              }
            />
          </CustomListItem>
        </Link>

        <CustomDivider component="div" />
      </CustomList>
    </Grid>
  );
}

export default SearchItem;
