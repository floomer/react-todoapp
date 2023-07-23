import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    marginTop: '10px',
}));

export default function AffairsGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={2} sx={
                    {
                        backgroundColor: 'black',
                        color: 'white',
                        marginTop: '10px',
                        borderRadius: '10px',
                        marginLeft: '10px'
                    }
                }>
                    <Typography sx={{backgroundColor: 'red'}}>To Do..</Typography>
                    <Item> Trello copy</Item>
                    <Item> Trello copy</Item>
                    <Item> Trello copy</Item>
                    <Item> Trello copy</Item>
                    <Item> Trello copy</Item>
                </Grid>
                {/*<Grid xs={4}>*/}
                {/*    <Item sx={{backgroundColor: 'orange'}}>In Progress</Item>*/}
                {/*</Grid>*/}
                {/*<Grid xs={4}>*/}
                {/*    <Item sx={{backgroundColor: 'green'}}>Done</Item>*/}
                {/*</Grid>*/}
            </Grid>
        </Box>
    );
}