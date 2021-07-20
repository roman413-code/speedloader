import {makeStyles} from '@material-ui/core/styles';
import Main from './Main';
import './App.css';
import Header from './Header';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className='App-header'>
      <Header />
      <Main />
      
    </div>
  );
}

export default App;
