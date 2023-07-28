import React, { useState } from 'react'
import { ListItem, ListItemBaseProps, ListItemButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Task } from '../types'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { MuiEditTaskDialog } from './ui/Dialog/MuiEditTaskDialog'
import './styles/TaskList.css'

interface TaskListProps extends ListItemBaseProps {
    task: Task
    onDragStart: (event: React.DragEvent) => void
    onDragOver: (event: React.DragEvent) => void
    onDragLeave: (event: React.DragEvent) => void
    onDragEnd: (event: React.DragEvent) => void
    onDrop: (event: React.DragEvent) => void
}

export const TaskList: React.FC<TaskListProps> = ({ task, ...props }) => {
    const [open, setOpen] = useState(false)

    return (
        <ListItem key={task.id} draggable="true" {...props}>
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
            <MuiEditTaskDialog
                open={open}
                onClose={() => setOpen(false)}
                task={task}
            />
        </ListItem>
    )
}
