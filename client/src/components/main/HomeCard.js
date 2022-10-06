import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const gridStyles = {
  paddingBottom: 2,
  paddingRight: 2,
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
};


function CardArea () {
  return (
    <React.Fragment>
      <Card >
        <CardMedia
          component="img"
          height="400"
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

      <Card>
        <CardMedia
          component="img"
          height="400"
          image="https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg"
          alt="인생은 아름다워"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            인생은 아름다워
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardMedia
          component="img"
          height="400"
          image="https://movie-phinf.pstatic.net/20220928_85/1664332929020nYWPc_JPEG/movie_image.jpg"
          alt="정직한 후보2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            정직한 후보2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardMedia
          component="img"
          height="400"
          image="https://movie-phinf.pstatic.net/20220921_197/1663737442956Ugu4T_JPEG/movie_image.jpg"
          alt="늑대사냥"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            늑대사냥
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardMedia
          component="img"
          height="400"
          image="https://movie-phinf.pstatic.net/20220930_90/1664503344646CtlxN_JPEG/movie_image.jpg"
          alt="극장판 짱구"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            극장판 짱구
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>
      </Card>

    </React.Fragment>
  );
}


export default function HomeCard() {
  return (
    <Box sx={{margin:2, gap: 2 }}>
      <Grid container columnSpacing={10} sx={gridStyles} >
        <Grid container item spacing={10} >
          <CardArea />
        </Grid>
      </Grid>
    </Box>
  );
}