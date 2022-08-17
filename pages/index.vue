<template>
  <div id="centerdParentDiv">

    <div id="childDivWith60">
      <FormJsonInput />
      <!-- Below code is fine and okay -->


      <button @click="$bvModal.show('modal-scoped')" id="submitButton">Open Modal</button>
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
import FormJsonInput from '../components/FormJsonInput.vue';
export default {
    name: "IndexPage",
    components: { DynamicForm, FormJsonInput },

    data() {
        return {
            validated: false,
            formData: "",
            inputTypeValues: ["input", "text-area", "date"]
        }
    },
    methods: {

      // Have found another apprdach, Dumping this up
      validateFormData() {
        let errorMessage = "Please fix your json, Detailed error message will be provided in future"
        alert(typeof(this.formData))
        alert(typeof(JSON.parse(this.formData)))

        let form = JSON.parse(this.formData)
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
