import React from "react"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Button from '@mui/material/Button';

function RecipeCard({ recipe }) {
    return(
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={recipe.image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
            {recipe.name}
            </Typography>
            <Typography>
            {recipe.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Recipe</Button>
            <Button size="small">Like</Button>
            <Typography >
            <StarBorderOutlinedIcon /> {recipe.rating} / 5
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default RecipeCard