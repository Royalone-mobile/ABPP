import { Inject, Component, OnInit, ElementRef,
        OnDestroy, ViewChild, ChangeDetectorRef, 
        ViewContainerRef, AfterViewInit, Renderer } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { DynamicComponent } from "./../../shared/components/dynamic.component";
import { FormService } from "../../shared/models/form/form.service";
import { ElementFactory, AbstractElement } from "../../shared/factory/element";

import { Label } from "ui/label";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { CheckBox } from "nativescript-checkbox";
import { ProxyViewContainer } from "ui/proxy-view-container"
import { StackLayout } from "ui/layouts/stack-layout";
import dialogs = require("ui/dialogs");
import { Image } from "ui/image";
import { DropDown } from "nativescript-drop-down"; 
@Component({
  selector: "form",
  templateUrl: "pages/form/form.html",
  styleUrls: ["pages/form/form-common.css", "pages/form/form.css"],
  providers: [FormService]
})

export class FormComponent implements OnInit, OnDestroy {
  id : number;
  private sub : any;
  private formLoading : boolean = false;
  private page: Object = null; //Lokaal form renderen
  private formPayload = []; //Array Object dat uiteindelijk 'verwerkt' wordt.

  @ViewChild("container",{ read: ViewContainerRef }) container : ViewContainerRef;
  @ViewChild("form") formElement : ElementRef;

    constructor(
      private route: ActivatedRoute,
      private _changeDetectionRef: ChangeDetectorRef,
      private dom: Page,
      @Inject("DynamicComponent") private _dynamicComponent: DynamicComponent,
      private formService : FormService
    ) {}

    ngOnInit(){
      this._changeDetectionRef.detectChanges();
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['page_id'];

        if(isNaN(this.id) || this.id === 99){
          this.id=99;
          this.createDemoPage();
        } else {
          this.createPage();
        }

      });
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

    createPage(){
      this.formService.loadPage(this.id).subscribe((data)=>{
        this.clearPage();
        this.page = data;
        this.renderPage();
      });
    }

    createDemoPage(){
      this.clearPage();
      this.page = {
        'Id': 99,
        'Title': 'Startpagina',
        'Rows':[{
          'Id': 1,
          'Visible':true,
          'Title':'Welkom',
          'Elements':[{
            'Label':'Welkom',
            'Type':'header'
          },
          {
            'Label':'Welkom 2',
            'Type':'header'
          }] 
        }]
      };
      this.renderPage();
    }

    renderPage(){
      this.page['Rows'].forEach((row)=>{
        console.log("this.page.Elements.size=" + row.Elements.length);
        row.Elements.forEach((element)=>{
          let elementObject : AbstractElement;
          console.log("Label");
          elementObject = ElementFactory.createElement(element.Type, element);
          if(elementObject!==null){
            //Add label
            if(typeof elementObject.label!=='undefined'
              && elementObject.label.length > 0){
                
              let labelObject = ElementFactory.createElement(
                'label',
                {
                  value: elementObject.label,
                  class: 'label'
                });
                this._dynamicComponent.addComponent(
                  this.container, labelObject.render()
                );
            }
            console.log("Label1");
            //Main Element
            let _component = <any>
            this._dynamicComponent.addComponent(
              this.container, elementObject.render()
            );

            if(element.Type == 'dropdown') 
                initializeDropDown(element);
            else if(element.Type == 'radio')
                initializeRadio(element);

            //Add Helper
            if(typeof elementObject.helper!=='undefined'
              && elementObject.helper.length > 0){
              let labelObject = ElementFactory.createElement(
                'label',
                {
                  value: elementObject.helper,
                  class: 'helper'
                });
                this._dynamicComponent.addComponent(
                  this.container, labelObject.render()
                );
            }
            console.log("Label2");
            //Bind events
            if(elementObject.hasEvent==true){
              //Handle form submission
              if(element.Type=='submit'){
                _component.prototype.onTap = () => {
                  this.submit();
                }
              } 
            console.log("Label3");
              //Handle camera/photo click
              if(element.Type=='camera') {
                _component.prototype.onTap = () => {
                  
                }
              }
            }
          }
        });

      });
      this.formLoading=false;
      this._changeDetectionRef.detectChanges();
    }

    clearPage(){
      this.container.clear();
      this.formLoading=false;
      this._changeDetectionRef.detectChanges();
    }

    getCameraImageElement(){
      let el: StackLayout = this.formElement.nativeElement;
      for(let i=2;i<el.getChildrenCount();i++){
        let child = <ProxyViewContainer>el.getChildAt(i);
          for(let x=0;x<child.getChildrenCount();x++){
            let element = <Image>child.getChildAt(x);
            if(element.id =='img_camera')
              return element;
        }
      }
    }

    getDropDownElement(){
      let el: StackLayout = this.formElement.nativeElement;
      for(let i=2;i<el.getChildrenCount();i++){
        let child = <ProxyViewContainer>el.getChildAt(i);
          for(let x=0;x<child.getChildrenCount();x++){
            let element = <DropDown>child.getChildAt(x);
            if(element.id =='dropdown')
              return element;
          }
      }
    }
    
    getImagePickerElement(){ 
      let el: StackLayout = this.formElement.nativeElement;
        for(let i=2;i<el.getChildrenCount();i++){
          let child = <ProxyViewContainer>el.getChildAt(i);
            for(let x=0;x<child.getChildrenCount();x++){
              let element = <Image>child.getChildAt(x);
              if(element.id =='imagepicker')
                return element;
            }
        }
    }

    getRadioElement(){
      let el: StackLayout = this.formElement.nativeElement;
      for(let i=2;i<el.getChildrenCount();i++){
        let child = <ProxyViewContainer>el.getChildAt(i);
          for(let x=0;x<child.getChildrenCount();x++){
            let element = <DropDown>child.getChildAt(x);
            if(element.id =='radio')
              return element;
          }
      }
    }

    takePictureFromCamera(){
      camera.requestPermissions();
      let isCameraAvailable = camera.isAvailable();
      let strCamera:string = "Camera is not available";
      if(isAvailable == false) {
        //dialog.alert(strCamera);
        //return;
      }
      camera.takePicture()
        .then((imageAsset) => {
          console.log("Result is an image asset instance");
          let image = new Image();
          image.src = imageAsset;
          imageSource.fromAsset(imageAsset)
          .then((res)=>{
              console.log('width =' + res.width);
              console.log('base64 string = ' + res.toBase64String("png",90));
              let cameraImgElement:Image = <Image>this.getCameraImageElement();
              cameraImgElement.src = "'data:image/png;base64,";
              cameraImgElement.src += res.toBase64String("png",90);
              cameraImgElement.src += "'";
          },(error)=>{ 
            console.log("error loading image:" +error);
          });

        }).catch((err) => {
          console.log("Error -> " + err.message);
      });
     }

    showImagePicker(){
      let context = imagepicker.create({
        mode:"single"
      });
      context
        .authorize()
        .then(function() {
            return context.present();
        })
        .then((selection) =>{
            console.log("Selection done:");
            selection.forEach((selected) =>{
                console.log(" - " + selected.uri);
                selected.getImage().then((imgSource) => {
                   //imageTagInXML.imageSource = imgSource;
                   console.log('dddfd');
                });
            });
        }).catch(function (e) {
            console.log(e);
      });
    }

    initializeRadio(radioString){
      let data = [];
      let selectedIndex:number = 0;
      let options = JSON.parse(radioString['Options']);
      options.forEach((row) => {
        data.push(row['Title']);
        if(row['Selected'] == true) 
          selectedIndex = data.length - 1;
      });
      let radioElement:Radio = <Radio> this.getRadioElement();
      radioElement.selectedIndex = selectedIndex;
      radioElement.items = data;
    }


    initializeDropDown(dropDownString){
      let data = [];
      let selectedIndex:number = 0;
      let options = JSON.parse(dropDownString['Options']);
      options.forEach((row) => {
        data.push(row['Title']);
        if(row['Selected'] == true) 
          selectedIndex = data.length - 1;
      });
      let dropDownElement:DropDown = <DropDown> this.getDropDownElement();
      dropDownElement.selectedIndex = selectedIndex;
      dropDownElement.items = data;
    }

    submit(){
      this.formPayload = [];
      this.formPayload.push({
        formId:this.id
      });
      let elements = [];
      let el: StackLayout = this.formElement.nativeElement;

      console.log('Children Count:' + el.getChildrenCount());
      for(let i=2;i<el.getChildrenCount();i++){

        //index starts at 2 -> 0-activityindicator,1-stacklayout
        let child = <ProxyViewContainer>el.getChildAt(i);
        console.log('Proxy Child Count:' + child.getChildrenCount());

        for(let x=0;x<child.getChildrenCount();x++){
          console.log('x= :' + x);
          let value = <TextField>child.getChildAt(x);
          console.log('value.text = ' + value.text);
          console.log('value.id = ' + value.id);
          if(value.text && value.id){
            elements.push({
              'id':value.id,
              'value':value.text
            });
          } 
        }
      }
      this.formPayload.push({'elements':elements});
      //console.dump(this.formPayload);

      let strDialog = JSON.stringify({
                formPayload: this.formPayload});

      dialogs.alert(strDialog).then(()=> {
            
        });
    }

    
}