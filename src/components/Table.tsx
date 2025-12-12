import { Table, TableCell, TableContainer, TableBody, TableRow } from '@mui/material';
import { North, South, East, West} from '@mui/icons-material';
import { styles } from './styles.ts';
import { directions } from '../common/directions.ts';
import { useTheme } from '../hooks/useTheme.ts';

const TABLE_ROWS = 5;
const TABLE_COLUMNS = 5;

interface GridTableProps {
    xPosition: number | undefined;
    yPosition: number | undefined;
    direction: string | undefined;
}

export const GridTable = ({xPosition, yPosition, direction}: GridTableProps) => {
    const theme = useTheme();

    const getDirection = () => {
        switch (direction) {
            case directions.NORTH:
                return <North color='action' />;
            case directions.SOUTH:
                return <South color='action' />;
            case directions.EAST:
                return <East color='action' />;
            case directions.WEST:
                return <West color='action' />;
            default:
                return null;
        }
    }

    return (
        <TableContainer component='div' style={{...styles.tableContainer, backgroundColor: theme.palette.primary.light}}>
            <Table>
                <TableBody>
                    {Array.from({ length: TABLE_ROWS }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Array.from({ length: TABLE_COLUMNS }).map((_, colIndex) => (
                                <TableCell
                                    key={colIndex}
                                    style={{
                                        ...styles.tableCell,
                                        backgroundColor: (
                                            xPosition === colIndex && yPosition === (TABLE_ROWS - rowIndex -1))
                                            ? theme.palette.action.selected
                                            : undefined
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