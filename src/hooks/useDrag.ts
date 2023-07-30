import {Card, Task} from "../types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import React from "react";
import {editTaskState} from "../store/taskSlice";

export interface UseDragProps{
    currentTask: Task | undefined;
    setCurrentTask: (task: Task) => void
}

export const useDrag = ({currentTask, setCurrentTask}: UseDragProps ) => {
    const taskList = useSelector((state: RootState) => state.task);
    const dispatch = useDispatch()

    function dragStartHandler(
        event: React.DragEvent,
        task: Task
    ) {
        setCurrentTask(task)
    }

    function dragOverHandler(event: React.DragEvent) {
        event.preventDefault()
    }

    function dropHandler(
        event: React.DragEvent,
        task: Task
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
    return {dragOverHandler, dragStartHandler, dropHandler, dropToEmptyCard}
}