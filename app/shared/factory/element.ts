import { Label } from "./label";
import { Header } from "./header";
import { Textbox } from "./textbox";
import { Radio } from "./radio";
import { Submit } from "./submit";
import { DropDown } from "./dropdown";
import { Camera } from "./camera";
import { Checkbox } from "./checkbox";
import { Paragraph } from "./paragraph";
import { Signature } from "./signature";
import { Textarea } from "./textarea";

export interface AbstractElement {
    id: number;
    label: string;
    helper: string;
    type: string;
    hasEvent: boolean;
    shouldSubmit: boolean;
    render(): string;
}

export class ElementFactory {
    public static createElement(type: string, ...options) : AbstractElement {
        switch(type){
            case 'label':
                return new Label(...options);
            case 'header':
                return new Header(...options);
            case 'text':
                return new Textbox(...options);
            case 'radio':
                return new Radio(...options);
            case 'dropdown':
                return new DropDown(...options);
            case 'textarea':
                return new Textarea(...options);
            case 'camera':
                return new Camera(...options);
            case 'checkbox':
                return new Checkbox(...options);
            case 'paragraph':
                return new Paragraph(...options);
            case 'signature':
                return new Signature(...options);
            case 'submit':
                return new Submit(...options);
            default:
                return null;
        }
    }
}