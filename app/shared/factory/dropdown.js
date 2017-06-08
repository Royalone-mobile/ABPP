"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DropDown = (function () {
    function DropDown() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return _this.renderDropDown();
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.type = options['Type'];
        this.shouldSubmit = true;
        this.options = JSON.parse(options['Options']);
    }
    DropDown.prototype.renderDropDown = function () {
        var strHtml = '';
        strHtml += "<DropDown ";
        strHtml += "\"" + this.type + "\"";
        strHtml += " row = \"0\" colSpan = \"2\" >";
        strHtml += " </DropDown>";
        console.log("renderDropDown:" + strHtml);
        return strHtml;
    };
    return DropDown;
}());
exports.DropDown = DropDown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBc0JJO1FBQVksaUJBQVU7YUFBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1lBQVYsNEJBQVU7O1FBQXRCLGlCQVNDO1FBckJELFdBQU0sR0FBRztZQUNMLE1BQU0sQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFBO1FBV0csT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQWxCRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUM7UUFDeEIsT0FBTyxJQUFJLElBQUcsR0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUcsQ0FBQztRQUM3QixPQUFPLElBQUksZ0NBQTRCLENBQUM7UUFDeEMsT0FBTyxJQUFJLGNBQWMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQVdMLGVBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgRHJvcERvd24gaW1wbGVtZW50cyBBYnN0cmFjdEVsZW1lbnQge1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBoZWxwZXI6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBvcHRpb25zOiBBcnJheTxPYmplY3Q+O1xuICAgIHB1YmxpYyBoYXNFdmVudDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvdWxkU3VibWl0OiBib29sZWFuO1xuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEcm9wRG93bigpO1xuICAgIH1cbiAgICByZW5kZXJEcm9wRG93bigpe1xuICAgICAgICBsZXQgc3RySHRtbCA9ICcnO1xuICAgICAgICBzdHJIdG1sICs9IGA8RHJvcERvd24gYDsgXG4gICAgICAgIHN0ckh0bWwgKz0gYFwiYCt0aGlzLnR5cGUrYFwiYDtcbiAgICAgICAgc3RySHRtbCArPSBgIHJvdyA9IFwiMFwiIGNvbFNwYW4gPSBcIjJcIiA+YDtcbiAgICAgICAgc3RySHRtbCArPSBgIDwvRHJvcERvd24+YDtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJEcm9wRG93bjpcIitzdHJIdG1sKTtcbiAgICAgICAgcmV0dXJuIHN0ckh0bWw7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpe1xuICAgICAgICBvcHRpb25zID0gb3B0aW9uc1swXTtcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnNbJ0lkJ107XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25zWydWYWx1ZSddO1xuICAgICAgICB0aGlzLmxhYmVsID0gb3B0aW9uc1snTGFiZWwnXTtcbiAgICAgICAgdGhpcy5oZWxwZXIgPSBvcHRpb25zWydIZWxwZXInXTtcbiAgICAgICAgdGhpcy50eXBlID0gb3B0aW9uc1snVHlwZSddO1xuICAgICAgICB0aGlzLnNob3VsZFN1Ym1pdCA9IHRydWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9uc1snT3B0aW9ucyddKTtcbiAgICB9XG59Il19