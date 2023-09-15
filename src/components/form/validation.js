const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
export const validate = (inputs) => {
        const errors = {}
        if(!regexEmail.test(inputs.userName)){
            errors.userName = "Debe ser un email"
        }
        if(!inputs.userName){
            errors.userName = "No puede estar vacio"
        }
        if(inputs.userName.length > 35){
            errors.userName = "No puede tener más de 35 caracteres"
        }
        if(!validLettersAndNumbers.test(inputs.password)){
            errors.password = "Debe contener al menos un número"
        }
        if(inputs.password.length < 6 || inputs.password.length > 10){
            errors.password = "Debe contener entre 6 y diez caracteres"
        }
        return errors;
    };