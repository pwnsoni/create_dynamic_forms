export const state = () => ({
    formData: [{fieldName: "title", inputType: "text"}, {fieldName: "description", inputType: "text-area"}, {fieldName: "Data Of The Issue", inputType: "date"}],
    formDataResult: {description: ""}
})

export const mutations = {
    createResultSchema(state) {
        state.formData.forEach(element => {
            state.formDataResult[element.fieldName] = "";
        });
    }
}

export const actions = {
    CREATE_RESULT_SCHEMA(state) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}

