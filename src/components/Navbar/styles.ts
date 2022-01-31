import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'auto',
    padding: '5px 30px',
    lineHeight: '1.5em',
  },
  subtitle: {
    display: 'block',
  }
}));