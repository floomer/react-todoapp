import React, {HTMLAttributes, useState} from 'react'
import {
    Button,
    Card as MuiCard,
    CardContent,
    Typography,
    StyledEngineProvider,
    Tooltip,
    Box,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { TaskDialog } from './ui/dialog/TaskDialog'
import './styles/StateCard.css'
import { useDispatch } from 'react-redux'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { deleteCard } from '../store/cardSlice'
import {Card} from "../types";

interface StateCardProps extends HTMLAttributes<HTMLElement>{
    card: Card
    children: React.ReactNode
}

export const StateCard: React.FC<StateCardProps> = ({ card, ...props }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    return (
        <StyledEngineProvider injectFirst>
            <MuiCard draggable {...props}>
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
                                    dispatch(deleteCard(card.id))
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
                <TaskDialog
                    state={card.name}
                    open={open}
                    onClose={() => setOpen(false)}
                />
                {props.children}
            </MuiCard>
        </StyledEngineProvider>
    )
}
