import { AbstractElement } from "./element";

export class Header implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<Label text="`+this.value+`" class="h1"></Label>`;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.value = options['Label'];
        this.label = '';
        this.helper = '';
    }
}