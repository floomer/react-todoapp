import React, { useState } from 'react'
import { Typography, Box, List } from '@mui/material'
import { AddButton } from './ui/button/AddButton'
import { StateArdDialog } from './ui/dialog/StateСardDialog'
import { StateCard } from './StateCard'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { TaskList } from './TaskList'
import './styles/WorkspaceDesk.css'
import { Task } from '../types'
import {useDrag} from "../hooks/useDrag";

interface DeskProps {
    value: string
}

export const WorkspaceDesk: React.FC<DeskProps> = ({ value }) => {
    const [open, setOpen] = useState(false)
    const [currentTask, setCurrentTask] = useState<Task>()
    const cardList = useSelector((state: RootState) => state.card)
    const taskList = useSelector((state: RootState) => state.task)
    const {dragOverHandler,dragStartHandler,dropHandler,dropToEmptyCard} =
        useDrag({currentTask, setCurrentTask})


    return (

        <Box className={'workspace'}>
            <Box className={'workspace-header'}>
                <Typography className={'workspace-header__title'} variant="h6">
                    {value}
                </Typography>
                <AddButton
                    variant={'contained'}
                    buttonName={'Add State'}
                    onClick={() => {
                        setOpen(true)
                    }}
                />
            </Box>
            <StateArdDialog open={open} onClose={() => setOpen(false)} />
            <div className={'main-block'} style={{ display: 'flex' }}>
                {cardList.map((card, index) => {
                    return (
                        <Box>
                            <StateCard
                                card={card}
                                key={index}
                                onDragOver={(event) => dragOverHandler(event)}
                                onDrop={(event) => dropToEmptyCard(event, card)}
                            >
                                <List sx={{ padding: '0' }}>
                                    {taskList.map((task) =>
                                        card.name === task.state ? (
                                            <TaskList
                                                task={task}
                                                onDragStart={(event) =>
                                                    dragStartHandler(
                                                        event,
                                                        task
                                                    )
                                                }
                                                onDragOver={(event) =>
                                                    dragOverHandler(event)
                                                }
                                                onDrop={(event) =>
                                                    dropHandler(
                                                        event,
                                                        task
                                                    )
                                                }
                                            />
                                        ) : <></>
                                    )}
                                </List>
                            </StateCard>
                        </Box>
                    )
                })}
            </div>
        </Box>
    )
}
