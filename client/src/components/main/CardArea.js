import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

function CardArea () {
    return (
      <Grid container spacing={2}>
        {[1,2,3,4,5].map((item) =>  
        <Grid item xs={6} sm={4}  md={2.4}>
            <CardActionArea>
              <Card >
              <Link to={'/search'}>
              <CardMedia
                  component="img"
                  height="200"
                  image="https://biz.chosun.com/resizer/uU9ltrzi3qgPlKLoypmwJy5kjTo=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/GZ5LDVXCOIFTYHD7GBAW4GX5LM.jpg"
                  alt="공조2"
              />
              <CardContent>
                  <Typography gutterBottom variant="body2" component="div" height="5px">
                  공조2
                  </Typography>
              </CardContent>
              </Link>
              </Card>
            </CardActionArea>
        </Grid> )}
      </Grid>
    );
  }
  export default CardArea