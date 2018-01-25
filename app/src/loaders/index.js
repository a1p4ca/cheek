import medium from './medium'
import pocket from './pocket'

export default {
    fetch: async () => [...(await medium()), ...(await pocket())]
}
