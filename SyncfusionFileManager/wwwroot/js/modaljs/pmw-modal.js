

//modal
var firstListObj, secondListObj, firstBtnObj, secondBtnObj, thirdBtnObj, fourthBtnObj, firstListData, secondListData;
var cfirstListObj, csecondListObj, cfirstBtnObj, csecondBtnObj, cthirdBtnObj, cfourthBtnObj, cfirstListData, csecondListData;
window.onload = function () {
    //firstListObj = document.getElementById("list-1").ej2_instances[0];
    //secondListObj = document.getElementById("list-2").ej2_instances[0];
    //secondBtnObj = document.getElementById("secondBtn").ej2_instances[0];
    //thirdBtnObj = document.getElementById("thirdBtn").ej2_instances[0];
    //firstBtnObj = document.getElementById("firstBtn").ej2_instances[0];
    //fourthBtnObj = document.getElementById("fourthBtn").ej2_instances[0];
    //firstListData = firstListObj.dataSource.slice();
    //secondListData = secondListObj.dataSource.slice();
   
}

    //Here we are moving all list items to second list on clicking move all button
    //document.getElementById("firstBtn").addEventListener('click', function () {
    //    secondListObj.dataSource = Array.prototype.concat.call(firstListObj.dataSource, secondListObj.dataSource);
    //    secondListObj.dataBind();
    //    updateFirstListData();
    //    firstListObj.removeMultipleItems(firstListObj.liCollection);
    //    firstListData = firstListData.concat(firstListObj.dataSource);
    //    secondListData = secondListObj.dataSource.slice();
    //    firstBtnObj.disabled = true;
    //    onFirstKeyUp();
    //    setButtonState();
    //});


function addData() {
   /* document.getElementById("csecondBtn").addEventListener('click', function () {*/
    debugger
    var CodeSystemGenerated = document.getElementById("CodeSystemGenerated");
        cfirstListObj = document.getElementById("Clist-1").ej2_instances[0];
        csecondListObj = document.getElementById("Clist-2").ej2_instances[0];
        var e = cfirstListObj.getSelectedItems();
        csecondListObj.dataSource = Array.prototype.concat.call(csecondListObj.dataSource, e.data);
        csecondListObj.dataBind();
        /*updateFirstListData();*/
    csecondListData = csecondListObj.dataSource.slice();
    CodeSystemGenerated.innerHTML += e.data.text;
        //onFirstKeyUp();fsubm
        //secondBtnObj.disabled = true;
        //setButtonState();
   /* });*/

}
function onNodeExpandings(args) {
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
                /*treeInstance.addNodes(result, PID);*/
                treeInstance.ensureVisible(PID);

            },
            error: function (xhr, status) {

                console.log(status);

            },

        })
    }
}
if (document.getElementById("cthirdBtn")) {

    document.getElementById("cthirdBtn").addEventListener('click', function () {
        debugger
        cfirstListObj = document.getElementById("Clist-1").ej2_instances[0];
        csecondListObj = document.getElementById("Clist-2").ej2_instances[0];
        var e = csecondListObj.getSelectedItems();
        csecondListObj.removeItem(e.item);
        csecondListData = secondListData.concat(csecondListObj.dataSource);
        cfirstListData = cfirstListObj.dataSource.slice();

    });
}
function addbuttondat() {

    //Here we are moving selected list item to second list on clicking move button
    document.getElementById("secondBtn").addEventListener('click', function () {
        var e = firstListObj.getSelectedItems();
        secondListObj.dataSource = Array.prototype.concat.call(secondListObj.dataSource, e.data);
        secondListObj.dataBind();
        updateFirstListData();
        firstListObj.removeItem(e.item);
        firstListData = firstListData.concat(firstListObj.dataSource);
        secondListData = secondListObj.dataSource.slice();
        onFirstKeyUp();
        secondBtnObj.disabled = true;
        setButtonState();
    });

    
    //Here we are moving selected list item to first list on clicking move button
    document.getElementById("thirdBtn").addEventListener('click', function () {
        var e = secondListObj.getSelectedItems();
        firstListObj.dataSource = Array.prototype.concat.call(firstListObj.dataSource, e.data);
        firstListObj.dataBind();
        updateSecondListData();
        secondListObj.removeItem(e.item);
        secondListData = secondListData.concat(secondListObj.dataSource);
        firstListData = firstListObj.dataSource.slice();
        onSecondKeyUp();
        thirdBtnObj.disabled = true;
        setButtonState();

    });


    //Here we are moving all list items to first list on clicking move all button
    document.getElementById("fourthBtn").addEventListener('click', function () {
        firstListObj.dataSource = Array.prototype.concat.call(firstListObj.dataSource, secondListObj.dataSource);
        firstListObj.dataBind();
        updateSecondListData();
        secondListObj.removeMultipleItems(secondListObj.liCollection);
        secondListData = secondListData.concat(secondListObj.dataSource);
        firstListData = firstListObj.dataSource.slice();
        onSecondKeyUp();
        setButtonState();

    });
}
//Here we are updating ListView dataSource for First List
function updateFirstListData() {
    Array.prototype.forEach.call(firstListObj.liCollection, function (list) {
        firstListData.forEach(function (data, index) {
            if (list.innerText.trim() === data.text) {
                delete firstListData[index];
            }
        });
    });
    document.getElementById("firstInput").value = '';
    var ds = [];
    firstListData.forEach(function (data) {
        ds.push(data);
    })
    firstListData = ds;

}

//Here we are updating ListView dataSource for second List
function updateSecondListData() {
    Array.prototype.forEach.call(secondListObj.liCollection, function (list) {
        secondListData.forEach(function (data, index) {
            if (list.innerText.trim() === data.text) {
                delete secondListData[index];
            }
        });

    });
    document.getElementById("secondInput").value = '';
    var ds = [];
    secondListData.forEach(function (data) {
        ds.push(data);
    })
    secondListData = ds;

}
function onFirstListSelect() {
    secondBtnObj.disabled = false;
}
function onSeconListSelect() {
    thirdBtnObj.disabled = false;
}

function focusListItem1() {
    setTimeout(function () {
        $("#list-1").find(".e-active .inp_listentry1").focus();
    }, 100);
}

//Here we are handling filtering of list items using dataManager for first List
function onFirstKeyUp(e) {
    var value = document.getElementById("firstInput").value;
    var data = new ej.data.DataManager(firstListData).executeLocal(new ej.data.Query().where('text', 'startswith', value, true));
    if (!value) {
        firstListObj.dataSource = firstListData.slice();
    } else {
        firstListObj.dataSource = data;
    }
    firstListObj.dataBind();

}

//Here we are handling filtering of list items using dataManager for second List
function onSecondKeyUp(e) {
    var value = document.getElementById("secondInput").value;
    var data = new ej.data.DataManager(secondListData).executeLocal(new ej.data.Query().where('text', 'startswith', value, true));
    if (!value) {
        secondListObj.dataSource = secondListData.slice();
    } else {
        secondListObj.dataSource = data;
    }
    secondListObj.dataBind();
}

//Here we are changing the button state
//function setButtonState() {
   // if (firstListObj.dataSource.length) {
   //     firstBtnObj.disabled = false;
  //  } else {
    //    firstBtnObj.disabled = true;
    //    secondBtnObj.disabled = true;
  //  }

   // if (secondListObj.dataSource.length) {
  //      fourthBtnObj.disabled = false;
  //  } else {
  //      fourthBtnObj.disabled = true;
   //     thirdBtnObj.disabled = true;
  //  }
//}