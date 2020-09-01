{
    "DTO2JSON": {
        "name": "DTO2JSON",
        "tips": "DTO转JSON",
        "noPage": false,
        "contentScript": true,
        "contentScriptCss": false,
        "menuConfig": [
            {
                "icon": "웃",
                "text": "DTO2JSON",
                "onClick": function (info, tab) {
                    chrome.DynamicToolRunner({
                        query: "tool=DTO2JSON",
                        noPage: true
                    });
                }
            }
        ],
        "updateUrl": null
    }
}