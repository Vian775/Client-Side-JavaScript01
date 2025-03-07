//Viyan rony
//2000586309
// lab 3
    // Getting references 
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const body = document.body;

    // updating the background color 
    function updateBackgroundColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        
        // Setting the background 
        body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    // Adding event
    redSlider.addEventListener('input', updateBackgroundColor);
    greenSlider.addEventListener('input', updateBackgroundColor);
    blueSlider.addEventListener('input', updateBackgroundColor);
    
    updateBackgroundColor();
    