import React, {useState} from 'react';
import {Button, Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalProps{
    open: boolean;
    value:string;
    onClose: (value:string) => void;
    setValue: (name:string) => void;

}

 export const MuiModal:React.FC<ModalProps> = (props) => {
    const {open, value, onClose, setValue} = props
     const [name, setName] = useState('')
     const handleSubmit = () => {
        setValue(name)
         onClose(name)
     }

    return (
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter Workspace name
                    </Typography>
                    <TextField id="outlined-basic" label="Name" variant="outlined" onChange = {(event) => setName(event.target.value)}/>
                    <Button sx = {{
                        mt: '5px',
                    }}
                            variant="contained"
                            onClick = {handleSubmit}>Create</Button>
                </Box>
            </Modal>
    );
};