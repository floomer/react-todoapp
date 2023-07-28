import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    TextField,
} from '@mui/material'
import Box from '@mui/material/Box'
import { Card } from '../../../types'
import { useDispatch } from 'react-redux'
import { addCard } from '../../../store/CardSlice'
import MenuItem from '@mui/material/MenuItem'

export interface StateDialogProps {
    open: boolean
    onClose: () => void
}

const style = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 305,
    p: 2,
    borderRadius: '18px',
    alignItems: 'flex-start',
}

export const MuiStateDialog: React.FC<StateDialogProps> = (props) => {
    const { open, onClose } = props
    const [name, setName] = useState('')
    const [color, setColor] = useState('#1976D2')
    const dispatch = useDispatch()

    const addNewCard = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault()
        const newCard: Card = {
            id: Date.now(),
            name: name,
            color: color,
        }
        dispatch(addCard(newCard))
        setName('')
        setColor('#1976D2')
        onClose()
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle sx={{ backgroundColor: color, color: 'white' }}>
                {'Add state'}
            </DialogTitle>
            <Box sx={style}>
                <TextField
                    required
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <Box sx={{ mt: '10px' }}>
                    <FormControl variant={'outlined'}>
                        <InputLabel id="select-color-label">Color</InputLabel>
                        <Select
                            labelId="select-color-label"
                            id="select-color"
                            value={color}
                            label="Color"
                            onChange={(event) => {
                                setColor(event.target.value)
                            }}
                        >
                            <MenuItem value={'#1976D2'}>Default</MenuItem>
                            <MenuItem value={'#FF0000'}>Red</MenuItem>
                            <MenuItem value={'#FFA500'}>Orange</MenuItem>
                            <MenuItem value={'#008000'}>Green</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button
                    sx={{ m: 2, width: 100, alignSelf: 'center', mt: '30px' }}
                    variant="contained"
                    onClick={(event) => (name ? addNewCard(event) : false)}
                >
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}
