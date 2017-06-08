"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signature = (function () {
    function Signature() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<Label id=\"" + _this.id + "\" text=\"Signature EL\" class=\"shouldSubmit\"></Label>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.shouldSubmit = true;
        //this.options = JSON.parse(options['Options']);
    }
    return Signature;
}());
exports.Signature = Signature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbmF0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFjSTtRQUFZLGlCQUFVO2FBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtZQUFWLDRCQUFVOztRQUF0QixpQkFRQztRQVpELFdBQU0sR0FBRztZQUNMLE1BQU0sQ0FBQyxjQUFhLEdBQUMsS0FBSSxDQUFDLEVBQUUsR0FBQywwREFBcUQsQ0FBQztRQUN2RixDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDO1FBQ3ZCLGdEQUFnRDtJQUNwRCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlIGltcGxlbWVudHMgQWJzdHJhY3RFbGVtZW50IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaGVscGVyOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgb3B0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgICBwdWJsaWMgaGFzRXZlbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNob3VsZFN1Ym1pdDogYm9vbGVhbjtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8TGFiZWwgaWQ9XCJgK3RoaXMuaWQrYFwiIHRleHQ9XCJTaWduYXR1cmUgRUxcIiBjbGFzcz1cInNob3VsZFN1Ym1pdFwiPjwvTGFiZWw+YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKXtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNbMF07XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zWydJZCddO1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uc1snVmFsdWUnXTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IG9wdGlvbnNbJ0xhYmVsJ107XG4gICAgICAgIHRoaXMuaGVscGVyID0gb3B0aW9uc1snSGVscGVyJ107XG4gICAgICAgIHRoaXMuc2hvdWxkU3VibWl0PXRydWU7XG4gICAgICAgIC8vdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zWydPcHRpb25zJ10pO1xuICAgIH1cbn0iXX0=