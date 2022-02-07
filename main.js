import input from 'input';

function drive(direction) {
    switch (direction) {
        case 'left':
        console.log('turn left');
        break;
        case 'right':
        console.log('turning right');
        break;
        case 'forward':
        console.log('driving forward')
        break;
        case 'backwards':
        console.log('driving backwards')
        break;
        default:
        console.log (`unknown direction ${direction}`);

    }
}
async function main() {
    const resp = await input.text('Enter a direction');
    drive(resp);
}
main();