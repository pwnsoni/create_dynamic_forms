<template>
    <div>
        <!-- <h1> {{formData}}</h1> -->
        <!-- <div v-for="i in formData" :key="i">
            {{i.fieldName}}: {{i.inputType}} -->

            <div>
            <b-form>
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input v-for="i in formData" :key="i"
                        id="input-1"
                        type="email"
                        :placeholder=i.fieldName
                        required
                    >
                    </b-form-input>


                </b-form-group>

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
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    }
}
</script>