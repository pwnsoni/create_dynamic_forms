<template>

    <div >
        <div>
        <b-form inline>
            <label class="sr-only" for="inline-form-input-title">title</label>
            <b-form-input
            id="inline-form-input-title"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="title of the input"
            v-model=formData.fieldName
            ></b-form-input>

            <label class="sr-only" for="inline-form-input-placeholder">placeholder</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-placeholder" placeholder="placeholder"></b-form-input>
            </b-input-group>
            <label class="mr-sm-2" for="inline-form-custom-select-pref">Select the type</label>
                <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[{ text: 'Choose...', value: null }, 'text', 'text-area', 'date']"
                :value="null"
                v-model=formData.inputType
            ></b-form-select>
            </b-form>
        </div>
        <div id="centerThisDiv">
            <button id="submitButton" @click="addMoreRow()">Add More Rows</button>
            <button type="submit" id="submitButton" @click="onSubmit()">Submit</button>
        </div>

        <p> {{formDataResult}}</p>
    </div>

</template>

<script>
export default {
    data() {
        return {
            formData: {fieldName: "", inputType: ""},
            formDataResult:[]
        }
    },
    methods: {
        addMoreRow(){
            this.formDataResult.push(this.formData);
            this.formData ={fieldName: "", inputType: ""};
            alert("done")
        },

        onSubmit(){
            alert('in Submit')
            this.$store.dispatch('UPDATE_FORMDATA', this.formDataResult)
        }
    }
}
</script>



<style>

    #contentShouldBeCentered{
        display: flex;
        justify-content: center;
        padding: 2px;
    }

    #submitButton1{
        background-color: rgb(241, 226, 226);
        color: rgb(236, 112, 112);
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        transition: 0.6s;
    }

    #submitButton1:hover{
        background-color: rgb(236, 112, 112); /* Green */
        color: rgb(249, 247, 247);
    }

</style>
