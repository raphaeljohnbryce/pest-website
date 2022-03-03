import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
});

function App() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Dogs list</h1>
        </div>
    );
}

export default App;
