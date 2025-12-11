import React, { useState } from 'react';
import { Input, Paper, IconButton, FormControl, FormHelperText, InputLabel } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import { styles } from './styles';
import { inputValidations } from '../validations/inputValidations';
import { useTheme } from '../hooks/useTheme';

export const InputForm = ({ onSubmit }) => {
    const theme = useTheme();
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validation = inputValidations({ input: inputValue });

        if (!validation.valid) {
            setErrorMessage(validation.message);
        } else {
            setErrorMessage('');
            onSubmit(inputValue);
        }
    }

    return (
        <Paper component='form' onSubmit={handleSubmit} style={styles.inputForm}>
            <FormControl variant='standard' style={styles.formControl}>
                <InputLabel htmlFor='input-field'>Enter Position and Direction</InputLabel>
                <Input
                    id='input-field'
                    value={inputValue}
                    onChange={handleChange}
                    error={!!errorMessage}
                    style={styles.inputField}
                />
                {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
            </FormControl>
            <IconButton type="submit" aria-label="submit">
                <PlayCircleOutline 
                    style={{ 
                        color: theme.palette.primary.main,
                        fontSize: theme.typography.h1.fontSize,
                        fontWeight: theme.typography.fontWeightBold 
                    }} 
                />
            </IconButton>
        </Paper>
    )
}