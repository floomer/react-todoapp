import React, { useState } from 'react'
import { Typography, Box, List } from '@mui/material'
import { MuiButton } from './ui/button/MuiButton'
import { MuiStateDialog } from './ui/Dialog/MuiStateDialog'
import { StateCard } from './StateCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { TaskList } from './TaskList'
import './styles/WorkspaceDesk.css'
import { Card, Task } from '../types'
import { editTaskState } from '../store/taskSlice'

interface DeskProps {
    value: string
}

export const WorkspaceDesk: React.FC<DeskProps> = ({ value }) => {
    const [open, setOpen] = useState(false)
    const [currentTask, setCurrentTask] = useState<Task>()
    const [currentState, setCurrentState] = useState<Card>()
    const cardList = useSelector((state: RootState) => state.card)
    const taskList = useSelector((state: RootState) => state.task)
    const dispatch = useDispatch()

    function dragStartHandler(
        event: React.DragEvent<Element>,
        task: Task,
        card: Card
    ) {
        setCurrentTask(task)
        setCurrentState(card)
    }

    function dragOverHandler(event: React.DragEvent<Element>) {
        event.preventDefault()
    }

    function dropHandler(
        event: React.DragEvent<Element>,
        task: Task,
        card: Card
    ) {
        event.preventDefault()
        if (currentTask) {
            const startIndex = taskList.indexOf(currentTask)
            const dropIndex = taskList.indexOf(task)
            const currentTaskID = taskList[startIndex].id
            const startState = taskList[startIndex].state
            const dropState = taskList[dropIndex].state

            if (startState !== dropState) {
                dispatch(
                    editTaskState({ id: currentTaskID, dropState: dropState })
                )
            }
        }
    }

    function dropToEmptyCard(event: React.DragEvent<Element>, card: Card) {
        if (currentTask) {
            const startIndex = taskList.indexOf(currentTask)
            const startState = taskList[startIndex].state
            const currentTaskID = taskList[startIndex].id

            if (startState !== card.name) {
                dispatch(
                    editTaskState({ id: currentTaskID, dropState: card.name })
                )
            }
        }
    }

    return (

        <Box className={'workspace'}>
            <Box className={'workspace-header'}>
                <Typography className={'workspace-header__title'} variant="h6">
                    {value}
                </Typography>
                <MuiButton
                    variant={'contained'}
                    buttonName={'Add State'}
                    onClick={() => {
                        setOpen(true)
                    }}
                />
            </Box>
            <MuiStateDialog open={open} onClose={() => setOpen(false)} />
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
                                                        task,
                                                        card
                                                    )
                                                }
                                                onDragOver={(event) =>
                                                    dragOverHandler(event)
                                                }
                                                onDragLeave={() => {}}
                                                onDragEnd={() => {}}
                                                onDrop={(event) =>
                                                    dropHandler(
                                                        event,
                                                        task,
                                                        card
                                                    )
                                                }
                                            />
                                        ) : (
                                            false
                                        )
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
