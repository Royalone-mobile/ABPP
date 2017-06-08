import { AbstractElement } from "./element";

export class Radio implements AbstractElement {
    public id: number;
    public value: string;
    public label: string;
    public helper: string;
    public type: string;
    public options: Array<Object>;
    public hasEvent: boolean;
    public shouldSubmit: boolean;

    render = () => {
        return this.renderRadio();
    }

    renderRadio(){
        let strHtml = '';
        strHtml += `<DropDown `; 
        strHtml += `"`+this.type+`"`;
        strHtml += ` row = "0" colSpan = "2" >`;
        strHtml += ` </DropDown>`;
        console.log("renderRadio:"+strHtml);
        return strHtml;
    }

    constructor(...options){
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.shouldSubmit = true;
        this.options = JSON.parse(options['Options']);
    }
}