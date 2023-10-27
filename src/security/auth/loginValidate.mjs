export const loginValidate = ({
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
    console.log(errors)
    return errors

}