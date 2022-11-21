import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "../components/TopBar";
import ContactsContainer from "../components/UniCon";
import { makeStyles } from '@mui/styles';
import './UniList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },

  top:{
    position:'fixed',
    top:0,
    width:'100%',
    zIndex: 9999,
  },
  content:{
    padding: '10px',
    margin: '100px',
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
          <main className={classes.root}>
            <div className={classes.top}>
                <TopBar />
            </div>        
            <div className={classes.content}>
                <ContactsContainer />
            </div>               
        
          </main>      
      </Router>
    </div>
  );
}