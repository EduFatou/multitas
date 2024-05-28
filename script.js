//variables
const arrayCoches = [
    {
        matricula: '1234-XRN',
        modelo: 'modelo1',
        propietario: 'Héctor'
    },
    {
        matricula: '5678-AAA',
        modelo: 'modelo2',
        propietario: 'Miguel'
    },
    {
        matricula: '1234-BBB',
        modelo: 'modelo3',
        propietario: 'Edu'
    }
];

const arrayMultas = [
    {
        matricula: '1234-XRN',
        multas: ['multa1', 'multa2', 'multa3', 'multa4', 'multa5']
    },
    {
        matricula: '1234-BBB',
        multas: ['multa1']
    },
];

const tablaContenido = document.querySelector('.tablaContenido');
const divErrores = document.querySelector('.erroresContainer');
const formulario = document.getElementById('matriculasForm');
const fragment = document.createDocumentFragment();
const regExp = /^\d{4}\-[A-Z]{3}$/;

//eventos
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    getInfo();
    formulario.reset();
    limpiarComponente(tablaContenido);
    limpiarComponente(divErrores);
});

//funciones
const getMatricula = async (matricula) => {
    if (regExp.test(matricula)) {
        const coche = arrayCoches.find((car) => car.matricula === matricula);
        if (coche) return coche;
        else throw 'No se encuentra la matrícula.';
    } else throw 'Matrícula no válida.';
};

const getMultas = async (matricula) => {
    const multa = arrayMultas.find((bill) => bill.matricula === matricula)?.multas;
    if (multa) return multa;
    else throw 'La matrícula no tiene ninguna multa.';
};

const getInfo = async () => {
    const matricula = formulario.comprobarMatricula.value;
    try {
        const coche = await getMatricula(matricula);
        const multa = await getMultas(matricula);

        pintarTabla(coche, multa);

    } catch (error) {
        pintarErrores(error);
    }
};

const pintarTabla = (coche, multa) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${coche.matricula}</td>
    <td>${coche.modelo}</td>
    <td>${coche.propietario}</td>
    <td>${multa.length}</td>`;

    // const data1 = document.createElement('td');
    // const data2 = document.createElement('td');
    // const data3 = document.createElement('td');
    // const data4 = document.createElement('td');
    // data1.textContent = `${conductor.matricula}`;
    // data2.textContent = `${conductor.modelo}`;
    // data3.textContent = `${conductor.propietario}`;
    // data4.textContent = `${multa.length}`;

    // fila.append(data1, data2, data3, data4);
    // fragment.append(fila);
    // tablaContenido.append(fragment);

    fragment.append(fila);
    tablaContenido.append(fragment);
}

const pintarErrores = (error) => {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;

    fragment.append(mensajeError);
    divErrores.append(fragment);
}

const limpiarComponente = (componente) => {
    componente.innerHTML = '';
}