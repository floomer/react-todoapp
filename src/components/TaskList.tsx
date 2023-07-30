import React, {HTMLAttributes, useState} from 'react'
import { ListItem, ListItemButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Task } from '../types'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { EditTaskDialog } from './ui/dialog/EditTaskDialog'
import './styles/TaskList.css'

interface TaskListProps extends HTMLAttributes<HTMLElement> {
    task: Task
}

export const TaskList: React.FC<TaskListProps> = ({ task, ...props }) => {
    const [open, setOpen] = useState(false)

    return (
        <ListItem key={task.id} draggable {...props}>
            <Typography>{task.title}</Typography>
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
            <EditTaskDialog
                open={open}
                onClose={() => setOpen(false)}
                task={task}
            />
        </ListItem>
    )
}
