import * as React from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'; 

// Dropdown categories
const playerNums = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
];

export default function SelectTextFields() {
    const [numOfPlayers, setNumOfPlayers] = React.useState(1);

    const handleChange = (event) => {
        setNumOfPlayers(event.target.value);
    };

    return (
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
                noValidate
                autoComplete="off"
        >
            <div>
                <TextField
                    select
                    label="Players to trade"
                    value={numOfPlayers}
                    onChange={handleChange}
                    helperText="Please select the number of players you would like to trade."
                >
                    {playerNums.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
            
                <TextField
                    select
                    label="Players to receive"
                    value={numOfPlayers}
                    onChange={handleChange}
                    helperText="Please select the number of players you would like to trade."
                >
                    {playerNums.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
            </div>

        </Box>

            
    )
}



