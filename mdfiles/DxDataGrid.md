## DxDataGrid

The DxDataGridcomponent is typically used to display data.
The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, client-side exporting, master-detail interface, and many others.
See the [component page](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/)

#### DxDataGrid Update Data
You should update dxDataGrid compoent after you set any property in the runtime. 

You can use: Quick.updateComponent(ComponentQId)

Ex: [dxDatagridUpdate.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxDatagridUpdate.qjson)

#### DxDataGrid Bar Usage

When you drag and drop the DataGrid, you can manage certain properties from the bar on the right. You can start using the following features by directly turning them on and off on the switch.

> All DataGrid properties can be use. Contact for closed properties.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/barUsage.png)

#### DxDataGrid Adding Custom Column and Dragging Component

You can add new custom column with add dropable column button. Before adding a new column, make sure you give it a name. When you add a new column, you will see a dxcolumn and ghost on the treeView. Then you can drag a component on the screen through the tree view and drop it on the ghost. Finally you can see the dropped component on the DxDataGrid.

1. ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/addColumn.png)
2. ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/addColumnTreeview.png)
3. ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/addColumnTreeview2.png)
4. ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/testColumn.png)

#### Dropped Component Scope Data Feature Usage

When you drag a component, you can click on the component from both the render screen and the tree view.

You can pass the table data as **data.data.x**(example: data.data.name or data.data.calories) in the related property of this component.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/data.png)

- Sample DxDataGrid data for this example

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/data2.png)

#### DxDataGrid DxSummary, DxTotalItem Usage

Open up the DxSummary Switch then add total item. 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/dxSummary.png)

After that, you should set **column**(Column Name) and **summaryType**(count, sum etc..) properties on DxTotalItem component.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/dxSummary2.png)

#### DxDataGrid Summary Localization

You can use customizeText event for this feature like this.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/dxSummary3.png)

Sample : [dxTotalItemCustomizeText.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxTotalItemCustomizeText.qjson)


#### DxDataGrid Remove Data Sample

[dxDataGridRemove.js](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxDataGridRemove.js)

#### DxDataGrid DxMasterDetail Usage

Open the DxMasterDetail switch and add new dropable column. Then drag the component you want to the column you just added for the master detail. Set dxMasterDetail enabled : true and template:'just added column name'

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/dxMasterDetail.png)

Finally you can see the master detail component but you should visible:false for the unnecessary column.

Click to the new DxColumn component on tree view and set visible property to false.

Sample: [dxMasterDetail.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxMasterDetail.qjson)


#### DxColumn fixed & allowFixing Properties

DxDataGrid containing many columns that cause horizontal scrolling provide fixed and allowFixing options. 

Enabling the fixed property on a DxColumn stabilizes the column in a fixed place regardless of  scrolling. Whereas, enabling the allowFixing property on a DxColumn provides options whether the column should be fixed to the right or to the left side of the table when a column on the table is right clicked.

Sample usage of these properties are shown below:

***Fixed Property*** 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/DxDataGrid_ColumnFixed.gif)

***allowFixing Property***

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/DxDataGrid_ColumnAllowFixing.gif)




#### DxColumnChooser & DxColumnFixer Sample

sample : [DxColumnChooser_DxColumnFixer.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/DxColumnChooser_DxColumnFixer.qjson)

#### DxDataGrid OnCellClick

sample: [onCellClickDx.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/onCellClickDx.qjson)

#### Simple Data Grid Array Store Sample

sample : [Simplest_Grid_With_Array_Store.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/Simplest_Grid_With_Array_Store.qjson)


#### DxDataGrid Menu Column

A menu column can be added into DxDataGrid component with VMenu component. 
Sample:
[Grid_with_menu.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/Grid_with_menu.qjson)


#### DxDataGrid State Storing

Filters on DxDataGrid can be saved and load with DxStateStoring component.
Sample: [State_storing.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/State_storing.qjson)


#### DxColumn fixed & allowFixing Properties Sample

Sample: [DxColumn_fix_allowFixing.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/DxColumn_fix_allowFixing.qjson)



#### DxDatagrid Adding, Updating and Deleting 

The UI component can allow a user to add, update and delete data. To control which of these operations are allowed, use the *allowAdding*, *allowUpdating* and *allowDeleting* properties. Mode property is specifies how a user edits data:  '*batch*' , '*cell*' , '*row*' ,'*form*' , '*popup*'.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/addingdeleting.gif)


Sample: [dxDataGridAddinEditingDeleting.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxDataGridAddinEditingDeleting.qjson)




#### DxDataGrid Column Resizing 

Specifies how the UI component resizes columns. Applies only if allowColumnResizing is true.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/resizing.gif)

Sample:  [columnResizingMode.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/columnResizingMode.qjson) 



#### DxColumn Background Color Change Sample

You can set the *cssClass* of the column.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/cssClass.PNG)

Sample:  [dxColumncssClass.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxColumncssClass.qjson) 



#### DxDataGrid Service Call Sample

Notifies the DataGrid of the server's data processing operations.

Sample:  [dxPaging_withServiceCall.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxPaging_withServiceCall.qjson) 



#### DxDataGrid Hiding Column Lines

Specifies whether vertical lines that separate one column from another are visible.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/columnlines.PNG)

Sample: [dxDataGridLines.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/dxDataGridLines.qjson) 

#### DxDataGrid External Filtering

Example usage for external filtering of dxdatagrid.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/externalfiltering.gif)

Sample: [externalFiltering.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/externalFiltering.qjson) 



#### DxDataGrid External Filter Cleaning 

Example usage for dxdatagrid filter cleaning from outside.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/extarnalfilterClear.gif)

Sample: [filtercleaning.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/DxDataGrid/filtercleaning.qjson) 

