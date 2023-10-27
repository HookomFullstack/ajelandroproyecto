import _ from 'lodash'
import { faker } from '@faker-js/faker'


const typeContract = ['Demandado', 'Denunciante']
const statusContract = ['Activo', 'Finalizado']

export const seed = (seed) => {

    const user = []

    const hola = () => [...Array(Number(seed))].map( async() => {
    
        const cases = {
            id: faker.database.mongodbObjectId(),
            typeContract: typeContract[_.random(0, 1)],
            detailsContract: faker.lorem.paragraph(),
            status: statusContract[_.random(0, 1)],
            mount: faker.finance.amount(),
            date: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }) ,
            permissionMissings: faker.lorem.paragraph()
        }


        const client = {
            phone: faker.phone.number(), 
            name: faker.person.firstName(),
            mountPay: faker.finance.amount() , 
            lastName: faker.person.lastName(),
            id: _.random(1000000, 99999999), 
            employment: faker.person.jobArea(), 
            email: faker.internet.email(),
            dateRegister: faker.date.recent(),
            cases
        }


        user.push(client)
    })
    hola()
    return user
}