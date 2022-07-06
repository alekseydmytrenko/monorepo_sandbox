// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { getAllGames } from "../fake-api";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export function App() {
  return (
    <>
      {getAllGames().map((x) => (
        <Card key={x.id} className="game-card">
          <CardActionArea>
            <CardMedia
              className="game-card-media"
              image={x.image}
              title={x.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {x.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {x.description}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="game-rating"
              >
                <strong>Rating:</strong> {x.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default App;
