import { AbstractElement } from "./element";

export class Signature implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public options: Array<Object>;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<Label id="`+this.id+`" text="Signature EL" class="shouldSubmit"></Label>`;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.shouldSubmit=true;
        //this.options = JSON.parse(options['Options']);
    }
}