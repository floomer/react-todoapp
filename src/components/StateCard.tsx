import React, { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    List,
    Typography,
    StyledEngineProvider,
    Tooltip,
    Box,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { MuiTaskDialog } from './ui/Dialog/MuiTaskDialog'
import { TaskList } from './TaskList'
import './styles/StateCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { deleteCard } from '../store/CardSlice'
import Draggable from "react-draggable";

interface StateCardProps {
    card: { id: number; name: string; color: string }
}

export const StateCard: React.FC<StateCardProps> = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const task = useSelector((state: RootState) => state.task)
    console.log('Tasks:', task)

    return (
        <StyledEngineProvider injectFirst>
            <Draggable handle='.draggable-content'>
            <Card>
                <CardContent sx={{ backgroundColor: props.card.color }} className={'draggable-content'}>
                    <Typography gutterBottom>{props.card.name}</Typography>
                    <Box>
                        <Tooltip title={'Delete Task'}>
                            <Button
                                sx={{
                                    color: 'white',
                                    margin: 0,
                                    padding: 0,
                                    width: '35px',
                                    minWidth: 0,
                                    justifyContent: 'flex-end',
                                }}
                                startIcon={<DeleteOutlinedIcon />}
                                onClick={(event) => {
                                    dispatch(deleteCard(event.target))
                                }}
                            />
                        </Tooltip>

                        <Tooltip title={'Add a task'}>
                            <Button
                                sx={{ color: 'white', minWidth: '40px' }}
                                startIcon={<AddIcon />}
                                onClick={() => {
                                    setOpen(true)
                                }}
                            ></Button>
                        </Tooltip>
                    </Box>
                </CardContent>
                <MuiTaskDialog
                    state={props.card.name}
                    open={open}
                    onClose={() => setOpen(false)}
                />
                    <List sx={{ padding: '0' }}>
                        {task.map((element, index) =>
                            element.state === props.card.name ? (
                                <TaskList task={element} key={index} card={props.card}/>
                            ) : false
                        )}
                    </List>
            </Card>
            </Draggable>
        </StyledEngineProvider>
    )
}
