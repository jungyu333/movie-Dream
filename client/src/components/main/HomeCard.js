import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

export default function ActionAreaCard() {
  return (
  <Box sx={{ margin: 2 }} >
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
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
        
        <CardMedia
          component="img"
          height="500"
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

        <CardMedia
          component="img"
          height="500"
          image="https://biz.chosun.com/resizer/uU9ltrzi3qgPlKLoypmwJy5kjTo=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/GZ5LDVXCOIFTYHD7GBAW4GX5LM.jpg"
          alt="공조2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            영화명.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="500"
          image="https://biz.chosun.com/resizer/uU9ltrzi3qgPlKLoypmwJy5kjTo=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/GZ5LDVXCOIFTYHD7GBAW4GX5LM.jpg"
          alt="공조2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            영화명
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="500"
          image="https://biz.chosun.com/resizer/uU9ltrzi3qgPlKLoypmwJy5kjTo=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/GZ5LDVXCOIFTYHD7GBAW4GX5LM.jpg"
          alt="공조2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            영화명
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영화줄거리
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
  );
}
