"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radio = (function () {
    function Radio() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        this.render = function () {
            return "<Label text=\"Radio EL\" class=\"shouldSubmit\"></Label>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.shouldSubmit = true;
        //this.options = JSON.parse(options['Options']);
    }
    return Radio;
}());
exports.Radio = Radio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBY0k7UUFBWSxpQkFBVTthQUFWLFVBQVUsRUFBVixxQkFBVSxFQUFWLElBQVU7WUFBViw0QkFBVTs7UUFKdEIsV0FBTSxHQUFHO1lBQ0wsTUFBTSxDQUFDLDBEQUFzRCxDQUFDO1FBQ2xFLENBQUMsQ0FBQTtRQUdHLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsZ0RBQWdEO0lBQ3BELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFJhZGlvIGltcGxlbWVudHMgQWJzdHJhY3RFbGVtZW50IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaGVscGVyOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgb3B0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgICBwdWJsaWMgaGFzRXZlbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNob3VsZFN1Ym1pdDogYm9vbGVhbjtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8TGFiZWwgdGV4dD1cIlJhZGlvIEVMXCIgY2xhc3M9XCJzaG91bGRTdWJtaXRcIj48L0xhYmVsPmA7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4ub3B0aW9ucyl7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zWzBdO1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9uc1snSWQnXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9wdGlvbnNbJ1ZhbHVlJ107XG4gICAgICAgIHRoaXMubGFiZWwgPSBvcHRpb25zWydMYWJlbCddO1xuICAgICAgICB0aGlzLmhlbHBlciA9IG9wdGlvbnNbJ0hlbHBlciddO1xuICAgICAgICB0aGlzLnNob3VsZFN1Ym1pdCA9IHRydWU7XG4gICAgICAgIC8vdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zWydPcHRpb25zJ10pO1xuICAgIH1cbn0iXX0=