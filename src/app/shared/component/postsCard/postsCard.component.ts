import { Component } from "@angular/core";
import { postsArr } from "../../const/posts";



@Component({
    selector:"app-postsCard",
    templateUrl:"./postsCard.component.html",
    styleUrls:["./postsCard.component.scss"]
})

export class postsCardComponent{

    postsCardData = postsArr;

}