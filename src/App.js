import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [openDialog, setOpenDialog] = useState(true)

  const dialogToggle = () => {
    setOpenDialog(currentDialog => !currentDialog)
  }

  return (
    <div className="App">
      <div className='App-header'>
        <Button variant="outlined" onClick={dialogToggle}>
          Open dialog
        </Button>
      </div>
    </div>
  );
}

export default App;