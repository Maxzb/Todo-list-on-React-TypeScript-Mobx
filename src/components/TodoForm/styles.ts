import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  todoform: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  inputTitle: {
    display: 'inline-block',
    width: '100%',
    marginRight: '20px'
  },
  button: {
    display: 'inline-block',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    minWidth: 'auto',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'auto',
    padding: '15px 20px',
    lineHeight: '1.4em',
    whiteSpace: 'nowrap',
  },
}));