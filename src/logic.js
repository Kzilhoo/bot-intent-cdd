import { cdd } from './cdd'
import { search } from './infos'

export const logic = ($message) => {
    const offer = "bot-offer"
    return new Promise((resolve, reject) => {

        const intent = $message.intent.intent
        const findedEntity = $message.entities.find((item) => item.type == "domaine")

        const query = search(offer, "offer", intent, findedEntity.entity).then((dbEntity) => {
            const response = cdd[Math.floor(Math.random() * cdd.length)];
            const firstAnswer = Object.assign({}, $message, { content: response })
            const answerArray = dbEntity.map((dbMap) => {
                return Object.assign({}, $message, { content: dbMap._source.url })
            })
            resolve([].concat([firstAnswer], answerArray, ))
        })
    })
}



