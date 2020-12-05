import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    minWidth: 200,
    width: '100%',
    margin: 20,
    backgroundColor: '#f5f5f5',
  },
  typography: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'black',
  },
});
