"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Label = (function () {
    function Label() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<Label text=\"" + _this.value + "\" class=\"" + _this.class + "\"></Label>";
        };
        options = options[0];
        this.value = options['value'];
        this.class = options['class'];
        this.label = '';
        this.helper = '';
    }
    return Label;
}());
exports.Label = Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBY0k7UUFBWSxpQkFBVTthQUFWLFVBQVUsRUFBVixxQkFBVSxFQUFWLElBQVU7WUFBViw0QkFBVTs7UUFBdEIsaUJBTUM7UUFWRCxXQUFNLEdBQUc7WUFDTCxNQUFNLENBQUMsZ0JBQWUsR0FBQyxLQUFJLENBQUMsS0FBSyxHQUFDLGFBQVcsR0FBQyxLQUFJLENBQUMsS0FBSyxHQUFDLGFBQVksQ0FBQztRQUMxRSxDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIExhYmVsIGltcGxlbWVudHMgQWJzdHJhY3RFbGVtZW50IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaGVscGVyOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcbiAgICBwdWJsaWMgaGFzRXZlbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNob3VsZFN1Ym1pdDogYm9vbGVhbjtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8TGFiZWwgdGV4dD1cImArdGhpcy52YWx1ZStgXCIgY2xhc3M9XCJgK3RoaXMuY2xhc3MrYFwiPjwvTGFiZWw+YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKXtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNbMF07XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25zWyd2YWx1ZSddO1xuICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9uc1snY2xhc3MnXTtcbiAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmhlbHBlciA9ICcnO1xuICAgIH1cbn0iXX0=