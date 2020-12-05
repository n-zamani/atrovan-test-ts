import { Link } from 'react-router-dom';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Main = ({device}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/device/${device.id.id}`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="body1" component="p" className={classes.typography}>
              {device.name}
            </Typography>
            <Typography gutterBottom variant="body1" component="p" className={classes.typography}>
              {device.type}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export {Main as DeviceCards}
