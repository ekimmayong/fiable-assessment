import React, { useState } from 'react';
import { InputForm } from '../components/input';
import { GridTable } from '../components/table';
import { Box } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import '../App.css';

export const Homepage = () => {
    const theme = useTheme();
    const [xPosition, setXPosition] = useState();
    const [yPosition, setYPosition] = useState();
    const [direction, setDirection] = useState();

    const handleInputSubmit = (input) => {
        const splitInput = input.split(' ');
        const coords = splitInput[0].trim().split(',');
        const dir = splitInput[1].trim();

        setXPosition(parseInt(coords[0], 10));
        setYPosition(parseInt(coords[1], 10));
        setDirection(dir);
    }

    return (
        <div className="app">
            <Box
                className='appContainer'
                style={{
                    backgroundColor: theme.backgroundColor.grey
                }}
            >
                <div className='inputContainer'>
                    <InputForm onSubmit={handleInputSubmit}/>
                </div>
                <GridTable xPosition={xPosition} yPosition={yPosition} direction={direction}/>
            </Box>
        </div>
    )
}