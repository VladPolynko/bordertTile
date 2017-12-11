import random from './random';

export default function (arrayColors) {
    const localArray = [...arrayColors];
    const result = [];

    while (localArray.length) {
        const arrayColorsLength = localArray.length;
        const randomValue = random(0, arrayColorsLength);
        const color = localArray.splice(randomValue, 1)[0];

        result.push({
            id: arrayColorsLength,
            disable: false,
            select: false,
            color,
        });
    }

    return result.reverse();
}