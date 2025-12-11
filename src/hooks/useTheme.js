import { createTheme } from '@mui/material/styles';
import { grey, lightBlue, indigo, red } from '@mui/material/colors'

export const useTheme = () => {
    const theme = createTheme({
        palette: {
            primary: {
                light: indigo['500'],
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
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: 14,
            fontWeightBold: 700,
            color: {
                main: indigo['700'],
                selected: indigo['50'],
            },
            h1: '2rem',
        },
        spacing: 2,
        backgroundColor: {
            grey: grey['50'],
            lightBlue: lightBlue['50'],
            selected: lightBlue['500'],
        },

    });

    return theme;
}