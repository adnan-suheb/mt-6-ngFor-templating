import { Component } from "@angular/core";
import { stdArr } from "../../const/student";



@Component({
    selector:"app-student",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.scss"]
})

export class studentComponent{

    stdData = stdArr
}