import React from 'react';
import   './Portfolio.css'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card,Button,CardMedia,CardContent,Typography,Container} from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import usePortfolio from './styles'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'#000'
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
   color:'#fff'
  },
}));

  

export default function Portfolioo() {
 
  const classPortfolio=usePortfolio();
  return (
    
   
    <div className='containerHome align-items-center my-auto'>
       <div className='placeholder'>
            <h5>Portfolio</h5>

           
        </div>
        <h3 className="recentWork">My Recent Works</h3>
        <Container className={classPortfolio.container}>
          <Grid container spacing={4} justify='center'>

            <Grid item  xs={12} sm={6} md={4} >

            <Card className={classPortfolio.card}>
              <CardMedia 
              className ={classPortfolio.icon}
              image="http://pxdraft.com/wrap/zemo/static/img/portfolio-02.jpg"
              title='Image '
              />
        
              <CardContent className={classPortfolio.cardContent}>
                <Typography varient='h2' color='textPrimary'>
                  Heading
                </Typography>
                <Typography varient='h5' color='textSecondary'>
                0

I had the same error, I addedardMedia staAdditionally I put my images in public folder but it is working also with external links.
                </Typography>

              </CardContent>
              <CardActions>
                <Button  size='small' color='primary'>
                  View
                  </Button>

              </CardActions>
            </Card>

            </Grid>
           
            <Grid item  xs={12} sm={6} md={4} >

<Card className={classPortfolio.card}>
  <CardMedia 
  className ={classPortfolio.icon}
  image="http://pxdraft.com/wrap/zemo/static/img/portfolio-02.jpg"
  title='Image '
  />

  <CardContent className={classPortfolio.cardContent}>
    <Typography varient='h2' color='textPrimary'>
      Heading
    </Typography>
    <Typography varient='h5' color='textSecondary'>
    0

I had the same error, I added style and set height for image and CardMedia started working. Additionally I put my images in public folder but it is working also with external links.
    </Typography>

  </CardContent>
  <CardActions>
    <Button  size='small' color='primary'>
      View
      </Button>

  </CardActions>
</Card>

</Grid>
<Grid item  xs={12} sm={6} md={4} >

            <Card className={classPortfolio.card}>
              <CardMedia 
              className ={classPortfolio.icon}
              image="http://pxdraft.com/wrap/zemo/static/img/portfolio-02.jpg"
              title='Image '
              />
        
              <CardContent className={classPortfolio.cardContent}>
                <Typography varient='h2' color='textPrimary'>
                  Heading
                </Typography>
                <Typography varient='h5' color='textSecondary'>
                0

I had the same error, I added style and set height for image and CardMedia started working. Additionally I put my images in public folder but it is working also with external links.
                </Typography>

              </CardContent>
              <CardActions>
                <Button  size='small' color='primary'>
                  View
                  </Button>

              </CardActions>
            </Card>

            </Grid>
            <Grid item  xs={12} sm={6} md={4} >

            <Card className={classPortfolio.card}>
              <CardMedia 
              className ={classPortfolio.icon}
              image="http://pxdraft.com/wrap/zemo/static/img/portfolio-02.jpg"
              title='Image '
              />
        
              <CardContent className={classPortfolio.cardContent}>
                <Typography varient='h2' color='textPrimary'>
                  Heading
                </Typography>
                <Typography varient='h5' color='textSecondary'>
                0

I had the same error, I added style and set height for image and CardMedia started working. Additionally I put my images in public folder but it is working also with external links.
                </Typography>

              </CardContent>
              <CardActions>
                <Button  size='small' color='primary'>
                  View
                  </Button>

              </CardActions>
            </Card>

            </Grid>
            <Grid item  xs={12} sm={6} md={4} >

            <Card className={classPortfolio.card}>
              <CardMedia 
              className ={classPortfolio.icon}
              image="http://pxdraft.com/wrap/zemo/static/img/portfolio-02.jpg"
              title='Image '
              />
        
              <CardContent className={classPortfolio.cardContent}>
                <Typography varient='h2' color='textPrimary'>
                  Heading
                </Typography>
                <Typography varient='h5' color='textSecondary'>
                0

I had the same error, I added style and set height for image and CardMedia started working. Additionally I put my images in public folder but it is working also with external links.
                </Typography>

              </CardContent>
              <CardActions>
                <Button  size='small' color='primary'>
                  View
                  </Button>

              </CardActions>
            </Card>

            </Grid>

          </Grid>


        </Container>

    </div>
  );
}
