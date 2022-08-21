export const state = () => ({
    formData: [{fieldName: "title", inputType: "text"}, {fieldName: "description", inputType: "text-area"}, {fieldName: "Data Of The Issue", inputType: "date"}],
})

export const mutations = {
    createJson(state, data){
        state.formData = data;
    }
}

export const actions = {
    CREATE_RESULT_SCHEMA({commit}) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    },
    UPDATE_FORMDATA({commit}, data) {
        console.log("ckdhddk")
        console.log(data)
        commit('createJson', data)
    }
}

