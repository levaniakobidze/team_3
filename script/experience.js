const radioCheck = document.getElementsByClassName('radio')[0, 1];
const radioText = document.getElementById('radio-text');
const optionLevel = document.querySelectorAll('.option-level');
const optionRed = document.getElementById('red');
const inputFirst = document.querySelector('.input-first');
const inputFirstTwo = document.querySelector('.input-firstTwo');
const grandSpan = document.querySelectorAll('.grandmaster-option');
const redFlag = document.getElementById('placeHold');
const redFlagTwo = document.getElementById('placeHoldTwo');
const greenBox = document.getElementById('box');

inputFirst.addEventListener('click', () => {
    inputFirst.classList.toggle('active');
    redFlag.classList.remove('placeholder');
});

inputFirstTwo.addEventListener('click',() =>{
    inputFirstTwo.classList.toggle('active');
    redFlagTwo.classList.remove('placeholder');
} )

optionLevel.forEach((element) => {
    element.addEventListener('click', (event) => {
        document.querySelector('.textBox').value = event.target.innerText;
        greenBox.classList.add('number-boxActive');

    });
});


//select character
fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
        .then(response => response.json())
        .then(grandmasters => {
            const select = document.getElementById('grandmastersSelect');



            grandmasters.forEach(grandmaster => {
                const name = grandmaster.name;
                const id = grandmaster.id;
                const imageUrl = grandmaster.image;

                const div = document.createElement('div');
                div.classList.add('option-levelTwo');
                const span = document.createElement('span');
                const image = document.createElement('img');
             
    
                image.src = imageUrl;
                image.alt = name;
                image.classList.add('grandmaster-image');
                span.classList.add('grandmaster-option');


                // Create a text node for the grandmaster name
                const textNode = document.createTextNode(name);

                span.appendChild(textNode);
                span.appendChild(image);
                div.id = id;
                div.appendChild(span);
                select.append(div);

                const optionLevelTwo = document.querySelectorAll('.option-levelTwo');

                optionLevelTwo.forEach((element) => {
                        element.addEventListener('click', () => {
                        document.querySelector('.textBoxTwo').value = element.childNodes[0].innerText;
                        greenBox.classList.add('number-boxActive');
                    });
                })
                
              
            });
      
        })
        .catch(error => {
            console.error('Error:', error);
});


//radio check 
const spans = document.createElement('span');
spans.textContent= '*';
spans.classList.add('spanRed');

radioText.appendChild(spans);
radioCheck.addEventListener('click', () =>  {
    radioText.removeChild(spans);
    greenBox.classList.add('number-boxActive');
});



