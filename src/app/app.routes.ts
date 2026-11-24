import { Routes } from '@angular/router';
import { App } from './app';
import { Component } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { ResultComponent } from './component/result/result.component';

@Component({
  template: `<h1>404 - Página no encontrada</h1>`,
})
class NotFoundInline {}
export const routes: Routes = [
  { path: 'inicio', 
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'result', component: ResultComponent }

    ]
 },
  { path: '**', component: NotFoundInline },
];
