document.getElementById('show-attributes').addEventListener('click', function() {
    const h3Element = document.getElementById('user-attributes');

    
    console.log('Dataset:', h3Element.dataset);
    console.log('Attributes:', h3Element.attributes);

    const outputDiv = document.querySelector('.output-div');
    outputDiv.innerHTML = ''; 

    for (let i = 0; i < h3Element.attributes.length; i++) {
        const attr = h3Element.attributes[i];
        if (attr.name.startsWith('data-')) { 
            const pElement = document.createElement('p');
            pElement.textContent = `${attr.name}: ${attr.value}`;
            outputDiv.appendChild(pElement);
        }
    }
});

