import { Routes } from '@angular/router';
import { FormComponent } from './contact/form/form.component';
import { ListComponent } from './contact/list/list.component';

export const routes: Routes = [
    {
        path:"",
        component:ListComponent
    },
    {
        path:"contact/list",
        component:ListComponent
    },
    {
        path:"contact/form",
        component:FormComponent
    }
    ,
    {
        path:"contact/form/:id",
        component:FormComponent
    }
];
