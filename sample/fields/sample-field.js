define(function(require, exports, module) {

    var $ = require("jquery");

    require("compiled_lib");

    var Alpaca = $.alpaca;

    Alpaca.Fields.FilePickerField = Alpaca.Fields.GitanaFileFolderPickerField.extend(
    {
        setup: function () {

            var self = this;

            if (!this.options.context)
            {
                this.options.context = {};
            }

            // if a _relator is configured, then we constrain the type
            if (self.isMultiple())
            {
                if (self.schema.items && self.schema.items._relator)
                {
                    this.options.context.typeQName = self.schema.items._relator.nodeType;
                }
            }
            else
            {
                if (self.schema._relator)
                {
                    this.options.context.typeQName = self.schema._relator.nodeType;
                }
            }

            this.base();
        },

        pickerConfiguration: function()
        {
            return {
                "title": "Select a File",
                "type": "sample-filefolder-picker"
            };
        },

        generateItem: function(picked)
        {
            return {
                "id": picked.id,
                "ref": picked.ref,
                "title": picked.title ? picked.title : picked._doc,
                "qname": picked.qname,
                "typeQName": picked.typeQName
            };
        },

        populateValue: function(domElement, item)
        {
            var self = this;

            var linkUrl = null;

            var project = self.options.context.project;
            if (project)
            {
                linkUrl = "#/projects/" + project._doc + "/documents/" + item.id;
            }

            if (!linkUrl)
            {
                var branch = self.options.context.branch;
                if (branch)
                {
                    linkUrl = "#/repositories/" + branch.getRepositoryId() + "/branches/" + branch.getId() + "/nodes/" + item.id;
                }
            }

            var html = "";

            if (linkUrl)
            {
                html += "<a href='" + linkUrl + "'>";
            }
            html += "<i class='fa fa-file-o'/>";
            if (linkUrl)
            {
                html += "</a>";
            }

            html += "&nbsp;";

            if (linkUrl)
            {
                html += "<a href='" + linkUrl + "'>";
            }
            html += (item.title ? item.title : item.id);
            if (linkUrl)
            {
                html += "</a>";
            }

            $(domElement).append(html);
        }

    });

    Alpaca.registerFieldClass("sample-field", Alpaca.Fields.FilePickerField);

});
