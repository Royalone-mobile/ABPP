"use strict";
var core_1 = require("@angular/core");
var DynamicComponent = (function () {
    function DynamicComponent(compiler) {
        this.compiler = compiler;
    }
    DynamicComponent.prototype.addComponent = function (container, template) {
        var TemplateComponent = (function () {
            function TemplateComponent() {
            }
            return TemplateComponent;
        }());
        TemplateComponent = __decorate([
            core_1.Component({ template: template })
        ], TemplateComponent);
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            return TemplateModule;
        }());
        TemplateModule = __decorate([
            core_1.NgModule({ declarations: [TemplateComponent] })
        ], TemplateModule);
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.filter(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory[0]);
        return TemplateComponent;
    };
    return DynamicComponent;
}());
DynamicComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler])
], DynamicComponent);
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkeW5hbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJGO0FBRzNGLElBQWEsZ0JBQWdCO0lBQ3pCLDBCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVuQyx1Q0FBWSxHQUFuQixVQUFvQixTQUEyQixFQUFFLFFBQWdCO1FBRTdELElBQU0saUJBQWlCO1lBQXZCO1lBQXdCLENBQUM7WUFBRCx3QkFBQztRQUFELENBQUMsQUFBekIsSUFBeUI7UUFBbkIsaUJBQWlCO1lBRHRCLGdCQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7V0FDMUIsaUJBQWlCLENBQUU7UUFHekIsSUFBTSxjQUFjO1lBQXBCO1lBQXNCLENBQUM7WUFBRCxxQkFBQztRQUFELENBQUMsQUFBdkIsSUFBdUI7UUFBakIsY0FBYztZQURuQixlQUFRLENBQUMsRUFBQyxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUM7V0FDeEMsY0FBYyxDQUFHO1FBRXZCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUUsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDL0MsT0FBQSxJQUFJLENBQUMsYUFBYSxLQUFLLGlCQUFpQjtRQUF4QyxDQUF3QyxDQUMzQyxDQUFDO1FBQ0YsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FFcUIsZUFBUTtHQUQ3QixnQkFBZ0IsQ0FpQjVCO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBpbGVyLCBDb21wb25lbnQsIE5nTW9kdWxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIpIHt9XG5cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGU6IHN0cmluZyl7XG4gICAgICAgIEBDb21wb25lbnQoe3RlbXBsYXRlOiB0ZW1wbGF0ZX0pXG4gICAgICAgIGNsYXNzIFRlbXBsYXRlQ29tcG9uZW50e31cblxuICAgICAgICBATmdNb2R1bGUoe2RlY2xhcmF0aW9uczogW1RlbXBsYXRlQ29tcG9uZW50XX0pXG4gICAgICAgIGNsYXNzIFRlbXBsYXRlTW9kdWxlIHt9XG5cbiAgICAgICAgY29uc3QgbW9kID0gdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMoVGVtcGxhdGVNb2R1bGUpO1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gbW9kLmNvbXBvbmVudEZhY3Rvcmllcy5maWx0ZXIoKGNvbXApPT5cbiAgICAgICAgICAgIGNvbXAuY29tcG9uZW50VHlwZSA9PT0gVGVtcGxhdGVDb21wb25lbnRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5WzBdKTtcbiAgICAgICAgcmV0dXJuIFRlbXBsYXRlQ29tcG9uZW50O1xuICAgIH1cbn0iXX0=