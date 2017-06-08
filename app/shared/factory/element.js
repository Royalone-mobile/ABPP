"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = require("./label");
var header_1 = require("./header");
var textbox_1 = require("./textbox");
var radio_1 = require("./radio");
var submit_1 = require("./submit");
var dropdown_1 = require("./dropdown");
var camera_1 = require("./camera");
var checkbox_1 = require("./checkbox");
var paragraph_1 = require("./paragraph");
var signature_1 = require("./signature");
var textarea_1 = require("./textarea");
var ElementFactory = (function () {
    function ElementFactory() {
    }
    ElementFactory.createElement = function (type) {
        var options = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            options[_i - 1] = arguments[_i];
        }
        switch (type) {
            case 'label':
                return new (label_1.Label.bind.apply(label_1.Label, [void 0].concat(options)))();
            case 'header':
                return new (header_1.Header.bind.apply(header_1.Header, [void 0].concat(options)))();
            case 'text':
                return new (textbox_1.Textbox.bind.apply(textbox_1.Textbox, [void 0].concat(options)))();
            case 'radio':
                return new (radio_1.Radio.bind.apply(radio_1.Radio, [void 0].concat(options)))();
            case 'dropdown':
                return new (dropdown_1.DropDown.bind.apply(dropdown_1.DropDown, [void 0].concat(options)))();
            case 'textarea':
                return new (textarea_1.Textarea.bind.apply(textarea_1.Textarea, [void 0].concat(options)))();
            case 'camera':
                return new (camera_1.Camera.bind.apply(camera_1.Camera, [void 0].concat(options)))();
            case 'checkbox':
                return new (checkbox_1.Checkbox.bind.apply(checkbox_1.Checkbox, [void 0].concat(options)))();
            case 'paragraph':
                return new (paragraph_1.Paragraph.bind.apply(paragraph_1.Paragraph, [void 0].concat(options)))();
            case 'signature':
                return new (signature_1.Signature.bind.apply(signature_1.Signature, [void 0].concat(options)))();
            case 'submit':
                return new (submit_1.Submit.bind.apply(submit_1.Submit, [void 0].concat(options)))();
            default:
                return null;
        }
    };
    return ElementFactory;
}());
exports.ElementFactory = ElementFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFDaEMsbUNBQWtDO0FBQ2xDLHFDQUFvQztBQUNwQyxpQ0FBZ0M7QUFDaEMsbUNBQWtDO0FBQ2xDLHVDQUFzQztBQUN0QyxtQ0FBa0M7QUFDbEMsdUNBQXNDO0FBQ3RDLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFDeEMsdUNBQXNDO0FBWXRDO0lBQUE7SUE2QkEsQ0FBQztJQTVCaUIsNEJBQWEsR0FBM0IsVUFBNEIsSUFBWTtRQUFFLGlCQUFVO2FBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtZQUFWLGdDQUFVOztRQUNoRCxNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1QsS0FBSyxPQUFPO2dCQUNSLE1BQU0sTUFBSyxhQUFLLFlBQUwsYUFBSyxrQkFBSSxPQUFPLE1BQUU7WUFDakMsS0FBSyxRQUFRO2dCQUNULE1BQU0sTUFBSyxlQUFNLFlBQU4sZUFBTSxrQkFBSSxPQUFPLE1BQUU7WUFDbEMsS0FBSyxNQUFNO2dCQUNQLE1BQU0sTUFBSyxpQkFBTyxZQUFQLGlCQUFPLGtCQUFJLE9BQU8sTUFBRTtZQUNuQyxLQUFLLE9BQU87Z0JBQ1IsTUFBTSxNQUFLLGFBQUssWUFBTCxhQUFLLGtCQUFJLE9BQU8sTUFBRTtZQUNqQyxLQUFLLFVBQVU7Z0JBQ1gsTUFBTSxNQUFLLG1CQUFRLFlBQVIsbUJBQVEsa0JBQUksT0FBTyxNQUFFO1lBQ3BDLEtBQUssVUFBVTtnQkFDWCxNQUFNLE1BQUssbUJBQVEsWUFBUixtQkFBUSxrQkFBSSxPQUFPLE1BQUU7WUFDcEMsS0FBSyxRQUFRO2dCQUNULE1BQU0sTUFBSyxlQUFNLFlBQU4sZUFBTSxrQkFBSSxPQUFPLE1BQUU7WUFDbEMsS0FBSyxVQUFVO2dCQUNYLE1BQU0sTUFBSyxtQkFBUSxZQUFSLG1CQUFRLGtCQUFJLE9BQU8sTUFBRTtZQUNwQyxLQUFLLFdBQVc7Z0JBQ1osTUFBTSxNQUFLLHFCQUFTLFlBQVQscUJBQVMsa0JBQUksT0FBTyxNQUFFO1lBQ3JDLEtBQUssV0FBVztnQkFDWixNQUFNLE1BQUsscUJBQVMsWUFBVCxxQkFBUyxrQkFBSSxPQUFPLE1BQUU7WUFDckMsS0FBSyxRQUFRO2dCQUNULE1BQU0sTUFBSyxlQUFNLFlBQU4sZUFBTSxrQkFBSSxPQUFPLE1BQUU7WUFDbEM7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgVGV4dGJveCB9IGZyb20gXCIuL3RleHRib3hcIjtcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcIi4vcmFkaW9cIjtcbmltcG9ydCB7IFN1Ym1pdCB9IGZyb20gXCIuL3N1Ym1pdFwiO1xuaW1wb3J0IHsgRHJvcERvd24gfSBmcm9tIFwiLi9kcm9wZG93blwiO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vY2FtZXJhXCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCB7IFNpZ25hdHVyZSB9IGZyb20gXCIuL3NpZ25hdHVyZVwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0RWxlbWVudCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhlbHBlcjogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBoYXNFdmVudDogYm9vbGVhbjtcbiAgICBzaG91bGRTdWJtaXQ6IGJvb2xlYW47XG4gICAgcmVuZGVyKCk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRGYWN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCAuLi5vcHRpb25zKSA6IEFic3RyYWN0RWxlbWVudCB7XG4gICAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJ2xhYmVsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExhYmVsKC4uLm9wdGlvbnMpO1xuICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEhlYWRlciguLi5vcHRpb25zKTtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGV4dGJveCguLi5vcHRpb25zKTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJhZGlvKC4uLm9wdGlvbnMpO1xuICAgICAgICAgICAgY2FzZSAnZHJvcGRvd24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRHJvcERvd24oLi4ub3B0aW9ucyk7XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0YXJlYSguLi5vcHRpb25zKTtcbiAgICAgICAgICAgIGNhc2UgJ2NhbWVyYSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDYW1lcmEoLi4ub3B0aW9ucyk7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGVja2JveCguLi5vcHRpb25zKTtcbiAgICAgICAgICAgIGNhc2UgJ3BhcmFncmFwaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoLi4ub3B0aW9ucyk7XG4gICAgICAgICAgICBjYXNlICdzaWduYXR1cmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlKC4uLm9wdGlvbnMpO1xuICAgICAgICAgICAgY2FzZSAnc3VibWl0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN1Ym1pdCguLi5vcHRpb25zKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59Il19