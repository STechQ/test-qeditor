## VTextField

### Masking Usage

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-1.png)

Format prop is setting input mask options on VTextField components

| Prop         | options (string)                            | Description                                |
| ------------ | ------------------------------------------- | ------------------------------------------ |
| format       | number, creditcard, email, ipaddress, phone,iban,onlyAlphabetic, regex | Format types                               |
| formatValues |                                             | Specific format options for number formats |


## Examples

### onlyAlphabetic 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-2.png)

[onlyAlphabetic.js](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VTextField/onlyAlphabetic.js)

### Credit Card

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-3.png)

[creditcard.js](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VTextField/creditcard.js)

### Email

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-4.png)

[email.js](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VTextField/email.js)


## Number Format Usage

The following format options can be used to format the ‘number’ values. However, if groupseperator and radixpoint are set with the use as default option in the settings of the application, these values you set will be invalid.

### Number Format Options

| Options             |                     Values                      |                         Description                          | Type    |
| ------------------- | :---------------------------------------------: | :----------------------------------------------------------: | ------- |
| alias               | numeric, currency, decimal, integer, percentage | The defaults are those defined in the base numeric alias. The currency alias and others are derived from the numeric alias and can have other defaults. | string  |
| digits              |                                                 | The value can be a number, *, or a quantifier syntax like 2,4 When the quantifier syntax is used, the digitsOptional option is ignored | number  |
| digitsOptional      |                   true,false                    |    Specify wheter the digits are optional. Default: true     | boolean |
| enforceDigitsOnBlur |                   true,false                    | Enforces the decimal part when leaving the input field. Default: false | boolean |
| radixPoint          |                                                 |                 Digit sembols .default: "."                  | string  |
| groupSeparator      |                                                 |           thousand seperator sembols. default: ""            | string  |
| allowMinus          |                   true,false                    |                Allow to enter -.Default: true                | boolean |
| prefix              |                                                 |                 Define a prefix.Default: ""                  | string  |
| suffix              |                                                 |                 Define a suffix.Default: ""                  | string  |
| min                 |                                                 |               Minimum value.Default: undefined               | number  |
| max                 |                                                 |               Maximum value.Default: undefined               | number  |
|shortcuts|  | Define shortcuts. This will allow typing 1k => 1000, 2m => 2000000. To disable just pass **null** **Default: {k: "000", m: "000000"}** | {k: number, m: number }
| rightAlign          |              default: **true**                  |               Align the input to the right             | boolean  |


### Number Format Usage

- Drag and Drop VTextField component

- Set format prop 'number'

- Set formatValues prop with needed format options 

  **Example Setting FormatValues**

  {'alias'='decimal','groupSeparator'='.','radixPoint'=',','digits'=2,'enforceDigitsOnBlur'=true}


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-5.png)

[number.js](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VTextField/number.js)


### Regex Format Usage
- Drag and Drop VTextField component. 
- Set format prop 'regex'.
- Set formatValues prop with regex value.

Alert: "\\" character must be used before "{". Ex: [0-9]{2}[A-Z]{24} must be [0-9]\\{2}[A-Z]\\{24}

  **Example Setting FortmatValues**

    {'regex' = '[0-9]\{2}[A-Z]\{24}'}



### Formatted Component Value
To get input value from the component, use the getUnmaskedValue method
```ts
let compValue = components.{{compQID}}.extention.getUnmaskedValue()
```

# SAMPLE QJSONS

[VTextField_formatValue_specialChars.qjson](uploads/0be82fa140dd82e7c297d2ad1ded914a/VTextField_formatValue_specialChars.qjson)

[VTextField_formatValue_exceptLetters.qjson](uploads/34ba3f861728bff7f7e64b08a55c71c3/VTextField_formatValue_exceptLetters.qjson)

[VTextField_formatValueSample1.qjson](uploads/241fc0269e08139459688e9de5333225/VTextField_formatValueSample1.qjson)

[VTextField_formatValueSapmle2.qjson](uploads/e4903193181e43ec451bdd79efa3bb21/VTextField_formatValueSapmle2.qjson)

[VTextField_keyDown.qjson](uploads/3160b170db17f30a24545d80dc72b817/VTextField_keyDown.qjson)

[VTextField_rangeOfNumber_validation.qjson](uploads/8c03990c53986c45df181f78cddca07c/VTextField_rangeOfNumber_validation.qjson)

[VTextField_customValidation.qjson](uploads/c34799c2268d4e6f61ab4e712772be64/VTextField_customValidation.qjson)

[VTextField_FocusExample.qjson](uploads/f3147c3efc876a45be8f63f54dbf4401/VTextField_FocusExample.qjson)

<!-- NLP: Input alanı kullanımı | Textfield | Textfield kullanımı | Girdi yazma | Sayı değeri girme | Input formatlama | Kullanıcıdan input alma | İnteraktif olarak veri girme | Input değerini başka componentte kullanma | Input değerini nasıl tutarım | Kullanıcıdan data alma | Kullanıcıdan nasıl data alırım | Yazı girme | Sayı girme | Girilen değere karakter sınırı eklemek istiyorum | Alana değer girilemesin istiyrum | Textfield disable yapma | Input | Text input | Standart input | Textfield formatları | Textfield properties | Textfield methods | Textfield formats -->