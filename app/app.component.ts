import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'udemy-app',
    template: '<h1>My App</h1><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent {}