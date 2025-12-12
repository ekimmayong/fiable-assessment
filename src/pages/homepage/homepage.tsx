import { useState } from 'react';
import { InputForm } from '../../components/input/input';
import { GridTable } from '../../components/table/table';
import { Box } from '@mui/material';
import { useTheme } from '../../hooks/useTheme';
import { styles } from './homepage.styles';

export const Homepage = () => {
    const theme = useTheme();
    const [xPosition, setXPosition] = useState<number>();
    const [yPosition, setYPosition] = useState<number>();
    const [direction, setDirection] = useState<string>();

    const handleInputSubmit = (input: string) => {
        const splitInput = input.split(' ');
        const coords = splitInput[0].trim().split(',');
        const dir = splitInput[1].trim();

        setXPosition(parseInt(coords[0]));
        setYPosition(parseInt(coords[1]));
        setDirection(dir);
    }

    return (
        <div className="app" style={styles.app}>
            <Box style={styles.header}>
                <h2 style={{ color: theme.palette.text.primary }}>
                    Visualize Coordinate Placement and Direction
                </h2>
                <p style={{ color: theme.palette.text.secondary }}>
                    Enter the X and Y coordinates (0-4) followed by the direction (NORTH, SOUTH, EAST, WEST) separated by a space. For example: "2,3 NORTH"
                </p>
            </Box>
            <Box
                style={{
                    ...styles.appContainer,
                    backgroundColor: theme.palette.background.default
                }}
            >
                <div>
                    <InputForm onSubmit={handleInputSubmit}/>
                </div>
                <GridTable xPosition={xPosition} yPosition={yPosition} direction={direction}/>
            </Box>
        </div>
    )
}