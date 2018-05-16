import { cdd } from './cdd'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = cdd[Math.floor(Math.random() * cdd.length)];
    const newMessage = Object.assign($message.message, { content: response })
    const newIntentMessage = Object.assign($message, { message: newMessage })
    resolve(newIntentMessage)
    })
}


