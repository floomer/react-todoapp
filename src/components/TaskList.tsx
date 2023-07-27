import React, {SetStateAction, useState} from 'react'
import { ListItem, ListItemButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import {Card, Task} from '../types'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { MuiEditTaskDialog } from './ui/Dialog/MuiEditTaskDialog'
import './styles/TaskList.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {deleteTask} from "../store/taskSlice";

interface TaskListProps {
    task: Task
    card: Card
}

export const TaskList: React.FC<TaskListProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [currentState, setCurrentState] = useState<Card>()
    const [currentTask, setCurrentTask] = useState<Task>()
    const dispatch = useDispatch()
    const taskList = useSelector((state: RootState) => state.task)
    const cardList = useSelector((state: RootState) => state.card)


    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()

    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    }
    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card:Card, task: Task) {
        setCurrentTask(task)
        setCurrentState(card)
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, card:Card ,task: Task) {
        e.preventDefault()
        if (currentTask) {
            const currentStartIndex = taskList.indexOf(currentTask)
            console.log('StartIndex', currentStartIndex)
        }
        const currentDropIndex = taskList.indexOf(task)
    }

    return (
        <div
            draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, props.card,props.task)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop = {(e) => dropHandler(e, props.card,props.task)}
        >
        <ListItem key={props.task.id}>
            <Typography>{props.task.title}</Typography>
            <Tooltip title={'Edit Task'}>
                <ListItemButton
                    sx={{ flexGrow: '0', padding: '0' }}
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    <EditIcon color="primary" />
                </ListItemButton>
            </Tooltip>
            <MuiEditTaskDialog
                open={open}
                onClose={() => setOpen(false)}
                task={props.task}
            />
        </ListItem>
        </div>
    )
}
