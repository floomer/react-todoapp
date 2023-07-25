import React, {useState} from 'react';
import {Button, Card, CardContent, List, Typography, StyledEngineProvider, Tooltip} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {MuiTaskDialog} from "./ui/Dialog/MuiTaskDialog";
import {TaskList} from "./TaskList";
import './styles/StateCard.css'
import {useSelector} from "react-redux";
import { RootState } from '../store';

interface StateCardProps{
    card: {id: number, name: string};
    key: number
}
export const StateCard:React.FC<StateCardProps> = (props) => {
    const [open, setOpen] = useState(false)
    const task = useSelector((state:RootState) => state.task) // ?? Why state.task
    console.log(task)

    return (
        <StyledEngineProvider injectFirst>
        <Card>
            <CardContent>
                <Typography gutterBottom>{props.card.name}</Typography>
                <Tooltip title={'Add a task'}>
                <Button
                    sx = {{color: 'white', minWidth: '40px',}}
                    startIcon={<AddIcon/>}
                    onClick = {() => {setOpen(true)}}>
                </Button>
                </Tooltip>
            </CardContent>
            <MuiTaskDialog open={open} onClose={() => setOpen(false)}/>
            <List sx = {{paddingBottom: '0'}}>
                {task.map((element, index) => <TaskList task={element} key = {index}/>)}
            </List>
        </Card>
        </StyledEngineProvider>
    );
};
