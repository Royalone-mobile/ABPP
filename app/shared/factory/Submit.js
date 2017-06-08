"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Submit = (function () {
    function Submit() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<Button text=\"" + _this.value + "\" class=\"submit-button\" (tap)=\"onTap()\"></Button>";
        };
        options = options[0];
        this.id = options['Id'];
        this.label = '';
        this.helper = '';
        this.value = options['Value'];
        this.hasEvent = true;
    }
    return Submit;
}());
exports.Submit = Submit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VibWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFjSTtRQUFZLGlCQUFVO2FBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtZQUFWLDRCQUFVOztRQUF0QixpQkFPQztRQVhELFdBQU0sR0FBRztZQUNMLE1BQU0sQ0FBQyxpQkFBZ0IsR0FBQyxLQUFJLENBQUMsS0FBSyxHQUFDLHdEQUFtRCxDQUFDO1FBQzNGLENBQUMsQ0FBQTtRQUdHLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU3VibWl0IGltcGxlbWVudHMgQWJzdHJhY3RFbGVtZW50IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaGVscGVyOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcbiAgICBwdWJsaWMgaGFzRXZlbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNob3VsZFN1Ym1pdDogYm9vbGVhbjtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8QnV0dG9uIHRleHQ9XCJgK3RoaXMudmFsdWUrYFwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwib25UYXAoKVwiPjwvQnV0dG9uPmA7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4ub3B0aW9ucyl7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zWzBdO1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9uc1snSWQnXTtcbiAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmhlbHBlciA9ICcnO1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uc1snVmFsdWUnXTtcbiAgICAgICAgdGhpcy5oYXNFdmVudD10cnVlO1xuICAgIH1cbn0iXX0=