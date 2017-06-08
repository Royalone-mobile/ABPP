"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Header = (function () {
    function Header() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<Label text=\"" + _this.value + "\" class=\"h1\"></Label>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Label'];
        this.label = '';
        this.helper = '';
    }
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFhSTtRQUFZLGlCQUFVO2FBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtZQUFWLDRCQUFVOztRQUF0QixpQkFNQztRQVZELFdBQU0sR0FBRztZQUNMLE1BQU0sQ0FBQyxnQkFBZSxHQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUMsMEJBQXVCLENBQUM7UUFDOUQsQ0FBQyxDQUFBO1FBR0csT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgaW1wbGVtZW50cyBBYnN0cmFjdEVsZW1lbnQge1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBoZWxwZXI6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBoYXNFdmVudDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvdWxkU3VibWl0OiBib29sZWFuO1xuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxMYWJlbCB0ZXh0PVwiYCt0aGlzLnZhbHVlK2BcIiBjbGFzcz1cImgxXCI+PC9MYWJlbD5gO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpe1xuICAgICAgICBvcHRpb25zID0gb3B0aW9uc1swXTtcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnNbJ0lkJ107XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25zWydMYWJlbCddO1xuICAgICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgICAgIHRoaXMuaGVscGVyID0gJyc7XG4gICAgfVxufSJdfQ==