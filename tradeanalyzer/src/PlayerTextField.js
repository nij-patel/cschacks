import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ReceivePlayer() {
  return (
    <Autocomplete
      disablePortal
      id="receivePlayer"
      options={top5QBs}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Player" />}
    />
  );
}

// Top 4 QBs in the NFL according to Nij and Johnny + Russell Wilson 
const top5QBs = [
  { label: 'Russell Wilson', team: 'Broncos' },
  { label: 'Geno Smith', team: 'Seahawks' },
  { label: 'Jalen Hurts', team: 'Eagles' },
  { label: 'Kenny Pickett', team: 'Steelers' },
  { label: 'Taylor Heincke', team: 'Commanders' },
];