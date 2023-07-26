import React, {Dispatch, SetStateAction} from 'react';
import {Button, Dialog, DialogTitle, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {deleteTask} from '../../../store/taskSlice'


interface TaskDialogProps {
    open: boolean,
    onClose: () => void,
    taskName: string,
    setNewTaskName: Dispatch<SetStateAction<string>>,
    taskID: number,
}
const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 405,
    p:2,
    borderRadius: '18px',
};

export const MuiEditTaskDialog:React.FC<TaskDialogProps> = (props) => {
    const dispatch = useDispatch()
    const {open, onClose, taskName, setNewTaskName, taskID} = props
    let newTaskName:string

    const handleTaskEdit = (taskName:string) => {
        setNewTaskName(taskName)
        onClose()
    }
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Edit Task</DialogTitle>
            <Box sx={style}>
                <TextField
                    id="outlined-basic"
                    label={taskName}
                    variant="outlined"
                    onChange = {(event) => newTaskName =  event.target.value}/>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button sx = {{m: 2, width: 100, alignSelf: 'center',}}
                            variant="contained"
                            onClick = {() => handleTaskEdit(newTaskName)}>Edit
                    </Button>
                    <Button sx = {{m: 2, width: 130, alignSelf: 'center',}}
                        variant="contained"
                        color="error"
                        onClick = {() => dispatch(deleteTask(taskID))}
                    >Delete Task
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};