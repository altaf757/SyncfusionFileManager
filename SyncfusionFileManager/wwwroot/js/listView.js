
var obj1 = {
    text: 'Name',
    id: 'txt_12',
    value: '',
    toolBoxName: 'text',
    IDVmData: 18,
    IDtypemData: 11,
    IDtoolBox: 16,
    columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
        { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
        { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],
    
    values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
    { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
    { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
    items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
    { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
    { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
};

function AddItemInList(Id) { // textbox
    listviewInstance = document.getElementById("modal-saveElement-list").ej2_instances[0];

    if (Id == 1) {// integer
        var obj = {
            text: 'integer',
            id: 'txt_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 1,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 2) { // nvarchar

        var obj = {
            text: 'textbox',
            id: 'txt_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 2,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 4) { //datetime
        var obj = {
            text: 'datetime',
            id: 'txt_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 4,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 5) { // grid
        var obj = {
            text: 'grid',
            id: 'grid_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 5,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 6) { // decimal
        var obj = {
            text: 'decimal',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 6,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 7) { // float
        var obj = {
            text: 'float',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 7,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 9) { // money
        var obj = {
            text: 'money',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 9,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 10) { // tinyint, range -255 to 255

        var obj = {
            text: 'tinyint',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 10,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 11) { // image
        var obj = {
            text: 'file',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 11,
            IDtoolBox: 1,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 12) { // combobox
        var obj = {
            text: 'dropdown',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 12,
            IDtoolBox: 6,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
    else if (Id == 13) { // treeview
        var obj = {
            text: 'tree',
            id: 'text_' + Id,
            value: '',
            toolBoxName: 'text',
            IDVmData: Id,
            IDtypemData: 12,
            IDtoolBox:8,
            columns: [{ text: "Name1", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 1, IDtoolBox: 1 },
            { text: "Surname1", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDtypemData: 2, IDtoolBox: 1 },
            { text: "email1", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDtypemData: 3, IDtoolBox: 1 }],

            values: [{ _value: "Name", _id: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { _value: "Surname", _id: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { _value: "email", _id: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }],
            items: [{ COtree: "Name", IDVtreeItem: 'text_1', _SYdefault: '0', toolBoxName: 'text', IDVitem: 1, IDtoolBox: 1 },
            { COtree: "Surname", IDVtreeItem: 'text_2', _SYdefault: '0', toolBoxName: 'text', IDVitem: 2, IDtoolBox: 1 },
            { COtree: "email", IDVtreeItem: 'text_19', _SYdefault: '1', toolBoxName: 'text', IDVitem: 3, IDtoolBox: 1 }]
        };

        listviewInstance.addItem([obj]);
        listviewInstance.dataBind();
    }
};

function btnRemoveClick(){
    listviewInstance = document.getElementById("modal-saveElement-list").ej2_instances[0];
    var obj= listviewInstance.selectedItems;
     
     listviewInstance.removeItem(obj);
     listviewInstance.dataBind();
 };

function createCtrlRowInLeftList(CtrlData) {

    var ParantElement = document.createElement('div');
    ParantElement.className = 'col-sm-8 saveModalValueColumn';

    var ctrl = '';
    if (CtrlData.IDtoolBox == "6" && CtrlData.IDtypemData != 12) { // Combobox, razen item cb.
        ctrl = createCombobox(ParantElement,CtrlData);
    }
    else {
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
            ctrl =createGrid(ParantElement, CtrlData);
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
    }

    //if (CtrlData.toolBoxName == "text")
    //    return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="${CtrlData.value}" type="text" />`;
    // else if(toolBoxName=="number")
    //    return `<input id="inp_${CtrlData.text}" class="inp_listentry1" value="123123" type="number" />`
    //else
    return ctrl;
}

function createInteger(ParantElement, CtrlData) {
    if (CtrlData) {


        var Integer = new ej.inputs.NumericTextBox({
            min: -2147483647,
            max: 2147483647,
            decimals: 0,
            format: 'n0',
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
        });

        var inputElement = document.createElement('input');
        // Set attributes for the input element
        inputElement.setAttribute('id',`inp_${CtrlData.text.replace(/\s+/g, '')}`);
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
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '') }`;
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
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '') }`;
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
        });

        var input = document.createElement('input');
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '') }`;
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
        input.id = `inp_${CtrlData.text.replace(/\s+/g, '') }`;
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
        input.id = `tree_${CtrlData.text.replace(/\s+/g, '') }`;
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
                // selected: "Selected",
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
        gridContainer.id = `grid_${CtrlData.text.replace(/\s+/g, '') }`;
        gridContainer.style.minWidth = ((CtrlData.columns.length * 200)+ 120) + "px";
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
        input.id = `cmb_${CtrlData.text.replace(/\s+/g, '') }`;
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


function createCombobox1(ParantElement, CtrlData) {
    if (CtrlData && CtrlData.values) {
        var DropDownElement = document.createElement('select');
        DropDownElement.id = `cmb_${CtrlData.text.replace(/\s+/g, '') }`;
        DropDownElement.className = `inp_listentry1`;
        //DropDownElement.addEventListener('click', function (event) {
        //    // Prevent the focusout event from bubbling up to the <li> element

        //    event.stopPropagation();
        //    event.preventDefault();
        //    event.stopImmediatePropagation();
        //});
        var cbData = CtrlData.values;
        cbData.forEach(function (data, index) {
            let option = document.createElement("option");
            option.setAttribute('value', data._id);
            if (data._SYdefault && data._SYdefault == 1) {
                option.setAttribute('selected', true);
            }
            let optionText = document.createTextNode(data._value);
            option.appendChild(optionText);

            DropDownElement.appendChild(option);
        });
        ParantElement.appendChild(DropDownElement);
    }
    return ParantElement.outerHTML;
}



function showdata() {
    var moveItemToMetaDataListBtn = document.getElementById("modal-saveElement-list").ej2_instances[0];
    //console.log(moveItemToMetaDataListBtn.dataSource);
    var ListItems = moveItemToMetaDataListBtn.dataSource;

    let dataValues = {};

    dataValues.asdfasdfsdf ="this is diemo";
    if (ListItems) {
        ListItems.forEach(function (item) {

            let _val = "";
            let _key = 'txt' + item.IDVmData;

            if (item.IDtoolBox == "6") { // Combobox
                var inputId = `cmb_${item.text.replace(/\s+/g, '')}`;
                var instance = document.getElementById(inputId).ej2_instances[0];
                _val = instance.value;
            }
            else {
                switch (item.IDtypemData) {
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

                dataValues[_key] = _val;
            }
        });
    }

    console.log(dataValues);
}