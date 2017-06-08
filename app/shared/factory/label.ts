import { AbstractElement } from "./element";

export class Label implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public class: string;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<Label text="`+this.value+`" class="`+this.class+`"></Label>`;
    }

    constructor(...options){
        options = options[0];
        this.value = options['value'];
        this.class = options['class'];
        this.label = '';
        this.helper = '';
    }
}