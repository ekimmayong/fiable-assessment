import React from 'react';
import { Table, TableCell, TableContainer, TableBody, TableRow } from '@mui/material';
import { North, South, East, West} from '@mui/icons-material';
import { styles } from './styles';
import { directions } from '../common/directions';
import { useTheme } from '../hooks/useTheme';

const TABLE_ROWS = 5;
const TABLE_COLUMNS = 5;

export const GridTable = ({xPosition, yPosition, direction}) => {
    const theme = useTheme();

    const getDirection = () => {
        const style = { 
            color: theme.typography.color.selected,
            fontSize: theme.typography.h1,
            fontWeight: theme.typography.fontWeightBold
        };

        switch (direction) {
            case directions.NORTH:
                return <North style={style}/>;
            case directions.SOUTH:
                return <South style={style}/>;
            case directions.EAST:
                return <East style={style}/>;
            case directions.WEST:
                return <West style={style}/>;
            default:
                return null;
        }
    }

    return (
        <TableContainer component='paper'>
            <Table>
                <TableBody>
                    {Array.from({ length: TABLE_ROWS }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Array.from({ length: TABLE_COLUMNS }).map((_, colIndex) => (
                                <TableCell
                                    id={`R${TABLE_ROWS - rowIndex -1}C${colIndex}`}
                                    key={colIndex}
                                    style={{
                                        ...styles.tableCell,
                                        backgroundColor: (
                                            xPosition === colIndex && yPosition === (TABLE_ROWS - rowIndex -1))
                                            ? theme.backgroundColor.selected 
                                            : theme.backgroundColor.lightBlue
                                    }}
                                >
                                    {
                                        (xPosition === colIndex && yPosition === (TABLE_ROWS - rowIndex -1)) ? getDirection() : null
                                    }
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}