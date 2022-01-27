import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  listTitle: {
    color: '#FF7778',
  },
  todo: {},
  completed: {
    textDecoration: 'line-through',
    color: 'grey'
  }
}));