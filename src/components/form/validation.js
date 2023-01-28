const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(userData){
   let errors = {}

   if(!regexEmail.test(userData.username)) errors.username = 'El ususario es un email'
   else if(!userData.username) errors.username = 'debe ingresar un email'
   else if (userData.username.length > 35) errors.username = 'excede la cantidad de caracteres'
   if(!regexPassword.test(userData.password)) errors.password = 'clave incorrecta'
   else if (userData.password.length < 6 && userData.password.length > 10) errors.password = 'clave demasiado corta deben ser 6 o mas carcteres';
   

}