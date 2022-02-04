# General Quick APIs

## Interaction Between Components
Components are created with a unique id when they are created. These ids are called QIDs and a created component can be accessed via this given id. When it is desired to access the fields on the components, access is provided via these ids. For this reason, the id of each component must be unique. Otherwise, you will get an error in the editor and the components will be overlapped.

In order to access created components, component instance can be accessed with components.{{compQID}} and {{compQID}} keyword while inside prop.

In typescript events, the types of components and the accessible areas on them can be seen via intellisense.


> > ```js
> > components.{{compQID}}.{{fieldName}} //fieldName can be a property event or an normal field on the component instance
> > ```

## Trace Log 

To trace anything in the console, use the **EM.trace** method in anywhere with the given parameter. Logs are written with green backgroun color and white text in web browser. These logs are also added to client side(see the Client Side document.) 

> quick.EM.trace(traceMessage: any)
> > ```js
> > quick.EM.trace('TraceMessage: Success')
> > ```
> 

## Binded Values 

Common need for using data is to bind it somewhere and whenever it changes, trigger dependent fields with the new changes. **Quick.bind** system can be used for this need.
Quick.bind has to be declared in PreRender and binded object must be **store**. Binded fields have to be declared at the second parameter as a string array.
> quick.Quick.bind({ bindedObject, fields }: {
>    bindedObject: string;
>    fields: object | string[];
>})
> > ```ts
> > quick.Quick.bind({ bindedObject: "store", fields: ["testField"] });
> > ```
> 


Example file: <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/EditorUsage/Quick_Bind.qjson" target="_blank">Quick Bind</a>

## Deep Copy Object

Copies an object with deep cloning. Changes on the new copied object will not effect to the copied object

> quick.Quick.copy(obj: any)
> > ```js
> > let obj = [{param1:'value1', param2:'value2'},{param3:'value3', param4:'value4'}]
> > let newCopiedObj = quick.Quick.copy(obj)
> > newCopiedObj.push({param5:'value5', param6:'value6'})
> > quick.EM.trace(newCopiedObj)
> > quick.EM.trace(obj)
> > ```
> 

## Download

To download any file, it must have a base64 type string value. The download process can be started by giving this variable and the file name to be downloaded as a parameter to the Quick.download method.

> quick.Quick.download({data: base64, name: string})

Example file: <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/EditorUsage/Downlad.qjson" target="_blank">Downlad a File</a>

## Reset


The Reset() function ensures that the set values and validations of the components are cleared.

The ResetValidation() function only clears validations, it has no effect on other variables.

While the reset() and resetValidation() functions affect the components it is used on, it also affects the other components in it when used on the VCard and VContainer components.

The uses of these two functions are as follows;

***Typescript Syntax :***      

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/typeSyntax.png)

***Qscript Syntax :***

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/qSyntax.png)

***Usage of Reset() function on VTextfield and VInlineDatePicker:*** 

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetComponent.gif)

***Usage of ResetValidation() function on VTextfield and VInlineDatePicker:*** 

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetComponentValidation.gif)

***Usage of Reset() function on VCard:***  

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetCard.gif)

***Usage of ResetValidation() function on VCard:***

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetCardValidation.gif)

***Example Qjson File :***

[resetAndResetValidationUsage.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/resetValidation/resetAndResetValidationUsage.qjson)

## Export To XLSX
Quick.exportToXlsx method can be used to export specific data to excel file

**Params**
* fileName: string -> name for the file without extension.
* items: Array -> the array of items to export
* headers: Array -> the array of headers for cell header. the array of instances have to contains **value** and **text** props like "[{value='fat', text='Fat (g)'}]" 
* 
> quick.Quick.exportToXlsx(fileName: string, items: Array<object>, headers: Array<object>)
> > ```js
> > quick.Quick.exportToXlsx({fileName:'test', items:dataTable.items, headers:dataTable.headers})
> > ```


> Or
> > ```js
> > let headers = [{value:'name', text:'Name'}, {value:'fat', text:'Fat (g)'}]
> > quick.Quick.exportToXlsx({fileName:'test', items: component.datatable.items, headers:headers})
> > ```


> Or export object sub member variables to excel
> > ```ts
> > let items: object[] = [
> >     { fat: { a1: { a: "aa1" } }, bat: "b1" },
> >     { fat: { a1: { a: "aa1" } }, bat: "b1" },
> >     { fat: { a1: { a: "aa1" } }, bat: "b1" },
> >     { fat: { a1: { a: "aa1" } }, bat: "b1" }
> > ]
> > let headers: object[] = [{ value: 'fat.a1.a', text: 'Fat (g)' }, { value: 'bat', text: 'bat (g)' }];
> > 
> > quick.Quick.exportToXlsx({ fileName: "deneme", items, headers });
> > ```


After that the data is downloaded as test.**xlsx**

Example file: <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/EditorUsage/ExporttoXLSX.qjson" target="_blank">Export To xlsx</a>

