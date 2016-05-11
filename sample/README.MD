Cloud CMS Sample module adding a custom form field
==================================================

Deploy this module from your Cloud CMS Platform Settings, Modules. URL https://github.com/gitana/sdk and Path /amd-samples/custom-field

Once this is done, you will be able to use the custom form field:

    "fields": {
        "test1": {
            "type": "text",
            "label": "Test 1",
            "required": false
        },
        "test2": {
            "type": "sample-field",
            "dependentField": "/test1",
            "label": "Test 2",
            "required": false
        }
    }

The sample field will copy the value of its "dependentField" and make it upper case.
