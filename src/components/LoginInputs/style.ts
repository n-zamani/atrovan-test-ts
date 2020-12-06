import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  paper: {
    width: '100%',
    maxWidth: 500,
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  button: {
    width: '120px',
    margin: '15px 0!important',
  },
  textField: {
    width: '100%',
    margin: '20px 0!important',
    backgroundColor: 'white'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});
