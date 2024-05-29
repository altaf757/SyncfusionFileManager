


function getSelectedLevel() {
    var mode = 0;
    if ($("#treedata_active").hasClass("e-level-1")) {
        mode = 1;
    }
    else if ($("#treedata_active").hasClass("e-level-2")) {
        mode = 2;
    }
    else if ($("#treedata_active").hasClass("e-level-3")) {
        mode = 3;
    }
    else if ($("#treedata_active").hasClass("e-level-4")) {
        mode = 4;
    }
    else {
        mode = 0;
    }
    return mode;
}


function pmwclkopenDialogNew() {
    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    grid.selectionModule.clearRowSelection();
    pmwclkopenDialog();
}
//bago
function pmwclkopenDialog() {

    var selectedNode = $("#treedata_active").attr("data-uid");
    var selectedParent = '';
    var level = getSelectedLevel();
    if (level != 1) {
        selectedParent = $("#treedata_active").parents('.e-level-1').attr("data-uid");
    }

    $.ajax({
        type: "GET",
        url: "/Home/OpenForms",
        data: { SelectedNode: selectedNode, SelectedParent: selectedParent },
        dataType: "json",
        success: function (result) {

            if (result == 'RecycleBin') {
                const targetEl = document.getElementById('toolbarnewModal');
                document.getElementById('modalHeaderTitle').innerHTML = "Recycle Bin";
                const modal = new Modal(targetEl);
                modal.show();
                var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#pmwbodyDialog" });
                $("#pmwbodyDialog").resizable({ handleSelector: ".win-size-grip" });
            }
            if (result == 'Lost') {

                const targetEl = document.getElementById('toolbarnewModal');
                document.getElementById('modalHeaderTitle').innerHTML = "Lost";
                const modal = new Modal(targetEl);
                modal.show();
                var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#pmwbodyDialog" });
                $("#pmwbodyDialog").resizable({ handleSelector: ".win-size-grip" });
            }
            if (result == 'main') {

                const targetEl = document.getElementById('toolbarnewModal');
                document.getElementById('modalHeaderTitle').innerHTML = "PMW Group";
                const modal = new Modal(targetEl);
                modal.show();
                var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#pmwbodyDialog" });
                $("#pmwbodyDialog").resizable({ handleSelector: ".win-size-grip" });
            }
            if (result == 'eforms') {
                const targetEl = document.getElementById('dvmain-eforms');
                const modal = new Modal(targetEl);
                modal.show();
                var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#eforms-body-modal" });
                $("#eforms-body-modal").resizable({ handleSelector: ".win-size-grip" });

                $("#inp-eformsWidth").val("100%");
                var rteObj = document.getElementById('iframe-eforms').ej2_instances[0];
                rteObj.refresh();


            }
            if (result == 'formula') {
                const targetEl = document.getElementById('GeneratedHTML');
                const modal = new Modal(targetEl);
                modal.show();
                var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#GeneratedHTMLDialog" });

                $.ajax({
                    type: "GET",
                    url: "/Home/GetFormulaForms",
                    data: { SelectedNode: selectedNode, mode: level },
                    dataType: "json",
                    success: function (result) {
                        //$("#inp-eformsCap").val(result.find(x => x.Column === "Label").Value);
                        //rteFormsObj.value = result.find(x => x.Column === "Formular HTML").Value;
                        //
                        /*rteFormsObj.value = result.Value;*/
                        console.log(result[0]["value"]);
                        document.getElementById('Gen_html').innerHTML = result[0]["value"];
                        /*pmwclkopenDialog();*/
                    },
                    error: function (result) {
                        alert('Oh no :(');
                    }
                });
            }

        },
        error: function (result) {
            alert('Oh no :(');
        }
    });

}


//bagong pagwawasto sa nakasubing bagay
function pmwclkopenDialogEdit() {

    var selectedNode = $("#treedata_active").attr("data-uid");


    if (selectedNode == 18) {
        var grid = document.getElementById("datagrid-index1").ej2_instances[0];
        var selectedRecords = grid.getSelectedRecords();
        var rows = JSON.stringify(selectedRecords);
        var rteFormsObj = document.getElementById("iframe-eforms").ej2_instances[0];
        console.log(selectedRecords.length);
        if (selectedRecords.length > 1) {
            alert('Please select 1 item only to edit.');
        } else if (selectedRecords.length = 1) {
            var listView1 = document.getElementById("modal-saveElement-list").ej2_instances[0];
            var listView2 = document.getElementById("modal-metaData-list").ej2_instances[0];
            $.ajax({
                type: "GET",
                url: "/Home/GetFormulaList",
                data: { SelectedID: rows },
                dataType: "json",
                success: function (result) {
                    $("#inp-eformsCap").val(result.find(x => x.Column === "Label").Value);
                    rteFormsObj.value = result.find(x => x.Column === "Formular HTML").Value;
                    pmwclkopenDialog();
                },
                error: function (result) {
                    alert('Oh no :(');
                }
            });
        }
    }
    else if (selectedNode == 25) {
        var grid = document.getElementById("datagrid-index1").ej2_instances[0];
        var selectedRecords = grid.getSelectedRecords();
        var rows = JSON.stringify(selectedRecords);
        var rteFormsObj = document.getElementById("iframe-eforms").ej2_instances[0];
        console.log(selectedRecords.length);
        if (selectedRecords.length > 1) {
            alert('Please select 1 item only to edit.');
        } else if (selectedRecords.length = 1) {
            var listView1 = document.getElementById("modal-saveElement-list").ej2_instances[0];
            var listView2 = document.getElementById("modal-metaData-list").ej2_instances[0];
            $.ajax({
                type: "GET",
                url: "/Home/GetEditList",
                data: { SelectedID: rows },
                dataType: "json",
                success: function (result) {
                    //$("#inp-eformsCap").val(result.find(x => x.Column === "Label").Value);
                    //rteFormsObj.value = result.find(x => x.Column === "Formular HTML").Value;
                    //pmwclkopenDialog();
                    const targetEl = document.getElementById('toolbarnewModal');
                    const modal = new Modal(targetEl);
                    modal.show();
                    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#pmwbodyDialog" });
                    $("#pmwbodyDialog").resizable({ handleSelector: ".win-size-grip" });


                    listView1.dataSource = result;
                    /* datasource.datasource = result;*/
                },
                error: function (result) {
                    alert('Oh no :(');
                }
            });
        }
    }
    else {
        var grid = document.getElementById("datagrid-index1").ej2_instances[0];
        var selectedRecords = grid.getSelectedRecords();
        var rows = JSON.stringify(selectedRecords);
        if (selectedRecords.length = 1) {
            var listView1 = document.getElementById("modal-saveElement-list").ej2_instances[0];
            var listView2 = document.getElementById("modal-metaData-list").ej2_instances[0];
            $.ajax({
                type: "GET",
                url: "/Home/GetMetadataList",
                data: { SelectedID: rows },
                dataType: "json",
                success: function (result) {
                    listView1.dataSource = result[0];
                    listView2.dataSource = result[1];
                    /*secondInput*/
                    debugger;
                    modalSaveElementListData = result[0];
                    modalMetaDataNameListData = result[1];
                    pmwclkopenDialog();
                },
                error: function (result) {
                    alert('Oh no :(');
                }
            });
        }
        else {
            alert('Please select 1 item to edit.');
        }
    }
}


function openWorkflowDialog() {
    const options = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-50',
        onHide: () => {
            $("#tbWf-PMWDev").css("z-index", "1");
            alert("hide");
        },
        onShow: () => {
            $("#tbWf-PMWDev").css("z-index", "60");
        },
        onToggle: () => {
        }

    };
    const targetEl = document.getElementById('tbWf-PMWDev');
    const modal = new Modal(targetEl, options);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#tbWf-PMWDev-Body" });
    $("#tbWf-PMWDev-Body").resizable({ handleSelector: ".win-size-grip" });
}

function openSettingsDialog() {
    const options = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-50',
        onHide: () => {
            $("#SettingsPartial").css("z-index", "1");
            alert("hide");
        },
        onShow: () => {
            $("#SettingsPartial").css("z-index", "60");
        },
        onToggle: () => {
        }

    };
    const targetEl = document.getElementById('SettingsPartial');
    const modal = new Modal(targetEl, options);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#SettingsPartial-Body" });
    $("#SettingsPartial-Body").resizable({ handleSelector: ".win-size-grip" });
}


/*indise*/
function onChange(args) {

    //var dropObject = document.getElementById("combfilter1").ej2_instances[0];

    // console.log(dropObject.value);
    // dropObject.value = null;
}

function onChange2(args) {
    var dropObject = document.getElementById("combfilter2").ej2_instances[0];
    dropObject.value = null;
}

$("#li-tabs-Workflow").click(function () {
    $("#sp-wfcontainer_gridline_svg").attr({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_diagramLayer_svg").attr({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_nativeLayer_svg").attr({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_diagramPorts_svg ").attr({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_diagramAdorner_svg ").attr({ "width": "100%", "height": "700" });

    $("#sp-wfcontainer_diagramLayer_div").css({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_htmlLayer").css({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_diagramAdornerLayer").css({ "width": "100%", "height": "700" });
    $("#sp-wfcontainer_diagramUserHandleLayer").css({ "width": "100%", "height": "700" });
});

// talatadaan ng pagsasagawa ng paglista ng punong nota
function onNodeExpanding(args) {
    if ((args.node.querySelectorAll(".e-icons.e-icon-expandable").length > 0) && args.node.querySelectorAll("ul li").length == 0) {
        this.currentTarget = args.node;
        this.parentID = args.node.getAttribute("data-uid");
        var PID = args.node.getAttribute("data-uid");
        $.ajax({
            url: '/Home/TreeNodeDetails',
            type: 'GET',
            data: { "TreeNodeID": PID },
            dataType: 'json',
            success: function (result) {
                var treeInstance = document.getElementById("treedata").ej2_instances[0];

                treeInstance.addNodes(result, PID);
                treeInstance.ensureVisible(PID);

            },
            error: function (xhr, status) {

                console.log(status);

            },

        })
    }
}
function ExportExcel() {

    var gridObj = document.getElementById("datagrid-index1").ej2_instances[0];

    gridObj.excelExport();

}
function nodeSelected(args) {

    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    var taskgrid = document.getElementById("datagrid-index2").ej2_instances[0];
    //
    // var gridcolumns = document.getElementById("combfilter1").ej2_instances[0];
    var dataToSend = this.selectedNodes[0];
    var dataEmpty = [];
    var child = false;
    debugger;
    var treeInstance = document.getElementById("treedata_active");

    if ($("#treedata_active").hasClass('e-level-2')) {
        child = true;
        var childselected = $("#treedata_active").find(".e-text-content").text();
    }
    var jdata = JSON.stringify({
        'TreeNodeID': dataToSend,
        'isChild': child
    });


    //get items under this node and metadata
    $.ajax({
        type: "GET",
        url: "/Home/GetItems",
        data: { TreeNodeID: dataToSend },
        dataType: "json",
        success: function (result) {
            debugger;
            grid.refresh(); // to refresh the content 
            grid.refreshColumns(); // to refresh the refreshColumns 
            grid.refreshHeader(); // to refresh the header content
            grid.dataSource = result.gridViewV1;
            var textAlign = result.textAlign;
            let groupColumns = result.gridViewColumnV1.map(function (c) {
                let showInColumnChooser = true;
                if (c.type === 'checkbox') {
                    showInColumnChooser = false;
                }

                return {
                    type: c.type,
                    headerText: c.headerText + " ",
                    field: c.field,
                    showInColumnChooser: showInColumnChooser,
                    width: c.width,
                    headerTextAlign: textAlign,
                    textAlign: textAlign,
                }
            });
            //grid.enableHover = true;
            //grid.allowTextWrap = true;
            //  grid.gridLines = "Both";
            /*grid.wrapMode = "Content";*/
            //  grid.childGrid = true;
            grid.columns = groupColumns;
            //gridcolumns.refresh();
            //gridcolumns.dataSource = groupColumns;
            taskgrid.refresh();
            taskgrid.dataSource = result.TaskgridViewV1;
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });



    //GetMetadata
    $.ajax({
        type: "GET",
        url: "/Home/GetMetadata",
        data: { IDVitem: dataToSend, isChild: child },
        dataType: "json",
        success: function (result) {
            var gridObj = document.getElementById('MetaDataSidePanelGrid').ej2_instances[0];
            gridObj.dataSource = result;
            gridObj.refresh();
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });

}

function DetailDataBound(args) {


    var dataToSend = args.data;
    var placeholderDiv = document.createElement('div');
    args.detailElement.appendChild(placeholderDiv);
    $.ajax({
        type: "GET",
        url: "/Home/GetItemsHistory",
        data: { selectedItem: JSON.stringify(dataToSend) },
        dataType: "json",
        success: function (result) {

            if (result.length > 0) {


                var childGrid = new ej.grids.Grid({
                    dataSource: result,
                });

                childGrid.appendTo(placeholderDiv);
            }
            else {
                var record = 'No record !';
                args.detailElement.innerHTML = record;
            }

        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
}
function onNodeSettingsExpanding(args) {
    if ((args.node.querySelectorAll(".e-icons.e-icon-expandable").length > 0) && args.node.querySelectorAll("ul li").length == 0) {
        this.currentTarget = args.node;
        this.parentID = args.node.getAttribute("data-uid");
        var PID = args.node.getAttribute("data-uid");
        $.ajax({
            url: '/Home/TreeNodeDetails',
            type: 'GET',
            data: { "TreeNodeID": PID },
            dataType: 'json',
            success: function (result) {
                var treeInstance = document.getElementById("treedata_Settings").ej2_instances[0];
                treeInstance.addNodes(result, PID);
                treeInstance.ensureVisible(PID);

            },
            error: function (xhr, status) {

                console.log(status);

            },

        })
    }
}

function nodeSettingsSelected(args) {

    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    var taskgrid = document.getElementById("datagrid-index2").ej2_instances[0];
    var dataToSend = this.selectedNodes[0];
    var dataEmpty = [];
    console.log(dataToSend);

    var child = false;

    var treeInstance = document.getElementById("treedata_active");

    if ($("#treedata_active").hasClass('e-level-2')) {
        child = true;
        var childselected = $("#treedata_active").find(".e-text-content").text();
    }
    var jdata = JSON.stringify({
        'TreeNodeID': dataToSend,
        'isChild': child
    });


    //get items under this node and metadata
    $.ajax({
        type: "GET",
        url: "/Home/GetItems",
        data: { TreeNodeID: dataToSend },
        dataType: "json",
        success: function (result) {

            grid.refresh(); // to refresh the content 
            grid.refreshColumns(); // to refresh the refreshColumns 
            grid.refreshHeader(); // to refresh the header content 

            grid.columns = result.gridViewColumnV1;
            grid.dataSource = result.gridViewV1;

            taskgrid.dataSource = result.TaskgridViewV1;
            taskgrid.refresh();

        },
        error: function (result) {
            alert('Oh no :(');
        }
    });



    //GetMetadata
    $.ajax({
        type: "GET",
        url: "/Home/GetMetadata",
        data: { IDVitem: dataToSend, isChild: child },
        dataType: "json",
        success: function (result) {
            var gridObj = document.getElementById('MetaDataSidePanelGrid').ej2_instances[0];
            gridObj.dataSource = result;
            gridObj.refresh();
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });

}

//kapag napili ang bagay
function selectedRows(args) {
    debugger
    _IDVitem = args.data["IDVitem "];
    //GetMetadata
    $.ajax({
        type: "GET",
        url: "/Home/GetMetadata",
        data: { IDVitem: _IDVitem },
        dataType: "json",
        success: function (result) {
            var gridObj = document.getElementById('MetaDataSidePanelGrid').ej2_instances[0];
            gridObj.dataSource = result;
            gridObj.refresh();
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
}

function appendElement(html) {
    var span = document.createElement('span');
    span.innerHTML = html;
}

function dblclkmetaEforms(args) {
    var copytext = "##" + args.cell.innerHTML + "##";
    var textArea = document.createElement("textarea");
    textArea.value = copytext;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    rteObj.executeCommand('insertText', copytext);
}

$(".close-modal").click(function () {
    $('div[modal-backdrop]:last-child').eq(0).remove();
    var xid = $(this).attr("data-modal-id");
    const targetEl = document.getElementById(xid);
    const modal = new Modal(targetEl);
    modal.hide();

});

function handleChange(checkbox) {
    var drop = checkbox.id, grid = document.getElementById("datagrid-index1").ej2_instances[0];
    if (checkbox.checked == true) {
        if (grid.getHeaderTable().querySelectorAll('th.e-hide').length === 3) {
            alert('Atleast one Column should be visible');
        } else {
            grid.showColumns([drop]);
        }
    } else {
        grid.hideColumns([drop]);
    }
}

function postNewItemWorkflow() {
    try {

        var items = document.getElementById("modal-saveElement-list").getElementsByTagName("li");
        var selectedperformer = document.getElementById('ddtb-SelectedPerform').ej2_instances[0];
        var IDVwfl = document.getElementById("ddtb-currentworkflow").ej2_instances[0];
        var codeSet = document.getElementById("txtCCode").ej2_instances[0].value ?? '';
        var useFormular = document.getElementById("ddtb-DdlUseFormular").ej2_instances[0].value ?? '';
        var ele = document.getElementsByName('tb-itemstatus');
        var isApproved;

        var isFormular = document.getElementById("Gen_html").innerHTML.trim() != "";
        var form = document.getElementById("Gen_html").innerHTML.trim();
        var selectedNode = $("#treedata_active").attr("data-uid");

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                isApproved = ele[i].value;
        }

        if (isFormular) {

            var itemsformula = document.getElementsByClassName("formularTxtBox");
            var itemsformula2 = document.getElementsByClassName("textBox");
            var strval = "";
            var strobj = "{	'sys24':'','sys15':'','fld_SYfile':0,'fld_posType':0,'sys33':'','sys34':'','fld_IDVwfl':'" + IDVwfl.value + "','fld_taskStatus':'" + isApproved + "',";


            if (selectedNode == '10') {
                var Username, Email, Password, Name, LastName = "";
                for (i = 0; i < itemsformula2.length; i++) {

                    var id = itemsformula2[i].id;
                    var inputval = "";
                    if (id.includes("_no1")) {

                        var inputval = $("#" + id).val();

                        var textval1 = id.replace("_no1", "_no0");
                        inputval1 = $("#" + textval1).val();

                        if (inputval == inputval1)
                            continue;
                        else {
                            throw new Error('Error! Password does not match.');
                        }

                    }
                    else {
                        var textval = id.replace("_no0", "");
                        inputval = $("#" + id).val();
                        strval += textval + ": '" + inputval + "',";
                    }

                    switch (id) {
                        case "IDVmData1_no0":
                            Name = inputval;
                            break;

                        case "IDVmData2_no0":
                            LastName = inputval;
                            break;

                        case "IDVmData19_no0":
                            Email = inputval;
                            break;

                        case "IDVmData3_no0":
                            Username = inputval;
                            break;

                        case "IDVmData4_no0":
                            Password = inputval;
                            break;
                    }
                }

                var registerobj = "{'Firstname': '" + Name + "','Lastname': '" + LastName + "','Email': '" + Email + "','Username': '" + Username + "','Password': '" + Password + "'}"

            }

            else {
                for (i = 0; i < itemsformula.length; i++) {
                    var id = itemsformula[i].id;
                    var textval = id.replace("_no0", "");
                    var inputval = $("#" + id).val();

                    strval += textval + ": '" + inputval + "',";
                }
            }


            strobj += strval + "}";

            //ddtb-planedenddate
            var plannedDate = document.getElementById("ddtb-planedenddate").ej2_instances[0];
            var d = new Date(plannedDate.value);
            var sys7 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();

            var strDataTask = '{ "sys6": "' + selectedperformer.value + '", "sys7": "' + sys7 + '" }';

            $.ajax({
                type: "POST",
                url: "Formula/NewItemWorkflow",
                data: { id: strobj, dataTask: strDataTask, SelectedNode: selectedNode, RegisterObj: registerobj },
                dataType: "json",
                success: function (result) {
                    console.log(result);
                    if (result.IsSuccessful) {
                        location.reload();
                    }
                },
                error: function (result) {
                    alert('Oh no :(');
                }
            });
        }
        else {
            if (selectedNode == 18) {

                var IDVmData6 = $("#inp-eformsCap").val();
                var rteFormsObj = document.getElementById("iframe-eforms").ej2_instances[0];
                ele = document.getElementsByName('tb-itemstatus');
                grid = document.getElementById("datagrid-index1").ej2_instances[0];

                var strobj = "{'fld_SYfile':'','IDVmData6':'" + IDVmData6 + "','fld_posType':0,'sys33':'','sys34':'','fld_taskStatus':'" + isApproved + "','IDVmData15':'templateBody','fld_IDVwfl':'" + IDVwfl.value + "'}";

                //ddtb-planedenddate
                var plannedDate = document.getElementById("ddtb-planedenddate").ej2_instances[0];
                var d = new Date(plannedDate.value);
                var sys7 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();

                var strDataTask = '{ "sys6": "' + selectedperformer.value + '", "sys7": "' + sys7 + '" }';

                $.ajax({
                    type: "POST",
                    url: "EformsEditor/NewItemWorkflow",
                    data: { id: strobj, templateBody: rteFormsObj.value, dataTask: strDataTask },
                    dataType: "json",
                    success: function (result) {
                        console.log(result);
                        if (result.IsSuccessful) {
                            location.reload();
                        }
                    },
                    error: function (result) {
                        alert('Oh no :(');
                    }
                });

            }
            else {
                //if (selectedNode == 1)

                var strval = "";

                var strobj = "{	'sys24':'" + codeSet + "','sys15':'" + useFormular + "','fld_SYfile':0,'fld_posType':0,'sys33':'','sys34':'','fld_IDVwfl':'" + IDVwfl.value + "','fld_taskStatus':'" + isApproved + "',";
                for (i = 0; i < items.length; i++) {
                    var id = items[i].id;
                    var textval = id.replace("modal-saveElement-list_", "");
                    var inputval = $("#" + id).find("input").val();

                    strval += textval + ": '" + inputval + "',";
                }
                strobj += strval + "}";

                //ddtb-planedenddate
                var plannedDate = document.getElementById("ddtb-planedenddate").ej2_instances[0];
                var d = new Date(plannedDate.value);
                var sys7 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();

                var strDataTask = '{ "sys6": "' + selectedperformer.value + '", "sys7": "' + sys7 + '" }';

                $.ajax({
                    type: "POST",
                    url: "/Home/NewItemWorkflow",
                    data: { id: strobj, dataTask: strDataTask, SelectedNode: selectedNode },
                    dataType: "json",
                    success: function (result) {
                        console.log(result);
                        if (result.IsSuccessful) {
                            location.reload();
                        }
                    },
                    error: function (result) {
                        alert('Oh no :(');
                    }
                });

            }
        }
    }
    catch (error) {
        ej.popups.DialogUtility.alert({
            title: 'Error',
            content: error.message,
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' }
        });
    }

}

function saveItemPMW() {

    // selected node id of tree
    var selectedNode = $("#treedata_active").attr("data-uid");


    // get the selected item of grid to edit that item or null to create new items
    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();

    //if null create mode else edit mode
    var rows = JSON.stringify(selectedRecords);

    // settings modal settings tab form data
    //code to apply on children
    var codeSet = document.getElementById("txtCCode").ej2_instances[0].value;
    //formula for children
    var useFormular = document.getElementById("ddtb-DdlUseFormular").ej2_instances[0].value;
    // is Folder checkbox value
    var SYfile = document.getElementById("CbSYfileFormular").checked;
    //children type checked radio button value
    var posType = $('input[name="RbAddItemCType"]:checked').val();

    //settings modal structure tab form data

    var fld_incl_parent_struct = document.getElementById('fld_incl_parant_struct').checked ? 1 : 0;
    var fld_incl_children_struct = document.getElementById('fld_incl_children_struct').checked ? 1 : 0;
    var structTreeInstance = document.getElementById("treedata_Settings").ej2_instances[0];
    var structTreeItems = ""
    var structTreeNodes = structTreeInstance.checkedNodes;
    debugger;
    if (structTreeNodes) {
        for (var _i = 0; _i < structTreeNodes.length; _i++) {
            structTreeItems = structTreeItems + structTreeNodes[_i] + "|";
        }
    }


    //settings modal deplicate tab form data
    let fld_incl_parent_dupli = document.getElementById('fld_incl_parent_dupli').checked ? 1 : 0;
    let fld_incl_children_dupli = document.getElementById('fld_incl_children_dupli').checked ? 1 : 0;
    var dupliTreeInstance = document.getElementById("dupl_treedata_Settings").ej2_instances[0];
    var dupliTreeItems = "";
    dupliTreeNodes = dupliTreeInstance.checkedNodes;
    if (dupliTreeNodes) {
        for (var _i = 0; _i < dupliTreeNodes.length; _i++) {
            dupliTreeItems = dupliTreeItems + dupliTreeNodes[_i] + "|";
        }
    }


    //workflow modal form data
    var IDVwfl = document.getElementById("ddtb-currentworkflow").ej2_instances[0].value;
    if (IDVwfl == null)
        IDVwfl = "";
    var taskStatus = $('input[name="tb-itemstatus"]:checked').val();

    let dataValues = {};
    dataValues.sys24 = codeSet;
    dataValues.sys15 = useFormular;
    dataValues.fld_SYfile = (SYfile ? 1 : 0);
    dataValues.fld_posType = posType;
    dataValues.sys33 = '';
    dataValues.sys34 = '';
    dataValues.fld_IDVwfl = IDVwfl;
    dataValues.fld_taskStatus = taskStatus;
    dataValues.fld_incl_parent_struct = fld_incl_parent_struct;
    dataValues.fld_incl_children_struct = fld_incl_children_struct;
    dataValues.fld_incl_parent_dupli = fld_incl_parent_dupli;
    dataValues.fld_incl_children_dupli = fld_incl_children_dupli;
    dataValues.fld_strut = structTreeItems;
    dataValues.fld_dupli = dupliTreeItems;


    //var strobj = "{	'sys24':'" + codeSet + "','sys15':'" + useFormular + "','fld_SYfile':'" + (SYfile ? 1 : 0) + "','fld_posType':'" + posType + "','sys33':'','sys34':'','fld_IDVwfl': '" + IDVwfl + "', 'fld_taskStatus': '" + taskStatus + "', 'fld_incl_parent_struct': '" + fld_incl_parent_struct + "', 'fld_incl_children_struct': '" + fld_incl_children_struct +
    //"','fld_incl_parent_dupli':'" + fld_incl_parent_dupli + "','fld_incl_children_dupli':'" + fld_incl_children_dupli + "','fld_strut':'" + structTreeItems + "','fld_dupli':'" + dupliTreeItems + "',";

    //var strval = "";
    //for (i = 0; i < items.length; i++) {
    //    var id = items[i].id;
    //    var textval = id.replace("modal-saveElement-list_", "");
    //    var inputval = $("#" + id).find("input").val();

    //    strval += textval + ": '" + inputval + "',";
    //}
    //strobj += strval + "}";

    var saveElementListObj = document.getElementById("modal-saveElement-list").ej2_instances[0];
    var ListItems = saveElementListObj.dataSource;

    if (ListItems) {
        ListItems.forEach(function (item) {

            if (item.IDVmData) {

                let _val = "";
                let _key = 'txt' + item.IDVmData;

                if (item.IDtoolBox == "6") { // Combobox
                    var inputId = `cmb_${item.text.replace(/\s+/g, '')}`;
                    var instance = document.getElementById(inputId).ej2_instances[0];
                    _val = instance.value;
                }
                else {
                    switch (parseInt(item.IDtypemData)) {
                        case 1:
                        case 6:
                        case 7:
                        case 9:
                        case 10: {
                            // all number type textbox value
                            var inputId = `inp_${item.text.replace(/\s+/g, '')}`;
                            var instance = document.getElementById(inputId).ej2_instances[0];
                            _val = instance.value;
                            break;
                        }
                        case 2:
                        case 3: {
                            // all simple textbox
                            var inputId = `inp_${item.text.replace(/\s+/g, '')}`;
                            var instance = document.getElementById(inputId).ej2_instances[0];
                            _val = instance.value;
                            break;
                        }
                        case 4: {
                            // DatePicker value
                            var inputId = `inp_${item.text.replace(/\s+/g, '')}`;
                            var instance = document.getElementById(inputId).ej2_instances[0];
                            _val = instance.element.value;
                            break;
                        }
                        case 5: {//Grid
                            _key = 'grid_table' + item.IDVmData;
                            var inputId = `grid_${item.text.replace(/\s+/g, '')}`;
                            var instance = document.getElementById(inputId).ej2_instances[0];
                            if (instance) {
                                var GridItems = instance.dataSource;
                                debugger;
                                _val = "grid_" + item.IDVmData;
                            }
                            break;
                        }
                        case 11: { //file inputs
                            var inputId = `inp_${item.text.replace(/\s+/g, '')}`;
                            var instance = document.getElementById(inputId);
                            if (instance && instance.files.length > 0) {
                                _val = instance.files[0].name;
                                data.append(_key + "_file", instance.files[0]);
                            }
                            break;
                        }
                        case 12: { // items
                            switch (item.IDtoolBox) {
                                case 6: {
                                    break;
                                }
                                case 8: {
                                    var inputId = `tree_${item.text.replace(/\s+/g, '')}`;
                                    var instance = document.getElementById(inputId).ej2_instances[0];

                                    let cNodes = instance.selectedNodes;
                                    debugger;
                                    if (cNodes != null) {
                                        _val = cNodes[0];
                                    }
                                    break;
                                }
                                case 9: {
                                    break;
                                }
                            }
                            break;
                        }
                        case 13: {
                            //_val = mdCtrl.innerHTML;
                        }
                    }

                }
                dataValues[_key] = _val;
            }
        });
    }


    var selectedperformer = document.getElementById('ddtb-SelectedPerform').ej2_instances[0].value;
    if (selectedperformer == null)
        selectedperformer = "";

    //ddtb-planedenddate
    var plannedDate = document.getElementById("ddtb-planedenddate").ej2_instances[0].value;
    var d = new Date(plannedDate);
    var sys7 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();

    var strobj = JSON.stringify(dataValues);
    var strDataTask = '{ "sys6": "' + selectedperformer + '", "sys7": "' + sys7 + '" }';
    debugger;
    $.ajax({
        type: "PUT",
        url: "/Home/CreateOrEditItemWorkflow",
        data: { data: strobj, dataTask: strDataTask, SelectedNode: selectedNode, selectedItem: rows },
        dataType: "json",
        success: function (result) {
            console.log(result);
            if (result.IsSuccessful) {
                location.reload();
            }
            else {
                alert(result.Message);
            }
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });

}


//pagbasura sa bagay
function DeleteItems() {

    DialogObj = ej.popups.DialogUtility.confirm({
        id: "deleteDialogWin",
        title: ' Confirmation Dialog',
        content: "Are you sure you want to delete the selected item/s?",
        okButton: { text: 'Delete', click: okClick },
        cancelButton: { text: 'Cancel', click: cancelClick },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });


}

function okClick() {
    DialogObj.hide();
    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();
    var rows = JSON.stringify(selectedRecords);
    console.log(rows);
    $.ajax({
        type: "Delete",
        url: "/Home/DeleteItems",
        data: { itemToDelete: rows },
        dataType: "json",
        success: function (result) {
            if (result.IsSuccessful) {
                DialogObjconfirm = ej.popups.DialogUtility.confirm({
                    title: 'Success',
                    content: "Item/s has been successfully deleted!",
                    okButton: { text: 'OK', click: CloseClick },
                    showCloseIcon: true,
                    closeOnEscape: true,
                    animationSettings: { effect: 'Zoom' }
                });
            }
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
}

function CloseClick() {

    var selectedNode = $("#treedata_active").attr("data-uid");
    var grid = document.getElementById("datagrid-index1").ej2_instances[0]; // Grid instance
    var taskgrid = document.getElementById("datagrid-index2").ej2_instances[0]; // Grid instance

    console.log(selectedNode);

    $.ajax({
        type: "GET",
        url: "/Home/GetItems",
        data: { TreeNodeID: parseInt(selectedNode) },
        dataType: "json",
        success: function (data) {

            grid.dataSource = data.gridViewV1;
            grid.refresh();


            //refresh task grid

            taskgrid.dataSource = data.TaskgridViewV1;
            taskgrid.refresh();
            DialogObjconfirm.hide();
        },
        error: function (data) {
            alert('Oh no :(');
        }
    });



}

function cancelClick() {
    DialogObj.hide();
}


//eForms

function closeEForms() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvmain-eforms');
    const modal = new Modal(targetEl);
    modal.hide();
}

function postNewFormsWorkflow() {


    // selected node id of tree
    var selectedNode = $("#treedata_active").attr("data-uid");


    // get the selected item of grid to edit that item or null to create new items
    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();

    //if null create mode else edit mode
    var rows = JSON.stringify(selectedRecords);


    let docData = {};
    docData.fld_SYfile = '';
    docData.IDVmData6 = $("#inp-eformsCap").val();
    docData.fld_posType = 0;

    //workflow modal form data
    var IDVwfl = document.getElementById("ddtb-currentworkflow").ej2_instances[0].value;
    if (IDVwfl == null)
        IDVwfl = "";
    var taskStatus = $('input[name="tb-itemstatus"]:checked').val();

    docData.fld_taskStatus = taskStatus;
    docData.fld_IDVwfl = IDVwfl.value;


    docData.IDVmData15 = 'templateBody';
    docData.sys33 ='';
    docData.sys34 = '';

    docData.fld_strut = '';
    docData.fld_dupli = '';


    var templateBody = document.getElementById("iframe-eforms").ej2_instances[0];

    //task related Data
    var selectedperformer = document.getElementById('ddtb-SelectedPerform').ej2_instances[0].value;
    if (selectedperformer == null)
        selectedperformer = "";

    //ddtb-planedenddate
    var plannedDate = document.getElementById("ddtb-planedenddate").ej2_instances[0].value;
    var d = new Date(plannedDate);
    var sys7 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();

    var strDataTask = '{ "sys6": "' + selectedperformer + '", "sys7": "' + sys7 + '" }';
    var strobj = JSON.stringify(docData);

    $.ajax({
        type: "POST",
        url: "/Home/NewFormsWorkflow",
        data: { dataDocItem: strobj, dataTask: strDataTask, templateBody: templateBody.value, selectedItem: rows },
        dataType: "json",
        success: function (result) {
            if (result.status) {
                location.reload();
            }
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
}

//Gen_html

function NewGenHtmlWorkflow() {

    var selectedperformer = document.getElementById('ddtb-SelectedPerform').ej2_instances[0];
    var IDVwfl = document.getElementById("ddtb-currentworkflow").ej2_instances[0];
    var IDVmData6 = $("#inp-eformsCap").val();
    var rteFormsObj = document.getElementById("iframe-eforms").ej2_instances[0];
    var ele = document.getElementsByName('tb-itemstatus');
    var isApproved;
    var grid = document.getElementById("datagrid-index1").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();
    var rows = JSON.stringify(selectedRecords);

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            isApproved = ele[i].value;
    }


    var strobj = "{'fld_SYfile':'','IDVmData6':'" + IDVmData6 + "','fld_posType':0,'sys33':'','sys34':'','fld_taskStatus':'" + isApproved + "','IDVmData15':'templateBody','fld_IDVwfl':'" + IDVwfl.value + "'}";

    //ddtb-planedenddate
    var plannedDate = document.getElementById("ddtb-planedenddate").ej2_instances[0];
    var d = new Date(plannedDate.value);
    var sys7 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();

    var strDataTask = '{ "sys6": "' + selectedperformer.value + '", "sys7": "' + sys7 + '" }';

    $.ajax({
        type: "POST",
        url: "/Home/NewFormsWorkflow",
        data: { id: strobj, dataTask: strDataTask, templateBody: rteFormsObj.value, selectedItem: rows },
        dataType: "json",
        success: function (result) {
            location.reload();
            if (result.IsSuccessful) {
                location.reload();
            }
        },
        error: function (result) {
            alert(result);
        }
    });
}


function keyupinputList(event) {
    var id = event.currentTarget.id;
    var xvalue = $("#" + id).val();
    if (event.keyCode == 32)
        $("#" + id).val(xvalue + ' ');


}

/*METADATA EDIT*/
function submitMetadata_wfinish() {
    var grpID = document.getElementById('ddtb-MetadataGroup').ej2_instances[0].value;
    var code = $("#txtmeta-code").val();
    var label = $("#txtmeta-label").val();
    var type = document.getElementById('ddmeta-type').ej2_instances[0].value;
    var toolbox = document.getElementById("ddmeta-toolbox").ej2_instances[0].value;
    var desc = $("#txtmeta-desc").val();
    var rema = $("#txtmeta-rema").val();

    var req = $("#chkmeta-req").prop("checked") ? 1 : 0;
    var addval = $("#chkmeta-addval").prop("checked") ? 1 : 0;
    var chgval = $("#chkmeta-chgval").prop("checked") ? 1 : 0;
    var inv = $("#chkmeta-inv").prop("checked") ? 1 : 0;
    var visibtre = $("#chkmeta-visibtre").prop("checked") ? 1 : 0;

    var grid = document.getElementById("Grid").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();
    var idmData = 0;
    if (selectedRecords.length > 0) {
        idmData = selectedRecords[0].IDVmData;
    }


    var rdata = {};
    rdata.GroupID = "";
    rdata.Code = code;
    rdata.Label = label;
    rdata.RQdata = req;
    rdata.UAdata = addval;
    rdata.uaChange = chgval;
    rdata.Description = desc;
    rdata.Remarks = rema;
    rdata.LblAddCalcPreview = "";
    rdata.MDtype = type;
    rdata.MDToolBox = toolbox;
    rdata.StaticItemSouce = 1;
    rdata.vInfo = inv;
    rdata.viTree = visibtre;
    rdata.approved = 0;
    rdata.DataGroupLink = "";
    if (!isNaN(grpID)) {
        rdata.MetadataGroup = grpID;
    }


    $.ajax({
        type: "POST",
        url: "MetadataWorkFlow",
        data: { 'rawdata': JSON.stringify(rdata), 'IDVmdata': idmData },
        dataType: "json",
        success: function (result) {
            if (result.IsSuccessful) {
                closeMetadata_edit();

                ej.popups.DialogUtility.alert({
                    title: 'Success',
                    content: "Metadata has been successfully added",
                    okButton: { text: 'OK', click: reloadMetadataeditlist(result) },
                    showCloseIcon: false,
                    closeOnEscape: false,
                    animationSettings: { effect: 'Zoom' }
                });
            }
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
}


function newMetadata_edit() {
    $("#dvmain-metadata").addClass("hidden");
    $("#dvmain-metadata").css("visibility", "");
    const targetEl = document.getElementById('dvmain-metadata');
    const modal = new Modal(targetEl);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-modal" });
    $("#main-body-modal").resizable({
        handleSelector: ".win-size-grip",
        touchActionNone: true
    });
}

function updateMetadata_edit() {
    var grid = document.getElementById("Grid").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();

    if (selectedRecords.length > 0) {
        var idmData = selectedRecords[0].IDVmData;

        $("#dvmain-metadata").addClass("hidden");
        $("#dvmain-metadata").css("visibility", "");
        const targetEl = document.getElementById('dvmain-metadata');
        const modal = new Modal(targetEl);
        modal.show();
        var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-modal" });
        $("#main-body-modal").resizable({
            handleSelector: ".win-size-grip",
            touchActionNone: true
        });
        $.ajax({
            type: "Get",
            url: "GetMetadataEditInfo",
            data: { 'SelectedItem': idmData },
            dataType: "json",
            success: function (result) {
                if (result !== undefined) {
                    $("#txtmeta-code").val(result[0]['COident']);
                    $("#txtmeta-label").val(result[0]['LAitem']);
                    document.getElementById("ddtb-MetadataGroup").ej2_instances[0].value = result[0]['IDmDataGroup'];
                    $("#txtmeta-desc").val(result[0]['DEtext']);
                    $("#txtmeta-rema").val(result[0]['REtext']);
                    document.getElementById("ddmeta-type").ej2_instances[0].value = parseInt(result[0]['IDtypemData']);
                    $("#chkmeta-req").prop("checked", result[0]['RQdata'] == 1 ? true : false);
                    $("#chkmeta-addval").prop("checked", result[0]['UAdata'] == 1 ? true : false);
                    $("#chkmeta-chgval").prop("checked", result[0]['UAchange'] == 1 ? true : false);
                    $("#chkmeta-inv").prop("checked", result[0]['VIinfo'] == 1 ? true : false);
                    $("#chkmeta-visibtre").prop("checked", result[0]['VItree'] == 1 ? true : false);

                    setTimeout(function () {
                        document.getElementById("ddmeta-toolbox").ej2_instances[0].value = parseInt(result[0]['IDtoolBox']);
                    }, 100);
                }
            },
            error: function (result) {
                alert('Oh no :(');
            }
        });
    }
    return false;
}

function closeMetadata_edit() {
    $("#txtmeta-code").val("");
    $("#txtmeta-label").val("");
    document.getElementById("ddtb-MetadataGroup").ej2_instances[0].value = null;
    $("#txtmeta-desc").val("");
    $("#txtmeta-rema").val("");
    document.getElementById("ddmeta-type").ej2_instances[0].value = 0;
    $("#chkmeta-req").prop("checked", false);
    $("#chkmeta-addval").prop("checked", false);
    $("#chkmeta-chgval").prop("checked", false);
    $("#chkmeta-inv").prop("checked", false);
    $("#chkmeta-visibtre").prop("checked", false);
    document.getElementById("ddmeta-toolbox").ej2_instances[0].value = 0;

    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvmain-metadata');
    const modal = new Modal(targetEl);
    modal.hide();
}


function closeMetadata_grp() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvmain-metagroup');
    const modal = new Modal(targetEl);
    modal.hide();
}

function closeMetadata_edit_add() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvmain-metaadd');
    const modal = new Modal(targetEl);
    modal.hide();
}

function DeleteMetadata() {

    DialogObj = ej.popups.DialogUtility.confirm({
        id: "deleteDialogWin",
        title: ' Confirmation Dialog',
        content: "Are you sure you want to delete the selected item/s?",
        okButton: { text: 'Delete', click: DeletionMetadata },
        cancelButton: { text: 'Cancel', click: cancelClick },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });


}
function DeletionMetadata() {
    DialogObj.hide();
    var grid = document.getElementById("Grid").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();
    var rows = JSON.stringify(selectedRecords);
    $.ajax({
        type: "DELETE",
        url: "DeleteMetadata",
        data: { rawjson: rows },
        dataType: "json",
        success: function (result) {
            if (result.IsSuccessful) {
                ej.popups.DialogUtility.alert({
                    title: 'Success',
                    content: "Metadata has been successfully deleted",
                    okButton: { text: 'OK', click: reloadMetadataeditlist(result) },
                    showCloseIcon: false,
                    closeOnEscape: false,
                    animationSettings: { effect: 'Zoom' }
                });
            }
        },
        error: function (result) {
            console.log(result.Message);
        }
    });

}

function metaGroupWindow() {
    $("#dvmain-metagroup").addClass("hidden");
    $("#dvmain-metagroup").css("visibility", "");
    const targetEl = document.getElementById('dvmain-metagroup');
    const modal = new Modal(targetEl);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-metagrp" });
    $("#main-body-metagrp").resizable({ handleSelector: ".win-size-grip" });
}

function metaGroupEditWindow() {

    var grid = document.getElementById("GroupGrid").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();

    var rows = JSON.stringify(selectedRecords);
    console.log(selectedRecords.length);

    if (selectedRecords.length > 0) {
        document.getElementById('txtmetagrpedit-code').value = selectedRecords[0].COident;
        document.getElementById('txtmetagrpedit-label').value = selectedRecords[0].LAitem;
        document.getElementById('txtmetagrpedit-desc').value = selectedRecords[0].DEtext;
        document.getElementById('txtmetagrpedit-rema').value = selectedRecords[0].REtext;
        document.getElementById('GroupIDedit').value = selectedRecords[0].IDmDataGroup;



        //dvEdit-metagroup
        $("#dvEdit-metagroup").addClass("hidden");
        $("#dvEdit-metagroup").css("visibility", "");
        const targetEl = document.getElementById('dvEdit-metagroup');
        const modal = new Modal(targetEl);
        modal.show();
        var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-metagrpedit" });
        $("#main-body-metagrpedit").resizable({ handleSelector: ".win-size-grip" });
    }
    else {
        ej.popups.DialogUtility.alert({
            title: 'Error',
            content: "Please select metadatagroup in grid",
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' }
        });
    }
}

function metaGroupDelete() {
    var grid = document.getElementById("GroupGrid").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();

    var rows = JSON.stringify(selectedRecords);
    console.log(selectedRecords.length);

    if (selectedRecords.length > 0) {
        if (confirm('Are you sure you want to delete this group?')) {
            // DELETE it!
            //;
            //GroupDelet.\

            $.ajax({
                type: "POST",
                url: "GroupDelete",
                data: { groupID: selectedRecords[0].IDmDataGroup },
                dataType: "json",
                success: function (result) {
                    location.reload();
                    if (result.IsSuccessful) {
                        location.reload();
                    }
                },
                error: function (result) {
                    alert(result.Message);
                }
            });
        } else {

        }

    }
    else {
        ej.popups.DialogUtility.alert({
            title: 'Error',
            content: "Please select metadatagroup in grid",
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' }
        });
    }

}

function closeMetadata_edit_grp() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvEdit-metagroup');
    const modal = new Modal(targetEl);
    modal.hide();
}


function metaAddWindow() {
    $("#dvmain-metaadd").addClass("hidden");
    $("#dvmain-metaadd").css("visibility", "");
    const targetEl = document.getElementById('dvmain-metaadd');
    const modal = new Modal(targetEl);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-metaadd" });
    $("#main-body-metaadd").resizable({ handleSelector: ".win-size-grip" });
}


function submitMetadata_grp() {
    debugger
    var csecondListObj = document.getElementById("Clist-2").ej2_instances[0];
    var InhPrefSepar = document.getElementById("InhPrefSepar").ej2_instances[0];
    var treedata = document.getElementById("treedata").ej2_instances[0];
    /*var datasend = treedata.selectedNode[1];*/
    var csecondListData = csecondListObj.dataSource.slice();
    var InhPrefSeparData = InhPrefSepar.typedString;
    var textautoinput = $("#text-autoinput").val();
    var IDVTreeItem = treedata.checkedElement[0];

    var Seconlist = "";
    for (var r = 0; r < csecondListData.length; r++) {
        Seconlist = Seconlist + csecondListData[r].value;
    }
    $.ajax({
        type: "POST",
        url: "/Home/CodeSystemSave",
        data: { csecondListdata: Seconlist, inhPrefSeparData: InhPrefSeparData, Textautoinput: textautoinput, iDVTreeItem: IDVTreeItem },
        dataType: "json",
        success: function (data, status, xhr) {
            debugger
            if (data.IsSuccessful) {
                location.reload();


            }
            /* $("#dvmain-codesystem").addClass("hidden");*/
            else {

            }

        },
        error: function (result) {
            alert(result.Message);
        }
    });

}


function submitMetadata_edit_grp() {

    var grpID = $("#GroupIDedit").val();
    var code = $("#txtmetagrpedit-code").val();
    var label = $("#txtmetagrpedit-label").val();
    var desc = $("#txtmetagrpedit-desc").val();
    var rema = $("#txtmetagrpedit-rema").val();

    $.ajax({
        type: "POST",
        url: "GroupEdit",
        data: { groupID: grpID, Code: code, Label: label, Description: desc, Remarks: rema },
        dataType: "json",
        success: function (result) {
            location.reload();
            if (result.IsSuccessful) {
                location.reload();
            }
        },
        error: function (result) {
            alert(result.Message);
        }
    });
}


function submitMetadata_save() {
    de
    var grpID = document.getElementById('ddtb-MetadataGroup').ej2_instances[0].value;
    var code = $("#txtmeta-code").val();
    var label = $("#txtmeta-label").val();
    var type = document.getElementById('ddmeta-type').ej2_instances[0].value;
    var toolbox = document.getElementById("ddmeta-toolbox").ej2_instances[0].value;
    var desc = $("#txtmeta-desc").val();
    var rema = $("#txtmeta-rema").val();

    var req = $("#chkmeta-req").prop("checked") ? 1 : 0;
    var addval = $("#chkmeta-addval").prop("checked") ? 1 : 0;
    var chgval = $("#chkmeta-chgval").prop("checked") ? 1 : 0;
    var inv = $("#chkmeta-inv").prop("checked") ? 1 : 0;
    var visibtre = $("#chkmeta-visibtre").prop("checked") ? 1 : 0;

    var grid = document.getElementById("Grid").ej2_instances[0];
    var selectedRecords = grid.getSelectedRecords();
    var idmData = 0;
    if (selectedRecords.length > 0) {
        idmData = selectedRecords[0].IDVmData;
    }


    var rdata = {};
    rdata.GroupID = "";
    rdata.Code = code;
    rdata.Label = label;
    rdata.RQdata = req;
    rdata.UAdata = addval;
    rdata.uaChange = chgval;
    rdata.Description = desc;
    rdata.Remarks = rema;
    rdata.LblAddCalcPreview = "";
    rdata.MDtype = type;
    rdata.MDToolBox = toolbox;
    rdata.StaticItemSouce = 1;
    rdata.vInfo = inv;
    rdata.viTree = visibtre;
    rdata.approved = 0;
    rdata.DataGroupLink = "";
    if (!isNaN(grpID)) {
        rdata.MetadataGroup = grpID;
    }


    $.ajax({
        type: "POST",
        url: "MetadataSave",
        data: { 'rawdata': JSON.stringify(rdata), 'IDVmdata': idmData },
        dataType: "json",
        success: function (result) {
            if (result.IsSuccessful) {
                closeMetadata_edit();

                ej.popups.DialogUtility.alert({
                    title: 'Success',
                    content: "Metadata has been successfully added",
                    okButton: { text: 'OK', click: reloadMetadataeditlist(result) },
                    showCloseIcon: false,
                    closeOnEscape: false,
                    animationSettings: { effect: 'Zoom' }
                });
            }
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });

}
function reloadMetadataeditlist(result) {
    var grid = document.getElementById("Grid").ej2_instances[0];
    grid.dataSource = result.MDgetMetaDataList;
    grid.refresh();
}


function updateddmetaToolbox() {
    var type = document.getElementById('ddmeta-type').ej2_instances[0].value;
    var toolbox = document.getElementById("ddmeta-toolbox").ej2_instances[0];
    $.ajax({
        type: "GET",
        url: "GetMetadataToolbox",
        data: { Id: type },
        dataType: "json",
        success: function (result) {
            toolbox.value = null;
            toolbox.dataSource = null;
            toolbox.dataSource = result.MetadataToolBox;
        }
    });
}

/*Options Dialog*/
function OpenOptionsWindow() {
    $("#OptionsWindow").addClass("hidden");
    $("#OptionsWindow").css("visibility", "");
    const targetEl = document.getElementById('OptionsWindow');
    const modal = new Modal(targetEl);
    modal.show();
    const draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-OptionsWindow" });
    $("#main-body-OptionsWindow").resizable({
        handleSelector: ".win-size-grip",
        touchActionNone: true
    });
}

function OpenGroupWindow() {
    $("#GroupWindow").addClass("hidden");
    $("#GroupWindow").css("visibility", "");
    const targetEl = document.getElementById('GroupWindow');
    const modal = new Modal(targetEl);
    modal.show();
    const draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-GroupWindow" });
    $("#main-body-GroupWindow").resizable({
        handleSelector: ".win-size-grip",
        touchActionNone: true
    });
}
function closeGrouppWindow() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('GroupWindow');
    const modal = new Modal(targetEl);
    modal.hide();
}
function closeOptionsWindow() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('OptionsWindow');
    const modal = new Modal(targetEl);
    modal.hide();
}

function OpenAboutWindow() {
    $("#AboutWindow").addClass("hidden");
    $("#AboutWindow").css("visibility", "");
    const targetEl = document.getElementById('AboutWindow');
    const modal = new Modal(targetEl);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-AboutWindow" });
    $("#main-body-AboutWindow").resizable({
        handleSelector: ".win-size-grip",
        touchActionNone: true
    });
}
function OpenCommingSoonWindow() {
    $("#CommingSoonWindow").addClass("hidden");
    $("#CommingSoonWindow").css("visibility", "");
    const targetEl = document.getElementById('CommingSoonWindow');
    const modal = new Modal(targetEl);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-CommingSoonWindow" });
    $("#main-body-CommingSoonWindow").resizable({
        handleSelector: ".win-size-grip",
        touchActionNone: true
    });
}

function closeAboutWindow() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('AboutWindow');
    const modal = new Modal(targetEl);
    modal.hide();
}

function selectedMenu(args) {
    debugger;
    //if (args.item.id === "menu_Group") {
    //    OpenGroupWindow();
    //}



    // File  menu items
    if (args.item.id === "menu_Save_as"
        || args.item.id === "menu_Save_as_Template"
        || args.item.id === "menu_Deactivate"
        || args.item.id === "menu_Activate"
        || args.item.id === "menu_Export"
        || args.item.id === "menu_Send"
        || args.item.id === "menu_Print") {
        OpenCommingSoonWindow();
    }
    if (args.item.id === "menu_Logout") {
        document.getElementById('logoutForm').submit();
    }
    if (args.item.id === "menu_Task") {
        window.location.href = '/Home/Index/5';
    }

    // Edit  menu items
    if (args.item.id === "menu_Copy") {
        OpenCommingSoonWindow();
    }
    if (args.item.id === "menu_Paste") {
        OpenCommingSoonWindow();
    }


    // Addons  menu items
    if (args.item.id === "menu_Calendar") {
        OpenCommingSoonWindow();
    }
    if (args.item.id === "menu_Plan") {
        OpenCommingSoonWindow();
    }

    // Settings  menu items
    if (args.item.id === "menu_Options") {
        OpenOptionsWindow();
    }

    //help menu items
    if (args.item.id === "menu_Contents") {
        OpenCommingSoonWindow();
    }
    if (args.item.id === "menu_What_is_this") {
        OpenCommingSoonWindow();
    }
    if (args.item.id === "menu_Search") {
        OpenCommingSoonWindow();
    }
    if (args.item.id === "menu_About") {
        OpenCommingSoonWindow();
        //OpenAboutWindow();
    }

}
function submitOptionsWindow() {
    var chkedtformular = $("#chkmeta-chgval").prop("checked");
    var txtoptsymbol = document.getElementById('txtopt-symbol').ej2_instances[0].index;
    var txtoptdecimal = document.getElementById('txtopt-decimal').ej2_instances[0].index;
    var txtoptgrpsepa = document.getElementById('txtopt-grpsepa').ej2_instances[0].index;
    var txtglbdateform = document.getElementById('txtopt-glbdateform').ej2_instances[0].index;
    var ddlanguage = document.getElementById('txtopt-language').ej2_instances[0];

    var rdata = {};
    rdata.CheckFormular = chkedtformular;
    rdata.Symbol = txtoptsymbol;
    rdata.Decimal = txtoptdecimal;
    rdata.Separator = txtoptgrpsepa;
    rdata.DateForm = txtglbdateform;
    rdata.Language = ddlanguage.value;


    $.ajax({
        type: "Post",
        url: window.location.origin + "/MenubarView/SetupOptionsSettings",
        data: { Id: JSON.stringify(rdata) },
        dataType: "json",
        success: function (result) {
            ej.popups.DialogUtility.alert({
                title: 'Success',
                content: "Settings has been successfully updated",
                okButton: { text: 'OK', click: closeOptionsWindow() },
                showCloseIcon: false,
                closeOnEscape: false,
                animationSettings: { effect: 'Zoom' }
            });
            location.reload();
        }
    });

}


//Code System

function codeSystemWindow(value) {
    debugger
    if (value == 1) {
        var grid = document.getElementById('CSGrid').ej2_instances[0];
        var data = grid.dataSource;
        var selectedRecords = grid.getSelectedRecords();
        var coddestring = (selectedRecords[0].Value);

        var list1 = document.getElementById('Clist-1').ej2_instances[0];

        var list2 = document.getElementById('Clist-2').ej2_instances[0];
        list2.dataSource.length = 0;
        var tokens = coddestring.split('[').filter(function (token) {
            return token.trim() !== ''; // Remove empty entries
        });
        var InhPrefSepar = document.getElementById("InhPrefSepar").ej2_instances[0];
        var treedata = document.getElementById("treedata").ej2_instances[0];


        for (var r = 0; r < tokens.length - 1; r++) {
            for (var rr = 0; rr < list1.dataSource.length; rr++) {
                if ('[' + tokens[r] == list1.dataSource[rr].value) {
                    list2.dataSource = Array.prototype.concat.call(list2.dataSource, list1.dataSource[rr]);
                    list2.dataBind();
                }
                else {

                    var tokenss = tokens[r].split('#').filter(function (token) {
                        return token.trim() !== ''; // Remove empty entries
                    });
                    if ('[' + tokenss[0] == list1.dataSource[rr].value) {
                        list2.dataSource = Array.prototype.concat.call(list2.dataSource, list1.dataSource[rr]);
                        list2.dataBind();
                    }

                }


            }

        }
        var tokenss = coddestring.split('#').filter(function (token) {
            return token.trim() !== ''; // Remove empty entries
        });
        var zeros = "";

        $("#text-autoinput").val(tokenss[1]);
        ///*updateFirstListData();*/
        var csecondListData = list2.dataSource.slice();
        $("#dvmain-codesystem").addClass("hidden");
        $("#dvmain-codesystem").css("visibility", "");
        const targetEl = document.getElementById('dvmain-codesystem');
        const modal = new Modal(targetEl);
        modal.show();
        var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-codesystem" });
        $("#main-body-codesystem").resizable({ handleSelector: ".win-size-grip" });
    }
    else {
        $("#dvmain-codesystem").addClass("hidden");
        $("#dvmain-codesystem").css("visibility", "");
        const targetEl = document.getElementById('dvmain-codesystem');
        const modal = new Modal(targetEl);
        modal.show();
        var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#main-body-codesystem" });
        $("#main-body-codesystem").resizable({ handleSelector: ".win-size-grip" });
    }
}
function codeSystemEditWindow() {
    debugger
    $("#dvedit-codesystem").addClass("hidden");
    $("#dvedit-codesystem").css("visibility", "");
    const targetEl = document.getElementById('dvedit-codesystem');
    const modal = new Modal(targetEl);
    modal.show();
    var draggable = new ej.base.Draggable(targetEl, { clone: false, abort: "#edit-body-codesystem" });
    $("#edit-body-codesystem").resizable({ handleSelector: ".win-size-grip" });
}
function closecodesystem() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvmain-codesystem');
    const modal = new Modal(targetEl);
    modal.hide();
}


function closecodesystem_edit() {
    $('div[modal-backdrop]').eq(0).remove();
    const targetEl = document.getElementById('dvedit-codesystem');
    const modal = new Modal(targetEl);
    modal.hide();
}


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function createCtrlRowInLeftList(CtrlData) {

    var ParantElement = document.createElement('div');
    ParantElement.className = 'col-sm-8';

    var ctrl = '';
    if (CtrlData.IDtypemData == 1) {// integer
        ctrl = createInteger(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 2) { // nvarchar
        ctrl = createTextBox(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 3) { // nvarchar(max)
        ctrl = createTextBox(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 4) { //datetime
        ctrl = createDateBox(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 5) { // grid
        ctrl = createGrid(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 6) { // decimal
        ctrl = createDec(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 7) { // float
        ctrl = createFlo(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 8) { // xml

    }
    else if (CtrlData.IDtypemData == 9) { // money
        ctrl = createMoney(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 10) { // tinyint, range -255 to 255
        ctrl = createTinyInt(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 11) { // image
        ctrl = createFileUpload(ParantElement, CtrlData);
    }
    else if (CtrlData.IDtypemData == 12) { // item
        if (CtrlData.IDtoolBox == 1) {
            // textbox
            ctrl = createTextBox(ParantElement, CtrlData);
        }
        else if (CtrlData.IDtoolBox == 6) {
            // combobox
            ctrl = createCombobox(ParantElement, CtrlData);
        }
        else if (CtrlData.IDtoolBox == 8) {
            // treeview
            ctrl = createTreeDiv(ParantElement, CtrlData);
        }
        //else if (CtrlData.IDtoolBox == 9) {
        //    // listbox , we don't have listbox in database yet
        //    ctrl =  createListbox(ParantElement, CtrlData);
        //}
    }
    else if (CtrlData.IDtypemData == 13) { // calculated

    }

    return ctrl;
}

function createInteger(ParantElement, CtrlData) {
    if (CtrlData) {


        var Integer = new ej.inputs.NumericTextBox({
            min: -2147483647,
            max: 2147483647,
            decimals: 0,
            format: 'n0',
            value: `${CtrlData.value}`
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `text`;
        ParantElement.appendChild(input);
        setTimeout(function () {
            Integer.appendTo("#" + input.id);
        }, 100);
    }
    return ParantElement.outerHTML;
    //var input = `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="number" />`;
    //return input;

}
function createTextBox(ParantElement, CtrlData) {
    if (CtrlData) {

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `text`;
        ParantElement.appendChild(input);


        var TextBox = new ej.inputs.TextBox({
            value: `${CtrlData.value}`
        });
        setTimeout(function () {
            TextBox.appendTo("#" + input.id);
        }, 100);
    }
    return ParantElement.outerHTML;
    //return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="text" />`

}
function createTinyInt(ParantElement, CtrlData) {
    if (CtrlData) {

        var TinyIntInput = new ej.inputs.NumericTextBox({
            min: -255,
            max: 255,
            decimals: 0,
            format: 'n0',
            value: `${CtrlData.value}`
        });

        var inputElement = document.createElement('input');
        // Set attributes for the input element
        inputElement.setAttribute('id', `inp_${CtrlData.text.replace(/\s+/g, '')}`);
        inputElement.setAttribute('class', 'inp_listentry1');
        inputElement.setAttribute('value', CtrlData.value);
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('oninput', 'validateTinyInput(this);this.oldvalue=this.value;');
        ParantElement.appendChild(inputElement);

        setTimeout(function () {
            TinyIntInput.appendTo("#" + inputElement.id);
        }, 100);
    }
    return ParantElement.outerHTML;
    //return `<input id="inp_${CtrlData.text}" min="-255" max="255" class="inp_listentry1" value="${CtrlData.value}" type="number" oninput="validateInput(this);this.oldvalue=this.value;" />`

}
function validateTinyInput(input) {
    if (input.value < -255 || input.value > 255) {
        input.value = input.oldvalue;
    }
}
function createDateBox(ParantElement, CtrlData) {
    if (CtrlData) {

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        //input.value = `${CtrlData.value ?? new Date() }`;
        ParantElement.appendChild(input);


        var datePicker = new ej.calendars.DatePicker();
        //datePicker.id = `inp_${CtrlData.text}`;
        //datePicker.className = `inp_listentry1`;
        // Set properties for the DatePicker
        datePicker.placeholder = "Select a date"; // Placeholder text
        if (CtrlData.value) {
            datePicker.value = new Date(CtrlData.value);
        } else {
            datePicker.value = new Date(); // Default selected date
        }
        datePicker.format = "yyyy.MM.dd"; // Date format

        setTimeout(function () {
            datePicker.appendTo("#" + input.id);
        }, 100);
        //datePicker.appendTo(input);
    }
    return ParantElement.outerHTML;
    // return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="date" />`

}
function createDec(ParantElement, CtrlData) {
    if (CtrlData) {

        var DecInput = new ej.inputs.NumericTextBox({
            min: -999999999999999998,
            max: 999999999999999998,
            decimals: 9,
            format: 'n3',
            value: `${CtrlData.value}`
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `text`;
        ParantElement.appendChild(input);


        setTimeout(function () {
            DecInput.appendTo("#" + input.id);
        }, 100);
    }
    return ParantElement.outerHTML;
    //return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="number" />`

}
function createFlo(ParantElement, CtrlData) {
    if (CtrlData) {

        var FloInput = new ej.inputs.NumericTextBox({
            decimals: 9,
            format: 'n3',
            value: `${CtrlData.value}`
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `text`;
        ParantElement.appendChild(input);


        setTimeout(function () {
            FloInput.appendTo("#" + input.id);
        }, 100);
    }
    return ParantElement.outerHTML;
    //return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="number" />`

}
function createMoney(ParantElement, CtrlData) {
    if (CtrlData) {

        var MoneyInput = new ej.inputs.NumericTextBox({
            min: -999999999999999998,
            max: 999999999999999998,
            decimals: 4,
            format: 'c4',
            value: `${CtrlData.value}`
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `text`;
        ParantElement.appendChild(input);
        setTimeout(function () {
            MoneyInput.appendTo("#" + input.id);
        }, 100);
    }
    return ParantElement.outerHTML;
    //return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="number" />`

}
function createFileUpload(ParantElement, CtrlData) {
    if (CtrlData) {
        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `file`;
        ParantElement.appendChild(input);
    }
    return ParantElement.outerHTML;
    //return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="file" />`
}
function createTreeDiv(ParantElement, CtrlData) {
    if (CtrlData && CtrlData.items) {
        var input = document.createElement('div');
        input.id = `tree_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `saveModalItemsTree`;
        ParantElement.appendChild(input);


        var data = CtrlData.items;
        //Initialize TreeView component
        var treeViewInstance = new ej.navigations.TreeView({
            fields: {
                dataSource: data,
                id: "IDVtreeItem",
                text: "COtree",
                // iconCss: "icon",
                // imageURL: "image",
                selected: "Selected",
                // child: 'nodeChild'
            }
        });

        setTimeout(function () {
            treeViewInstance.appendTo(`#tree_${CtrlData.text}`);
        }, 100);

    }
    return ParantElement.outerHTML;
}
function createGrid(ParantElement, CtrlData) {

    if (CtrlData && CtrlData.columns) {
        var gridContainer = document.createElement('div');
        gridContainer.id = `grid_${CtrlData.text.replace(/\s+/g, '')}`;
        gridContainer.style.minWidth = ((CtrlData.columns.length * 200) + 120) + "px";
        gridContainer.className = `saveModalItemsGrid`;
        ParantElement.appendChild(gridContainer);
        var columns = CtrlData.columns;

        gridColumns = [];
        gridColumns.push({ field: 'Index', headerText: 'Index', visible: false, isPrimaryKey: true });

        var gridRows = [];
        columns.forEach(function (col, index) {
            var editType = "";
            if (col.IDtypemData == 1) {// integer
                editType = "numericedit";
            }
            else if (col.IDtypemData == 4) { //datetime
                editType = "datepickeredit";
            }
            else if (col.IDtypemData == 6) { // decimal
                editType = "numericedit";
            }
            else if (col.IDtypemData == 7) { // float
                editType = "numericedit";
            }
            else if (col.IDtypemData == 9) { // money
                editType = "numericedit";
            }
            else if (col.IDtypemData == 10) { // tinyint
                editType = "numericedit";
            }
            gridColumns.push({ field: col.text, headerText: col.text, editType: editType });
        });
        gridColumns.push({
            headerText: 'Actions', width: 120,
            commands: [
                { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
                { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
                { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
                { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }
            ]
        });

        // we add this (args.cancel = true;) for most action event triggered to stop default action funcationality
        // because default event add new empty row before the action functionality for the current row performs
        // when new record added row is showing
        var grid = new ej.grids.Grid({
            dataSource: gridRows,
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                showAddNewRow: true,
                mode: "Normal",
                newRowPosition: 'Bottom'
            },
            columns: gridColumns,
            enableAutoSaveOnSelectionChange: false,
            commandClick: function (args) {
                if (args.commandColumn.type == "Edit") {
                    args.cancel = true;
                    this.startEdit();
                }
                if (args.commandColumn.type == "Delete") {
                    args.cancel = true;
                    if (this.getSelectedRows().length > 0)
                        this.deleteRecord(args.rowData);
                    else {
                        this.selectRows = args.rowData.Index; // sometime selected row null soo first select the row which delete button is clicked
                        this.deleteRecord("Index", args.rowData);
                    }
                }
            },
            actionBegin: function (args) {
                if (args.requestType === 'save') {
                    if (args.action == "edit") {
                        args.cancel = true; // stop edit action because default event add empty row before update the current row when new record added row is showing
                        this.updateRow(args.data.Index, args.data);//index and data
                    }
                    if (args.action == "add") {
                        var rows = this.getRows();
                        args.data.Index = rows.length;
                        args.index = (this.pageSettings.currentPage * this.pageSettings.pageSize) - 1;
                    }
                }

            }
        });

        setTimeout(function () {
            grid.appendTo("#" + gridContainer.id);
        }, 100);
    }
    return ParantElement.outerHTML;

}

function createCombobox(ParantElement, CtrlData) {
    if (CtrlData && CtrlData.values) {
        var input = document.createElement('input');
        input.id = `cmb_${CtrlData.text.replace(/\s+/g, '')}`;
        input.className = `inp_listentry1`;
        input.value = `${CtrlData.value}`;
        input.type = `text`;

        var cbData = CtrlData.values;
        var selectedItem = cbData.find(obj => obj._SYdefault == 1);
        ParantElement.appendChild(input);

        // initialize ComboBox component
        var comboBox = new ej.dropdowns.ComboBox({
            dataSource: cbData,
            fields: { value: '_id', text: "_value" },
            value: (selectedItem ? selectedItem._id : ""),
        });

        setTimeout(function () {
            comboBox.appendTo(`#${input.id}`);
        }, 100);

    }
    return ParantElement.outerHTML;
}

//Onload
//(function () {
//    //Syncfusion change languange

//    var langcookie = "en-US";
//    setTimeout(function () {
//        $.ajax({
//            type: "Get",
//            url: window.location.origin + "/MenubarView/GetCurrentSelectedLanguange",
//            dataType: "json",
//            success: function (result) {
//                langcookie = result.CurrentCulture;

//                var ajaxLang = new ej.base.Ajax(location.origin + '/../../locale/' + langcookie + '.json', 'GET', false);   //load the json culture file
//                ajaxLang.send().then((e) => {
//                    var loader = JSON.parse(e);
//                    ej.base.L10n.load(
//                        loader
//                    );
//                    ej.base.setCulture(langcookie);      //Set the culture for the ASP.NET Core controls
//                });
//            }
//        });
//    }, 500);


//})();