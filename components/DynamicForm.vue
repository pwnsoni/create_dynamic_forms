<template>
    <div id="centerdParentDiv">
            <div id="childDivWith60">
            <b-form @submit="onSubmit" >
                <b-form-group
                    id="input-group-1"
                    label="Form Details"
                    label-for="input-1"
                >
                    <div v-for="i in formData" :key="i" id="formComp"> 
                        <div v-if="i.inputType == 'text'">
                            <label for="datePicker">{{i.fieldName}}</label>
                            <b-form-input
                                id="input-1"
                                v-model=formDataResult[i.fieldName]
                                :placeholder=i.fieldName
                                required
                            >   
                            </b-form-input>
                        </div>

                        <div v-if="i.inputType == 'text-area'">
                            <label for="datePicker">{{i.fieldName}}</label>
                            <b-form-textarea 
                                id="textarea"
                                v-model=formDataResult[i.fieldName]
                                placeholder="Enter something..."
                                rows="6"
                                max-rows="60"
                            >
                            </b-form-textarea>
                        </div>

                        <div v-if="i.inputType == 'date'">
                            <label for="datePicker">{{i.fieldName}}</label>
                            <b-form-datepicker 
                                id="datePicker"
                                v-model=formDataResult[i.fieldName]
                                class="mb-2"
                                >
                            </b-form-datepicker>
                        </div>


                    </div>
                </b-form-group>
                <div id="centerThisDiv">
                    <button type="submit" id="submitButton" >Submit</button>
                </div>
            </b-form>
        </div>

    </div>
</template>


<script>
export default {
    computed: {
        formData(){
            return this.$store.state.formData;
        } 
    },
    data() {
        return {
            show: true,
            formDataResult:{}
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.formDataResult))
        },
    }
}
</script>

<style>

    #centerThisDiv{
        display: flex;
        justify-content: center;
        padding: 2px;
    }

    #submitButton{
        background-color: rgb(241, 226, 226);
        color: rgb(236, 112, 112);
        border: none;
        padding: 15px 32px;
        margin: 2%;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        width: 50%;
        transition: 0.6s;
    }

    #submitButton:hover{
        background-color: rgb(236, 112, 112); /* Green */
        color: rgb(249, 247, 247);
    }

    #childDivWith60{
        width: 60%;
        border: 5px solid rgb(249, 247, 247);
        border-radius: 2px;
        padding: 2%;
    }

    #centerdParentDiv{
        display: flex;
        justify-content: center;
        padding: 5%;
    }

    #formComp{
        margin-top: 5%;
    }

</style>