import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../store/taskSlice'

interface TaskDialogProps {
    open: boolean
    onClose: () => void
    state: string
}

const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 405,
    p: 2,
    borderRadius: '18px',
}

export const TaskDialog: React.FC<TaskDialogProps> = (props) => {
    const dispatch = useDispatch()
    const { open, onClose } = props
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const addTaskHandler = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const newTask = {
            id: Date.now(),
            state: props.state,
            title: taskName,
            description: description,
        }
        dispatch(addTask(newTask))
        onClose()
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle sx={{ backgroundColor: '#1976D2', color: 'white' }}>
                Add Task
            </DialogTitle>
            <Box sx={style}>
                <TextField
                    id="task-name"
                    label="Name of task"
                    variant="outlined"
                    onChange={(event) => {
                        setTaskName(event.target.value)
                    }}
                />
                <TextField
                    sx={{ mt: '10px' }}
                    id="task-description"
                    label="Description"
                    multiline
                    maxRows={5}
                    variant="outlined"
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                <Button
                    sx={{ m: 2, width: 100, alignSelf: 'center' }}
                    variant="contained"
                    onClick={(event) => addTaskHandler(event)}
                >
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}
