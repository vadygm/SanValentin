window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const saludo = document.getElementById('saludo');
    const saludo1 = document.getElementById('saludo1');

    const mostrarTexto = (elemento) => {
        const texto = elemento.textContent;
        elemento.textContent = ''; 
        let index = 0;

        const mostrar = () => {
            elemento.textContent += texto[index];
            index++;
            if (index < texto.length) {
                setTimeout(mostrar, 100);
            } else {
                elemento.style.opacity = '1'; 
            }
        };

        elemento.style.transition = 'opacity 1s ease'; 
        mostrar();
    };

    mostrarTexto(saludo);
    mostrarTexto(saludo1);
};
