import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function CardArea () {
    return (
      <Grid container spacing={2}>
        {[1,2,3,4,5].map((item) =>  
        <Grid item xs={6} sm={4}  md={2.4}>
            <Card >
            <CardMedia
                component="img"
                height="350"
                image="https://biz.chosun.com/resizer/uU9ltrzi3qgPlKLoypmwJy5kjTo=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/GZ5LDVXCOIFTYHD7GBAW4GX5LM.jpg"
                alt="공조2"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                공조2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                영화줄거리
                </Typography>
            </CardContent>
            </Card>
        </Grid> )}
      </Grid>
    );
  }
  export default CardArea