import React from "react"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function RecipeCard({ recipe, recipeDetailClick }) {
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
            <NavLink onClick={() => recipeDetailClick(recipe)} className="recipe-btn" to="/recipe-details" exact>Recipe</NavLink>
            <Button size="small">Like</Button>
            <Typography style={{"margin-right": 0}}>
              <StarBorderOutlinedIcon /> {recipe.rating} / 5
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default RecipeCard