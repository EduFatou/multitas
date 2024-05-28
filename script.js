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
const regExp = /^\d{4}\-[A-Z]{3}$/;
let matriculaValid = false;
let matricula;


//eventos
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    validarFormulario();
});

//funciones
const validarFormulario = () => {
    matricula = formulario.comprobarMatricula.value;

    if (matricula !== '') {
        if (regExp.test(matricula)) {
            matriculaValid = true;
        } else matriculaValid = false;

    } else matriculaValid = false;

    if (matriculaValid) {
        alert('valido');
    } else {
        alert('novalido');
    }
};

pintarTabla = () => {

}


/*

const validarFormulario = ()=> {
    matricula = formulario.comprobarMatricula.value;

    if (matricula !== '') {
        if (regExp.test(matricula)) {
            const getMatricula = async(matricula)=> {
                const dueño = arrayCoches.find((car)=>car.matricula === matricula)?.propietario
                    if(dueño) return(dueño);
                    else throw('No se encuentra la matrícula.');
            };
            const getMultas = async(matricula)=> {
                const multa = arrayMultas.find((bill)=>bill.matricula === matricula)?.multas
                    if(multa) return(multa);
                    else throw('La matrícula no tiene ninguna multa.');
            };
            const getInfo = async(matricula)=> {
                try{
                    const conductor = await getMatricula(matricula);
                    const multa = await getMultas(matricula);
                    return `${conductor} tiene ${multa}.`;

                }catch(error){
                    throw error
                }
            };
            getInfo(matricula)
            .then((respuesta)=>{console.log(respuesta)})
            .catch((error)=>{console.log(error)})
        };
    };    
};

====================================================

const getMatricula = async(matricula)=> {
    const dueño = arrayCoches.find((car)=>car.matricula === matricula)?.propietario
        if(dueño) return(dueño);
        else throw('No se encuentra la matrícula.');
};
const getMultas = async(matricula)=> {
    const multa = arrayMultas.find((bill)=>bill.matricula === matricula)?.multas
        if(multa) return(multa);
        else throw('La matrícula no tiene ninguna multa.');
};


const getInfo = async(matricula)=> {
    try{
        const conductor = await getMatricula(matricula);
        const multa = await getMultas(matricula);
        return `${conductor} tiene ${multa}.`;

    }catch(error){
        throw error
    }
};

getInfo(matricula)
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.log(error)})
*/
