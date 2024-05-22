import { Component } from "@angular/core";


@Component({
    selector:"app-arrayListComponent",
    templateUrl:"./arrayList.component.html",
    styleUrls:["./arrayList.component.scss"]
})

export class arrayListComponent{

    skills = ["HTML","CSS","JavaScript","TypeScript","Anular"];
}