import React, {useState} from 'react';
import {ListItem, ListItemButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {Task} from "../types";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {MuiEditTaskDialog} from "./ui/Dialog/MuiEditTaskDialog";
import './styles/TaskList.css';

interface TaskListProps { // TODO: Cringe???
    task: Task
}

export const TaskList:React.FC<TaskListProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [newTaskName, setNewTaskName] = useState(props.task.title)
    //Very Bad edit realization
    return (
            <ListItem key = {props.task.id}>
                <Typography>{newTaskName}</Typography>
                <Tooltip title={'Edit Task'}>
                <ListItemButton
                    sx = {{ flexGrow: '0', padding: '0'}}
                    onClick={() => {setOpen(true)}}>
                    <EditIcon/>
                </ListItemButton>
                </Tooltip>
                <MuiEditTaskDialog
                    open={open}
                    onClose={() => setOpen(false)}
                    taskName={newTaskName}
                    setNewTaskName={setNewTaskName}
                />
            </ListItem>
    );
};
