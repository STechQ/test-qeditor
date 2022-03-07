## DxDataGrid

The DxDataGridcomponent is typically used to display data.
The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, client-side exporting, master-detail interface, and many others.
See the [component page](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/)

#### DxDataGrid Update Data
You should update dxDataGrid compoent after you set any property in the runtime. 

You can use: Quick.updateComponent(ComponentQId)

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxDatagridUpdate.qjson" target="_blank">dxDatagridUpdate</a>

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

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxTotalItemCustomizeText.qjson" target="_blank">dxTotalItemCustomizeText</a>

#### DxDataGrid Remove Data Sample

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxDataGridRemove.qjson" target="_blank">dxDataGridRemove</a>
#### DxDataGrid DxMasterDetail Usage

Open the DxMasterDetail switch and add new dropable column. Then drag the component you want to the column you just added for the master detail. Set dxMasterDetail enabled : true and template:'just added column name'

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/dxMasterDetail.png)

Finally you can see the master detail component but you should visible:false for the unnecessary column.

Click to the new DxColumn component on tree view and set visible property to false.

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxMasterDetail.qjson" target="_blank">dxMasterDetail</a>

#### DxColumn fixed & allowFixing Properties

DxDataGrid containing many columns that cause horizontal scrolling provide fixed and allowFixing options. 

Enabling the fixed property on a DxColumn stabilizes the column in a fixed place regardless of  scrolling. Whereas, enabling the allowFixing property on a DxColumn provides options whether the column should be fixed to the right or to the left side of the table when a column on the table is right clicked.

Sample usage of these properties are shown below:

***Fixed Property*** 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/DxDataGrid_ColumnFixed.gif)

***allowFixing Property***

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/DxDataGrid_ColumnAllowFixing.gif)




#### DxColumnChooser & DxColumnFixer Sample

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/DxColumnChooser_DxColumnFixer.qjson" target="_blank">DxColumnChooser_DxColumnFixer</a>
#### DxDataGrid OnCellClick

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/onCellClickDx.qjson" target="_blank">dxMasterDetail</a>
#### Simple Data Grid Array Store Sample


Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/Simplest_Grid_With_Array_Store.qjson" target="_blank">Simplest_Grid_With_Array_Store</a>


#### DxDataGrid Menu Column

A menu column can be added into DxDataGrid component with VMenu component. 
Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/Grid_with_menu.qjson" target="_blank">Simplest_Grid_With_Array_Store</a>

#### DxDataGrid State Storing

Filters on DxDataGrid can be saved and load with DxStateStoring component.
Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/State_storing.qjson" target="_blank">State_storing</a>

#### DxColumn fixed & allowFixing Properties Sample
Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/DxColumn_fix_allowFixing.qjson" target="_blank">DxColumn_fix_allowFixing</a>


#### DxDatagrid Adding, Updating and Deleting 

The UI component can allow a user to add, update and delete data. To control which of these operations are allowed, use the *allowAdding*, *allowUpdating* and *allowDeleting* properties. Mode property is specifies how a user edits data:  '*batch*' , '*cell*' , '*row*' ,'*form*' , '*popup*'.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/addingdeleting.gif)


Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxDataGridAddinEditingDeleting.qjson" target="_blank">dxDataGridAddinEditingDeleting</a>



#### DxDataGrid Column Resizing 

Specifies how the UI component resizes columns. Applies only if allowColumnResizing is true.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/resizing.gif)

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/columnResizingMode.qjson" target="_blank">columnResizingMode</a>


#### DxColumn Background Color Change Sample

You can set the *cssClass* of the column.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/cssClass.PNG)

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxColumncssClass.qjson" target="_blank">dxColumncssClass</a>


#### DxDataGrid Service Call Sample

Notifies the DataGrid of the server's data processing operations.

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxPaging_withServiceCall.qjson" target="_blank">dxPaging_withServiceCall</a>


#### DxDataGrid Hiding Column Lines

Specifies whether vertical lines that separate one column from another are visible.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/columnlines.PNG)

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/dxDataGridLines.qjson" target="_blank">dxDataGridLines</a>
#### DxDataGrid External Filtering

Example usage for external filtering of dxdatagrid.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/externalfiltering.gif)

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/externalFiltering.qjson" target="_blank">externalFiltering</a>


#### DxDataGrid External Filter Cleaning 

Example usage for dxdatagrid filter cleaning from outside.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/DxDataGrid/extarnalfilterClear.gif)

Example file: <a href="https://studio.onplateau.com/quick/?q=/qjsons/filtercleaning.qjson" target="_blank">filtercleaning</a>
