import { denormalize, normalize, schema } from "normalizr"
//import { empresa } from "../../../config/empresa.js"
import { holding } from "../../../config/holding.js"
import util from 'util'

const employeeSchema = new schema.Entity('employee')

const companySchema = new schema.Entity('company', {
    director: employeeSchema,
    manager: employeeSchema,
    employees: [employeeSchema]
})

const companysSchema = new schema.Entity('companys', {
    companys: [companySchema]
})



const print = obj => {
    console.log(util.inspect(obj,false,12,true))
}



class Practica5 {

    async normalize() {
        let normalizedCompanys = normalize(holding, companysSchema)

        print(holding)
        console.log(JSON.stringify(holding).length)
        console.log("-----------------------------------------------------------------")

        print(normalizedCompanys)
        console.log(JSON.stringify(normalizedCompanys).length)
        console.log("-----------------------------------------------------------------")

        let desnormalized = denormalize(normalizedCompanys.result, companysSchema, normalizedCompanys.entities)
        print(desnormalized)
        console.log(JSON.stringify(desnormalized).length)

        return { 
            status: "OK",
            holding: holding,
            holding_length: JSON.stringify(holding).length,
            normalized: normalizedCompanys,
            normalized_length: JSON.stringify(normalizedCompanys).length}
    }

}

export let practica5Service = new Practica5()