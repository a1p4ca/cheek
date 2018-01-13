import * as plugins from '../../../plugins'

export default {
    list: Object.keys(plugins),
    execute: name => plugins[name](),
    plugins,
}
