import React, { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    Typography,
    StyledEngineProvider,
    Tooltip,
    Box,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { MuiTaskDialog } from './ui/Dialog/MuiTaskDialog'
import './styles/StateCard.css'
import { useDispatch } from 'react-redux'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { deleteCard } from '../store/CardSlice'

interface StateCardProps {
    card: { id: number; name: string; color: string }
    children: any
    onDragOver: (event: React.DragEvent) => void
    onDrop: (event: React.DragEvent) => void
}

export const StateCard: React.FC<StateCardProps> = ({ card, ...props }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    return (
        <StyledEngineProvider injectFirst>
            <Card draggable={'true'} {...props}>
                <CardContent sx={{ backgroundColor: card.color }}>
                    <Typography gutterBottom>{card.name}</Typography>
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
                    state={card.name}
                    open={open}
                    onClose={() => setOpen(false)}
                />
                {props.children}
            </Card>
        </StyledEngineProvider>
    )
}
