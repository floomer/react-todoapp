import React, {useState} from 'react';
import {Button, Dialog, DialogTitle, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Tasks} from "../../StateCard";

interface TaskDialogProps {
    open: boolean;
    onClose: () => void;
    setTask: ({}:Tasks) => void;
}
const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 405,
    p:2,
    borderRadius: '18px',
};

export const MuiTaskDialog:React.FC<TaskDialogProps> = (props) => {
    const {open, onClose, setTask} = props
    const [taskName, setTaskName] = useState('')

    const addNewTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newTask = {
            id: Date.now(),
            title: taskName
        }
            setTask(newTask)
            onClose()
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Set name of Task</DialogTitle>
            <Box sx={style}>
                <TextField
                    id="outlined-basic"
                    label="Name of task"
                    variant="outlined"
                    onChange = {(event) => {setTaskName(event.target.value)}}/>
                <Button sx = {{
                    m: 2,
                    width: 100,
                    alignSelf: 'center',
                }}
                variant="contained"
                onClick = {(event) => addNewTask(event)}>Create</Button>
            </Box>
        </Dialog>
    );
};