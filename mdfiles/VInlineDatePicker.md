## VInlineDatepicker

## Quick

| Attribute | Description          |  Type   |  Default   |
| --------- | -------------------- | :-----: | :--------: |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean |     -      |

## Others

## 

| Attribute | Description                                                  | Type    |    Default    |
| --------- | ------------------------------------------------------------ | ------- | :-----------: |
| multiple  | Allow the selection of multiple dates                        | Boolean |     false     |
| range     | Allow the selection of date range                            | Boolean |     false     |
| disabled  | Disables interaction with the picker                         | Boolean |     false     |
| min       | Maximum allowed date/month (format that defined at settings file) | String  |       -       |
| max       | Maximum allowed date/month (format that defined at settings file) | String  |       -       |
| label     | Datepicker text-field label value                            | String  | 'Pick a date' |



## Examples

### Multiple

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-1.png)


### Range

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-2.png)


### Disabled

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-3.png)



### Min &  Max

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-4.png)



### Label

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-5.png)



### Allowed Dates

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-6.jpg)

<a href="https://studio.onplateau.com/quick/?q=/qjsons/AllowdDates.qjson"  target="_blank">AllowdDates</a>



### Weekend and Holidays 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-7.jpg)

<a href="https://studio.onplateau.com/quick/?q=/qjsons/VinlineDatePicker.qjson"  target="_blank">VinlineDatePicker</a>



### InlineDatepicker Formating

**We have 2 parameters for formatting, one is serviceDateFormat and the other is displayDateFormat.**
**Our service format specifies in which format the date value from the service should be set and the display format indicates in which format the selected date should be displayed.** **We manage these formats with settings-proxy.js and or settings.yaml files.** **Can be customized as desired, according to the user's requests**. **Our dateformats are the same as our rally formats, displayDateFormat:'dd/MM/yyyy',  serviceDateFormat:'YYYYMMDD'.**


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-8.png)


# QJSON SAMPLES

<a href="https://studio.onplateau.com/quick/?q=/qjsons/VınlineDatepickerDeleteValue.qjson"  target="_blank">VınlineDatepickerDeleteValue</a>

<a href="https://studio.onplateau.com/quick/?q=/qjsons/VInlineDatepickerMaxMin.qjson"  target="_blank">VInlineDatepickerMaxMin</a>

<a href="https://studio.onplateau.com/quick/?q=/qjsons/VInlineDatepickerReset.qjson"  target="_blank">VInlineDatepickerReset</a>

<a href="https://studio.onplateau.com/quick/?q=/qjsons/DatepickerDatenow.qjson"  target="_blank">DatepickerDatenow</a>

<a href="https://studio.onplateau.com/quick/?q=/qjsons/DatePickerExampleApp.qjson"  target="_blank">DatePickerExampleApp</a>


