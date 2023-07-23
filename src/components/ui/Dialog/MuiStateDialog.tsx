import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, Dialog, DialogTitle, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Card} from "../WorkspaceDesk";

export interface StateDialogProps {
    open: boolean;
    onClose: () => void;
    setCard: ({}:Card) => void;
}

const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 405,
    p:2,
    borderRadius: '18px',
};

export const MuiStateDialog:React.FC<StateDialogProps> = (props) => {
    const {open, onClose, setCard} = props
    const [name, setName] = useState('')

    const addNewCard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const newCard:Card = {
            id: Date.now(),
            name: name,
        }
        setCard(newCard)
        onClose()
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Set name of State</DialogTitle>
            <Box sx={style}>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange = {(event) => {
                    setName(event.target.value)
                }}/>
                <Button sx = {{
                    m: 2,
                    width: 100,
                    alignSelf: 'center',
                }}
                    variant="contained"
                    onClick = {(event) => addNewCard(event)}>Create</Button>
            </Box>
        </Dialog>
    );
};