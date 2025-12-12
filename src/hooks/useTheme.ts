import { createTheme } from '@mui/material/styles';
import { grey, indigo, red } from '@mui/material/colors'

export const useTheme = () => {
    const theme = createTheme({
        palette: {
            primary: {
                light: indigo['50'],
                main: indigo['700'],
                dark: indigo['900'],
                contrastText: '#fff',
            },
            secondary: {
                light: red['200'],
                main: red['500'],
                dark: red['900'],
                contrastText: '#000',
            },
            action: {
                selected: indigo['100'],
            },
            background: {
                default: grey['50'],
                paper: '#fff',
        },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 14,
            fontWeightBold: 700,
            h1: {
                fontSize: '2rem',
            },
        },
        spacing: 2,

    });

    return theme;
}