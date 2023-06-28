const radioCheck = document.querySelectorAll('.radio');
const radioText = document.getElementById('radio-text');
const optionLevel = document.querySelectorAll('.option-level');
const optionRed = document.getElementById('red');
const inputFirst = document.querySelector('.input-first');
const inputFirstTwo = document.querySelector('.input-firstTwo');
const grandSpan = document.querySelectorAll('.grandmaster-option');
const redFlag = document.getElementById('placeHold');
const redFlagTwo = document.getElementById('placeHoldTwo');
const greenBox = document.getElementById('box');
const done = document.getElementById('done-valid');

// Retrieve stored values from localStorage
const storedLevel = localStorage.getItem('level');
const storedCharacter = localStorage.getItem('character');
const storedParticipate = localStorage.getItem('participate');

// Restore values to the respective elements if they exist
if (storedLevel) {
  document.querySelector('.textBox').value = storedLevel;
  greenBox.classList.add('number-boxActive');
  redFlag.classList.remove('placeholder');

}

if (storedCharacter) {
  document.querySelector('.textBoxTwo').value = storedCharacter;
  greenBox.classList.add('number-boxActive');
  redFlagTwo.classList.remove('placeholder');
}

if (storedParticipate) {
    const spans = document.getElementById('spanR');
    if(storedParticipate=='yes'){
        document.getElementById('yes-input').checked=true;
    } 
    else if(storedParticipate=='no'){
        document.getElementById('no-input').checked=true;
    }
    spans.classList.add('none');
    greenBox.classList.add('number-boxActive');
}

done.addEventListener('click', ()=>{
    if(!storedLevel || !storedParticipate || !storedCharacter){
        return;
    }else{
        window.location.assign('completed.html');
    }
    fetch('')
        localStorage.clear();
        document.getElementById('yes-input').checked=false;
        document.getElementById('no-input').checked=false;
})


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
        localStorage.setItem('level', element.textContent);
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
                            localStorage.setItem('character', element.textContent);
                    });
                })           
            });
        })
        .catch(error => {
            console.error('Error:', error);
});

radioCheck.forEach((element)=>{
    const spans = document.getElementById('spanR');
    element.addEventListener('click', (event) =>  {
        spans.classList.add('none');
        greenBox.classList.add('number-boxActive');
        localStorage.setItem('participate', event.target.value);
    });   
});




