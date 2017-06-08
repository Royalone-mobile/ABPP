import { AbstractElement } from "./element";

export class Checkbox implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public options: Array<Object>;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return `<CheckBox id="`+this.id+`" text="`+this.value+`" class="shouldSubmit" checked="false"></CheckBox>`;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.value = options['Label'];
        this.label = '';
        this.helper = options['Helper'];
        this.shouldSubmit=true;
        //this.options = JSON.parse(options['Options']);
    }
}