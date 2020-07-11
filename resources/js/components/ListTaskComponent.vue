<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-md-10">
                <h1>Tareas</h1>
                <div class="row">
                    <div class="col-md-12"></div>
                    <div class="col-md-2">
                        <router-link :to="{ name: 'create' }" class="btn btn-primary">Crear Tarea</router-link>
                    </div>
                </div><br />
                <div class="card">
                    <div class="card-body">
                       <table class="table table-hover" id="table">
                            <thead>
                            <tr>

                                <th class="text-center">Nombre</th>
                                <th class="text-center">Accion</th>
                            </tr>
                            </thead>
                            <tbody>

                                <tr v-if="tasks" v-for="(task, index) in tasks" :key="task.id" :id="index">
                                    <td class="text-center"><span>{{ task.name }}</span></td>
                                    <td class="text-center"><button class="btn btn-info" @click="completedTasks($event,index)">Completar</button> <router-link  :to="{name: 'edit', params: { id: task.id }}" class="btn btn-primary">Editar</router-link> <button class="btn btn-danger" @click = "deleteTask(task.id)">Eliminar</button></td>
                                </tr>
                                <tr v-else>
                                    <td colspan="8">No hay registro !!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ListTaskComponent",

        data(){
            return {
               tasks:[],
               edit: 1 ,
            }
        },
        created: function(){
            this.getTasks();
        },
        methods: {
            getTasks: function(){
                this.axios.get('/api/tasks')
                    .then(function (response) {
                        this.tasks = response.data;
                    }.bind(this));

            },
            deleteTask(id)
            {
                let uri = `api/tasks/${id}`;
                this.axios.delete(uri).then(response => {
                    alert('Eliminado');
                    location.reload();
                });
            },
            completedTasks(e, index){
                const table = document.getElementById('table');
                table.rows[index+1].cells[0].classList.add('completed');

            }
        }

    }
</script>

<style scoped>
    .completed {
        text-decoration:line-through;
        color: red;
    }

</style>
