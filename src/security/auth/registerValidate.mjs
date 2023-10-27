export const registerValidate = ({
    values,
}) => {

    let errors = {}
    values.id.toString().replace(/[^0-9]*$/, '')

    if(values.id.length === 0) {
        errors.id = 'Debes introducir la cédula'
    }

    if(values.password.length === 0) {
        errors.password = 'Debes introducir la contraseña'
    }
    if(values.lastName.length === 0) {
        errors.lastName = 'Debes introducir el apellido'
    }
    if(values.name.length === 0) {
        errors.name = 'Debes introducir el nombre'
    }
    if(values.email.length === 0) {
        errors.email = 'Debes introducir el correo'
    }
    if(values.phone.length === 0) {
        errors.phone = 'Debes introducir el telefono'
    }

    console.log(errors)
    return errors

}