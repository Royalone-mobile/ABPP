"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dynamic_component_1 = require("./../../shared/components/dynamic.component");
var form_service_1 = require("../../shared/models/form/form.service");
var element_1 = require("../../shared/factory/element");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var FormComponent = (function () {
    function FormComponent(route, _changeDetectionRef, dom, _dynamicComponent, formService) {
        this.route = route;
        this._changeDetectionRef = _changeDetectionRef;
        this.dom = dom;
        this._dynamicComponent = _dynamicComponent;
        this.formService = formService;
        this.formLoading = false;
        this.page = null; //Lokaal form renderen
        this.formPayload = []; //Array Object dat uiteindelijk 'verwerkt' wordt.
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._changeDetectionRef.detectChanges();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['page_id'];
            if (isNaN(_this.id) || _this.id === 99) {
                _this.id = 99;
                _this.createDemoPage();
            }
            else {
                _this.createPage();
            }
        });
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FormComponent.prototype.createPage = function () {
        var _this = this;
        this.formService.loadPage(this.id).subscribe(function (data) {
            _this.clearPage();
            _this.page = data;
            _this.renderPage();
        });
    };
    FormComponent.prototype.createDemoPage = function () {
        this.clearPage();
        this.page = {
            'Id': 99,
            'Title': 'Startpagina',
            'Rows': [{
                    'Id': 1,
                    'Visible': true,
                    'Title': 'Welkom',
                    'Elements': [{
                            'Label': 'Welkom',
                            'Type': 'header'
                        },
                        {
                            'Label': 'Welkom 2',
                            'Type': 'header'
                        }]
                }]
        };
        this.renderPage();
    };
    FormComponent.prototype.renderPage = function () {
        var _this = this;
        this.page['Rows'].forEach(function (row) {
            console.log("this.page.Elements.size=" + row.Elements.length);
            row.Elements.forEach(function (element) {
                var elementObject;
                console.log("Label");
                elementObject = element_1.ElementFactory.createElement(element.Type, element);
                if (elementObject !== null) {
                    //Add label
                    if (typeof elementObject.label !== 'undefined'
                        && elementObject.label.length > 0) {
                        var labelObject = element_1.ElementFactory.createElement('label', {
                            value: elementObject.label,
                            class: 'label'
                        });
                        _this._dynamicComponent.addComponent(_this.container, labelObject.render());
                    }
                    console.log("Label1");
                    //Main Element
                    var _component = _this._dynamicComponent.addComponent(_this.container, elementObject.render());
                    //Add Helper
                    if (typeof elementObject.helper !== 'undefined'
                        && elementObject.helper.length > 0) {
                        var labelObject = element_1.ElementFactory.createElement('label', {
                            value: elementObject.helper,
                            class: 'helper'
                        });
                        _this._dynamicComponent.addComponent(_this.container, labelObject.render());
                    }
                    console.log("Label2");
                    //Bind events
                    if (elementObject.hasEvent == true) {
                        //Handle form submission
                        if (element.Type == 'submit') {
                            _component.prototype.onTap = function () {
                                _this.submit();
                            };
                        }
                        console.log("Label3");
                        //Handle camera/photo click
                        if (element.Type == 'camera') {
                            _component.prototype.onTap = function () {
                            };
                        }
                    }
                }
            });
        });
        this.formLoading = false;
        this._changeDetectionRef.detectChanges();
    };
    FormComponent.prototype.clearPage = function () {
        this.container.clear();
        this.formLoading = false;
        this._changeDetectionRef.detectChanges();
    };
    FormComponent.prototype.getCameraImageElement = function () {
        var el = this.formElement.nativeElement;
        for (var i = 2; i < el.getChildrenCount(); i++) {
            var child = el.getChildAt(i);
            for (var x = 0; x < child.getChildrenCount(); x++) {
                var element = child.getChildAt(x);
                if (element.id == 'img_camera')
                    return element;
            }
        }
    };
    FormComponent.prototype.getDropDownElement = function () {
        var el = this.formElement.nativeElement;
        for (var i = 2; i < el.getChildrenCount(); i++) {
            var child = el.getChildAt(i);
            for (var x = 0; x < child.getChildrenCount(); x++) {
                var element = child.getChildAt(x);
                if (element.id == 'dropdown')
                    return element;
            }
        }
    };
    FormComponent.prototype.getImagePickerElement = function () {
        var el = this.formElement.nativeElement;
        for (var i = 2; i < el.getChildrenCount(); i++) {
            var child = el.getChildAt(i);
            for (var x = 0; x < child.getChildrenCount(); x++) {
                var element = child.getChildAt(x);
                if (element.id == 'imagepicker')
                    return element;
            }
        }
    };
    FormComponent.prototype.getRadioElement = function () {
        var el = this.formElement.nativeElement;
        for (var i = 2; i < el.getChildrenCount(); i++) {
            var child = el.getChildAt(i);
            for (var x = 0; x < child.getChildrenCount(); x++) {
                var element = child.getChildAt(x);
                if (element.id == 'radio')
                    return element;
            }
        }
    };
    FormComponent.prototype.initializeDropDown = function (dropDownString) {
        var data = [];
        var selectedIndex = 0;
        var options = JSON.parse(dropDownString['Options']);
        options.forEach(function (row) {
            data.push(row['Title']);
            if (row['Selected'] == true)
                selectedIndex = data.length - 1;
        });
        var dropDownElement = this.getDropDownElement();
        dropDownElement.selectedIndex = selectedIndex;
        dropDownElement.items = data;
    };
    FormComponent.prototype.submit = function () {
        this.formPayload = [];
        this.formPayload.push({
            formId: this.id
        });
        var elements = [];
        var el = this.formElement.nativeElement;
        console.log('Children Count:' + el.getChildrenCount());
        for (var i = 2; i < el.getChildrenCount(); i++) {
            //index starts at 2 -> 0-activityindicator,1-stacklayout
            var child = el.getChildAt(i);
            console.log('Proxy Child Count:' + child.getChildrenCount());
            for (var x = 0; x < child.getChildrenCount(); x++) {
                console.log('x= :' + x);
                var value = child.getChildAt(x);
                console.log('value.text = ' + value.text);
                console.log('value.id = ' + value.id);
                if (value.text && value.id) {
                    elements.push({
                        'id': value.id,
                        'value': value.text
                    });
                }
            }
        }
        this.formPayload.push({ 'elements': elements });
        //console.dump(this.formPayload);
        var strDialog = JSON.stringify({
            formPayload: this.formPayload
        });
        dialogs.alert(strDialog).then(function () {
        });
    };
    return FormComponent;
}());
__decorate([
    core_1.ViewChild("container", { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], FormComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("form"),
    __metadata("design:type", core_1.ElementRef)
], FormComponent.prototype, "formElement", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: "form",
        templateUrl: "pages/form/form.html",
        styleUrls: ["pages/form/form-common.css", "pages/form/form.css"],
        providers: [form_service_1.FormService]
    }),
    __param(3, core_1.Inject("DynamicComponent")),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        core_1.ChangeDetectorRef,
        page_1.Page,
        dynamic_component_1.DynamicComponent,
        form_service_1.FormService])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV5RTtBQUN6RSwwQ0FBaUQ7QUFFakQsaUZBQStFO0FBQy9FLHNFQUFvRTtBQUNwRSx3REFBK0U7QUFHL0UsZ0NBQStCO0FBSy9CLG9DQUF1QztBQVV2QyxJQUFhLGFBQWE7SUFVdEIsdUJBQ1UsS0FBcUIsRUFDckIsbUJBQXNDLEVBQ3RDLEdBQVMsRUFDbUIsaUJBQW1DLEVBQy9ELFdBQXlCO1FBSnpCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsUUFBRyxHQUFILEdBQUcsQ0FBTTtRQUNtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQy9ELGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBWjdCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBQzlCLFNBQUksR0FBVyxJQUFJLENBQUMsQ0FBQyxzQkFBc0I7UUFDM0MsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7SUFXdEUsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDM0MsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU3QixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLGNBQWMs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QUssQ0FBQyxFQUFFO3dCQUNiLE9BQU8sRUFBQyxLQUFLLENBQUMsSUFBSTtxQkFDbkIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDN0MsaUNBQWlDO1FBRWpDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQUMsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FBQyxBQWxQRCxJQWtQQztBQTNPb0Q7SUFBbEQsZ0JBQVMsQ0FBQyxXQUFXLEVBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQWdCLEVBQUUsQ0FBQzs4QkFBYSx1QkFBZ0I7Z0RBQUM7QUFDN0Q7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQWUsaUJBQVU7a0RBQUM7QUFSakMsYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQ3pCLENBQUM7SUFnQkssV0FBQSxhQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtxQ0FIWix1QkFBYztRQUNBLHdCQUFpQjtRQUNqQyxXQUFJO1FBQ3NDLG9DQUFnQjtRQUNqRCwwQkFBVztHQWYxQixhQUFhLENBa1B6QjtBQWxQWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsXG4gICAgICAgIE9uRGVzdHJveSwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgXG4gICAgICAgIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnQgfSBmcm9tIFwiLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9keW5hbWljLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9mb3JtL2Zvcm0uc2VydmljZVwiO1xuaW1wb3J0IHsgRWxlbWVudEZhY3RvcnksIEFic3RyYWN0RWxlbWVudCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZmFjdG9yeS9lbGVtZW50XCI7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2hlY2tib3hcIjtcbmltcG9ydCB7IFByb3h5Vmlld0NvbnRhaW5lciB9IGZyb20gXCJ1aS9wcm94eS12aWV3LWNvbnRhaW5lclwiXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7IFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImZvcm1cIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZm9ybS9mb3JtLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9mb3JtL2Zvcm0tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2Zvcm0vZm9ybS5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0Zvcm1TZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlkIDogbnVtYmVyO1xuICBwcml2YXRlIHN1YiA6IGFueTtcbiAgcHJpdmF0ZSBmb3JtTG9hZGluZyA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYWdlOiBPYmplY3QgPSBudWxsOyAvL0xva2FhbCBmb3JtIHJlbmRlcmVuXG4gIHByaXZhdGUgZm9ybVBheWxvYWQgPSBbXTsgLy9BcnJheSBPYmplY3QgZGF0IHVpdGVpbmRlbGlqayAndmVyd2Vya3QnIHdvcmR0LlxuXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIix7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY29udGFpbmVyIDogVmlld0NvbnRhaW5lclJlZjtcbiAgQFZpZXdDaGlsZChcImZvcm1cIikgZm9ybUVsZW1lbnQgOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICBwcml2YXRlIGRvbTogUGFnZSxcbiAgICAgIEBJbmplY3QoXCJEeW5hbWljQ29tcG9uZW50XCIpIHByaXZhdGUgX2R5bmFtaWNDb21wb25lbnQ6IER5bmFtaWNDb21wb25lbnQsXG4gICAgICBwcml2YXRlIGZvcm1TZXJ2aWNlIDogRm9ybVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIHRoaXMuaWQgPSArcGFyYW1zWydwYWdlX2lkJ107XG5cbiAgICAgICAgaWYoaXNOYU4odGhpcy5pZCkgfHwgdGhpcy5pZCA9PT0gOTkpe1xuICAgICAgICAgIHRoaXMuaWQ9OTk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVEZW1vUGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBhZ2UoKXtcbiAgICAgIHRoaXMuZm9ybVNlcnZpY2UubG9hZFBhZ2UodGhpcy5pZCkuc3Vic2NyaWJlKChkYXRhKT0+e1xuICAgICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhO1xuICAgICAgICB0aGlzLnJlbmRlclBhZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZURlbW9QYWdlKCl7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuICAgICAgdGhpcy5wYWdlID0ge1xuICAgICAgICAnSWQnOiA5OSxcbiAgICAgICAgJ1RpdGxlJzogJ1N0YXJ0cGFnaW5hJyxcbiAgICAgICAgJ1Jvd3MnOlt7XG4gICAgICAgICAgJ0lkJzogMSxcbiAgICAgICAgICAnVmlzaWJsZSc6dHJ1ZSxcbiAgICAgICAgICAnVGl0bGUnOidXZWxrb20nLFxuICAgICAgICAgICdFbGVtZW50cyc6W3tcbiAgICAgICAgICAgICdMYWJlbCc6J1dlbGtvbScsXG4gICAgICAgICAgICAnVHlwZSc6J2hlYWRlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdMYWJlbCc6J1dlbGtvbSAyJyxcbiAgICAgICAgICAgICdUeXBlJzonaGVhZGVyJ1xuICAgICAgICAgIH1dIFxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyUGFnZSgpO1xuICAgIH1cblxuICAgIHJlbmRlclBhZ2UoKXtcbiAgICAgIHRoaXMucGFnZVsnUm93cyddLmZvckVhY2goKHJvdyk9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnBhZ2UuRWxlbWVudHMuc2l6ZT1cIiArIHJvdy5FbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICByb3cuRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcbiAgICAgICAgICBsZXQgZWxlbWVudE9iamVjdCA6IEFic3RyYWN0RWxlbWVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhYmVsXCIpO1xuICAgICAgICAgIGVsZW1lbnRPYmplY3QgPSBFbGVtZW50RmFjdG9yeS5jcmVhdGVFbGVtZW50KGVsZW1lbnQuVHlwZSwgZWxlbWVudCk7XG4gICAgICAgICAgaWYoZWxlbWVudE9iamVjdCE9PW51bGwpe1xuICAgICAgICAgICAgLy9BZGQgbGFiZWxcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbGVtZW50T2JqZWN0LmxhYmVsIT09J3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgJiYgZWxlbWVudE9iamVjdC5sYWJlbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IGxhYmVsT2JqZWN0ID0gRWxlbWVudEZhY3RvcnkuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50T2JqZWN0LmxhYmVsLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsYWJlbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9keW5hbWljQ29tcG9uZW50LmFkZENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLCBsYWJlbE9iamVjdC5yZW5kZXIoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhYmVsMVwiKTtcbiAgICAgICAgICAgIC8vTWFpbiBFbGVtZW50XG4gICAgICAgICAgICBsZXQgX2NvbXBvbmVudCA9IDxhbnk+XG4gICAgICAgICAgICB0aGlzLl9keW5hbWljQ29tcG9uZW50LmFkZENvbXBvbmVudChcbiAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIsIGVsZW1lbnRPYmplY3QucmVuZGVyKClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vQWRkIEhlbHBlclxuICAgICAgICAgICAgaWYodHlwZW9mIGVsZW1lbnRPYmplY3QuaGVscGVyIT09J3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgJiYgZWxlbWVudE9iamVjdC5oZWxwZXIubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgIGxldCBsYWJlbE9iamVjdCA9IEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudE9iamVjdC5oZWxwZXIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2hlbHBlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9keW5hbWljQ29tcG9uZW50LmFkZENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLCBsYWJlbE9iamVjdC5yZW5kZXIoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhYmVsMlwiKTtcbiAgICAgICAgICAgIC8vQmluZCBldmVudHNcbiAgICAgICAgICAgIGlmKGVsZW1lbnRPYmplY3QuaGFzRXZlbnQ9PXRydWUpe1xuICAgICAgICAgICAgICAvL0hhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgICAgICAgaWYoZWxlbWVudC5UeXBlPT0nc3VibWl0Jyl7XG4gICAgICAgICAgICAgICAgX2NvbXBvbmVudC5wcm90b3R5cGUub25UYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGFiZWwzXCIpO1xuICAgICAgICAgICAgICAvL0hhbmRsZSBjYW1lcmEvcGhvdG8gY2xpY2tcbiAgICAgICAgICAgICAgaWYoZWxlbWVudC5UeXBlPT0nY2FtZXJhJykge1xuICAgICAgICAgICAgICAgIF9jb21wb25lbnQucHJvdG90eXBlLm9uVGFwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1Mb2FkaW5nPWZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhclBhZ2UoKXtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLmZvcm1Mb2FkaW5nPWZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBnZXRDYW1lcmFJbWFnZUVsZW1lbnQoKXtcbiAgICAgIGxldCBlbDogU3RhY2tMYXlvdXQgPSB0aGlzLmZvcm1FbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBmb3IobGV0IGk9MjtpPGVsLmdldENoaWxkcmVuQ291bnQoKTtpKyspe1xuICAgICAgICBsZXQgY2hpbGQgPSA8UHJveHlWaWV3Q29udGFpbmVyPmVsLmdldENoaWxkQXQoaSk7XG4gICAgICAgICAgZm9yKGxldCB4PTA7eDxjaGlsZC5nZXRDaGlsZHJlbkNvdW50KCk7eCsrKXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gPEltYWdlPmNoaWxkLmdldENoaWxkQXQoeCk7XG4gICAgICAgICAgICBpZihlbGVtZW50LmlkID09J2ltZ19jYW1lcmEnKVxuICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RHJvcERvd25FbGVtZW50KCl7XG4gICAgICBsZXQgZWw6IFN0YWNrTGF5b3V0ID0gdGhpcy5mb3JtRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgZm9yKGxldCBpPTI7aTxlbC5nZXRDaGlsZHJlbkNvdW50KCk7aSsrKXtcbiAgICAgICAgbGV0IGNoaWxkID0gPFByb3h5Vmlld0NvbnRhaW5lcj5lbC5nZXRDaGlsZEF0KGkpO1xuICAgICAgICAgIGZvcihsZXQgeD0wO3g8Y2hpbGQuZ2V0Q2hpbGRyZW5Db3VudCgpO3grKyl7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IDxEcm9wRG93bj5jaGlsZC5nZXRDaGlsZEF0KHgpO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PSdkcm9wZG93bicpXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0SW1hZ2VQaWNrZXJFbGVtZW50KCl7IFxuICAgICAgbGV0IGVsOiBTdGFja0xheW91dCA9IHRoaXMuZm9ybUVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZm9yKGxldCBpPTI7aTxlbC5nZXRDaGlsZHJlbkNvdW50KCk7aSsrKXtcbiAgICAgICAgICBsZXQgY2hpbGQgPSA8UHJveHlWaWV3Q29udGFpbmVyPmVsLmdldENoaWxkQXQoaSk7XG4gICAgICAgICAgICBmb3IobGV0IHg9MDt4PGNoaWxkLmdldENoaWxkcmVuQ291bnQoKTt4Kyspe1xuICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IDxJbWFnZT5jaGlsZC5nZXRDaGlsZEF0KHgpO1xuICAgICAgICAgICAgICBpZihlbGVtZW50LmlkID09J2ltYWdlcGlja2VyJylcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJhZGlvRWxlbWVudCgpe1xuICAgICAgbGV0IGVsOiBTdGFja0xheW91dCA9IHRoaXMuZm9ybUVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIGZvcihsZXQgaT0yO2k8ZWwuZ2V0Q2hpbGRyZW5Db3VudCgpO2krKyl7XG4gICAgICAgIGxldCBjaGlsZCA9IDxQcm94eVZpZXdDb250YWluZXI+ZWwuZ2V0Q2hpbGRBdChpKTtcbiAgICAgICAgICBmb3IobGV0IHg9MDt4PGNoaWxkLmdldENoaWxkcmVuQ291bnQoKTt4Kyspe1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSA8RHJvcERvd24+Y2hpbGQuZ2V0Q2hpbGRBdCh4KTtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT0ncmFkaW8nKVxuICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZURyb3BEb3duKGRyb3BEb3duU3RyaW5nKXtcbiAgICAgIGxldCBkYXRhID0gW107XG4gICAgICBsZXQgc2VsZWN0ZWRJbmRleDpudW1iZXIgPSAwO1xuICAgICAgbGV0IG9wdGlvbnMgPSBKU09OLnBhcnNlKGRyb3BEb3duU3RyaW5nWydPcHRpb25zJ10pO1xuICAgICAgb3B0aW9ucy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgZGF0YS5wdXNoKHJvd1snVGl0bGUnXSk7XG4gICAgICAgIGlmKHJvd1snU2VsZWN0ZWQnXSA9PSB0cnVlKSBcbiAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICAgICAgfSk7XG4gICAgICBsZXQgZHJvcERvd25FbGVtZW50OkRyb3BEb3duID0gPERyb3BEb3duPiB0aGlzLmdldERyb3BEb3duRWxlbWVudCgpO1xuICAgICAgZHJvcERvd25FbGVtZW50LnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgZHJvcERvd25FbGVtZW50Lml0ZW1zID0gZGF0YTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgIHRoaXMuZm9ybVBheWxvYWQgPSBbXTtcbiAgICAgIHRoaXMuZm9ybVBheWxvYWQucHVzaCh7XG4gICAgICAgIGZvcm1JZDp0aGlzLmlkXG4gICAgICB9KTtcbiAgICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgICAgbGV0IGVsOiBTdGFja0xheW91dCA9IHRoaXMuZm9ybUVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgY29uc29sZS5sb2coJ0NoaWxkcmVuIENvdW50OicgKyBlbC5nZXRDaGlsZHJlbkNvdW50KCkpO1xuICAgICAgZm9yKGxldCBpPTI7aTxlbC5nZXRDaGlsZHJlbkNvdW50KCk7aSsrKXtcblxuICAgICAgICAvL2luZGV4IHN0YXJ0cyBhdCAyIC0+IDAtYWN0aXZpdHlpbmRpY2F0b3IsMS1zdGFja2xheW91dFxuICAgICAgICBsZXQgY2hpbGQgPSA8UHJveHlWaWV3Q29udGFpbmVyPmVsLmdldENoaWxkQXQoaSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm94eSBDaGlsZCBDb3VudDonICsgY2hpbGQuZ2V0Q2hpbGRyZW5Db3VudCgpKTtcblxuICAgICAgICBmb3IobGV0IHg9MDt4PGNoaWxkLmdldENoaWxkcmVuQ291bnQoKTt4Kyspe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd4PSA6JyArIHgpO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IDxUZXh0RmllbGQ+Y2hpbGQuZ2V0Q2hpbGRBdCh4KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUudGV4dCA9ICcgKyB2YWx1ZS50ZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUuaWQgPSAnICsgdmFsdWUuaWQpO1xuICAgICAgICAgIGlmKHZhbHVlLnRleHQgJiYgdmFsdWUuaWQpe1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICdpZCc6dmFsdWUuaWQsXG4gICAgICAgICAgICAgICd2YWx1ZSc6dmFsdWUudGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5mb3JtUGF5bG9hZC5wdXNoKHsnZWxlbWVudHMnOmVsZW1lbnRzfSk7XG4gICAgICAvL2NvbnNvbGUuZHVtcCh0aGlzLmZvcm1QYXlsb2FkKTtcblxuICAgICAgbGV0IHN0ckRpYWxvZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBmb3JtUGF5bG9hZDogdGhpcy5mb3JtUGF5bG9hZH0pO1xuXG4gICAgICBkaWFsb2dzLmFsZXJ0KHN0ckRpYWxvZykudGhlbigoKT0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBcbn0iXX0=