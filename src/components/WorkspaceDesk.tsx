import React, {useState} from 'react';
import {Typography, Box} from '@mui/material';
import {MuiButton} from "./ui/button/MuiButton";
import {MuiStateDialog} from "./ui/Dialog/MuiStateDialog";
import {StateCard} from "./StateCard";
import {useSelector} from "react-redux";
import {RootState} from "../store";
// import Draggable from 'react-draggable';

interface DeskProps{
    value: string;
}

export const WorkspaceDesk:React.FC<DeskProps> = ({value}) => {
    const [open, setOpen] = useState(false)
    const card = useSelector((state:RootState) => state.card)
    console.log(card)

    return (
        <Box sx ={{ //TODO: Find a way to move in .css
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            backgroundColor: '#425C6C',
            width: '98%',
            height: '730px', // TODO: fix fixed size
            margin: '30px 20px',
            borderRadius: '20px',

        }}>
            <Box sx={{
                width: '100%',
                margin: 0,
                padding:0,
                paddingRight: '20px',
                display:'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                borderBottom: '1px solid teal',

            }}>
            <Typography variant="h6" sx={{
                ml: 2,
                mt: 1,
                width: '380px',
                color: 'white',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
            }}> {value}
            </Typography>
                <MuiButton variant= {'contained'} buttonName={'Add State'} onClick={() => {setOpen(true)}}/>
            </Box>
            <MuiStateDialog open={open} onClose={() => setOpen(false)}/>

                {card.map((newCard,index) =>
                    // <Draggable>
                    <Box>
                        <StateCard card={newCard} key={index}/>
                    </Box>
                     // </Draggable>
                )}
        </Box>
    );
};
