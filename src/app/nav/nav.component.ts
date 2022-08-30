import { Component } from "@angular/core";


@Component({
    selector : 'navComp',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent{
    navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers']

}