# Quick Release Notes - Sprint 31

## Vuetify 

### New Features

- An improvement has been made to trigger the Restored event, which is triggered on Messaging when returning to a page from another qjson page, and by setting the **triggerOnRestored** prop in the Messaging component on the inner pages, these events will also be triggered.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/restoredTriggered.gif)

  

- In QMap component, clickedPosition parameter is added to click:marker event.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QMap_clicked_position.gif)

- IAM updateToken is provided in onmessage and onopen events in LiveConnection component, which provides Authentication with IAM token.( https://jira.softtech.com.tr/browse/PLT-12451)

- When we set the **disableRoute** property to true in settings.yaml, the url of the page remains constant, it doesn't change.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DisableRoute.gif)

- **setPageTitle** and **setFavicon** methods are added. Users can declare a string value for the browser title in the editor or it is possible to use predefined properties in settings.yaml file for QUI applications. Likewise, browser favicon can be changed as declared in the settings.yaml file.  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/titlefaviconsettings.png)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Title_Favicon.png)

- **click:clear** event has added to VFileInput component. (https://jira.softtech.com.tr/browse/PLT-12250)

- Added **itemDisabled** prop to VTreeview component. (https://jira.softtech.com.tr/browse/PLT-10275)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTreeView.gif)

- The **preventPaste** feature has been added to the VAutocomplete component. It prevents both duplicates, paste and prevents drag drop. (https://jira.softtech.com.tr/browse/PLT-12431)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/AutoComplete.gif)
  
### Bug Fixes

- The appearance of the Tooltip component has been fixed by adding the **forcePosition** prop due to the problem that arises according to the layout of the shell projects.
  
- When editor gives a rendering error, there was only an error message ("Render failed") and no information about the location or cause of the error. With this upgrade, the location and cause of the error are also shown to the user along with the error message.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RenderFailed.png)

- In QDocumentViewer component writing and pasting characters that are included in number type but not a number (e, -, .) are restricted. (https://jira.softtech.com.tr/browse/PLT-12309)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QDocumentViewer.gif)

  
## Rally & Sprinkle

### New Features

- The data from metadata and localization were matched via lowercase letters. (https://jira.softtech.com.tr/browse/PLT-11607)

### Bug Fixes

   --

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse.( https://discourse.rally.softtech/ )

## Websube Converter

- websube dts to qjson converter completed. Application is able to convert all open websube screens.

- selenium test was developed for generated qjson files. test application is exporting Editor errors to excel.

## Quick Coral

- 39 screens done on IOS and 18 screens done on Android at ???? Leasing projects

- 23 plt closed on IOS and 34 plt closed on Android


### Quick Android:

  - Embedded Banking 

    Loading css from service completed . (Css'in servisten ??ekilmesi ve kullan??labilir hale gelmesi tamamland??)

    language set deficiencies completed / code checked (Uygulamada d????ar??dan dil set edilebilir hale getirildi .)
    Changes were made to the pipline code (Pipline icin code kontor??l?? yap??ld?? . Ayr??ca d??zeltemeler yap??ld?? .)
    Yaml file add code edited ( Yaml dosyas??n??n projeye eklenme ??ekli de??i??tirildi .)

  Performance:

  ???       onInitialize method added in QuickService . (SDK' y?? kullanan kullan??c?? , Art??k SDK initialize olduktan sonra yapmak istedi??i i??lemleri  yapabilecek)

  Mini App : 

  ???        Bug Fix

  ???        Simulator (Simulator packet is built)

  Components: 

  ???		VSelect align fix (Taleplerim sayfas??ndaki vselect in hizalama sorunu giderildi.)

  ???        Named Component .

  ???        Keyboard status completed (ime options)

  ???       Qvideo component enhancement .

  

  <img src="http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_sprint31_qvideo.gif" alt="review_quick_ios" style="zoom:40%; " /> 

  ???       QFrame deficiencies completed .

  ???       Card (Multi clicks are optimized due to handling multiple unnecessary requests and performance issues. )

  ???       RadioButton (RadioButton click events are updated such as trigger events of other radio buttons)

  ???       Breadcrumbs (Trying to implement breadcrumbs component but due to recognizing better solution, update is necessary for cloning)

  ???       Vertical Stepper (Refactoring in vertical stepper)

  ???       G??r???? / Talep / ??neri sayfas??ndaki sorunlar ????z??ld?? . 

### Quick IOS:

- Embedded Banking 

  Embedded banking main.css download section edited.(Embedded banking main.css indirme k??sm?? d??zenlendi.)

  QFrame completed .

Components:

Analysis and development of Qmap selecting a location from the map and obtaining an address from the selected location has begun. (Qmap haritadan konum se??me ve se??ilen konumdan adres alma analizi tamamland?? ve geli??tirilmesine ba??land??.)

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint31_QMapAdressSelection.gif" alt="review_quick_ios" style="zoom:60%;" />

Added selecting, scaling and sizing by taking photos from FileInput camera. (FileInput kameradan foto??raf ??ekerek se??me, ??l??eklendirme ve boyutland??rma eklendi.)

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint31_FileInputCameraSelection.gif" alt="review_quick_ios" style="zoom:60%;" />

QVideo componentinin analizi tamamland?? . Geli??tirlmelerine ba??lan??ld?? .

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint31_qvideo.gif" alt="review_quick_ios" style="zoom:60%;" />



QNB Geli??tirmeleri :

???	QNB Main.css edits and Qjson review done . (QNB Main.css d??zenlemeleri ve Qjson incelemesi yap??ld??.)


### Coral Support :

   PLT destek :

???      G??r???? ??neri formunda yer alan login sorunu ????z??ld?? .

???      Mail bilgisinin login olmadan dolu gelmesi sorunu ????z??ld?? .

???      OTP geri say??m sorunu ????z??ld?? .

   ??mece miniapp???inin buglar?? incelendi .

   QMap i??in ??rnek qjson olu??turuldu .

   Qvideo i??in test ekran?? olu??turduk
