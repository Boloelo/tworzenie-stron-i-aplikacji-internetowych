const formik = document.getElementById('formik');
for (let i = 1; i <= 100; i++) {
    const input = document.createElement('input');
    input.id = `input${i}`;
    input.name = `input${i}`;
    input.style.margin = '10px';
    input.style.boxShadow = '5px 5px 5px lightblue';
    input.placeholder = `Element numer ${i}`;
    formik.appendChild(input);
    if (i % 5 === 0) {
        const br = document.createElement('br');
        formik.appendChild(br);
    }
}
