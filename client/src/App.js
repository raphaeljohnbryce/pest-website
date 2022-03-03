import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
                setDogsList(data)
            })
    }, [])

    return (
        <div className={classes.root}>
            <h1>Dogs list</h1>
            <ul>
                {
                    Array.isArray(dogsList) && dogsList.length > 0
                        ? dogsList.map(dog => {
                            return <li key={`dog-item-${dog.id}`}>{dog.name}</li>
                        })
                        :
                        <h3>No dogs found</h3>
                }
            </ul>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> # </TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Breed</TableCell>
                            <TableCell align="right">Owner Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Array.isArray(dogsList) && dogsList.length > 0
                                ?
                                dogsList.map((row, index) => (
                                    <TableRow
                                        key={`dog-item-${row.id}`}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.age}</TableCell>
                                        <TableCell align="right">{row.breed}</TableCell>
                                        <TableCell align="right">No owner name</TableCell>
                                    </TableRow>
                                ))
                                :
                                <h3>No dogs found</h3>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;
