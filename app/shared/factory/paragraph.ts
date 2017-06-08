import { AbstractElement } from "./element";

export class Paragraph implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public options: Array<Object>;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<Label text="`+this.value+`" class="paragraph"></Label>`;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.value = options['Label'];
        this.label = '';
        this.helper = '';
        this.shouldSubmit=true;
        //this.options = JSON.parse(options['Options']);
    }
}