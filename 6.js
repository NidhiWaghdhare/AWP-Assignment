function handleMouseOver()
{
    var classElement = document.querySelector('.beautify');

    classElement.style.background = 'green';
    classElement.style.color = 'white';

    classElement.innerHTML = "HARDWORK";
}

function handleMouseOut()
{
    var classElement = document.querySelector('.beautify');

    classElement.style.background = 'red';
    classElement.style.color = 'black';

    classElement.innerHTML = "SMARTWORK";
}