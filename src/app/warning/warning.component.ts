import { Component } from "@angular/core";

@Component({
    selector: 'app-warning',
    template: `
        <p>This is warning component</p>
    `,
    styles: [
     `
        p {
            padding: 20px;
            background-color: pink;
            border: 1px solid red
        }   
     `
    ]
})
export class WarningComponent {

}