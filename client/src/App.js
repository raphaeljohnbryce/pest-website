import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
});

function App() {
    const classes = useStyles()

    const [dogsList, setDogsList] = useState([])

    useEffect(() => {
        console.log('App -> useEffect')

        fetch('http://localhost:5000/api/dogs')
            .then(res => res.json())
            .then(data => {
                console.log('data')
                console.log(data)
            })
    }, [])

    return (
        <div className={classes.root}>
            <h1>Dogs list</h1>
        </div>
    );
}

export default App;
