function changeMode(size, weight, transform, background, color){
    return function(){
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    }
}

function main(){
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    const spookyButton = createButton('Spooky', spooky);
    const darkModeButton = createButton('Dark Mode', darkMode);
    const screamModeButton = createButton('Scream mode', screamMode);

    document.body.appendChild(spookyButton);
    document.body.appendChild(darkModeButton);
    document.body.appendChild(screamModeButton);
}

function createButton(text, onClickFunction){
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClickFunction);
    return button;
}

main()