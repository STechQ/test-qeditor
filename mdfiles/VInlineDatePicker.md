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


[AllowdDates.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VInlineDatePicker/AllowdDates.qjson)


### Weekend and Holidays 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-7.jpg)


[VinlineDatePicker.qjson](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VInlineDatePicker/VinlineDatePicker.qjson)


### InlineDatepicker Formating

**We have 2 parameters for formatting, one is serviceDateFormat and the other is displayDateFormat.**
**Our service format specifies in which format the date value from the service should be set and the display format indicates in which format the selected date should be displayed.** **We manage these formats with settings-proxy.js and or settings.yaml files.** **Can be customized as desired, according to the user's requests**. **Our dateformats are the same as our rally formats, displayDateFormat:'dd/MM/yyyy',  serviceDateFormat:'YYYYMMDD'.**


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VInlineDatePicker/VInlineDatePicker-8.png)


# QJSON SAMPLES

[VınlineDatepickerDeleteValue.js](uploads/c2139f9fe211c9bec35c22519644a7e9/VınlineDatepickerDeleteValue.js)

[VInlineDatepickerMaxMin.js](uploads/604132f63a776c420665694af2e83bf6/VInlineDatepickerMaxMin.js)

[VInlineDatepickerReset.js](uploads/41fc7b5cad2d4e0d499b58681b41f378/VInlineDatepickerReset.js)

[DatepickerDatenow.js](uploads/2fc63d5f866188c6bb233df87cafbd69/DatepickerDatenow.js)

[DatepickerExample.js](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VInlineDatePicker/VinlineDatePicker.qjson)

[DatePickerExampleApp.js](uploads/7c670e224d887743088c48fe83ad086a/DatePickerExampleApp.js)
