"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Date = (function () {
    function Date() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        this.render = function () {
            return "<Label text=\"Date EL\" class=\"shouldSubmit\"></Label>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.shouldSubmit = true;
        //this.options = JSON.parse(options['Options']);
    }
    return Date;
}());
exports.Date = Date;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQWNJO1FBQVksaUJBQVU7YUFBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1lBQVYsNEJBQVU7O1FBSnRCLFdBQU0sR0FBRztZQUNMLE1BQU0sQ0FBQyx5REFBcUQsQ0FBQztRQUNqRSxDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGdEQUFnRDtJQUNwRCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBEYXRlIGltcGxlbWVudHMgQWJzdHJhY3RFbGVtZW50IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaGVscGVyOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgb3B0aW9uczogQXJyYXk8T2JqZWN0PjtcbiAgICBwdWJsaWMgaGFzRXZlbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNob3VsZFN1Ym1pdDogYm9vbGVhbjtcblxuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8TGFiZWwgdGV4dD1cIkRhdGUgRUxcIiBjbGFzcz1cInNob3VsZFN1Ym1pdFwiPjwvTGFiZWw+YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKXtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNbMF07XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zWydJZCddO1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uc1snVmFsdWUnXTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IG9wdGlvbnNbJ0xhYmVsJ107XG4gICAgICAgIHRoaXMuaGVscGVyID0gb3B0aW9uc1snSGVscGVyJ107XG4gICAgICAgIHRoaXMuc2hvdWxkU3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgLy90aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKG9wdGlvbnNbJ09wdGlvbnMnXSk7XG4gICAgfVxufSJdfQ==