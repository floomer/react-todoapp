import React, {useState} from 'react';
import {ListItem, ListItemButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {Tasks} from "./StateCard";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {MuiEditTaskDialog} from "./ui/Dialog/MuiEditTaskDialog";

interface TaskListProps { // TODO: Cringe???
    task: Tasks
}


export const TaskList:React.FC<TaskListProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [newTaskName, setNewTaskName] = useState(props.task.title)
    //Very Bad edit realization
    return (
            <ListItem
                key = {props.task.id}
                sx={{
                borderBottom: '2px solid #1976D2',
                padding: '5px 5px',
                justifyContent: 'space-between',
            }}>
                <Typography sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 400,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                {newTaskName}</Typography>
                <Tooltip title={'Edit Task'}>
                <ListItemButton
                    sx = {{ flexGrow: '0', padding: '0'}}
                    onClick={() => {
                        setOpen(true)
                    }}>
                    <EditIcon/>
                </ListItemButton>
                </Tooltip>
                <MuiEditTaskDialog open={open} onClose={() => setOpen(false)} taskName={newTaskName} setNewTaskName={setNewTaskName}/>
            </ListItem>
    );
};
