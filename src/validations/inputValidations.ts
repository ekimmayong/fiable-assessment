export const inputValidations = ({input}: { input: string }) => {
    if (typeof input !== 'string') {
        return { valid: false, message: 'Input must be a string.' };
    }

    if (RegExp(/^\d+,\d+\s+[a-zA-Z]+$/).test(input) === false) {
        return { valid: false, message: 'Incorrect input format' };
    }

    const splitInput = input.split(' ');
    const inputDirection = splitInput[1]?.trim();
    const direction = splitInput[0].trim();
    
    if (RegExp(/^[0-4],[0-4]$/).test(direction) === false) {
        return { valid: false, message: 'Coordinates must be between 0 and 4.' };
    }

    if (RegExp(/^(NORTH|SOUTH|EAST|WEST)$/).test(inputDirection) === false) {
        return { valid: false, message: 'Direction must be NORTH, SOUTH, EAST, or WEST.' };
    }
    
    return { valid: true, message: 'Valid input' };
}