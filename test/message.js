import test from 'ava'
import { logic } from '../src/logic'
import { cdd }  from '../src/cdd'
import { exists } from 'fs';

test(t => {
    return logic({ message: { content: 'taGrandeRace' } }).then(element => {
        t.true(cdd.includes(element.message.content))
    })
})
