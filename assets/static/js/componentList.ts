interface IPropExtensionUX {
    required?: boolean;
    type?: StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor | FunctionConstructor | ArrayConstructor | undefined | null | string;
    showInEditor?: boolean;
    editorDefaultValue?: string;
    runTimeDefaultValue?: string;
    runTimeOverrideValue?: string | {type: IPropOverrideType, value: string };
    options?: Array<string | { Name: string, Value: string }>
    multiple?: boolean;
    GroupName?: string
}

enum IPropOverrideType {
    Append = "Append",
    Override = "Override",
    Replace = "Replace",
}

type ComponentOptions = Record<string, Record<string, IPropExtensionUX>>;


//#region JS Section
var componentOptions: ComponentOptions = {
    VAlert: {
        class: {
            required: true
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        border: {
            type: String,
            options: ["'left'"]
        },
        closeLabel: {
            type: String
        },
        type: {
            type: String,
            editorDefaultValue: "'warning'"
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'",
            options: ["'mdi-information'", "'mdi-check-circle'", "'mdi-alert-circle'", "'mdi-close-circle'"]
        },
        mode: {
            type: String,
        },
        origin: {
            type: String
        },
        prominent: {
            type: Boolean,
            editorDefaultValue: "true"
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        text: {
            type: Boolean
        },
        transition: {
            type: String
        },
        value: {
            type: Boolean
        },
        coloredBorder: {
            type: Boolean
        },
        elevation: {
            type: String,
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        }
    },
    VAutoComplete: {
        class: {
            type: String
        },
        filter: {
            type: Function
        },
        autoSelectFirst: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        avoidClearableTabIndex:{
            type: Boolean
        },
        clearIcon: {
            type: String
        },
        clearable: {
            type: Boolean
        },
        counter: {
            type: "boolean | string | number"
        },
        counterValue: {
            type: Function
        },
        error: {
            type: Boolean
        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hideDetails: {
            type: "string | boolean"
        },
        hideNoData: {
            type: Boolean
        },
        hideSelected: {
            type: Boolean
        },
        itemDisabled: {
            type: "string | boolean | Function"
        },
        id: {
            type: String
        },
        items: {
            type: "Array<any>",
            required: false,
        },
        itemText:{
            type:"string | Array<any> | Function"
        },
        itemValue:{
            type:"string | Array<any> | Function"
        },
        label: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        multiple: {
            type: Boolean
        },
        noFilter:{
            type:Boolean
        },
        prefix: {
            type: String
        },
        placeholder: {
            type: String
        },
        rules: {
            type: "Array<any>"
        },
        success: {
            type: Boolean
        },
        successMessages: {
            type: "boolean | string"
        },
        suffix: {
            type: String
        },
        smallChips: {
            type: Boolean
        },
        validateOnBlur: {
            type: Boolean
        },
        menuProps: {
            type: "{maxHeight: number}"
        }
    },
    VAvatar: {
        class: {
            required: true,
            editorDefaultValue: "'primary'",
        },
        color: {
            editorDefaultValue: "'primary'",
        },
        height: {
            type: "number | string"
        },
        width: {
            type: "number | string"
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        size: {
            type: "number | string"
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'"
        },
        tile: {
            type: Boolean
        }
    },
    VBadge: {
        class: {
            type: String
        },
        bordered: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        icon: {
            type: String,
            editorDefaultValue: "'mdi-account'"
        },
        left: {
            type: Boolean
        },
        label: {
            required: false,
            editorDefaultValue: "'My CheckBox'"
        },
        mode: {
            type: String
        },
        origin: {
            type: String
        },
        tile: {
            type: Boolean
        },
        transition: {
            type: String
        },
        offsetX: {
            type: "string | number"
        },
        offsetY: {
            type: "string | number"
        },
        overlap: {
            type: Boolean
        }
    },
    VBottomNavigation: {
        class: {
            type: String
        },
        fixed: {
            type: Boolean
        },
        grow: {
            type: Boolean
        },
        hideOnScroll: {
            type: Boolean
        },
        horizontal: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        scrollTarget: {
            type: String
        },
        scrollThreshold: {
            type: "string | number"
        },
        shift: {
            type: Boolean
        }
    },
    VBottomSheet: {
        class: {
            type: String,
            required: true
        }
    },
    VBreadcrumbs: {
        items: {
            type: "Array<any>",
            required: false,
            editorDefaultValue: `[{text = 'Dashboard', disabled = false, href = 'breadcrumbs_dashboard'},
{text = 'Google', disabled = false, href = 'https://www.google.com', exact = true, target ='_blank'},
{text = 'Link 1', disabled = true, href = 'breadcrumbs_link_1'}]`
        },
        divider: {
            type: String
        },
        large: {
            type: Boolean
        },
    },
    VBreadcrumbsItem: {
        class: {
            type: String
        },
        append: {
            type: Boolean
        },
        exact: {
            type: Boolean
        },
        href: {
            type: "object | string"
        },
        link: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        ripple: {
            type: "object | string"
        },
        tag: {
            type: String
        },
        target: {
            type: String
        },
        to: {
            type: "object | string"
        },
    },
    VBtn: {
        raised: {
            type: Boolean
        },
        depressed: {
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        disabled:{
            type: Boolean 
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        class: {
            type: String,
            options: ["'sftt-btn-grd'"]
        },
        regular: {
            editorDefaultValue: "true",
            type: Boolean
        },
        text: {
            required: true,
            type: Boolean
        },
        absolute: {
            type: Boolean
        },
        prependInnerIcon: {
            type: String
        },
        appendIcon: {
            type: String
        },
        block: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        fab: {
            type: Boolean
        },
        fixed: {
            type: Boolean
        },
        href: {
            type: "string | object"
        },
        icon: {
            type: Boolean
        },
        inputValue: {
            type: String
        },
        large: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        replace: {
            type: Boolean
        },
        retainFocusOnClick: {
            type: Boolean
        },
        ripple: {
            type: "boolean | object"
        },
        tag: {
            type: String
        },
        tile: {
            type: Boolean
        },
        to: {
            type: "string | object"
        },
        top: {
            type: Boolean
        },
        type: {
            type: String
        },
        xLarge: {
            type: Boolean
        },
        xSmall: {
            type: Boolean
        },
        value: {
            type: String
        },
        rounded:{
            type: Boolean
        }
    },
    QLabel:{
        class: {
            type: String,
            options: ["'v-card__title'", "'v-list-item__title'"]
        },
        text: {
            type: String,
            editorDefaultValue: "Text",
         
          },
          customClass: {
            type: Object,          
   
          }
    },
    QDocumentViewer: {
        customCompClass: {
            editorDefaultValue: "pdf", 
            type: String,  
        },   
        id: {      
            type: String,    
        }, 
        src: { 
            editorDefaultValue: "",  
            type: String,
        },
        height: {
            editorDefaultValue: "50px",
            type: String,
        }
    },
    VBtnToggle: {
        class: {
            type: String
        },
        text: {
            required: true
        },
        borderless: {
            type: Boolean
        },
        dense: {
            type: Boolean
        },
        group: {
            type: Boolean
        },
        mandatory: {
            type: Boolean
        },
        max: {
            type: "number | string"
        },
        multiple: {
            type: Boolean
        },
        tile: {
            type: Boolean
        },
        id: {
            type: String
        },
        activeClass:{
            type: String
        },
        backgroundColor:{
            type: String
        }
    },
    VCard: {
        class: {
            type: String
        },
        append: {
            type: Boolean
        },
        hover: {
            type: Boolean
        },
        href: {
            type: "string | object"
        },
        img: {
            type: String
        },
        link: {
            type: Boolean
        },
        loading: {
            type: "string | boolean"
        },
        raised: {
            type: Boolean
        },
        shaped: {
            type: Boolean
        },
        tag: {
            type: String
        },
        to: {
            type: "string | object"
        },
        outlined: {
            type: Boolean
        },
        elevation: {
            type: String,
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
        }
    },
    VCarousel: {
        class: {
            type: String
        },
        continuous: {
            type: Boolean
        },
        cycle: {
            type: Boolean
        },
        hideDelimiterBackground: {
            type: Boolean
        },
        hideDelimiter: {
            type: Boolean
        },
        interval: {
            type: "number | string"
        },
        // Koray' a danışılacak
        // nextIcon: {
        //     type: "boolean | string",
        // },
        // prevIcon: {
        //     type: "boolean | string"
        // },
        showArrows: {
            type: Boolean
        },
        showArrowsOnHover: {
            type: Boolean
        },
        vertical: {
            type: Boolean,
        },
        verticalDelimiters: {
            type: String
        },
        height: {
            type: String
        }
    },
    VCarouselItem: {
        href: {
            type: "string | object"
        },
        link: {
            type: Boolean
        }
    },
    VCheckbox: {
        class: {
            type: String,
        },
        label: {
            required: false,
            editorDefaultValue: "'My CheckBox'"
        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"
        },
        errorMessages: {
            type: "Array<any> | string"
        },
        indeterminateIcon: {
            type: String
        },
        loading: {
            type: "boolean | string"
        },
        multiple: {
            type: Boolean

        },
        offIcon: {
            type: String

        },
        onIcon: {
            type: String

        },
        hint: {
            type: String

        },
        id: {
            type: String

        },
        rules: {
            type: "Array<any>"

        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        ripple: {
            type: "boolean | object"
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        inputValue: {
            type: String
        }
    },
    VChip: {
        class: {
            type: String,

        },
        active: {
            type: Boolean,

        },
        append: {
            type: Boolean,

        },
        close: {
            type: Boolean,

        },
        draggable: {
            type: Boolean,

        },
        exact: {
            type: Boolean,

        },
        filter: {
            type: Boolean,

        },
        filterIcon: {
            type: String,

        },
        href: {
            type: "string | object",

        },
        label: {
            type: Boolean,

        },
        link: {
            type: Boolean,

        },
        large: {
            type: Boolean,

        },
        pill: {
            type: Boolean,

        },
        replace: {
            type: Boolean,

        },
        ripple: {
            type: "boolean | object",

        },
        tag: {
            type: String,

        },
        to: {
            type: "string | object",

        },
        small: {
            type: Boolean,

        },
        xSmall: {
            type: Boolean,

        },
        xLarge: {
            type: Boolean,

        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        closeIcon: {
            type: String,
            options: ["'mdi-delete'", "'mdi-close'", "'mdi-close-circle'"]
        },
        outlined: {
            type: Boolean
        }
    },
    VCombobox: {
        class: {
            type: String,
            runTimeOverrideValue: {type: IPropOverrideType.Append, value: "pt-0"}
        },

        allowOverflow: {
            type: Boolean

        },
        appendIcon: {
            type: String

        },

        autoSelectFirst: {
            type: Boolean

        },

        autofocus: {
            type: Boolean

        },
        avoidClearableTabIndex:{
            type: Boolean
        },
        chips: {
            type: Boolean

        },
        clearIcon: {
            type: String

        },
        clearable: {
            type: Boolean

        },
        cacheItems: {
            type: Boolean

        },
        counter: {
            type: "boolean | string | number"

        },
        counterValue: {
            type: Function,

        },
        deletableChips: {
            type: Boolean

        },
        delimiters: {
            type: "Array<any>"

        },
        eager: {
            type: Boolean

        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        filter: {
            type: Function,

        },
        hideDetails: {
            type: "string | boolean"

        },
        hideNoData: {
            type: Boolean

        },
        hideSelected: {
            type: Boolean

        },
        hint: {
            type: String

        },
        id: {
            type: String

        },
        itemDisabled: {
            type: "string | boolean | Function"

        },
        itemText: {
            type: "string | boolean | Function"

        },
        itemValue: {
            type: "string | boolean | Function"

        },
        label: {
            required: false,

            editorDefaultValue: "'My Combobox'"
        },
        items: {
            required: false,

            editorDefaultValue: `[{text = 'test1', value = 1},
{ text = 'test2', value = 2}]`
        },
        loading: {
            type: "boolean | string"

        },
        menuProps: {
            type: "string | object | Array<any>"

        },
        multiple: {
            type: Boolean

        },
        noDataText: {
            type: String

        },
        noFilter: {
            type: Boolean

        },
        openOnClear: {
            type: Boolean

        },
        persistentHint: {
            type: Boolean

        },
        placeholder: {
            type: String

        },
        prefix: {
            type: String

        },

        prependInnerIcon: {
            type: String

        },
        readonly: {
            type: Boolean

        },
        rules: {
            type: "Array<any>"

        },
        searchInput: {
            type: String

        },
        singleLine: {
            type: Boolean

        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        suffix: {
            type: String

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        }
    },
    VDataFooter: {
        class: {
            type: String,

        },
        disabled: {
            type: Boolean

        },
        value: {
            type: String
        },
        id: {
            type: String
        },
    },
    VDataIterator: {
        class: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        value: {
            type: String
        },
        id: {
            type: String
        }
    },
    VDataTable: {
        headers: {
            required: false,
            editorDefaultValue: `[{ text = 'Dessert (100g serving)', align= 'start', sortable= false, value= 'name'},
{ text = 'Calories', value= 'calories', sortable = true },
{ text = 'Fat (g)', value= 'fat' },
{ text = 'Carbs (g)', value= 'carbs' },
{ text = 'Protein (g)', value= 'protein' },
{ text = 'Iron (%)', value= 'iron' }]`
        },
        items: {
            required: false,

            editorDefaultValue: `[{name = 'Frozens Yogurt', calories = 159, fat = '6.0', carbs = 24, protein = '4.0', iron = '1%'},
{name = 'Ice cream sandwich', calories = 237, fat = '9.0', carbs = 37, protein = '4.3', iron = '1%'},
{name = 'Eclair', calories = 262, fat = '16.0', carbs = 23, protein = '6.0', iron = '7%'},
{name = 'Cupcake', calories = 305, fat = '3.7', carbs = 67, protein = '4.3', iron = '8%'},
{name = 'Gingerbread',calories = 356, fat = '16.0', carbs = 49, protein = '3.9', iron = '16%'},
{name = 'Jelly bean', calories = 375,  fat = '0.0', carbs = 94, protein = '0.0', iron = '0%'},
{name = 'Lollipop', calories = 392, fat = '0.2', carbs = 98, protein = '0.0', iron = '2 %'},
{name = 'Honeycomb', calories = 408, fat = '3.2', carbs = 87, protein = '6.5', iron = '45%'},
{name = 'Donut', calories = 452, fat = '25.0', carbs = 51, protein = '4.9', iron = '22%'},
{name = 'KitKat', calories = 518, fat = '26.0', carbs = 65, protein = '7', iron=  '6 %'}]`
        },
        footerProps: {
            required: false,
            editorDefaultValue: `{showFirstLastPage = true,
firstIcon = 'mdi-arrow-collapse-left',
lastIcon = 'mdi-arrow-collapse-right',
prevIcon = 'mdi-minus',
nextIcon = 'mdi-plus'}`,
        },
        itemsPerPage: {
            required: false,

            editorDefaultValue: "5"
        },
        showSelect: {
            type: Boolean

        },
        caption: {
            type: String,

        },
        customFilter: {
            type: Function,

        },
        customGroup: {
            type: Function,

        },
        customSort: {
            type: Function,

        },
        disableFiltering: {
            type: Boolean,

        },
        disablePagination: {
            type: Boolean,

        },
        disableSort: {
            type: Boolean,

        },
        expandIcon: {
            type: String,

        },
        expanded: {
            type: "Array<any>",


        },
        groupBy: {
            type: "Array<any> | boolean",

        },
        headerProps: {
            type: Object,

        },
        hideDefaultFooter: {
            type: Boolean,


        },
        hideDefaultHeader: {
            type: Boolean,

        },
        itemKey: {
            type: String,

        },
        loading: {
            type: "string | boolean",


        },
        locale: {
            type: String,

        },
        multiSort: {
            type: Boolean,


        },
        noDataText: {
            type: String,


        },
        noResultText: {
            type: String,

        },
        options: {

        },
        page: {
            type: Number,

        },
        search: {
            type: String,

        },
        selectableKey: {
            type: String,

        },
        serverItemsLength: {
            type: Number,

        },
        showExpand: {
            type: Boolean,

        },
        showGroupBy: {
            type: Boolean,

        },
        singleExpand: {
            type: Boolean,

        },
        singleSelect: {
            type: Boolean,

        },
        sortBy: {
            type: "string | Array<any>",

        },
        value: {
            type: "Array<any>",

        }
    },
    VDatePicker: {
        locale: {
            required: false,

            editorDefaultValue: "'tr-tr'"
        },
        allowedDates: {
            type: "Array<any>"
        },
        dayFormat: {
            type: String
        },
        events: {
            type: "Array<any>"
        },
        headerDateFormat: {
            type: String
        },
        landscape: {
            type: Boolean,

        },
        localeFirsDayOfYear: {
            type: "number | string"

        },
        max: {
            type: String,

        },
        min: {
            type: String,

        },
        monthFormat: {
            type: Function,

        },
        multiple: {
            type: Boolean,

        },
        nextIcon: {
            type: String,

        },
        prevIcon: {
            type: String,

        },
        noTitle: {
            type: Boolean,

        },
        pickerDate: {
            type: String,

        },
        range: {
            type: Boolean,

        },
        reactive: {
            type: Boolean,

        },
        readonly: {
            type: Boolean,

        },
        scrollable: {
            type: Boolean,

        },
        selectedItemsText: {
            type: String,

        },
        showCurrent: {
            type: "string | boolean",

        },
        showWeek: {
            type: Boolean,

        },
        titleDateFormat: {
            type: Function,

        },
        type: {
            type: String,

        },
        value: {
            required: false,
            editorDefaultValue: "Date.now().toFormattedString('YYYY-MM-DD')"
        },
        firstDayOfWeek: {
            required: false,

            editorDefaultValue: "1"
        },
        eventColor: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        }
    },
    VDialog: {
        class: {
            type: String,

        },
        eager: {
            type: Boolean,

        },
        fullscreen: {
            type: Boolean,

        },
        hideOverlay: {
            type: Boolean,

        },
        internalActivator: {
            type: Boolean,

        },
        noClickAnimation: {
            type: Boolean,

        },
        openOnHover: {
            type: Boolean,

        },
        origin: {
            type: String,

        },
        overlayColor: {
            type: String,

        },
        overlayOpacity: {
            type: "string | number",

        },
        persistent: {
            type: Boolean,

        },
        retainFocus: {
            type: Boolean,

        },
        scrollable: {
            type: Boolean,

        },
        transition: {
            type: "string | boolean",

        },
        width: {
            type: Number,
            editorDefaultValue: "500",

        }
    },
    VDivider: {
        class: {
            type: String,

        },
        inset: {
            type: Boolean,

        },
        vertical: {
            type: Boolean,

        }
    },

    VEditDialog:{
        eager: {
            type: Boolean,
        },
        returnValue: {
            type: "string | object"
        }
    },

    VExpansionPanelContent: {
        class: {
            type: String,

        },
        eager: {
            type: Boolean
        }
    },
    VExpansionPanel: {
        class: {
            type: String,

        },
        readonly: {
            type: Boolean,

        },
        accordion: {
            type: Boolean
        },
        flat: {
            type: Boolean
        }
    },
    VExpansionPanelHeader: {
        class: {
            type: String,

        },
        disabledIconRotate: {
            type: Boolean,

        },
        expandIcon: {
            type: Boolean,

        },
        hideActions: {
            type: Boolean,

        },
        ripple: {
            type: "boolean | object",

        }
    },
    VExpansionPanels: {
        class: {
            type: String,

        },
        accordion: {
            type: Boolean,

        },
        focusable: {
            type: Boolean,

        },
        hover: {
            type: Boolean,

        },
        inset: {
            type: Boolean,

        },
        mandatory: {
            type: Boolean,

        },
        max: {
            type: "string | number",

        },
        multiple: {
            type: Boolean,

        },
        popout: {
            type: Boolean,

        },
        readonly: {
            type: Boolean,

        },
        tile: {
            type: Boolean,

        }
    },
    VFileInput: {
        class: {
            type: String,
            runTimeOverrideValue: {type: IPropOverrideType.Append, value: "pt-0"}
        },
        accept: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        chips: {
            type: Boolean

        },
        smallChips: {
            type: Boolean

        },
        clearIcon: {
            type: String

        },
        clearable: {
            type: Boolean

        },
        counter: {
            type: "boolean | string | number"

        },
        counterSizeString: {
            type: String,
        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "string | number"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String

        },
        id: {
            type: String

        },
        loading: {
            type: "boolean | string"

        },
        placeholder: {
            type: String,
            editorDefaultValue: "'Select a file(Placeholder)'"

        },
        prefix: {
            type: String

        },
        suffix: {
            type: String

        },
        showSize: {
            type: "boolean | number",

        },
        truncateLength: {
            type: "string | number",
        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        }
    },
    VFooter: {
        class: {
            type: String,

        },
        absolute: {
            type: Boolean,

        },
        fixed: {
            type: Boolean,

        },
        inset: {
            type: Boolean,

        },
        padless: {
            type: Boolean,

        },
        tag: {
            type: String,

        },
        tile: {
            type: Boolean,

        },
        width:{
            type: String,
        }
    },
    VForm: {
        class: {
            required: true,
        }
    },
    VGrid: {

    },
    VIcon: {
        class: {
            required: true,
        },
        text: {
            type: String,
            required: true,

            editorDefaultValue: "'mdi-home'",
        },

        dense: {
            type: Boolean

        },

        large: {
            type: Boolean

        },
        left: {
            type: Boolean

        },

        right: {
            type: Boolean

        },
        small: {
            type: Boolean

        },
        xSmall: {
            type: Boolean

        },
        xLarge: {
            type: Boolean

        },
        size: {
            type: "string | number"
        },

        tag: {
            type: String

        }
    },
    VImg: {
        class: {
            required: true,
        },
        alt: {
            type: String,

        },
        aspectRatio: {
            type: "string | number",

        },
        contain: {
            type: Boolean,

        },
        eager: {
            type: Boolean,

        },
        lazySrc: {
            type: String,

        },
        options: {
            type: Object,

        },
        position: {
            type: String,

        },
        sizes: {
            type: String,

        },
        srcset: {
            type: String,

        },
        src: {
            type: "string | object",

            editorDefaultValue: "'https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png'"
        },
        transition: {
            type: "string | boolean",

        },
        height: {
            type: "string | number",

            editorDefaultValue: "'50'"
        },
        maxHeight: {
            type: "string | number",

        },
        minHeight: {
            type: "string | number",

        },
        width: {
            type: "string | number",

            editorDefaultValue: "'50'"
        },
        maxWidth: {
            type: "string | number",

        },
        minWidth: {
            type: "string | number",

        }
    },
    VList: {
        class: {
            type: String,

        },
        dense: {
            type: Boolean,

        },
        expand: {
            type: Boolean,

        },
        subheader: {
            type: Boolean,

        },
        tag: {
            type: String,

        },
        threeLine: {
            type: Boolean,

        },
        tile: {
            type: Boolean,

        },
        twoLine: {
            type: Boolean,

        }
    },
    VListGroup: {
        class: {
            type: String,

        },
        appendIcon: {
            type: String,

        },
        eager: {
            type: Boolean,

        },
        group: {
            type: String,

        },
        noAction: {
            type: Boolean,

        },
        prependIcon: {
            type: String,

        },
        subGroup: {
            type: Boolean,

        },
        value: {
            type: Boolean
        }
    },
    VListItemGroup: {
        mandatory: {
            type: Boolean,

        },
        multiple: {
            type: Boolean,

        },
        class: {
            type: String,

        }
    },
    VListItemContent: {
        class: {
            type: String,

        }
    },
    VListItem: {
        class: {
            type: String,

        },
        append: {
            type: Boolean,

        },
        dense: {
            type: Boolean,

        },
        exact: {
            type: Boolean,

        },
        href: {
            type: "string | object",

        },
        inactive: {
            type: Boolean,

        },
        inputValue: {

        },
        link: {
            type: Boolean,

        },
        tag: {
            type: String,

        },
        target: {
            type: String,

        },
        threeLine: {
            type: Boolean,

        },
        to: {
            type: Boolean,

        },
        twoLine: {
            type: Boolean,

        }
    },
    VMenu: {
        class: {
            type: String,

        },
        returnValue: {
            type: String,


        },
        eager: {
            type: Boolean,


        },
        offsetY: {
            type: Boolean,


        },
        value: {
            type: String,


        },
        transition: {
            type: String,


        },
        closeOnContentClick: {
            type: Boolean,


        },
        minWidth: {
            type: String,


        }
    },
    VNavigationDrawer: {
        class: {
            type: String,

        },
        fixed:{
            type: Boolean,
        },
        bottom:{
            type: Boolean,
        },
        clipped:{
            type: Boolean,
        },
        disableResizeWatcher:{
            type: Boolean,
        },
        expandOnHover:{
            type: Boolean,
        },
        width:{
            type: String,
        }

    },
    VOverflowBtn: {
        class: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        allowOverflow: {
            type: Boolean

        },
        appendIcon: {
            type: String

        },

        autoSelectFirst: {
            type: Boolean

        },

        autofocus: {
            type: Boolean

        },
        chips: {
            type: Boolean

        },
        smallChips: {
            type: Boolean

        },
        clearIcon: {
            type: String

        },
        clearable: {
            type: Boolean

        },
        cacheItems: {
            type: Boolean

        },
        counter: {
            type: "boolean | string | number"

        },
        counterValue: {
            type: Function,

        },
        deletableChips: {
            type: Boolean

        },
        editable: {
            type: Boolean

        },
        eager: {
            type: Boolean

        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        filter: {
            type: Function,

        },
        hint: {
            type: String

        },
        id: {
            type: String

        },
        itemDisabled: {
            type: "string | boolean | Function"

        },
        itemText: {
            type: "string | boolean | Function"

        },
        itemValue: {
            type: "string | boolean | Function"

        },
        items: {
            type: "Array<any>"

        },
        label: {
            type: String

        },
        loading: {
            type: "boolean | string"

        },
        menuProps: {
            type: "string | object | Array<any>"

        },
        multiple: {
            type: Boolean

        },
        openOnClear: {
            type: Boolean

        },

        readonly: {
            type: Boolean

        },
        rules: {
            type: "Array<any>"

        },
        searchInput: {
            type: String

        },
        segmented: {
            type: Boolean

        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        }
    },
    VOverlay: {
        class: {
            type: String,

        },
        absolute: {
            type: Boolean,

        },
        opacity: {
            type: "number | string"

        },
        zIndex: {
            type: "number | string"

        }
    },
    VPagination: {
        class: {
            type: String,

        },
        disabled: {
            type: Boolean

        },
        circle: {
            type: Boolean,

        },
        length: {
            type: String,
            editorDefaultValue: "'5'",

        },
        nextIcon: {
            type: String,

        },
        prevIcon: {
            type: String,

        },
        totalVisible: {
            type: "string | number",

        },
        value: {
            type: Number,

        }
    },
    VParallax: {
        class: {
            type: String,

        },

        alt: {
            type: String

        },
        src: {
            type: String,

            editorDefaultValue: "'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
        }
    },
    VProgressCircular: {
        class: {
            type: String,

        },
        button: {
            type: Boolean,

        },
        indeterminate: {
            type: Boolean,

        },
        rotate: {
            type: "number | string"

        },
        size: {
            type: "number | string"

        },
        value: {
            type: "number | string"

        }
    },
    VProgressLinear: {
        class: {
            type: String,

        },
        value: {
            required: false,

            editorDefaultValue: "15"
        },
        absolute: {
            type: Boolean,

        },
        backgroundOpacity: {
            type: "string | number",

        },
        backgroundColor: {
            type: String,
            editorDefaultValue: "'purple'",

        },
        bottom: {
            type: Boolean,

        },
        bufferValue: {
            type: "string | number",

        },
        fixed: {
            type: Boolean,

        },
        indeterminate: {
            type: Boolean,

        },
        rounded: {
            type: Boolean,

        },
        striped: {
            type: Boolean,

        },
        top: {
            type: Boolean,

        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        }
    },
    VRadio: {
        class: {
            type: String,

        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        offIcon: {
            type: String

        },
        onIcon: {
            type: String

        },
        ripple: {
            type: "boolean | object",
        },
        id: {
            type: String

        },
        label: {
            required: false,

            editorDefaultValue: "'Test radio label'"
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    VRadioGroup: {
        class: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        column: {
            type: Boolean

        },
        hint: {
            type: String

        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        mandatory: {
            type: Boolean

        },
        max: {
            type: "number | string"
        },

        row: {
            type: Boolean

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        valueComparator: {
            type: Function,

        },
        label: {
            type: String
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    VRangeSlider: {
        class: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        vertical: {
            type: Boolean

        },

        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        max: {
            type: "number | string",
            editorDefaultValue: "100"

        },
        min: {
            type: "number | string",
            editorDefaultValue: "0"

        },
        step: {
            type: "number | string"

        },
        value: {
            type: Number,
            editorDefaultValue: "[30,60]"

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        thumbSize: {
            type: "number | string"

        },
        tickLabels: {
            type: "Array<any>"

        },
        ticks: {
            type: "boolean | string"

        }
    },
    VRating: {
        class: {
            type: String,

        },
        clearable: {
            type: Boolean,

        },
        closeDelay: {
            type: "number | string"

        },
        dense: {
            type: Boolean,

        },
        emptyIcon: {
            type: String,

        },
        fullIcon: {
            type: String,

        },
        halfIcon: {
            type: String,

        },
        halfIncrements: {
            type: String,

        },
        hover: {
            type: Boolean,

        },
        openDelay: {
            type: Boolean,

        },
        openDereadonlylay: {
            type: Boolean,

        },
        ripple: {
            type: "boolean | object",

        },
        value: {
            type: Number,

        },
        large: {
            type: Boolean,

        },
        size: {
            type: "number | string"

        },
        small: {
            type: Boolean,

        },
        xSmall: {
            type: Boolean,

        },
        xLarge: {
            type: Boolean,

        }
    },
    VSelect: {
        label: {
            required: false,

            editorDefaultValue: "'My Select'"
        },
        items: {
            required: false,

            editorDefaultValue: `[{text = 'test1', value = 1},
{ text = 'test2', value = 2}]`
        },
        regular: {
            editorDefaultValue: "'true'",
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        hint: {
            type: String
        },
        loading: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        appendIcon: {
            type: String
        },
        success: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        successMessages: {
            type: String
        },
        errorMessages: {
            type: String
        }
    },
    VSheet: {
        class: {
            type: String,

        },
        text: {
            type: String,
            required: true,

            editorDefaultValue: "'Hello, world'",
        },
        elevation: {
            type: "number | string"

        },
        tag: {
            type: String,

        },
        tile: {
            type: String,

        },
        height: {
            type:String
        }
    },
    VSkeletonLoader: {
        boilerPlate: {
            type: Boolean
        },
        dark: {
            type: Boolean
        },
        elevation: {
            type: "number | string"
        },
        height: {
            type: "number | string"
        },
        light: {
            type: Boolean
        },
        loading: {
            type: Boolean
        },
        maxHeight: {
            type: "number | string"
        },
        maxWidth: {
            type: "number | string"
        },
        minHeight: {
            type: "number | string"
        },
        minWidth: {
            type: "number | string"
        },
        tile: {
            type: "number | string"
        },
        type: {
            type: String
        },
        types: {
            type: Object
        },
        width: {
            type: "number | string"
        },
    },
    VSlider: {
        class: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        vertical: {
            type: Boolean

        },

        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        max: {
            type: "number | string",
            editorDefaultValue: "100",

        },
        min: {
            type: "number | string",
            editorDefaultValue: "0",

        },
        step: {
            type: "number | string"

        },

        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        thumbSize: {
            type: "number | string"

        },
        tickLabels: {
            type: "Array<any>"

        },
        ticks: {
            type: "boolean | string"

        },
        label: {
            type: String
        },
        hint: {
            type: String
        },
        loading: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    VSnackbar: {
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "warning"]
        },
        top: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        center: {
            type: Boolean
        }
    },
    VSpeedDial: {
        class: {
            type: String,

        },
        absolute: {
            type: Boolean,

        },
        bottom: {
            type: Boolean,

        },
        direction: {
            type: String,

        },
        fixed: {
            type: Boolean,

        },
        left: {
            type: Boolean,

        },
        mode: {
            type: String,

        },
        openOnHover: {
            type: Boolean,

        },
        origin: {
            type: String,

        },
        right: {
            type: Boolean,

        },
        top: {
            type: Boolean,

        },
        transition: {
            type: String,

        }
    },
    VStepper: {
        class: {
            required: true,
        },
        altLabels: {
            type: Boolean,

        },
        nonLinear: {
            type: Boolean,

        },
        value: {

        },
        vertical: {
            type: String,
            editorDefaultValue: "'true'",

        }
    },
    VStepperContent: {
        step: {
            type: "number | string"
        }
    },
    VStepperHeader: {

    },
    VStepperItems: {

    },
    VStepperStep: {
        editable: {
            type: Boolean
        },
        rules: {
            type: "Array<any>"
        },
        step: {
            type: "number | string"
        },
        text: {
            type: String
        }
    },
    VSwitch: {
        class: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        hint: {
            type: String

        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        loading: {
            type: "boolean | string"

        },

        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        valueComparator: {
            type: Function,

        },
        label: {
            type: String,
            editorDefaultValue: "'Test Switch'"

        },
        ripple: {
            type: "boolean | object",
        },
        color: {
            editorDefaultValue: "'primary'",
            type: String,
            options: ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    VTab: {
        class: {
            type: String,

        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        link: {
            type: Boolean

        },
        replace: {
            type: Boolean

        },
        tag: {
            type: String

        },
        target: {
            type: String

        },
        to: {
            type: "string | object"

        },
        ripple: {
            type: "boolean | object",
        }
    },
    VTabItem: {
        class: {
            type: String,

        },
        disabled: {
            type: Boolean

        }
    },
    VTabs: {
        class: {
            type: String,

        },
        centerActive: {
            type: Boolean

        },
        centered: {
            type: Boolean

        },
        alignWithTitle: {
            type: Boolean

        },
        fixedTabs: {
            type: Boolean

        },
        grow: {
            type: Boolean

        },
        iconsAndText: {
            type: Boolean

        },

        mobileBreakpoint: {
            type: "number | string",
            editorDefaultValue:"md",
            runTimeDefaultValue:"md"

        },
        nextIcon: {
            type: String

        },
        prevIcon: {
            type: String

        },
        showArrows: {
            type: Boolean

        },
        vertical: {
            type: Boolean

        }
    },
    VTabsItems: {
        class: {
            type: String,

        },
        vertical: {
            type: Boolean

        },
        continuous: {
            type: Boolean

        },
        max: {
            type: "number | string"

        },
        multiple: {
            type: Boolean

        },
        nextIcon: {
            type: String

        },
        prevIcon: {
            type: String

        },
        showArrows: {
            type: Boolean

        },
        showArrowsOnHover: {
            type: Boolean,

        },
        touch: {
            type: Object

        },
        touchless: {
            type: Boolean

        },
        value: {

        }
    },
    VTabsSlider: {
        class: {
            type: String
        }
    },
    VTextarea: {
        class: {
            type: String,
            runTimeOverrideValue: {type: IPropOverrideType.Append, value: "pt-0"}
        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        autofocus: {
            type: Boolean

        },
        clearIcon: {
            type: String

        },
        clearable: {
            type: Boolean

        },
        counter: {
            type: "boolean | string | number"

        },
        counterValue: {
            type: Function,

        },

        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String

        },
        autoGrow: {
            type: Boolean

        },
        id: {
            type: String

        },
        label: {
            type: String

        },
        loading: {
            type: "boolean | string"

        },
        prefix: {
            type: String

        },
        readonly: {
            type: Boolean

        },
        rules: {
            type: "Array<any>"

        },
        rows: {
            type: "number | string"

        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        suffix: {
            type: String

        },
        noResize: {
            type: Boolean,
        },

        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        regular: {
            editorDefaultValue: "'true'",
            type: Boolean
        },
        outlined: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        placeholder: {
            type: String
        }
    },
    VTextField: {
        class: {
            type: String,
            runTimeOverrideValue: {type: IPropOverrideType.Append, value: "pt-0"}
        },
        prependInnerIcon: {
            type: String

        },
        appendIcon: {
            type: String

        },
        autofocus: {
            type: Boolean

        },
        avoidClearableTabIndex:{
            type: Boolean
        },
        clearIcon: {
            type: String

        },
        clearable: {
            type: Boolean

        },
        counter: {
            type: "boolean | string | number"

        },
        counterValue: {
            type: Function,

        },
        value: {
            type: String

        },
        error: {
            type: Boolean

        },
        errorCount: {
            type: "number | string"

        },
        errorMessages: {
            type: "Array<any> | string"
        },
        hint: {
            type: String

        },
        id: {
            type: String

        },
        label: {
            type: String,
            editorDefaultValue: "'Text field label'",

        },
        loading: {
            type: "boolean | string"

        },
        prefix: {
            type: String

        },
        readonly: {
            type: Boolean

        },
        rules: {
            type: "Array<any>"

        },
        success: {
            type: Boolean

        },
        successMessages: {
            type: "boolean | string"

        },
        suffix: {
            type: String

        },
        type: {
            type: String

        },
        validateOnBlur: {
            type: Boolean,
            // editorDefaultValue: false

        },
        format: {
            type: String

        },
        formatValues: {
            type: "Array<any>"

        },
        regular: {
            editorDefaultValue: "'true'",
            type: Boolean
        },
        outlined: {
            type: Boolean,
            runTimeOverrideValue: "'true'"
        },
        disabled: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        
    },
    VToolbar: {
        class: {
            type: String,

        },
        absolute: {
            type: Boolean,

        },
        bottom: {
            type: Boolean,

        },
        collapse: {
            type: Boolean,

        },
        extended: {
            type: Boolean,

        },
        floating: {
            type: Boolean,

        },
        prominent: {
            type: Boolean,

        },
        short: {
            type: Boolean,

        },
        src: {
            type: "object | string",

        },
        tag: {
            type: String,

        },
        tile: {
            type: Boolean

        }
    },
    VTooltip: {
        class: {
            type: String
        },
        color: {
            type: String,
            options: ['primary']
        },
        top: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        }
    },
    VTimePicker:{
        alignTop: {
            type: Boolean
        },
        dark:{
            type: Boolean
        },
        disabled:{
            type:Boolean
        },
        format:{
            type:String
        },
        max:{
            type:String
        },
        min:{
            type:String
        },
        noTitle:{
            type:Boolean
        },
        value:{
            type: "Array<any>"
        },
        
    },
    VTimeline: {
        alignTop: {
            type: Boolean
        },
        dense: {
            type: Boolean
        }
    },

    VTimelineItem: {
        color: {
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        icon: {
            type: String,
            options: ["'mdi-information'", "'mdi-check-circle'", "'mdi-alert-circle'", "'mdi-close-circle'"]
        },
        iconColor: {
            type: String,
            options: ["'default'", "'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        },
        large: {
            type: Boolean
        },
        small: {
            type: Boolean,
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        },
        fillDot: {
            type: Boolean
        }
    }
};

if (typeof exports === 'object' && typeof module === 'object'){
    module.exports = componentOptions;
}else{
    window["QEditorComponentOptions"] = componentOptions;
}
//#region JS Section