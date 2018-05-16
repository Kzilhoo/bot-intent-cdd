import { allocations } from './cdd'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = allocations[Math.floor(Math.random() * allocations.length)];
    const newMessage = Object.assign($message.message, { content: response })
    const newIntentMessage = Object.assign($message, { message: newMessage })
    resolve(newIntentMessage)
    })
}


