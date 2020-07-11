/*import CreateClientComponent from "./components/CreateClientComponent";
import EditClientComponent from "./components/EditClientComponent";
import IndexClientComponent from "./components/IndexClientComponent";
import HomeComponent from "./components/HomeComponent";
import ShowClientComponent from "./components/ShowClientComponent";
import NotFound from "./components/NotFound";
import ReportClientComponent from "./components/ReportClientComponent";
import IndexReporteComponent from "./components/IndexReporteComponent";*/
import HomeComponent from "./components/HomeComponent";
import NotFound from "./components/NotFound";
import ListTaskComponent from "./components/ListTaskComponent";
import TaskFormComponent from "./components/TaskFormComponent";
export default {

    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '*',
            component: NotFound
        },

        {
            name: 'home',
            path: '/',
            component: ListTaskComponent
        },
       {
            name: 'create',
            path: '/create',
            component: TaskFormComponent
        },
       {
            name: 'edit',
            path: '/edit/:id',
            component: TaskFormComponent
        },

    ]
}
