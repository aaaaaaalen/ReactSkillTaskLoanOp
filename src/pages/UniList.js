import { BrowserRouter as Router } from "react-router-dom";
import ContactsContainer from "../components/UniCon";
import { makeStyles } from '@mui/styles';
import './UniList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content:{
    padding: '100px',
    margin: 'auto',
  }
}));

export default function App() {
  const classes = useStyles();
  return (
      <Router>
          <main className={classes.root}>       
            <div className={classes.content}>
                <ContactsContainer />
            </div>               
        
          </main>      
      </Router>
  );
}