<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ this.edit }}</div>

                    <div class="card-body">
                        <form @submit.prevent="processData">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>
                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="name" name="name" value="" required  autofocus>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                       Guardar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
              url: '/api/tasks/',
              name: '',
              edit: ''
            }
        },
        methods: {
            processData(){
                if(this.$route.params.id){
                    this.updateTask()
                }else{
                    this.addTasks();
                }
            },
            addTasks(){
                let uri = `${this.url}` ;
                this.axios.post(uri, {name: this.name})
                    .then((response) => {
                    this.$router.push('/');
                });
            },
            updateTask(){
                let uri = `${this.url}${this.$route.params.id}`;
                this.axios.put(uri, {name: this.name}).then((response) => {
                    this.$router.push('/');
                });
             },
            getData() {
                let uri = `${this.url}${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.name = response.data.name;

                });
            },
        },
        created() {
            if(this.$route.params.id){
                this.edit = "EDITAR TAREA";
                this.getData();
            }else{
                this.edit = "CREAR TAREA"
            }
        }

    }
</script>
