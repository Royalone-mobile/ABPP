import { AbstractElement } from "./element";

export class Textbox implements AbstractElement {
    public id: number;
    public label: string;
    public type: string;
    public helper: string;
    public value: string;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<TextField id="`+this.id+`" formControlName="element`+this.id+`" text="`+this.value+`" class="shouldSubmit"></TextField>`;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.label = options['Label'];
        this.helper = options['Help'];
        this.shouldSubmit = true;
    }
}