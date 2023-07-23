import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Container from "@mui/material/Container";
import {Button} from "@mui/material";

interface ButtonProps{
    buttonName: string;
    onClick: () => void;
    variant: 'text' | 'outlined' | 'contained';
}

export const MuiButton:React.FC<ButtonProps> = (props) => {
   const {variant, buttonName, onClick} = props
    return (
                <Button
                    sx ={
                    {
                        marginTop: '10px',
                        mr: 1,
                        mb:1,
                    }
                }
                    variant={variant}
                    startIcon={<AddIcon/>}
                    onClick={props.onClick}>{buttonName}</Button>
    );
};