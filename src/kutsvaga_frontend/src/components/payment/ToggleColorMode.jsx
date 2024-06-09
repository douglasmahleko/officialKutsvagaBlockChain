import * as React from 'react';

import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

function ToggleColorMode({ openNum, setopenNum }) {
  return (
    <IconButton
      onClick={() => setopenNum(!openNum)}
      color="inherit"
      aria-label="Theme toggle button"
    >
      <CloseIcon color="primary" />
    </IconButton>
  );
}

export default ToggleColorMode;
