import Vue from 'vue'
import Vuex from 'vuex'
import pluginLoader from '../src/plugin/plugin-loader'

import article from './module/article'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        article
    }
})
