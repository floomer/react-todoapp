import React, {useState} from 'react';
import {Box, Button, Card, CardContent, List, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {MuiTaskDialog} from "./ui/Dialog/MuiTaskDialog";
import {TaskList} from "./TaskList";
import Tooltip from "@mui/material/Tooltip";

interface StateCardProps{
    card: {id: number, name: string};
    key: number
}

export interface Tasks{
    id: number,
    title: string,
}

export const StateCard:React.FC<StateCardProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [task, setTask] = useState<Tasks[]>([])

    const createTask = (newTask:Tasks) => {
        setTask([...task, newTask])
    }

    return (
        <Card sx = {{
            minWidth: '200px',
            minHeight: '40px',
            margin: '5px 5px',
            borderRadius: '0',
            cursor: 'grab',
        }}>
            <CardContent sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                padding: '0',
                paddingBottom: '0',
                justifyContent: 'space-between',
                backgroundColor: '#1976D2',
            }}>
                <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '600',
                  margin: '5px 15px',
                }}
                color="text.secondary"
                gutterBottom>
                {props.card.name}
                </Typography>

                <Tooltip title={'Add a task'}>
                <Button sx = {{
                    color: 'white',
                    minWidth: '40px',
                }} startIcon={<AddIcon/>}
                   onClick = {() => {setOpen(true)}}>
                </Button>
                </Tooltip>
            </CardContent>

            <MuiTaskDialog open={open} onClose={() => setOpen(false)} setTask={createTask}/>
            <List sx = {{paddingBottom: '0'}}>
                {task.map((element, index) => <TaskList task={element} key = {index}/>)}
            </List>
        </Card>
    );
};
