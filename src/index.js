import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

function createHeader() {
    const element = document.createElement('h1');
    element.innerText = 'This is a header';
    element.style.color = 'blue';

    return element
}

document.body.appendChild(createHeader());
document.body.appendChild(component());
