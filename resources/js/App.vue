<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link to="/" class="navbar-brand">Laravel</router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tareas</a>
                            <div class="dropdown-menu">


                                 <router-link to="/clients" class="dropdown-item">Listado</router-link>
                                <router-link to="/create" class="dropdown-item">Crear Tarea</router-link>

                            </div>
                        </li>

                    </ul>


                </div>
            </div>
        </nav>

        <main class="py-4">

                <router-view></router-view>


        </main>
    </div>

</template>


<script>

    export default{
    }
</script>
