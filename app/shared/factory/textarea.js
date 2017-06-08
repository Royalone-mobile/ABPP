"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Textarea = (function () {
    function Textarea() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<TextView id=\"" + _this.id + "\" text=\"" + _this.value + "\" class=\"textarea shouldSubmit\"></TextView>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.shouldSubmit = true;
        //this.options = JSON.parse(options['Options']);
    }
    return Textarea;
}());
exports.Textarea = Textarea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0YXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBY0k7UUFBWSxpQkFBVTthQUFWLFVBQVUsRUFBVixxQkFBVSxFQUFWLElBQVU7WUFBViw0QkFBVTs7UUFBdEIsaUJBUUM7UUFaRCxXQUFNLEdBQUc7WUFDTCxNQUFNLENBQUMsaUJBQWdCLEdBQUMsS0FBSSxDQUFDLEVBQUUsR0FBQyxZQUFVLEdBQUMsS0FBSSxDQUFDLEtBQUssR0FBQyxnREFBNkMsQ0FBQztRQUN4RyxDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGdEQUFnRDtJQUNwRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0YXJlYSBpbXBsZW1lbnRzIEFic3RyYWN0RWxlbWVudCB7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gICAgcHVibGljIGhlbHBlcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIG9wdGlvbnM6IEFycmF5PE9iamVjdD47XG4gICAgcHVibGljIGhhc0V2ZW50OiBib29sZWFuO1xuICAgIHB1YmxpYyBzaG91bGRTdWJtaXQ6IGJvb2xlYW47XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgPFRleHRWaWV3IGlkPVwiYCt0aGlzLmlkK2BcIiB0ZXh0PVwiYCt0aGlzLnZhbHVlK2BcIiBjbGFzcz1cInRleHRhcmVhIHNob3VsZFN1Ym1pdFwiPjwvVGV4dFZpZXc+YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKXtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNbMF07XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zWydJZCddO1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uc1snVmFsdWUnXTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IG9wdGlvbnNbJ0xhYmVsJ107XG4gICAgICAgIHRoaXMuaGVscGVyID0gb3B0aW9uc1snSGVscGVyJ107XG4gICAgICAgIHRoaXMuc2hvdWxkU3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgLy90aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKG9wdGlvbnNbJ09wdGlvbnMnXSk7XG4gICAgfVxufSJdfQ==