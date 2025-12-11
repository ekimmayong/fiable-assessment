export const inputValidations = ({input}) => {
    if (typeof input !== 'string') {
        return { valid: false, message: 'Input must be a string.' };
    }

    if (RegExp(/^\d+,\d+\s+[a-zA-Z]+$/).test(input) === false) {
        return { valid: false, message: 'Incorrect format' };
    }

    const splitInput = input.split(' ');
    const inputDirection = splitInput[1]?.trim();
    const direction = splitInput[0].trim();
    
    if (RegExp(/^[0-4],[0-4]$/).test(direction) === false) {
        return { valid: false, message: 'invalid coordinates' };
    }

    if (RegExp(/^(NORTH|SOUTH|EAST|WEST)$/).test(inputDirection) === false) {
        return { valid: false, message: 'Invalid direction' };
    }
    
    return { valid: true, message: 'Valid input' };
}