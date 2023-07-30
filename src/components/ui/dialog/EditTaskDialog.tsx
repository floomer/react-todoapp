import React, {useState } from 'react'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../../../store/taskSlice'
import { Task } from '../../../types'

interface TaskDialogProps {
    open: boolean
    onClose: () => void
    task: Task
}
const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 405,
    p: 2,
    borderRadius: '18px',
}

export const EditTaskDialog: React.FC<TaskDialogProps> = (props) => {
    const dispatch = useDispatch()
    const { open, onClose, task } = props
    const [newTaskName, setNewTaskName] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const taskEditHandle = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault()
        const newTask = {
            id: task.id,
            state: task.state,
            title: newTaskName,
            description: newDescription,
        }
        dispatch(editTask(newTask))
        onClose()
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Edit Task</DialogTitle>
            <Box sx={style}>
                <TextField
                    id="outlined-basic"
                    label={task.title}
                    variant="outlined"
                    onChange={(event) => setNewTaskName(event.target.value)}
                />
                <TextField
                    sx={{ mt: '10px' }}
                    id="task-description"
                    label={task.description ? task.description : 'Description'}
                    multiline
                    maxRows={5}
                    variant="outlined"
                    onChange={(event) => {
                        setNewDescription(event.target.value)
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        sx={{ m: 2, width: 100, alignSelf: 'center' }}
                        variant="contained"
                        onClick={(event) => taskEditHandle(event)}
                    >
                        Edit
                    </Button>
                    <Button
                        sx={{ m: 2, width: 130, alignSelf: 'center' }}
                        variant="contained"
                        color="error"
                        onClick={() => dispatch(deleteTask(task.id))}
                    >
                        Delete Task
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}
