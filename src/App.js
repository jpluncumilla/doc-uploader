import './App.css';
import { useState } from 'react';
import { Button, Box, Modal } from '@mui/material';
import {DocModal} from './components/DocModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '75%',
  bgcolor: '#ffffff',
  p: 6,
  borderRadius: 5
}

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

        <Modal
          open={openDialog}
        >
          <Box sx={style}>
            <DocModal />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;