<template>
  <div id="centerdParentDiv">

    <div id="childDivWith60">

      <!-- This needs updation, May need to update it to take input separately and create the array of json -->
      <!-- Not working correctly, But the modai is working -->
      <b-form-textarea
        id="formComp"
        v-model="formData"
        placeholder="Enter something..."
        rows="10"
        max-rows="600"
      >
      </b-form-textarea>

      <!-- Below code is fine and okay -->
      <div id="centerThisDiv">
        <button type="submit" id="submitButton" @click="validateFormData" v-if="validated">Submit</button>
      </div>

      <b-button @click="$bvModal.show('modal-scoped')">Open Modal</b-button>
      <b-modal id="modal-scoped" size="xl">
        <DynamicForm />
        <template #modal-footer>
          <span id="footerNotes"> Click outside the borders to close </span>
        </template>
      </b-modal>  
    </div>
  </div>
</template>


<script>
import DynamicForm from '../components/DynamicForm.vue';
export default {
    name: "IndexPage",
    components: { DynamicForm },

    data() {
        return {
            validated: false,
            formData: [{}],
            inputTypeValues: ["input", "text-area", "date"]
        }
    },
    methods: {
      validateFormData() {
        let errorMessage = "Please fix your json, Detailed error message will be provided in future"

        let form = JSON.parse(JSON.stringify(this.formData))
        if (form.length == 0){
          alert(errorMessage)
          return;
        }
        console.log(form)
        console.log(typeof(form))
        form.forEach(form => {
          if(!this.inputTypeValues.includes(form.inputType)){
            alert(errorMessage + "here");
            return
          } 
        });
        this.validated = true;
      }
    }
}
</script>


<style>
  #footerNotes{
    color: rgb(236, 112, 112);
  }
</style>
