var settings = {
	"settings": {
		"value":  {
			"csspath": [
			  "https://golden-layout.com/files/latest/css/goldenlayout-base.css",
			  "https://cdn3.devexpress.com/jslib/22.1.5/css/dx.common.css",
			  "static/css/softtech-theme.css",
			  "https://golden-layout.com/files/latest/css/goldenlayout-light-theme.css",
			  "https://cdn3.devexpress.com/jslib/22.1.5/css/dx.light.css",
			  "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
			],
			"RegionalDefinition": [
					{
						"region": "tr",
						"FormattingDefinition": {
							"groupSeparator": {
								"overwrite": true,
								"value": "."
							},
							"radixPoint": {
								"overwrite": true,
								"value": ","
							},
							"digits": {
								"overwrite": false,
								"value": 2
							},
							"enforceDigitsOnBlur": {
								"overwrite": true,
								"value": true
							},
							"longDateFormat": {
								"overwrite": true,
								"value": "DD-MM-YYYY HH-MM"
							},
							"longTimeFormat": {
								"overwrite": true,
								"value": "HH-MM-SS"
							},
							"shortTimeFormat": {
								"overwrite": true,
								"value": "HH-MM"
							},
							"moneyFormat": {
								"overwrite": true,
								"value": "en-US"
							},
							"serviceDateFormat": {
								"overwrite": true,
								"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
							},
							"displayDateFormat": {
								"overwrite": true,
								"value": "dd/MM/yyyy"
							},
							"devExLocaleCDNAddress": "https://cdn3.devexpress.com/jslib/21.2.3/js/localization/dx.messages.tr.js"
						}
					},
					{
						"region": "en",
						"FormattingDefinition": {
							"groupSeparator": {
								"overwrite": true,
								"value": "."
							},
							"radixPoint": {
								"overwrite": true,
								"value": ","
							},
							"digits": {
								"overwrite": false,
								"value": 2
							},
							"enforceDigitsOnBlur": {
								"overwrite": true,
								"value": true
							},
							"longDateFormat": {
								"overwrite": true,
								"value": "DD-MM-YYYY HH-MM"
							},
							"longTimeFormat": {
								"overwrite": true,
								"value": "HH-MM-SS"
							},
							"shortTimeFormat": {
								"overwrite": true,
								"value": "HH-MM"
							},
							"moneyFormat": {
								"overwrite": true,
								"value": "en-US"
							},
							"serviceDateFormat": {
								"overwrite": true,
								"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
							},
							"displayDateFormat": {
								"overwrite": true,
								"value": "dd/MM/yyyy"
							}
						}
					}
				],
			"componentListPath":""
		  },
		"type": "object"
	},
	"localProxy": {
		"value": {},
		"type": "object"
	}	
}

if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = settings;
} else {
  window["plateauUISettings"] = settings;
}