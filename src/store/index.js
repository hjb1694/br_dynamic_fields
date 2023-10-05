import { createStore } from "vuex";

export default createStore({
    state(){
        return {
            fields: []
        }
    }, 
    getters: {
        fields(state){
            return state.fields;
        }
    },
    mutations: {
        addField(state, payload){
            state.fields.push(payload);
        }
    }, 
    actions: {
        addField({commit}, payload){
            commit('addField', payload);
        }
    }
});