import React, {Dispatch, SetStateAction} from 'react';
import {Tasks} from "../../StateCard";
import {Button, Dialog, DialogTitle, TextField} from "@mui/material";
import Box from "@mui/material/Box";


interface TaskDialogProps {
    open: boolean;
    onClose: () => void;
    taskName: string;
    setNewTaskName: Dispatch<SetStateAction<string>>;
}
const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 405,
    p:2,
    borderRadius: '18px',
};

export const MuiEditTaskDialog:React.FC<TaskDialogProps> = (props) => {
    const {open, onClose, taskName, setNewTaskName} = props
    let newTaskName:string

    const handleTaskEdit = (taskName:string) => {
        setNewTaskName(taskName)
        onClose()
    }
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Enter new task name</DialogTitle>
            <Box sx={style}>
                <TextField
                    id="outlined-basic"
                    label={taskName}
                    variant="outlined"
                    onChange = {(event) => newTaskName =  event.target.value}/>
                <Button sx = {{
                    m: 2,
                    width: 100,
                    alignSelf: 'center',
                }}
                        variant="contained"
                        onClick = {(event) => handleTaskEdit(newTaskName)}>Create</Button>
            </Box>
        </Dialog>
    );
};