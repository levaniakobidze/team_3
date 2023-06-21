const radioCheck = document.getElementsByClassName('radio')[0, 1];
const radioText = document.getElementById('radio-text');
const optionLevel = document.querySelectorAll('.option-level');
const optionRed = document.getElementById('red');

// const spans = document.createElement('span');
// spans.textContent = '*';
// spans.classList.add('spanRed');

// function toggleSpan() {
//   if (!radioCheck.checked && !radioText.contains(spans)) {
//     radioText.appendChild(spans);
//   } else if (radioCheck.checked && radioText.contains(spans)) {
//     radioText.removeChild(spans);
//   }
// }

// radioCheck.addEventListener('change', toggleSpan);


// optionLevel.addEventListener('click', () => {
//   if (!optionRed.contains(spans)) {
//     optionRed.appendChild(spans);
//   } else {
//     optionRed.removeChild(spans);
//   }
// });

//select character
fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
        .then(response => response.json())
        .then(grandmasters => {
            const select = document.getElementById('grandmastersSelect');

            grandmasters.forEach(grandmaster => {
                const name = grandmaster.name;
                const id = grandmaster.id;
                const imageUrl = grandmaster.image;

                const option = new Option(name, id);
                const span = document.createElement('span');
                const image = document.createElement('img');
             
    
                image.src = imageUrl;
                image.alt = name;
                image.classList.add('grandmaster-image');
                span.classList.add('grandmaster-option');


                // Create a text node for the grandmaster name
                const textNode = document.createTextNode(name);

                span.appendChild(image);
                span.appendChild(textNode);
                option.appendChild(span);
                select.append(option);
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
});

// if(!radioCheck.checked){
//     radioText.appendChild(spans);
// } else{
//     radioText.removeChild(spans);
// }

optionRed.classList.add('redFlag');

optionLevel.forEach(option => {
    option.addEventListener('click', () => {
        optionRed.classList.remove('redFlag');
    });
  });

// optionRed.appendChild(spans);
// optionLevel.addEventListener('click', () => {
//     optionRed.removeChild(spans);
// });

