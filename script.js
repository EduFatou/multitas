//variables
const arrayCoches = [
    {
        matricula: '1234-XRN',
        modelo: 'modelo1',
        propietario: 'Hector'
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
let matriculaValid = false;
let matricula;


//eventos
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    getInfo();
});

//funciones
const getMatricula = async(matricula)=> {
    if(regExp.test(matricula)){
        const dueño = arrayCoches.find((car)=>car.matricula === matricula)?.propietario
        if(dueño) return dueño;
        else {
        throw 'No se encuentra la matrícula.';
        }
    } else {
        throw 'matrícula no válida.';  
    }
};

const getMultas = async(matricula)=> {
    const multa = arrayMultas.find((bill)=>bill.matricula === matricula)?.multas
        if(multa) return multa;
        else throw 'La matrícula no tiene ninguna multa.';
};

const getInfo = async(matricula)=> {
    matricula = formulario.comprobarMatricula.value;
    try{
        const conductor = await getMatricula(matricula);
        const multa = await getMultas(matricula);

        pintarTabla(conductor, multa);

    }catch(error){
        divErrores.textContent = error;
    }
};

getInfo(matricula)
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.log(error)})

const pintarTabla = (conductor, multa)=> {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${conductor.matricula}</td> <td>${conductor.modelo}</td> <td>${conductor.propietario}</td> <td>${multa.length}</td>`;
    fragment.append(fila);
    tablaContenido.append(fragment);
}