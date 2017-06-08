import { AbstractElement } from "./element";

export class Submit implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public class: string;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<Button text="`+this.value+`" class="submit-button" (tap)="onTap()"></Button>`;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.label = '';
        this.helper = '';
        this.value = options['Value'];
        this.hasEvent=true;
    }
}