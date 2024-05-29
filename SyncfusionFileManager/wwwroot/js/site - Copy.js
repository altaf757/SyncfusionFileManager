
< !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >

    <html xmlns="http://www.w3.org/1999/xhtml" class="itemBody">
        <head id="Head1" runat="server">
            <link rel="shortcut icon" href="~/App_images/favicon.ico" />
            <title></title>


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" ></script>

            <script src="../js/jsrender.min.js"></script>
            <script type="text/javascript" src="../js/common.js"></script>


            <script type="text/javascript">
                let isFormTemplate=false;
                function attachFileToForm() {
                if(this.files != null && this.files.length>0) {
                    let file = this.files [0];
                document.form1.append(id + "_file", file); 
                }
            }

                //Function for managing only one checked cb on tree.
                function nodeOnCheckChanged(nodeEventData, _obj ) {
                    let checkState = nodeEventData.CheckState;

                if(checkState=="Checked") {
                    UnCheckNodesRecursive(nodeEventData, _obj);
                }
            }

                function UnCheckNodesRecursive( oNode, _object ) {
                    let arrChildNodes = _object.GetRootNodes();
                let stack = [];

                for(let i=0;i<arrChildNodes.length;i++) {
                    let temp = arrChildNodes[i];
                stack.push(temp);
                }

                while(stack.length>0) {
                    let tmpNode = stack.pop();

                if(tmpNode.Checked&&tmpNode.ID!=oNode.ID) {
                    tmpNode.UnCheck();    
                    }

                arrChildNodes = tmpNode.Nodes;

                for(let i=0;i<arrChildNodes.length;i++) {
                    let temp = arrChildNodes[i];
                stack.push(temp);
                    }
                }
            }

                function winStructureItemBindShow() {
                    _winStructureItemBind.Open(null, null);
                return false;
            }

                function winStructureItemBindOk() {
                    _winStructureItemBind.Close();
                return false;
            }

                //_winStructureAutoBind
                function winStructureAutoBindShow() {
                    _winStructureAutoBind.Open(null, null);
                return false;
            }

                function winStructureAutoBindOK() {
                    _winStructureAutoBind.Close();
                return false;
            }

                function winFormularShow() {
                    _winFormular.Open(null, null);
                return false;
            }

                function closeItemWin(success, task, selectedNode, newIDVitem, itemEditMode) {
                    //debugger;
                    window.top.hideWinItem(success, task, selectedNode, newIDVitem, itemEditMode, true);
                return false;
            }

                function copyMetadataToClipboard(edata) {
                //debugger;
                var oEvent = edata.Event;
                var textToCopy = '##' + edata.Row.tableRow.cells[0].innerHTML + '##';
                var copyElement = document.getElementById('txtFormularMDtoItem');
                document.getElementById('txtFormularMDtoItem1').value=textToCopy;
                copyElement.value = textToCopy;
                return false;
            }

                //@TODO Copy to clipboard working example, I think.
                function copyToClipboard() {
                //var value = document.getElementById('txtFormularMDtoItem').value;
                //window.clipboardData.setData("Text", value);
                var copyElement = document.getElementById('txtFormularMDtoItem');
                copyElement.focus();
                copyElement.select();

                document.execCommand('copy');
                return false;
            }

                function openWinWorkflowFormTemp() {
                    isFormTemplate = true;
                _winWorkflow.Open(null, null);
                return false;
            }

                function openWinWorkflow(el) {
                    let idvwfl =  el.getAttribute('idvwfl');
                if(idvwfl!=null&&idvwfl==2) {
                    _winWorkflow.Open(null, null); 
                }
                else {
                    // bypassing wf popup by setting status to approved.
                    let fields = document.getElementsByName("rbTaskStatus");
                fields[1].checked=true;
                doSave(null);
                }
                return false;
            }

                function closeWinWorkflow() {
                    _winWorkflow.Close();
                return false;
            }

                function openWinS() {
                    _winS.Open(true);
                return false;
            }

                function btnAddMetadataToItem_Submit() {
                    __doPostBack('UpWinItem', 'move|0');
            }

/////////////////////////////////////////////////////////////////////////////

            // ok
            // function createTextbox(cell, map) {
                    //     let input = document.createElement("input");
                    //     input.type = "text";
                    //     input.id = "txt_" + map.IDVmData;
                    //     input.name = "txt_" + map.IDVmData;
                    //     input.setAttribute("class","formularTxtBox");
                    //     input.setAttribute("style","box-sizing: border-box;");
                    //     cell.appendChild(input);
                    //     input.onclick = function () {alert (cell.getAttribute("class"));};
                    // }

                    function createDateBoxNEW(element, id) {
                        let input = document.createElement("input");
                        element.appendChild(input);
                        input.type = 'text';
                        input.id = id;
                        input.setAttribute('class', 'date_class');
                        //input.setAttribute('class' , "datepicker_class");
                        // // input.name = id;

                        $('body').on('focus', '.date_class', function () {
                            //console.log("focused on " + $(this).val());
                            $.noConflict();
                            $(this).datepicker();
                        });
                    }
            
            function createDateBox(element, id) {
                    let inputHidden = document.createElement("input");
                inputHidden.type = "hidden";
                inputHidden.id = id;
                inputHidden.name = id;
                element.appendChild(inputHidden);

                let div = document.createElement("div");
                // div.id = id + "_div";
                div.id = id;
                div.setAttribute("dir","ltr");
                div.setAttribute("mdprop",id.substring(3,id.length)+"_4_3");
                div.setAttribute("class","hidexicon");
                div.setAttribute("style","height: 23px; z-index: 999; display: inline-block; width: 102px; box-sizing: border-box;");

                element.appendChild(div);

                let table = document.createElement("table");
                table.setAttribute("class","TextBoxCont_Office2007Blue");
                table.setAttribute("style","margin:0px; vertical-align: middle; background-color:White;");
                table.setAttribute("cellspacing","0");
                table.setAttribute("cellpadding","0");
                table.setAttribute("width","100px");
                div.appendChild(table);

                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                cell1.setAttribute("style","border:0px solid; margin:0px; padding:0px;width:100%;");

                let table2 = document.createElement("table");
                table2.setAttribute("style","width:100%;background-color:White;");
                table2.setAttribute("cellspacing","0");
                table2.setAttribute("cellpadding","0");
                cell1.appendChild(table2);
                let t2_row = table2.insertRow(0);
                let t2_row_cell = t2_row.insertCell(0);
                t2_row_cell.setAttribute("class","InputTextCell");
                t2_row_cell.setAttribute("style","width:80px;padding:0px;");
                t2_row_cell.setAttribute("align","left");

                let inputDate = document.createElement("input");
                inputDate.name = id + "$text";
                inputDate.id = id + "$text";
                inputDate.type = "text";
                inputDate.setAttribute("class" , "InputText");
                inputDate.setAttribute("style" , "height: 15px; width: 83px; border: 0px none; padding: 0px; margin: 0px; text-align: left;");
                t2_row_cell.appendChild(inputDate);

                let link = document.createElement("link");
                link.type = "text/css";
                link.setAttribute("rel","Stylesheet");
                link.setAttribute("href","/WebResource.axd?d=ANZQBGzjN_kCgXbrTZ7qpRo9pvcDTxJxDo8ZgpXajEg6NCeZJ81p68neVltJQ8IlLIjn2A8lSHN-4ZyFrZDsfCSKitNksRt93Le1PwcLscdThDZpHNyH-wotcsGqcsrV612izu1DBzysFKj6q_unaQpXdQZLm6hI5DoILaRU-vKbLZ4bSRiqN-Gkz4EX4admhFV3ZhnEnBZtazokoV6x-w2&amp;t=636544610720000000");
                cell1.appendChild(link);

                let cell2 = row.insertCell(1);
                cell2.setAttribute("style","margin:0px; padding:0px; padding-left:0px;");

                let cell3 = row.insertCell(2);
                let calDiv = document.createElement("div");
                
                calDiv.addEventListener('focusout', (event) => {
                    // calDiv.style.display = 'none';
                    calDiv.style.display = 'none';//alert( event.target);// = 'none';
                    //alert('test');
                });

                calDiv.setAttribute("style", "display: none;z-index: 999; position: absolute; background: white none repeat scroll 0% 0%; border: 0px none; top: 124px; left: 78px ;");

                let button = document.createElement("button");
                button.id = "test_" + id + "_down";
                // button.setAttribute("popuppositionvertical", "Bottom");
                // button.setAttribute("style", "vertical-align:middle;");
                button.setAttribute("class", "BtnDown");
                button.onclick = function () {
                    let style = window.getComputedStyle(calDiv);
                // alert("style.display " + calDiv.offsetParent);
                if (style.display === 'none') {
                    // let inputValue = document.getElementById(calDiv.id+"$text");
                    // let elem = calDiv.id+"_" +inputValue.value;
                    // let calendarCell = document.getElementById(elem);
                    // if(calendarCell!=null)
                    //     calendarCell.setAttribute("class","calendar_Day DayStyle calendar_Day_Selected SelectedDayStyle");
                    calDiv.focus();
                calDiv.style.display = 'block';
                        }
                else {
                    // calDiv.setAttribute("style", "z-index: 999; display: hidden;position: absolute; background: white none repeat scroll 0% 0%; border: 0px none; top: 124px; left: 78px ;");
                    calDiv.style.display = "none";
                        }
                event.preventDefault();
                    }
                    // button.onmouseup = function () {
                    //                     //alert("Test");
                    //                     event.stopPropagation();}
                    // button.setAttribute("tabindex", "-1");
                    // button.setAttribute("hidefocus", "true");
                    cell2.appendChild(button);
                // let img =document.createElement("img");
                // img.setAttribute("src","/WebResource.axd?d=5pNdZKZhClFsFCVdeyVj6jpkv-f84tzWpxmg.setFtHRJiKLUrz0QBWI5NTkAZPKrK8iuMtUHZYokl2hnk5Nf64RWuhz6gvjnensIp2fNHfLOIuWUe_MdkU-KLA3a6t6Ce21eFKZjv-GD7_Ag2rzkvY5e4Ns0bvhJq259Enomg4ghWnsrVr9LDfkUgpKBz3hPZk-m5g3fJXzW8iV9Wk6Q1ddNtbQ2&amp;t=636544610720000000");
                // img.setAttribute("style", "margin-top: -2px; margin-left: -1px; position: inherit;");
                // img.setAttribute("alt", "");
                // button.appendChild(img);
                calDiv.id = id;
                calDiv.tabIndex = button.tabIndex+1;
                cell3.appendChild(calDiv);
                let calRootdiv = document.createElement("div");
                calRootdiv.setAttribute("class","calendarRoot_Office2007Blue");
                calRootdiv.id = id + "__Calendar";
                calRootdiv.setAttribute("dir","ltr");
                calRootdiv.setAttribute("style","height:200px;width:220px;");
                calDiv.appendChild(calRootdiv);

                let calRootTable = document.createElement("table");
                calRootTable.id = id + "__Calendar_RootTable";
                calRootTable.setAttribute("class", "calendar_RootTable");
                calRootTable.setAttribute("style", "height: 200px; width: 220px; border-collapse: collapse;");
                calRootTable.setAttribute("cellspacing", "0");
                calRootTable.setAttribute("cellpadding", "0");
                calRootTable.setAttribute("border", "0");
                calRootdiv.appendChild(calRootTable);

                let calRootRow = calRootTable.insertRow(0);
                let calRootCell = calRootRow.insertCell(0);
                calRootCell.setAttribute("style","height:100%;width:100%;");

                let calMonthTable = document.createElement("table");
                calMonthTable.setAttribute("class", "calendar_MonthTable");
                calMonthTable.setAttribute("style", "height:100%;width:100%;border-collapse:collapse;");
                calMonthTable.setAttribute("cellspacing", "0");
                calMonthTable.setAttribute("cellpadding", "0");
                calMonthTable.setAttribute("border", "0");
                calRootCell.appendChild(calMonthTable);

                let calMonthRow0 = calMonthTable.insertRow(0);
                calMonthRow0.setAttribute("style", "height:1%;");
                let calMonthCell0 = calMonthRow0.insertCell(0);
                calMonthCell0.setAttribute("class", "calendar_HeaderTable");
                calMonthCell0.setAttribute("colspan", "7");

                // Tu se nahaja klic.
                createCalendarHeaderTable(id, calMonthCell0, 0, 2020);

                let calMonthRow1 = calMonthTable.insertRow(1);
                calMonthRow1.setAttribute("style", "height:1%;");
                let calMonthTh = null;
                let weekdayTable = null;
                let wdtRow = null;
                let wdtCell = null;
                let wdtDiv = null;

                let i=0;

                let _today = new Date();
                let _n = _today.getDay();
                _today.setDate(_today.getDate()-_n);

                for(;i<7;i++) {
                    calMonthTh = document.createElement("th");
                calMonthRow1.appendChild(calMonthTh);
                let clAtt = "";
                if(i==0) {
                    clAtt = "DayHeaderCont_Left";
                    }
                else if(i==6) {
                    clAtt = "DayHeaderCont_Right";
                    }
                else {
                    clAtt = "DayHeaderCont_Center";
                    }
                calMonthTh.setAttribute("class", clAtt);

                weekdayTable = document.createElement("table");
                calMonthTh.appendChild(weekdayTable);

                weekdayTable.setAttribute("style","width:100%;height:100%;");
                weekdayTable.setAttribute("cellspacing","0");
                weekdayTable.setAttribute("cellpadding","0");

                wdtRow = weekdayTable.insertRow(0);
                wdtCell = wdtRow.insertCell(0);
                wdtCell.setAttribute("class", "calendar_HeaderWeekDay DayHeaderStyle");
                wdtDiv = document.createElement("div");
                wdtCell.appendChild(wdtDiv);
                wdtDiv.setAttribute("style","border-right-width:1px;");

                let dayOfTheWeek = new Date();
                dayOfTheWeek.setDate(_today.getDate()+i+1);

                wdtDiv.append(dayOfTheWeek.toLocaleString(window.navigator.language, {weekday: 'short'}));
                } // end for
                // Mreza za koledar.
                i=0;
                let j=0;
                let idx = 2;
                let _row = calMonthTable.insertRow(idx++);
                let _cell = null;
                let tabIdx = 0;

                let today = new Date();
                // prvi dan v mesecu
                let firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

                // prvi dan v prvem tednu meseca
                let monday = new Date();
                monday.setDate(firstOfMonth.getDate()-firstOfMonth.getDay());

                if(firstOfMonth.getDay()!=1) {
                    monday = new Date(today.getFullYear(), today.getMonth(), 0);
                monday.setDate(monday.getDate()-monday.getDay()+1);
                }
                else {
                    monday = firstOfMonth;
                }

                // let aDate = monday;
                // let aDate = getFirstCalendarDate(today);
                let aDate = getFirstCalendarDate(monday);

                for(;i<6;i++) {
                    for(;j<7;j++) {
                    _cell = _row.insertCell(j);
                        
                        if(j>4)
                _cell.setAttribute("class", "calendar_Day DayStyle calendar_AlternativeDay calendar_Holiday WeekendDayStyle");
                else
                _cell.setAttribute("class", "calendar_Day DayStyle calendar_previousMonthDay OtherDayStyle calendar_AlternativeDay");
                _cell.setAttribute("style", "width: 14%;");

                if(today.getDate()==aDate.getDate()&&today.getMonth()==aDate.getMonth()) {
                    _cell.setAttribute("class", "calendar_Day DayStyle calendar_nextMonthDay OtherDayStyle calendar_currentMonthDay TodayDayStyle");
                        }

                createCalendarCell(_cell, aDate.getDate(),aDate.getMonth()+1, aDate.getFullYear(), inputDate, calDiv, inputHidden);
                aDate.setDate(aDate.getDate()+1);
                tabIdx++;
                    }
                j=0;
                _row = calMonthTable.insertRow(idx++);
                }

                // let cr = [2222,1,22];
                // let _obj = {'currentDate':cr,
                //             'textBox':inputDate
                //             };
                div.control={'textBox':inputDate};
                // return inputDate;
                return div;
            }

                function createCalendarCell(tableCell, day, month, year, inputFieldDate, calendarDiv, inputHidden) {
                    let table = document.createElement("table");
                table.setAttribute("style", "border-collapse:collapse;border-collapse:separate;height:100%;width:100%;");
                table.setAttribute("cellspacing","0");
                table.setAttribute("cellpadding","0");
                table.setAttribute("border","0");
                tableCell.appendChild(table);
                let tRow = table.insertRow(0);
                let tCell = tRow.insertCell(0);
                tCell.setAttribute("class", "DayText");
                tCell.setAttribute("style", "-moz-user-select: none; -khtml-user-select: none; user-select: none;");
                tCell.append(day);

                let _select = parent.document.getElementById('appDateFormat');
                let formatter = _select.options[_select.selectedIndex].text;
                let date = formatter.replace("yyyy",year);
                date = date.replace("MM",month<10?"0"+month:month);
                date = date.replace("dd", day<10?"0"+day:day);
                tCell.id = calendarDiv.id+'_'+date;
                tCell.onclick = function () {
                    //Naredi datum po formaterju iz globalnih nastavitev.

                    //S tem bomo poskrbeli za označevanje izbranega datuma.
                    let pTable =this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                let selectedElements =pTable.getElementsByClassName("calendar_Day DayStyle calendar_Day_Selected SelectedDayStyle");
                for(let i=0;i<selectedElements.length;i++){
                    let e = selectedElements[i];
                e.setAttribute("class","calendar_Day DayStyle calendar_previousMonthDay OtherDayStyle calendar_AlternativeDay");
                    }
                this.setAttribute("class","calendar_Day DayStyle calendar_Day_Selected SelectedDayStyle");

                let _day = tCell.innerHTML;
                let _month = document.getElementById(calendarDiv.id +"__Calendar_MonthsDropDown").selectedIndex+1;
                let _yDD = document.getElementById(calendarDiv.id + "__Calendar_YearsDropDown");
                let _year = _yDD.options[_yDD.selectedIndex].text;

                // inputFieldDate.value = date;
                let dtSplit = tCell.id.split("_");
                let dtSplitLength = dtSplit.length;
                inputFieldDate.value = tCell.id.split("_")[dtSplitLength-1];
                inputHidden.value = year+"."+(month<10?"0"+month:month)+"."+(day<10?"0"+day:day);

                inputHidden.nextSibling.control.currentDate=[(!isNaN(parseInt(_year))?parseInt(_year):0),
                _month,
                (!isNaN(parseInt(_day))?parseInt(_day):0)];
                calendarDiv.style.display = "none";
                }
            }

                function createCalendarHeaderTable(id, td, month, year) {
                    let table = document.createElement("table");
                table.setAttribute("style","height:100%;width:100%;border-collapse:collapse;");
                table.setAttribute("cellspacing","0");
                table.setAttribute("cellpadding","0");
                table.setAttribute("border","0");
                td.appendChild(table);

                let _row = table.insertRow(0);
                let _td = _row.insertCell(0);
                _td.setAttribute("class", "calendar_PreviousMonthCell");
                _td.setAttribute("style", "width:1%;");
                _td.setAttribute("align", "left");

                let button = document.createElement("button");
                button.setAttribute("hidefocus", "true");
                _td.appendChild(button);
                let img = document.createElement("img");
                img.setAttribute("src", "/WebResource.axd?d=OvX2fFYO8on8hdL2UHj_qyBbymEMzequFYsXcpuEvh0gqcnI2xVaokHxsP1QqdjNMo9IAYCaOVKyTOYfSfE8ydFW7a3zfFrsl_Gv9JCPBRn4VeHkS5sy8CytmZR_Wwmxy_fLl-XzIvmaMpi2CENwbn3eTzp5kRzHhulpLZWsDjVJgo0b9d8lD2g_JnS8QiI76pzuRJoW3R5hdwc2hEoLJA2&t=636544610720000000");
                button.appendChild(img);
                let offset = month;
                button.onclick = function (event) {
                    offset++;
                let date = new Date();
                date.setMonth(date.getMonth()+offset);
                date = getFirstCalendarDate(date);

                // alert(date);
                //alert(offset);
                event.preventDefault();
                }

                _td = _row.insertCell(1);
                _td.setAttribute("class", "calendar_Title");
                _td.setAttribute("style", "width:98%;");

                let _table = document.createElement("table");
                _td.appendChild(_table);

                _table.setAttribute("style", "border-collapse:collapse;");
                _table.setAttribute("cellspacing","0");
                _table.setAttribute("cellpadding","2");
                _table.setAttribute("border","0");
                _table.setAttribute("align","center");

                let __row = _table.insertRow(0);
                let __td = __row.insertCell(0);

                let monthDD = document.createElement("select");
                monthDD.setAttribute("id", id + "__Calendar_MonthsDropDown");
                monthDD.setAttribute("class", "calendar_DropDowns");
                monthDD.setAttribute("name", id + "$_Calendar_MonthsDropDown");
                let len = 12
                let dt = new Date();
                let currentMonth = dt.getMonth();
                for(let i=0;i<len;i++) {
                    dt.setMonth(i);
                let option = document.createElement("option");
                option.id = i+'_tableId';
                option.text = dt.toLocaleString(window.navigator.language, {month:'long'});
                monthDD.add(option);

                if(i==currentMonth) {
                    monthDD.value = option.text;
                    }
                }
                monthDD.onchange = ()=> {
                    let _elem = td;
                let aRow = _elem.parentElement.nextSibling;
                let idx = 0;

                let _dt = new Date(2021, monthDD.selectedIndex, 1);
                let dayOfTheWeek = _dt.getDay();
                    while(dayOfTheWeek>1) {
                    _dt.setDate(_dt.getDate() - 1);
                dayOfTheWeek = _dt.getDay();
                    }
                //_dt
                while(aRow!=null) {
                    let childTr = aRow.nextSibling;
                let childTd = childTr.firstChild;
                if(childTd==null)
                break;
                do {
                    let _el = childTd.firstChild.firstChild.firstChild.firstChild;
                _el.innerHTML = _dt.getDate();

                let _y = _dt.getFullYear();
                let _m = _dt.getMonth()+1;
                let _d = _dt.getDate();
                let _select = parent.document.getElementById('appDateFormat');
                let formatter = _select.options[_select.selectedIndex].text;
                let date = formatter.replace("yyyy",_y);
                date = date.replace("MM",_m<10?"0"+_m:_m);
                date = date.replace("dd", _d<10?"0"+_d:_d);

                _el.id = _el.id.split("_")[0]+"_" + date;

                let _elClass = _el.className;
                if(_elClass=="calendar_Day DayStyle calendar_Day_Selected SelectedDayStyle") {
                    _el.className = "class", "calendar_Day DayStyle calendar_Day_Selected SelectedDayStyle";
                            }

                _dt.setDate(_dt.getDate()+1);
                childTd = childTd.nextSibling;
                        } while(childTd!=null);
                aRow = aRow.nextSibling;
                        // while(child = child.nextSibling) {
                    //     let _el = child.firstChild.firstChild.firstChild.firstChild;
                    //     _el.innerHTML = idx++; 
                    // }
                }
                    //alert('onchange ' + monthDD.selectedIndex);
                }
                __td.appendChild(monthDD);

                __td = __row.insertCell(1);
                let yearDD = document.createElement("select");
                __td.appendChild(yearDD);
                yearDD.setAttribute("id", id + "__Calendar_YearsDropDown");
                yearDD.setAttribute("class", "calendar_DropDowns");
                yearDD.setAttribute("name", id + "$_Calendar_YearsDropDown");

                len = 2010;
                let currentYear=new Date().getFullYear();
                for(let i=0;i<20;i++){
                    let option = document.createElement("option");
                option.value=i;
                option.text = (len+i)+"";
                yearDD.add(option);
                if((len+i)==currentYear) {
                    yearDD.value = i;
                    }
                }
            }

                function getFirstCalendarDate(date) {
                    // prvi dan v prvem tednu meseca
                    let monday = new Date();
                monday.setDate(date.getDate()-date.getDay());

                if(date.getDay()!=1) {
                    monday = new Date(date.getFullYear(), date.getMonth(), 0);
                monday.setDate(monday.getDate()-monday.getDay()+1);
                }
                else {
                    monday = date;
                }
                return monday;
            }

                // Funkcija dela z navadnim mdjem in v gridu.
                function createTextBox(element, id) {
                    let input = document.createElement("input");
                input.type = "text";

                input.id = id;
                input.name = id;
                input.setAttribute("class","formularTxtBox");
                input.setAttribute("style","box-sizing: border-box;");
                element.appendChild(input);
                input.onclick = function () {/*alert (element.getAttribute("class"));*/};
                return input;
            }

                function createTextBoxNEW(element, id, mdprop) {
                    let input = document.createElement("input");
                input.type = "text";

                input.id = id;
                input.name = id;
                input.setAttribute("class","formularTxtBox");
                input.setAttribute("style","box-sizing: border-box;");
                input.setAttribute("mdprop",mdprop);
                element.appendChild(input);
                input.onclick = function () {/*alert (element.getAttribute("class"));*/};
                input.focus();
                return input;
            }

            // function createListbox(cell2, id, map.values) {
                    function createListbox(element, id, values) {

                        let inputHidden = document.createElement("input");
                        inputHidden.type = "hidden";
                        inputHidden.id = id;
                        inputHidden.name = id;
                        element.appendChild(inputHidden);


                        let mainDiv = document.createElement("div");
                        mainDiv.setAttribute("style", "width: 200px;");
                        element.appendChild(mainDiv);

                        let selectBoxDiv = document.createElement("div");
                        mainDiv.appendChild(selectBoxDiv);
                        selectBoxDiv.setAttribute("style", "position: relative;");

                        selectBoxDiv.onclick = function () {
                            let checkboxes = document.getElementById(id + "_checkboxes");
                            if (checkboxes.style.display == "block")
                                checkboxes.style.display = "none";
                            else
                                checkboxes.style.display = "block";
                        }

                        let selectTag = document.createElement("select");
                        selectTag.setAttribute("readonly", "readonly");
                        selectTag.setAttribute("autocomplete", "off");
                        selectBoxDiv.appendChild(selectTag);
                        let optionTag = document.createElement("option");
                        optionTag.text = "-Empty-";
                        optionTag.id = id + "_option";
                        selectTag.add(optionTag);

                        let overSelectDiv = document.createElement("div");
                        overSelectDiv.setAttribute("style", "position: absolute;left: 0;right: 0;top: 0;bottom: 0;");
                        selectBoxDiv.appendChild(overSelectDiv);

                        // Tale div mora iti direktno na formo, pred tem pa je treba dobiti koordinate od 
                        // selecta.
                        let checkboxesDiv = document.createElement("div");
                        checkboxesDiv.id = id + "_checkboxes";

                        let pos = getOffset(selectTag);


                        checkboxesDiv.setAttribute("style", "z-index: 9999;display: none;border: 1px #dadada solid;opacity: 1;position: absolute;top:" + (pos.top + 20) + "px;left:" + pos.left + "px;");
                        checkboxesDiv.style.backgroundColor = "white";

                        mainDiv.appendChild(checkboxesDiv);
                        // let root = document.getElementById("GvIMList");
                        // root.appendChild(checkboxesDiv);

                        let _len = values.length;
                        let i = 0;
                        let label = null;
                        let inpt = null;
                        for (; i < _len; i++) {
                            label = document.createElement("label");
                            label.setAttribute("for", id + "_" + i);
                            label.setAttribute("style", "display: block;");

                            label.onmouseover = function () {
                                this.style.backgroundColor = "#FFF1BB";
                            }
                            label.onmouseout = function () {
                                this.style.backgroundColor = "white";
                            }
                            checkboxesDiv.appendChild(label);
                            inpt = document.createElement("input");
                            inpt.id = id + "_" + values[i]._id + "_" + i;
                            inpt.setAttribute("type", "checkbox");
                            inpt.setAttribute("value", values[i]._id);
                            inpt.onchange = function () {
                                let opt = optionTag;
                                let hidden = inputHidden;

                                let iHtml = opt.text;
                                let inptText = hidden.value;

                                if (this.checked) {
                                    if (iHtml.endsWith("|")) {
                                        // opt.text = opt.text + this.id + "|";
                                        opt.text = opt.text + this.nextSibling.wholeText + "|";
                                        hidden.value = hidden.value + this.value + "|";
                                    }
                                    else {
                                        // opt.text = this.id + "|";
                                        opt.text = this.nextSibling.wholeText + "|";
                                        hidden.value = this.value + "|";
                                    }
                                }
                                else {
                                    //alert("unchecked");
                                    let _l = opt.text.split("|");
                                    let _v = hidden.value.split("|");
                                    let _newTxt = "";
                                    let _newVal = "";
                                    // for(let i=0;i<_l.length;i++) {
                                    //     // if(_l[i]!=this.id&&_l[i]!="") {
                                    //     if(_l[i]!=this.id&&_l[i]!="") {
                                    //         _newTxt = _newTxt + _l[i] + "|";
                                    //         _newVal = _newVal + _v[i] + "|";
                                    //     }
                                    // }
                                    for (let i = 0; i < _v.length; i++) {
                                        if (_v[i] != this.value && _v[i] != "") {
                                            _newTxt = _newTxt + _l[i] + "|";
                                            _newVal = _newVal + _v[i] + "|";
                                        }
                                    }

                                    //alert(_newTxt);
                                    if (_newTxt == "") {
                                        _newTxt = "-Empty-";
                                    }

                                    opt.text = _newTxt;
                                    hidden.value = _newVal;
                                }
                                let checkboxes = document.getElementById(id + "_checkboxes");
                                checkboxes.style.display = "none";

                                /////////////////////////////////////////////////
                            }
                            label.appendChild(inpt);

                            let textNode = document.createTextNode(values[i]._value);
                            label.appendChild(textNode);
                        }
                    }
            
            /** Tale izracuna odmik od koordinatnega izhodisca, uporabno za popupe.  */
            function getOffset( el ) {
                    let _x = 0;
                let _y = 0;
                while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                    _x += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
                }
                return {top: _y, left: _x };
            }

                function onclickUsrMDValues (id) {
                    let options = { };
                let data = new FormData();
                data.append("_target","mdValues");
                data.append("_IDVmData","txt"+id);
                options.url = "saveFile.aspx";
                options.type = "POST";
                options.data = data;
                options.contentType = false;
                options.processData = false;
                options.success = function (result) {
                    let resObject = JSON.parse(result);
                //alert(result);
                let select = document.getElementById("existingValues");
                //select
                let length = select.options.length;
                    for (let i = length-1; i >= 0; i--) {
                    select.options[i] = null;
                    }

                for(j=0;j<resObject.length;j++) {
                    let opt = document.createElement("option");
                opt.setAttribute("value", resObject[j]._id);
                opt.text = resObject[j]._value;

                if( resObject[j].IDVdataItem==""&&resObject[j].IDVvalueVmData=="") {
                    //opt.setAttribute("style","style=color:red;");
                    opt.text = opt.text + "*";    
                        }

                select.add(opt);
                    }
                select.data = resObject;
                select.IDVmData = id;

                let _value = document.getElementById("_DataTypePlaceholder");
                let de = document.getElementById("TxtMDValueDE");
                let re = document.getElementById("TxtMDValueRE");

                let lastRecord = resObject[resObject.length-1];
                _value.value = lastRecord._value;
                de.value = lastRecord.DEtext;
                re.value = lastRecord.REtext;

                select.options[select.options.length-1].selected = true;
                _winMetadataValue.SetTitleText("test " + id);
                _winMetadataValue.Open();
                }
                options.error = function (err) {alert(err.statusText); };
                $.ajax(options);

                return false;
            }

                function createAddValuesButton(cell2, id) {
                    let btn = document.createElement("input");
                btn.type = "button";

                btn.onclick = function () {

                    let options = { };
                let data = new FormData();
                data.append("_target","mdValues");
                data.append("_IDVmData",id);
                options.url = "saveFile.aspx";
                options.type = "POST";
                options.data = data;
                options.contentType = false;
                options.processData = false;
                options.success = function (result) {
                    let resObject = JSON.parse(result);
                if(resObject.error != undefined && resObject.error!="") {
                    alert(resObject.error);
                return false;
                        }
                let select = document.getElementById("existingValues");
                //select
                let length = select.options.length;
                        for (let i = length-1; i >= 0; i--) {
                    select.options[i] = null;
                        }

                for(j=0;j<resObject.length;j++) {
                    let opt = document.createElement("option");
                opt.setAttribute("value", resObject[j].id);
                opt.text = resObject[j].value;
                select.add(opt);
                        }
                select.data = resObject;
                select.IDVmData = id.substring(3);
                _winMetadataValue.SetTitleText("test " + id);
                _winMetadataValue.Open();
                    }
                options.error = function (err) {alert(err.statusText); };
                $.ajax(options);

                return false;
                }
                btn.setAttribute("style","display: inline-block;");
                btn.value = "Add Values";
                cell2.appendChild(btn);
            }
                // ok
                function createCombobox(element, id, column) {
                    // let array = map.values;
                    // let values = ["Volvo","Saab","Mercades","Audi"];
                    // let inputHidden = document.createElement("input");
                    // inputHidden.type = "hidden";
                    // inputHidden.id = id;
                    // inputHidden.name = id;
                    // element.appendChild(inputHidden);
                    let cob = column;
                let values = column.values;
                let select = document.createElement("select");
                let parentIDtypemData = column.IDtypemData;
                select.id = id;
                select.name = id;
                select.setAttribute("mdprop",cob.IDVmData+"_"+cob.IDtypemData+"_"+cob.IDtoolBox);
                select.setAttribute("class", "formularCbBox");
                select.setAttribute("style", "box-sizing: border-box;display: inline-block;");
                // select.onchange = function() {inputHidden.value = select.value;}

                let initialOption = document.createElement("option");
                initialOption.value = 0;
                initialOption.text = '--Empty--';
                select.appendChild(initialOption);

                for (let i = 0; i < values.length; i++) {
                    let option = document.createElement("option");
                option.value = values[i]._id;

                if(parentIDtypemData==4) { //Datetime
                    let splitDate = values[i]._value.split(" ");
                let year = splitDate[0];
                let month = splitDate[1];
                let day = splitDate[2];
                let _select = parent.document.getElementById('appDateFormat');
                let formatter = _select.options[_select.selectedIndex].text;
                let date = formatter.replace("yyyy",year);
                date = date.replace("MM",month);
                date = date.replace("dd", day);
                option.text = date;
                    }
                else
                option.text = values[i]._value;
                select.appendChild(option);
                }

                element.appendChild(select);
                return select;
            }
                // staro
                function createNumericBox(cell, map) {
                    // alert("createNumericBox");
                    let inputHidden = document.createElement("input");
                inputHidden.type = "hidden";
                inputHidden.id = "txt" + map.IDVmData + "_hidden";
                inputHidden.name = "txt" + map.IDVmData + "_hidden";
                cell.appendChild(inputHidden);

                let div = document.createElement("div");
                div.id = "txt" + map.IDVmData;
                div.setAttribute("dir","ltr");
                div.setAttribute("class","hidexicon");
                div.setAttribute("style","height: 20px; display: inline-block; width: 152px; box-sizing: border-box;");

                let table = document.createElement("table");
                table.setAttribute("style","width:152px;background-color:White;");
                table.setAttribute("class","TextBoxCont_Office2007Blue");
                table.setAttribute("cellspacing","0");
                table.setAttribute("cellpadding","0");
                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                cell1.setAttribute("class","InputTextCell");
                cell1.setAttribute("style","width:130px;padding:0px;");
                cell1.setAttribute("align","right");

                let input = document.createElement("input");
                input.name = "txt" + map.IDVmData + "$text";
                input.id = "txt" + map.IDVmData + "_text";
                input.title = "Range of vals";
                input.type = "text";
                input.setAttribute("class" , "InputText");
                input.setAttribute("style" , "text-align: right; height: 15px; width: 130px; border: 0px none; padding: 0px; margin: 0px;");
                let isDec = map.IDtypemData == "6" || map.IDtypemData == "7" || map.IDtypemData == "9";
                input.value = isDec ? "0,000000" : "0";

                switch(map.IDtypemData) {
                    case "6": // dec
                input.value = "0,000000";
                break;
                case "7": // float
                input.value = "0,0000";
                break;
                case "9": // curr
                input.value = "0,00";
                break;
                default:
                break;
                }

                input.setAttribute("prevVal","");
                input.onkeyup = function(event) {
                    let x = event.which || event.keyCode;
                let prevText = this.getAttribute("prevVal");
                // alert("test " + event.key + " " + x);

                if(x < 47 || x > 57) {
                    this.value = prevText;
                    }
                this.setAttribute("prevVal", this.value);
                }

                input.onblur = function() {
                    inputHidden.value = input.value;
                }

                cell1.appendChild(input);
                div.appendChild(table);

                let link = document.createElement("link");
                link.setAttribute("type", "text/css");
                link.setAttribute("rel", "Stylesheet");
                link.setAttribute("href", "/WebResource.axd?d=ANZQBGzjN_kCgXbrTZ7qpRo9pvcDTxJxDo8ZgpXajEg6NCeZJ81p68neVltJQ8IlLIjn2A8lSHN-4ZyFrZDsfCSKitNksRt93Le1PwcLscdThDZpHNyH-wotcsGqcsrV612izu1DBzysFKj6q_unaQpXdQZLm6hI5DoILaRU-vKbLZ4bSRiqN-Gkz4EX4admhFV3ZhnEnBZtazokoV6x-w2&amp;t=636544610720000000");
                div.appendChild(link);

                cell.appendChild(div);
                return inputHidden;
            }

                // This creates input field and attached object as if create by SF.
                function createDec(element, id, inputValue) {
                if(!inputValue)inputValue="0,000000000";
                let id_text = id+ "_text";
                let IDVmData = id.split('txt')[1];
                let mdprop = IDVmData+"_6_2";
                let rootHtml = "<input name='" + id + "_hidden' type='hidden' id='"+id+"_hidden' />" +
                "<div id='"+id+"' dir='ltr' class='hidexicon' style='height:19px;width:300px;display:inline-block;box-sizing:border-box' mdprop='"+mdprop+"'>" +
                    "<table class='TextBoxCont_Office2007Blue' style='width:300px;background-color:White;' cellspacing='0' cellpadding='0'><tbody><tr>" +
                        "<td class='InputTextCell' style='width: 300px;padding: 0px' align='right'>" +
                            "<input id='"+id_text+"' class='InputText' name='"+id+"$"+id_text+"' type='text' value='"+inputValue+"' style='text-align: right;height: 15px;width: 300px;border: 0px none;padding: 0px;margin: 0px'></td></tr></tbody></table></div>";
                element.innerHTML = rootHtml;
                $create(Syncfusion.Web.UI.NumericTextBox, {"name":id,"scriptObjectId":"_sf"+id,"serverId":id}, null, null, element.children[1]);
                let _attributes =[
                {
                    "ID":id_text,
                "Attributes":{
                    "regExp":"(^[\\d.]+(\\,[\\d]+)$)|(^-[\\d.]+(\\,[\\d]+)$)",
                "posPrefix":"",
                "negRegEx":"(^[\\d,]+(\\.[\\d]+)$)|(^-[\\d,]+(\\.[\\d]+)$)",
                "NegativeColor":"",
                "negSign":"-",
                "decDigits":"9",
                "grpSep":"",
                "maxVal":"999999999999999998",
                "ClientID":id,
                "incrStep":"1",
                "ValType":"No",
                "negPrefix":"-",
                "posSuffix":"",
                "isNegative":"False",
                "minVal":"-999999999999999998",
                "decSep":",",
                "grpSize":"3",
                "ForeColor":"",
                "defText":"0",
                                    "negSuffix":""}
                            },
                {
                    "ID":id,
                "Attributes": {
                    "AutoPostBackOnValueChanged":"False",
                "AutoPostBackOnTextChanged":"False",
                "ClntID":id,
                "ClntTextBoxID":id_text,
                "ClntInstanceName":"_sf"+id,
                "ClntIDSeparator":"_"
                                    }
                            }];
                Syncfusion.Web.UI.ControlManager.SetControlAttributtes(id,_attributes);
                return element.children[1];
            }

                function createMoney(element, id, inputValue) {
                if(!inputValue)inputValue="0,0000";
                let id_text = id+ "_text";
                let IDVmData = id.split('txt')[1];
                let mdprop = IDVmData+"_6_2";
                let rootHtml = "<input name='" + id + "_hidden' type='hidden' id='"+id+"_hidden' />" +
                "<div id='"+id+"' dir='ltr' class='hidexicon' style='height:19px;width:300px;display:inline-block;box-sizing:border-box' mdprop='"+mdprop+"'>" +
                    "<table class='TextBoxCont_Office2007Blue' style='width:inherit;background-color:White;' cellspacing='0' cellpadding='0'><tbody><tr>" +
                        "<td class='InputTextCell' style='width: 300px;padding: 0px' align='right'>" +
                            "<input id='"+id_text+"' class='InputText' name='"+id+"$"+id_text+"' type='text' value='"+inputValue+"' style='text-align: right;height: 15px;width: 300px;border: 0px none;padding: 0px;margin: 0px'></td></tr></tbody></table></div>";
                element.innerHTML = rootHtml;
                $create(Syncfusion.Web.UI.NumericTextBox, {"name":id,"scriptObjectId":"_sf"+id,"serverId":id}, null, null, element.children[1]);
                let _ID = id + "_text";
                let decDigits = "4";
                let _attributes =[
                {
                    "ID":id_text,
                "Attributes":{
                    "regExp":"(^[\\d.]+(\\,[\\d]+)$)|(^-[\\d.]+(\\,[\\d]+)$)",
                "posPrefix":"",
                "negRegEx":"(^[\\d,]+(\\.[\\d]+)$)|(^-[\\d,]+(\\.[\\d]+)$)",
                "NegativeColor":"",
                "negSign":"-",
                "decDigits":"4",
                "grpSep":"",
                "maxVal":"999999999999999998",
                "ClientID":id,
                "incrStep":"1",
                "ValType":"No",
                "negPrefix":"-",
                "posSuffix":"",
                "isNegative":"False",
                "minVal":"-999999999999999998",
                "decSep":",",
                "grpSize":"3",
                "ForeColor":"",
                "defText":"0",
                                    "negSuffix":""}
                            },
                {
                    "ID":id,
                "Attributes": {
                    "AutoPostBackOnValueChanged":"False",
                "AutoPostBackOnTextChanged":"False",
                "ClntID":id,
                "ClntTextBoxID":id_text,
                "ClntInstanceName":"_sf"+id,
                "ClntIDSeparator":"_"
                                    }
                            }];
                Syncfusion.Web.UI.ControlManager.SetControlAttributtes(id,_attributes);
                return element.children[1];
            }

                function createFlo(element, id, inputValue)  {
                    let decimalDelimiter=',';
                if(!inputValue)inputValue='0'+decimalDelimiter+'00';
                let id_text = id+ "_text";
                let mdprop = id.substring(3)+"_7_2";
                let rootHtml = "<input name='" + id + "_hidden' type='hidden' id='"+id+"_hidden'>" +
                    "<div id='"+id+"' dir='ltr' class='hidexicon' style='height:19px;width:300px;display:inline-block;box-sizing: border-box;' mdprop='"+mdprop+"'>" +
                        "<table class='TextBoxCont_Office2007Blue' style='width:152px;background-color:White;width:inherit;' cellspacing='0' cellpadding='0'><tbody><tr>" +
                            "<td class='InputTextCell' style='width: 130px;padding: 0px;' align='right'>" +
                                "<input id='"+id_text+"' class='InputText' name='"+id+"$"+id_text+"' type='text' value='"+inputValue+"' style='text-align:right;height:15px;border:0px none;padding:0px;margin:0px;'" +
                      " oninput=\"this.value = this.value.replace(/[^0-9,]/g, '').replace(/(\,.*)\,/g, '$1');\" ></td></tr></tbody></table></div>";
                    element.innerHTML = rootHtml;
                    let _ID = id + "_text";
                    let decDigits = 9;

                    let rootDiv=element.children[1];
                    rootDiv.control = {
                        "hiddenFld":element.children[0],
                    GetText() {
                        let _val=this.hiddenFld.value.replace(',','.');
                    let result= Number.parseFloat(_val);
                    return result+"";
                    }
                };
                    let _inField=element.querySelector("#"+_ID+"");
                _inField.addEventListener('keyup', e => {
                        let _val=e.target.value;
                    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.value=_val;
                });
                _inField.addEventListener('keydown', e => {
                        let fLen=decDigits;
                    let kCode=e.which;
                    let eT=e.target;
                    if(e.target.value.includes(','))
                    fLen=fLen--;
                    
                    if(eT.value.length>fLen) {
                        if(kCode==37||kCode==39||kCode==46||kCode==8){
                    }
                    else
                    e.preventDefault();
                    }
                    else {
                        if(eT.selectionStart>(eT.value.indexOf(','))) {
                            if(kCode!=37&&kCode!=39&&kCode!=46&&kCode!=8){
                        let realLen=eT.value.length-eT.value.indexOf(',');
                                if(realLen>4)
                    e.preventDefault();
                            }
                        }
                    }
                });
            }

                    function createInteger(element, id, inputValue) {
                if(!inputValue)inputValue="0";
                    let id_text = id+ "_text";
                    let IDVmData = id.split('txt')[1];
                    let mdprop = IDVmData+"_1_2";
                    let rootHtml = "<input name='" + id + "_hidden' type='hidden' id='"+id+"_hidden'>" +
                        "<div id='"+id+"' dir='ltr' class='hidexicon' style='height:19px;width:300px;display:inline-block;box-sizing: border-box;' mdprop='"+mdprop+"' >" +
                            "<table class='TextBoxCont_Office2007Blue' style='width:300px;background-color:White;' cellspacing='0' cellpadding='0'><tbody><tr>" +
                                "<td class='InputTextCell' style='width: 300px;padding: 0px;' align='right'>" +
                                    "<input id='"+id+"_text' class='InputText' name='"+id+"$"+id+"_text' type='text' value='"+inputValue+"' title='Range of values: from -2147483647 to 2147483647' style='text-align:right;height:15px;width:300px;border:0px none;padding:0px;margin:0px;'></td></tr></tbody></table></div>";
                        element.innerHTML = rootHtml;
                        $create(Syncfusion.Web.UI.NumericTextBox, {"name":id,"scriptObjectId":"_sf"+id,"serverId":id}, null, null, element.children[1]);

                        let _attributes = [{
                            "ID": id_text,
                        "Attributes": {
                            "regExp": "(^[\\d]+$)|(^-[\\d]+$)",
                        "posPrefix": "",
                        "negRegEx": "(^[\\d]+$)|(^-[\\d]+$)",
                        "NegativeColor": "",
                        "negSign": "-",
                        "decDigits": "0",
                        "grpSep": "",
                        "maxVal": "2147483647", //Math.pow(2, 31)
                        "ClientID": id,
                        "incrStep": "1",
                        "ValType": "No",
                        "negPrefix": "-",
                        "posSuffix": "",
                        "isNegative": "False",
                        "minVal": "-2147483647",
                        "decSep": ",",
                        "grpSize": "3",
                        "ForeColor": "",
                        "defText": "0",
                        "negSuffix": ""
                        } },
                        {
                            "ID": id,
                        "Attributes": {
                            "AutoPostBackOnValueChanged": "False",
                        "AutoPostBackOnTextChanged": "False",
                        "ClntID": id,
                        "ClntTextBoxID": id_text,
                        "ClntInstanceName": "_sf"+id,
                        "ClntIDSeparator": "_"
                        }
                      }
                        ];
                        Syncfusion.Web.UI.ControlManager.SetControlAttributtes(id,_attributes);
                        return element.children[1];
            }

                        function createTinyInt(element, id, inputValue) {
                if(!inputValue)inputValue="0";
                        let id_text = id+ "_text";
                        let IDVmData = id.split('txt')[1];
                        let mdprop = IDVmData+"_10_2";
                        let rootHtml = "<input name='" + id + "_hidden' type='hidden' id='"+id+"_hidden'>" +
                            "<div id='"+id+"' dir='ltr' class='hidexicon' style='height:19px;width:300px;display:inline-block;box-sizing: border-box;' mdprop='"+mdprop+"' >" +
                                "<table class='TextBoxCont_Office2007Blue' style='width:300px;background-color:White;' cellspacing='0' cellpadding='0'><tbody><tr>" +
                                    "<td class='InputTextCell' style='width: 300px;padding: 0px;' align='right'>" +
                                        "<input id='"+id+"_text' class='InputText' name='"+id+"$"+id+"_text' type='text' value='"+inputValue+"' title='Range of values: from -255 to 255' style='text-align:right;height:15px;width:300px;border:0px none;padding:0px;margin:0px;'></td></tr></tbody></table></div>";
                            element.innerHTML = rootHtml;
                            $create(Syncfusion.Web.UI.NumericTextBox, {"name":id,"scriptObjectId":"_sf"+id,"serverId":id}, null, null, element.children[1]);

                            let _attributes = [{
                                "ID": id_text,
                            "Attributes": {
                                "regExp": "(^[\\d]+$)|(^-[\\d]+$)",
                            "posPrefix": "",
                            "negRegEx": "(^[\\d]+$)|(^-[\\d]+$)",
                            "NegativeColor": "",
                            "negSign": "-",
                            "decDigits": "0",
                            "grpSep": "",
                            "maxVal": "255",
                            "ClientID": id,
                            "incrStep": "1",
                            "ValType": "No",
                            "negPrefix": "-",
                            "posSuffix": "",
                            "isNegative": "False",
                            "minVal": "-255",
                            "decSep": ",",
                            "grpSize": "3",
                            "ForeColor": "",
                            "defText": "0",
                            "negSuffix": ""
                        } },
                            {
                                "ID": id,
                            "Attributes": {
                                "AutoPostBackOnValueChanged": "False",
                            "AutoPostBackOnTextChanged": "False",
                            "ClntID": id,
                            "ClntTextBoxID": id_text,
                            "ClntInstanceName": "_sf"+id,
                            "ClntIDSeparator": "_"
                        }
                      }
                            ];
                            Syncfusion.Web.UI.ControlManager.SetControlAttributtes(id,_attributes);
                            return element.children[1];
            }

                            function isArray(a) {
                return Object.prototype.toString.call(a) === "[object Array]";
            }

            //@TODO New numeric event listener.
            /*
            document.getElementById('foobar').addEventListener('keydown', e => {
                                let kCode=e.which;
                            let eT=e.target;

                            // if ',' is on input and already exists.
                            if(e.which==188&&eT.value.includes(',')) {
                                e.preventDefault();
                }
                            else if(e.which==8) { //delete pressed
                    if(eT.selectionStart>(eT.value.indexOf(',')+1)) {
                                let idx=eT.selectionStart-1;
                            let _val=eT.value;
                            eT.value=_val.substring(0, idx)+'0'+_val.substring(idx + 1);
                            eT.selectionStart=idx;
                            eT.selectionEnd=idx;
                            e.preventDefault();
                    }
                    //Ne brise decimalne vejice.
                    if(eT.selectionStart>0&&eT.value.charAt(eT.selectionStart-1)==',')
                            e.preventDefault();
                }
                else if(kCode>47&&kCode<58||kCode==188||kCode==37||kCode==39) {
                            }
                            else {
                                e.preventDefault();
                }
            });
                            */
                            function make(desc) {
                if (!isArray(desc)) {
                    return make.call(this, Array.prototype.slice.call(arguments));
                }
                            let name = desc[0];
                            let attributes = desc[1];

                            let el = document.createElement(name);

                            let start = 1;
                            if (typeof attributes === "object" && attributes !== null && !isArray(attributes)) {
                    for (let attr in attributes) {
                                el[attr] = attributes[attr];
                    }
                            start = 2;
                }

                            for (let i = start; i < desc.length; i++) {
                    if (isArray(desc[i])) {
                                el.appendChild(make(desc[i]));
                    }
                            else {
                                el.appendChild(document.createTextNode(desc[i]));
                    }
                }

                            return el;
            }

            // function createDateBox(element, id) {
                                // }
                                // ok
                                function createNumericBoxGeneral(element, id, IDtypemData) {
                                    let inputHidden = document.createElement("input");
                                    inputHidden.type = "hidden";
                                    inputHidden.id = id + "_hidden";
                                    inputHidden.id = id + "_hidden";
                                    inputHidden.name = id + "_hidden";
                                    element.appendChild(inputHidden);

                                    let div = document.createElement("div");
                                    div.id = id;
                                    div.setAttribute("dir", "ltr");
                                    div.setAttribute("class", "hidexicon");
                                    div.setAttribute("style", "height: 20px; display: inline-block; width: 152px; box-sizing: border-box;");

                                    let table = document.createElement("table");
                                    table.setAttribute("style", "width:152px;background-color:White;");
                                    table.setAttribute("class", "TextBoxCont_Office2007Blue");
                                    table.setAttribute("cellspacing", "0");
                                    table.setAttribute("cellpadding", "0");
                                    let row = table.insertRow(0);
                                    let cell1 = row.insertCell(0);
                                    cell1.setAttribute("class", "InputTextCell");
                                    cell1.setAttribute("style", "width:130px;padding:0px;");
                                    cell1.setAttribute("align", "right");

                                    let input = document.createElement("input");
                                    input.name = id + "$text";
                                    input.id = id + "_text";
                                    input.title = "Range of vals";
                                    input.type = "text";
                                    input.setAttribute("class", "InputText");
                                    input.setAttribute("style", "text-align: right; height: 15px; width: 130px; border: 0px none; padding: 0px; margin: 0px;");

                                    let isDec = IDtypemData == "6" || IDtypemData == "7" || IDtypemData == "9";
                                    input.value = isDec ? "0,000000" : "0";

                                    switch (IDtypemData) {
                                        case "6": // dec
                                            input.value = "0,000000";
                                            break;
                                        case "7": // float
                                            input.value = "0,0000";
                                            break;
                                        case "9": // curr
                                            input.value = "0,00";
                                            break;
                                        default:
                                            input.value = "0";
                                            break;
                                    }

                                    input.setAttribute("prevVal", input.value);
                                    input.onkeyup = function (event) {
                                        let x = event.which || event.keyCode;
                                        let prevText = this.getAttribute("prevVal");
                                        // alert("test " + event.key + " " + x);

                                        if ((x < 46 && x != 8) || x > 57) {
                                            this.value = prevText;
                                        }
                                        this.setAttribute("prevVal", this.value);
                                    }

                                    input.onblur = function () {
                                        inputHidden.value = input.value;
                                    }

                                    cell1.appendChild(input);
                                    div.appendChild(table);

                                    let link = document.createElement("link");
                                    link.setAttribute("type", "text/css");
                                    link.setAttribute("rel", "Stylesheet");
                                    link.setAttribute("href", "/WebResource.axd?d=ANZQBGzjN_kCgXbrTZ7qpRo9pvcDTxJxDo8ZgpXajEg6NCeZJ81p68neVltJQ8IlLIjn2A8lSHN-4ZyFrZDsfCSKitNksRt93Le1PwcLscdThDZpHNyH-wotcsGqcsrV612izu1DBzysFKj6q_unaQpXdQZLm6hI5DoILaRU-vKbLZ4bSRiqN-Gkz4EX4admhFV3ZhnEnBZtazokoV6x-w2&amp;t=636544610720000000");
                                    div.appendChild(link);

                                    element.appendChild(div);
                                    return input;
                                }
            
            function createNumericIntegerInput(tdElement, id, IDtypemData) {
                                let input = document.createElement("input");
                            input.id=id;
                            input.type='text';
                            input.dir = 'rtl';
                            input.class = 'formularTxtBox';
                            input.setAttribute("IDtypemData",IDtypemData);
                            input.setAttribute('flen','10');
                            input.onkeydown = function (event){
                                let kc = event.keyCode
                            if(kc<48||kc>57) {
                                            //alert("Koda: " + event.keyCode);
                                            //if(kc==188) {
                                            //     if(el.value.includes(",")) {
                                            //         event.preventDefault();
                                            //     }
                                            //}
                                            //else 
                                            if(kc==16) { //shift
                            }
                            else if(kc==9) { //tab
                            }
                            else if(kc==46) { //delete
                            }
                            else if(kc==8) { //backspace
                            }
                                            else if(kc>36&&kc<41) { // arrows
                            }
                            else {
                                event.preventDefault();
                            return;
                                            }    
                                        }
                                        if(input.value.length>input.getAttribute("flen")) {
                                            
                                            if(kc==46) { //delete
                            }
                            else if(kc==16) { //shift
                            }
                            else if(kc==9) { //tab
                            }
                            else if(kc==8) { //backspace
                            }
                                            else if(kc>36&&kc<41) { // arrows
                            }
                            else {
                                alert("Too long.");
                            event.preventDefault();
                                            }    
                                        }
                                    }
                input.onclick = () => {
                                //alert("focus");
                                input.setSelectionRange(0, input.value.length);
                }
                            input.value = "0";
                            tdElement.appendChild(input);

                // "<input type='text' id='" + id + "' dir='rtl' class='formularTxtBox' " +
                            //         " fLen='10' onkeydown='onKeyDownInteger(this,event)' value='"+value+"'  onclick='onclk(this)' />";


                            return input;
            }
                            //
                            function createFileUpload(element, id) {
                                let inputFile = document.createElement("input");
                            inputFile.type = "file";
                            inputFile.name = id;
                            inputFile.id = id;
                            inputFile.setAttribute("class", "formularTxtBox");
                            inputFile.setAttribute("style", "box-sizing: border-box;");
                            inputFile.setAttribute("mdprop", id.substring(3,id.length)+"_11_4");
                            element.appendChild(inputFile);

                            inputFile.onblur = function() {
                    
                    if(this.files != null && this.files.length>0) {
                                let file = this.files [0];
                            document.form1.append(id + "_file", file);
                    }
                }
                            return inputFile;
            }

                            function createTreeDiv(parent, id, data) {
                                let input = document.createElement("input");
                            input.setAttribute("name", id);
                            input.setAttribute("id", id);
                            input.setAttribute("type", "hidden");
                            parent.appendChild(input);

                            let div = document.createElement("div");
                            div.setAttribute("class", "tvView_Outlook");
                            div.id = id;
                            div.setAttribute("dir", "ltr");
                            div.setAttribute("mdprop", id.substring(3,id.length)+"_12_8");
                            div.setAttribute("style", "overflow: auto; border-color: gray; border-width: 1px; border-style: none; width: 380px; text-align: left;");
                            parent.appendChild(div);
                            // window.ime variable in tole spodaj...
                            div.control = {
                                "id" : id + "_tvTest",
                            "checkedNodes": [],
                            "lastNodeIndex":1,
                            GetCheckedNodes() {
                                let _a=[];
                            for(let i=0;i<this.checkedNodes.length;i++) {
                                let _t=this.checkedNodes[i];
                            _a.push({ID: _t.value})
                            }
                            return _a;
                        }
                };
                            window[id + "_obj"] = div.control;
                            // let span = document.createElement("span");
                            // span.setAttribute("style", "position:absolute;width:0px;height:0px;z-index:300;OPACITY:0;");
                            // div.appendChild(span);
                            //
                            //     let input = document.createElement("input");
                            //     input.setAttribute("name", id + "_Focused");
                            //     input.setAttribute("type", "text");
                            //     input.setAttribute("style", "width:0px;border-width:0px;position:absolute;z-index:300;top:0px;left:0px;");
                            //     span.appendChild(input);

                            let i =0;
                            let length = data.length;
                            // Sem gre samo eno vozlišče.
                            createTreeNode(div, i ,data[i], 0);

                            let link = document.createElement("link");
                            link.setAttribute("type", "text/css");
                            link.setAttribute("rel", "Stylesheet");
                            link.setAttribute("href", "/WebResource.axd?d=cvHievekv8AAbicoXWswk8WJ4-CwvliLJgHJWCc1Nzi5BgadC6RRzpnv2GW6QPhlNZ4XkYyq_6qKR4m1r61g6zkuEmai2Uk5JoA6XbWDbGOK04yf81z5OQgyJ8fxjFuia1EUhF-jrKSjjZ45EgkQixVK0MejROQCL5jeuEgtuifJHwWsCyh0lD8ByNLr5yYdq2QU_b5bqVOvtGayuvinEA2&amp;t=636544611120000000");
                            div.appendChild(link);

                            link = document.createElement("link");
                            link.setAttribute("type", "text/css");
                            link.setAttribute("rel", "Stylesheet");
                            link.setAttribute("href", "/WebResource.axd?d=7LJoG6gheoFd2GmkCKp3HsEIQknIq4LkS_bwKDG730NhI2s4FNYwUQKpznvgZTB9MgnvFHeK2biXrVXxFqydYDn4ny5q4bSyNnSeVdcWYYKLfJv-Hvmnu918_JTIUNGBwW5sfujCcAxlPOeaemoI8kWrI9AmsWwskjr4oDoFnB-Y_swRK-CYlc8MQfVjJu02EwfqVX0S5khTzlqMCQER4w2&amp;t=636544611120000000");
                            div.appendChild(link);

                            let style = document.createElement("style");
                            style.setAttribute("type", "text/css");
                            style.innerHTML = "#" + div.id + " .tvLineImgTD {padding - left: 1px; width: 1px; height: 20px; font-size: 0px;} " +
                            "#" + div.id + " .tvLineImgTD img {display: block; width: 19px; height: 20px; } " +
                            "#" + div.id + " .tvLineImgTD_0 {vertical - align: top; } " +
                            "#" + div.id + " .tvLineImgTD_1 {background - position: 100% 0%; background-repeat: repeat-y; " +
                                     // "background-image: url(\"/WebResource.axd?d=LU2lFml5XzajzVaPgityN0cPJ1B4Gi-zDRQfjOp4o6pBWqND9pxupcAELSyQu_zIk6mzIT9FfSkyOgn3Qv5a6S07dvjzOMvl9WiDAPMqkL3AoaHWfV1Jtz2XTcoPX_flE6q7ZOUK8B4NLcz3VITdKU0VKZK1qm65OhrxfQkk-SXdzJ1bBEBmxiDfSgKnsnzTz6acqePOSHaTlNsavh9wsg2&t=636544611120000000\"); "+
                                      "vertical-align: top; } " +
                            "#"  + div.id + " .tvLineImgTD_2 {vertical - align: bottom; }";
                            div.appendChild(style);
            }
                            //  Funkcija zgradi del gradnika, ki opisuje nivo v drevesu.
                            // _row = referenca na vrstico
                            // level = nivo, to pomeni koliko
                            function createLevelIndicatorTD(_row, level, position, IDVitem, IDVtreeItem) {
                                let cell = _row.insertCell(0);

                            let classVal = "tvLineImgTD tvLineImgTD_1";
                            let srcVal = "images/../../App_images/tv_node_midClosed.gif";

                            cell.setAttribute("class", classVal );
                            cell.setAttribute("align", "right");

                            let img = document.createElement("img");
                            img.setAttribute("value", IDVitem);
                            img.setAttribute("IDVtreeItem", IDVtreeItem);
                            cell.appendChild(img);

                            if(level == 1) { // Zgornji nivo
                    if(position == 0) { // Prvi element nivoja.
                                // srcVal = "/WebResource.axd?d=imts7_ZSQT1N6zKt2HItjT50_m6YN_GaLCLHr6de7s_Ju2PMzYdKdEPKnuWPIHxfKZ-XiuI2GUb_IDkyXMIzk9lWn6AdZJBD8a4niuqE3gBAq38GngDjXeeFRRzABWhn6sEzrwz1JdpmcMJjoelJj_xC68rzHQuWgBhDokDlrIs4gxkR4sM54sao3rqrgBLN0jnY7ZSQUDrNPVaxWwLqww2&amp;t=636544611120000000";
                                srcVal = "images/../../App_images/tv_node1stClosed.gif";
                    }
                            else if(position == 2) { // Zadnji element nivoja.
                                // srcVal = "/WebResource.axd?d=D0c-gLdURV8c3AKZ7Xnq6FpEcN0ICmqaR-i6d0tJen4qnamAisTOc5jNS5X4uTm001C3uISL25fA2fU_WdjOg54s0eXaUTzp7nGJx6Y7cN3lxm5mcgDHQdnkSXToca_b-MH6RNxKriIQtblkf191wVjBU5jUcQ5Gt_frDBfzl6N7IGzrpxYEhSANX0BKrpbxNwJR2Ja6GLQoIgnz87m95A2&amp;t=636544611120000000";
                                srcVal = "images/../../App_images/tv_node_lastClosed.gif";
                    }
                }
                            else { // Ostali nivoji
                    if(position == 2) { // Zadnji element nivoja.
                                // srcVal = "/WebResource.axd?d=D0c-gLdURV8c3AKZ7Xnq6FpEcN0ICmqaR-i6d0tJen4qnamAisTOc5jNS5X4uTm001C3uISL25fA2fU_WdjOg54s0eXaUTzp7nGJx6Y7cN3lxm5mcgDHQdnkSXToca_b-MH6RNxKriIQtblkf191wVjBU5jUcQ5Gt_frDBfzl6N7IGzrpxYEhSANX0BKrpbxNwJR2Ja6GLQoIgnz87m95A2&amp;t=636544611120000000";
                                srcVal = "images/../../App_images/tv_node_lastClosed.gif";
                    }
                }

                            img.setAttribute("src", srcVal);
                            img.setAttribute("alt", "");
                            img.onclick = function () {
                                let value = this.getAttribute("value");
                            let el = this.parentElement;

                            while(el.getAttribute("class")!="tvItemRow"){
                                el = el.parentElement;
                    }
                            let row = el;
                            let parent = el.parentElement;
                            let i=0;
                            for(;i<parent.children.length;i++){
                                let child = parent.children[i];
                            if(child.id == row.id) {
                            // alert(row.id + " " + (i+1));
                            break;
                        }
                    }

                            let currentCell = this.parentElement;
                            let currentClass = currentCell.getAttribute("class");

                            // elem bi moral biti div ki ima id roota plus indeks vrstice txt77_R0
                            let elem = currentCell.parentElement;
                            while(elem.className != "tvItemRow") {
                                elem = elem.parentElement;
                    }
                            let sibling = elem.nextSibling;

                            if(currentClass == "tvLineImgTD tvLineImgTD_1") {
                                currentCell.setAttribute("class", "tvLineImgTD tvLineImgTD_2");
                            this.setAttribute("src", "/WebResource.axd?d=6IM9Nv_cEker9FX0c7QTL_3B811omnINIdT6KhMm9sNFCh93dyXfBC1GRa7oW4JFt98mecOvbaZNeraeWc0VSfyu8hjC7-aAqYcDKaECPe9ZXsfvgqr5yPE2crgyM3EpzL1ZN6IdC7f0VORaNWm8yxE95WMzqfwCYTvzFCq6fbLdtrXaPP2VUI_Q4DIpvISkFo5mniC9gRKIwGlJjypsxQ2&t=636544611120000000");
                            // alert("Odprt");

                            if(sibling!=null && sibling.className == "tvSlidingHost") {
                                sibling.removeAttribute("style");
                        }
                            else {
                                let tvSlidingHost = document.createElement("div");
                            tvSlidingHost.setAttribute("class", "tvSlidingHost");
                            parent.insertBefore(tvSlidingHost, row.nextSibling);

                            let tvSlidingChild = document.createElement("div");
                            tvSlidingChild.setAttribute("class", "tvSlidingChild");
                            tvSlidingHost.appendChild(tvSlidingChild);

                            /////////////////////////////////////////////////////////////////
                            let _IDVmDataParent=elem.id.split("_")[0]; // format is 'txtIDVmData'
                            let dataObjId = _IDVmDataParent + "_obj";

                            let fData = new FormData();
                            fData.append("_target", "mdItem");
                            fData.append("IDVitem", IDVitem);
                            fData.append("IDVtreeItem", IDVtreeItem);
                            fData.append("_IDVmData_p", parseInt(_IDVmDataParent.substring(3)));

                            let options = { };
                            options.clientObject = dataObjId;
                            options.url = "saveFile.aspx";
                            options.type = "POST";
                            options.data = fData;
                            options.contentType = false;
                            options.processData = false;
                            // Dalje delamo na podlagi rezultata.

                            let data = [];
                            options.success = function (result) {

                                // vratolomno doseganje reference objekta
                                let _obj = window[this.clientObject];
                            // Preberemo indeks zadnjega dodanega vozlisca
                            let lastIdx = _obj.lastNodeIndex;

                            //@TODO
                            let items = JSON.parse(result);
                            let j=0;
                            // povecujemo indeks zadnjega dodanega vozlisca
                            for(;j<items.length;j++) {
                                createTreeNode(tvSlidingChild, lastIdx++, items[j], j);
                                }
                            // zapisemo nazaj v globalno spr.
                            _obj.lastNodeIndex = lastIdx;
                            }
                            options.error = function (err) {alert("Test " + err.statusText); }
                            $.ajax(options);
                        }
                    }
                            else {
                                currentCell.setAttribute("class", "tvLineImgTD tvLineImgTD_1");
                            this.setAttribute("src", "/WebResource.axd?d=imts7_ZSQT1N6zKt2HItjT50_m6YN_GaLCLHr6de7s_Ju2PMzYdKdEPKnuWPIHxfKZ-XiuI2GUb_IDkyXMIzk9lWn6AdZJBD8a4niuqE3gBAq38GngDjXeeFRRzABWhn6sEzrwz1JdpmcMJjoelJj_xC68rzHQuWgBhDokDlrIs4gxkR4sM54sao3rqrgBLN0jnY7ZSQUDrNPVaxWwLqww2&t=636544611120000000");

                            sibling.setAttribute("style", "height: 1px; display: none;");
                    }
                }

                            let i=1;
                            for(;i<level;i++) {
                                cell = _row.insertCell(0);
                            cell.setAttribute("class", "tvLineImgTD tvLineImgTD_1" );
                            cell.setAttribute("align", "right");
                            img = document.createElement("img");
                            cell.appendChild(img);
                            img.setAttribute("src", "/WebResource.axd?d=LU2lFml5XzajzVaPgityN0cPJ1B4Gi-zDRQfjOp4o6pBWqND9pxupcAELSyQu_zIk6mzIT9FfSkyOgn3Qv5a6S07dvjzOMvl9WiDAPMqkL3AoaHWfV1Jtz2XTcoPX_flE6q7ZOUK8B4NLcz3VITdKU0VKZK1qm65OhrxfQkk-SXdzJ1bBEBmxiDfSgKnsnzTz6acqePOSHaTlNsavh9wsg2&amp;t=636544611120000000");
                            img.setAttribute("alt", "");
                }
            }

                            function createTreeNode(parent, index, dataText, position) {
                                let parentID = parent.id;

                            if(parentID=="") {
                                let _p = parent.parentElement;
                            while(_p.id == "") {
                                _p = _p.parentElement;
                    }
                            parentID = _p.id.split("_")[0];
                }

                            let div = document.createElement("div");
                            parent.appendChild(div);
                            div.id = parentID + "_R" + index;
                            div.setAttribute("class", "tvItemRow");
                            div.setAttribute("style", "width:100%;");

                            let table1 = document.createElement("table");
                            table1.setAttribute("cellspacing","0")
                            table1.setAttribute("cellpadding", "0");
                            div.appendChild(table1);

                            let row_table1 = table1.insertRow(0);
                            let level = 1;
                            let elem = div.parentElement;
                            while(elem.getAttribute("class")!= "tvView_Outlook") {
                            
                            if(elem.getAttribute("class")=="tvSlidingChild") {
                                level++;                            
                            }
                            elem = elem.parentElement;
                        }
                            createLevelIndicatorTD(row_table1, level, position, dataText.IDVitem, dataText.IDVtreeItem);

                            // Od tu se gradi del, ki ima sliko mape, combobox in labelo                        
                            let td2 = row_table1.insertCell(-1);
                            let td2_div = document.createElement("div");
                            td2_div.id = parentID + "_I1";
                            td2_div.setAttribute("class", "tvItem");
                            td2_div.setAttribute("ondblclick", "_sfTvStructureItemBind.OnDblClick(this, event)");
                            td2.append(td2_div);

                            let table2 = document.createElement("table");
                            table2.setAttribute("cellspacing", "0")
                            table2.setAttribute("cellpadding", "0");
                            td2_div.appendChild(table2);

                            let table2_row = table2.insertRow(0);
                            let table2_row_td1 = table2_row.insertCell(0);
                            table2_row_td1.id = td2_div.id + "_TI";
                            table2_row_td1.setAttribute("class", "tvImgCell");

                            let table2_row_td1_div = document.createElement("div");
                            table2_row_td1_div.id = td2_div.id + "_CI";
                            table2_row_td1_div.setAttribute("class", "tvImgCont");
                            table2_row_td1.appendChild(table2_row_td1_div);

                            let table2_row_td1_div_img = document.createElement("img");
                            table2_row_td1_div_img.id = td2_div.id + "_I";
                            table2_row_td1_div_img.setAttribute("src", "images/../../App_images/imgFolder.gif");
                            table2_row_td1_div_img.setAttribute("class", "tvImg");
                            table2_row_td1_div_img.setAttribute("alt", "");
                            table2_row_td1_div.appendChild(table2_row_td1_div_img);

                            let table2_row_td2 = table2_row.insertCell(1);
                            table2_row_td2.id = td2_div.id +"_TB";
                            table2_row_td2.setAttribute("class" , "tvCheckCell");

                            let table2_row_td2_input = document.createElement("input");
                            table2_row_td2_input.setAttribute("name", td2_div.id +"_B");
                            table2_row_td2_input.setAttribute("type", "checkbox");
                            table2_row_td2_input.id = td2_div.id +"_B";
                            table2_row_td2_input.setAttribute("class", "tvCheck");
                            // table2_row_td2_input.setAttribute("value", dataText.IDVitem);
                            table2_row_td2_input.setAttribute("value", dataText.IDVtreeItem);

                            table2_row_td2_input.onchange = function() {

                                let elem = this.parentElement;
                            // Sprehod od kliknjenega noda do roota
                            while(elem.className != "tvView_Outlook") {
                                elem = elem.parentElement;
                                        }
                            //
                            // let inputList = elem.children[0].children[0].tagName == "INPUT" ? elem.children[0].children[0] : null;
                            let inputList = elem.previousSibling.tagName == "INPUT" ? elem.previousSibling : null;

                            if(inputList!=null) {
                                let currVal = this.value;
                            if(this.checked) {
                                inputList.value = inputList.value + currVal + "|";  
                                            }
                            else {
                                let checkedList = inputList.value.split("|");
                            let result = "";
                            for(let _j=0;_j<checkedList.length;_j++){
                                let _v = checkedList[_j];
                            if(_v != currVal&&_v!="")
                            result = result + _v + "|";
                                                }
                            inputList.value = result;
                                            }
                                        }
                            // alert("Izbrani " + inputList.value);
                            //NOV POSTOPEK
                            let objId = this.id.split("_")[0] + "_obj";
                            let checkedNodes = window[objId].checkedNodes;
                            let _i = 0;
                            if(this.checked) {
                                            while(checkedNodes.length>0) {
                                checkedNodes.shift().checked = false;
                                            }
                            checkedNodes.push(this);
                                        }
                            else {
                                            for( ; _i < checkedNodes.length; _i++) {
                                                if ( checkedNodes[_i].value === this.value) {
                                checkedNodes.splice(_i, 1);
                                                }
                                            }
                                        }
                                        // let _len = window[objId].checkedNodes.length;
                                        // alert("Stevilo elementov:" + _len);
                                        
                                    } // KONEC onchange
                            table2_row_td2.appendChild(table2_row_td2_input);

                            let table2_row_td3 =  table2_row.insertCell(2);
                            table2_row_td3.id = td2_div.id +"_TT";
                            table2_row_td3.setAttribute("class" , "tvTextCell");

                            let table2_row_td3_table = document.createElement("table");
                            table2_row_td3_table.setAttribute("cellspacing", "0")
                            table2_row_td3_table.setAttribute("cellpadding", "0");
                            table2_row_td3.appendChild(table2_row_td3_table);

                            let table2_row_td3_table_row = table2_row_td3_table.insertRow(0);
                            let table2_row_td3_table_row_cell = table2_row_td3_table_row.insertCell(0);
                            table2_row_td3_table_row_cell.id = td2_div.id + "_CT";
                            table2_row_td3_table_row_cell.setAttribute("class", "tvTextCont");
                            table2_row_td3_table_row_cell.setAttribute("style", "white-space:nowrap;");
                            // table2_row_td3_table_row_cell.innerHTML = dataText.value;
                            table2_row_td3_table_row_cell.innerHTML = dataText.COtree;
            }

                            function createGrid(cell, map) {
                                let tableId = "grid_table_" + map.IDVmData;
                            let table = document.createElement("table");
                            table.id = tableId;
                            table.setAttribute("style", "width:100%");
                            table.setAttribute("mdprop", map.IDVmData+"_"+map.IDtypemData+"_"+map.IDtoolBox);
                            let row = table.insertRow(0);
                            row.setAttribute("class", "GridOffice2007BlueGroupDropArea");
                            let i=0;
                            let _columns = map.columns;
                            for(;i<_columns.length;i++) {
                                let cell1 = row.insertCell(2*i);
                            let c1Text = _columns[i].LAitem.bold();
                            cell1.innerHTML = c1Text;
                            cell1.setAttribute("IDtypemData",_columns[i].IDtypemData);
                            cell1.setAttribute("IDtoolBox",_columns[i].IDtoolBox);

                            if(_columns[i].IDtoolBox==6) {
                                cell1.cbData = _columns[i];    
                    }
                            if(i < _columns.length-1) {
                                let cell2 = row.insertCell(2 * i + 1);
                            let c2Text = "&nbsp;";
                            cell2.innerHTML = c2Text;
                    }
                }
                            cell.appendChild(table);


                            row = table.insertRow(1);
                            row.id = "inputFields_" + map.IDVmData;
                            // let inputTd = row.insertCell(0);
                            let inputTd = null;
                            // staro
                            let div = document.createElement("div");
                            div.id = "inputFields_" + map.IDVmData;
                            div.setAttribute("style" , "overflow: hidden;white-space: nowrap;");
                            // alert("Pred grid tb");

                            let param1 = map.IDVmData + "|";
                            let param0 = [];
                            i=0;
                            let ctrl = null;
                            let mdDataList = [];
                            let mdData = { };
                            for(;i<_columns.length;i++) {
                                let _column = _columns[i];
                            let _IDtypemData = _column.IDtypemData;
                            let _IDVmData = _column.IDVmData;
                            let _IDtoolBox = _column.IDtoolBox;
                            let mdprop = _IDVmData + "_" + _IDtypemData + "_" + _IDtoolBox;
                            let id = "grid_" + map.IDVmData + "_" + _IDVmData;
                            inputTd = row.insertCell(-1);

                            mdData = { };
                            if(_IDtoolBox == 6) {
                                // alert("combobox " + _IDVmData );
                                // param0.push( createCombobox(div, id, _column));
                                ctrl = createCombobox(inputTd, id, _column);
                            param0.push(ctrl);
                            // alert('[DEBUG]: grid combobox created');

                            mdData.reset=function() {
                                this.ctrl.selectedIndex = 0;
                        }

                            mdData.getValue=function() {
                            return this.ctrl.selectedOptions[0]?.value;
                        }
                    }
                            else
                            if(_IDtypemData == 1 || _IDtypemData == 10) {// Integer ali tinyint
                                // ctrl = createNumericIntegerInput(inputTd, id, _IDtypemData);
                                ctrl = createInteger(inputTd, id, null);
                            param0.push(ctrl);
                            let initVal = ctrl.control.GetText();
                            mdData.reset = function() {
                                this.ctrl.control.GetTextBox().value = initVal;
                        }
                            mdData.getValue = function() {
                            return this.ctrl.control.GetTextBox().value;
                        }
                        
                    }
                            else if(_IDtypemData == 2 || _IDtypemData == 3) { // nvarchar ali ntext
                                ctrl = createTextBoxNEW(inputTd, id, mdprop);
                            param0.push(ctrl);
                            mdData.reset = function() {
                                this.ctrl.value = "";
                        }
                            mdData.getValue = function() {
                            return this.ctrl.value;
                        }
                        
                    }
                            else if(_IDtypemData == 4) { /* date*/
                                // param0.push(inputTd.innerHTML=new Date());
                                ctrl = createDateBox(inputTd, id);
                            param0.push(ctrl);
                            mdData.reset = function() {
                                this.ctrl.control.GetTextBox().value = initVal;
                        }
                            mdData.getValue = function() {
                            return this.ctrl.control;
                        }
                    }
                            else if( _IDtypemData == 6 ) { // decimal
                                // ctrl = createNumericIntegerInput(inputTd, id, _IDtypemData);
                                ctrl = createDec(inputTd, id, null);
                            param0.push(ctrl);
                            let initVal = ctrl.control.GetText();
                            mdData.reset = function() {
                                this.ctrl.control.GetTextBox().value = initVal;
                        }
                    }
                            else if(_IDtypemData == 7) { //float
                                ctrl = createFlo(inputTd, id, null);
                            param0.push(ctrl);
                            let initVal = ctrl.control.GetText();
                            mdData.reset = function() {
                                this.ctrl.control.GetTextBox().value = initVal;
                        }
                    }
                            else if( _IDtypemData == 9){ //currency

                            }
                    // else if(_IDVmData == 5) { // grid
                    //     createGrid(cell2, map);
                    // }
                    else if(_IDtypemData == 11) { // image
                                id = "file_" + id;
                            ctrl = createFileUpload(inputTd, id);
                            param0.push(ctrl);

                            mdData.getValue = function() {
                            if(this.ctrl.files.length>0) {
                                return this.ctrl.files[0].name;
                            }
                        }
                            mdData.reset = function() {
                                this.ctrl.value = '';
                        }
                    }
                            else if(_IDtypemData == 12) { // item

                            }
                            else if(_IDtypemData == 8) { // xml

                            }
                            else if(_IDtypemData == 13) { // calculated

                            }
                            mdData.IDVmData = _IDVmData;
                            mdData.IDtypemData = _IDtypemData;
                            mdData.IDtoolBox = _IDtoolBox;
                            mdData.ctrl = ctrl;
                            mdData.getId = function() {
                        return id;        
                    }
                            mdDataList.push(mdData);

                            param1 = param1+ _IDVmData + "|";
                            inputTd = row.insertCell(-1);
                            inputTd.innerHTML = "&nbsp";
                }
                            let param2 = "grid_table_" + map.IDVmData;

                            let addRowButton = document.createElement("input");
                            addRowButton.type = "button";
                            addRowButton.setAttribute("value","Add");
                            addRowButton.addEventListener('click', function() {clientRowAdder(mdDataList, param1, table);});
                
                addRowButton.onkeydown = (event)=>{
                    if (event.keyCode === 13) {
                                //editButton.click();
                                event.stopPropagation();
                        // event.stopImmediatePropagation();
                        // event.preventDefault();
                    }
                };
                            // div.appendChild(addRowButton);
                            //cell.appendChild(div);
                            inputTd.innerHTML='';
                            inputTd.appendChild(addRowButton);
            }

                            function BtnAddMetadataToItem_ClientClick() {
                                //alert(theForm);

                                /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                // Tole je leva tabela.
                                // let leftTable = document.getElementById("GvIMList~OT~");
                                let rightTable = document.getElementById("GvMetadataList~OT~");

                            // Seznam metapodatkov.
                            // let leftTbody = leftTable.children[1];
                            // Seznam vseh metapodakov.
                            let rightTbody = rightTable.children[1];

                            let tr = null;
                            let LAitem = "";
                            for(i=0;i<rightTbody.children.length;i++) {
                                tr = rightTbody.children[i];
                            if(tr.className == "") {
                                // Prazen className pomeni, da je oznacen.
                                LAitem = tr.children[0].innerText;
                            break;
                        // Od tu naprej i nosi indeks iz seznama metapodatkov
                    }
                }
                // alert(LAitem);
                //////////////////////////////////////////////////////////////////////////////////
                // To je za generiranje novega idja vrstice v levem seznamu.
                // var lastId = leftTbody.children[leftTbody.children.length-1].id;
                // var lastNumStr = parseInt(lastId.charAt("GvIMList~TR~0~_TOPGROUP_^".length))+1;
                // var newLastId = "GvIMList~TR~0~_TOPGROUP_^" + lastNumStr + "*R0";
                // var newRow = leftTbody.insertRow(-1);
                // newRow.id = newLastId;
                // newRow.setAttribute( "class", "");
                // newRow.setAttribute( "style", "height:21px");
                // Tu imamo novo vrstico.

                // var cell1 = newRow.insertCell(0);
                // var cell2 = newRow.insertCell(1);
                // cell1.setAttribute( "class", "GridOffice2007BlueAlternateRecord");
                // cell2.setAttribute( "class", "GridOffice2007BlueAlternateRecord");
                //
                // cell1.onmouseover = function () {
                //     //this.setAttribute("style","background-color: rgb(255, 241, 187); background-image: url(\"WebResource.axd?d=hiq3Wl3GZRnfxSvPNw3lzMsrxBesL3eK6Wlyv8Kx5ZHmBXR7_YT7j3sD3aV8dTj86ghUZ35ntCnT-2CX46X7DQQsIezxkAhXI26kgOECye34RIOH0nP51pBqj7OozKmnwfaxds-JS7MR_GccRZNWDWBAABOZOt7JGhV70jmRl8GMgc1qCLPyKEQOscSjBvqLbv8o57DKmidwnwDLDkdy2F7FUi-Zuu0yAGHIoYGfWZgZUIb0dx5KBnvkuJBt3ecC0&t=636544612560000000\"); background-repeat: repeat-x;");
                //     this.setAttribute("style","background-color: rgb(255, 241, 187);");
                //     cell2.setAttribute("style","background-color: rgb(255, 241, 187);");
                // }
                // cell1.onmouseout = function () {
                //     this.setAttribute("style","");
                //     cell2.setAttribute("style","");
                // }
                // cell2.onmouseover = function () {
                //     //this.setAttribute("style","background-color: rgb(255, 241, 187); background-image: url(\"WebResource.axd?d=hiq3Wl3GZRnfxSvPNw3lzMsrxBesL3eK6Wlyv8Kx5ZHmBXR7_YT7j3sD3aV8dTj86ghUZ35ntCnT-2CX46X7DQQsIezxkAhXI26kgOECye34RIOH0nP51pBqj7OozKmnwfaxds-JS7MR_GccRZNWDWBAABOZOt7JGhV70jmRl8GMgc1qCLPyKEQOscSjBvqLbv8o57DKmidwnwDLDkdy2F7FUi-Zuu0yAGHIoYGfWZgZUIb0dx5KBnvkuJBt3ecC0&t=636544612560000000\"); background-repeat: repeat-x;");
                //     this.setAttribute("style","background-color: rgb(255, 241, 187);");
                // }
                // cell2.onmouseout = function () {this.setAttribute("style", "");}
                // cell1.innerText = tr.children[0].innerText;

                // var input = document.createElement("input");
                // input.type = "text";
                // input.id = "txt_IDVmData";
                // input.name = "txt_IDVmData";
                // input.setAttribute("class","formularTxtBox");
                // input.setAttribute("style","box-sizing: border-box;");
                // cell2.appendChild(input);
                // rightTable.deleteRow(i);
                if(tr!=null) {
                                let styleAttr = tr.getAttribute("style");
                            let isCollapsed = styleAttr.includes("visibility:collapse;");
                            // Zato, ker skrita vrstica še vedno obdrži status označena,
                            // je treba preprečiti dodajanje.
                            if(isCollapsed) {
                        // alert("Error "  + tr.children[0].innerHTML);
                        return false;
                    }
                            tr.setAttribute("style", styleAttr + "visibility:collapse;");
                }
                            // alert("Ime: " + tr.children[0].innerText + "\nId zadnjega: " + lastId+"\nNov zadnji indeks: " + newLastId);

                            let data = new FormData();
                            data.append("_target", "mdattrs");
                            data.append("LAitem", LAitem);

                            let options = { };
                            options.url = "saveFile.aspx";
                            options.type = "POST";
                            options.data = data;
                            options.contentType = false;
                            options.processData = false;
                            // Dalje delamo na podlagi rezultata.
                            options.success = function (result) {
                                let leftTable = document.getElementById("GvIMList~OT~");
                            // alert(result);
                            let map = parseMDAttrs(result);
                            // alert("IDVmData let map = parseMDAttrs(result);" + map.IDVmData + "\nIDtypemData " + map.IDtypemData +"\nIDtoolBox " + map.IDtoolBox +
                            //  "\nLAitem " + map.LAitem);

                            // Stara verzija.
                            createMetadataRow(leftTable, map);

                    // Nova verzija
                    // createMetadataItemRow(leftTable, map);
                    // alert("add row success");
                }
                            options.error = function (err) {alert("Test " + err.statusText); }
                            $.ajax(options);
                            return false;
            }

                            function testItemGetControl(LAitem) {
                                let data = new FormData();
                            data.append("ajaxGetControl", "mdattrs");
                            data.append("LAitem", LAitem);

                            let options = { };
                            options.url = "Item.aspx";
                            options.type = "POST";
                            options.data = data;
                            options.contentType = false;
                            options.processData = false;
                            // Dalje delamo na podlagi rezultata.
                            options.success = function (result) {
                                alert(result);                    
                }
                            options.error = function (err) {alert("Test " + err.statusText); }
                            $.ajax(options);
                            return false;
            }

                            // Nova verzija kreiranja vrstice metapodatek.
                            var itemInputList = [];

                            function createMetadataItemRow(table, map) {
                                let body = table.children[1];

                            let lastId = body.children[body.children.length-1].id;
                            let newLastIndex = parseInt(lastId.charAt("GvIMList~TR~0~_TOPGROUP_^".length))+1;
                            let newLastId = "GvIMList~TR~0~_TOPGROUP_^" + newLastIndex + "*R0";
                            AddedMDList.addedSelectedRows[0] = newLastId;

                            let newRow = body.insertRow(-1);
                            newRow.id = newLastId;
                            newRow.setAttribute( "class", "");
                            newRow.setAttribute( "style", "height:21px");

                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            // cell1 je levi del - Labela.
                            // cell2 je desni del - vnosno polje.
                            let cell1 = newRow.insertCell(0);
                            let cell2 = newRow.insertCell(1);

                            if(newLastIndex%2==0) {
                                newRow.setAttribute("class", "GridOffice2007BlueAnyRecord");
                            cell1.setAttribute( "class", "GridOffice2007BlueAnyRecord");
                            cell2.setAttribute( "class", "GridOffice2007BlueAnyRecord");
                }
                            else {
                                newRow.setAttribute("class", "GridOffice2007BlueAlternateRecord");
                            cell1.setAttribute( "class", "GridOffice2007BlueAlternateRecord");
                            cell2.setAttribute( "class", "GridOffice2007BlueAlternateRecord");
                }

                            cell1.onmouseover = function () {
                                //this.setAttribute("style","background-color: rgb(255, 241, 187); background-image: url(\"WebResource.axd?d=hiq3Wl3GZRnfxSvPNw3lzMsrxBesL3eK6Wlyv8Kx5ZHmBXR7_YT7j3sD3aV8dTj86ghUZ35ntCnT-2CX46X7DQQsIezxkAhXI26kgOECye34RIOH0nP51pBqj7OozKmnwfaxds-JS7MR_GccRZNWDWBAABOZOt7JGhV70jmRl8GMgc1qCLPyKEQOscSjBvqLbv8o57DKmidwnwDLDkdy2F7FUi-Zuu0yAGHIoYGfWZgZUIb0dx5KBnvkuJBt3ecC0&t=636544612560000000\"); background-repeat: repeat-x;");
                                this.setAttribute("style", "background-color: rgb(255, 241, 187);");
                            cell2.setAttribute("style","background-color: rgb(255, 241, 187);");
                }
                            cell1.onmouseout = function () {
                                this.setAttribute("style", "");
                    // cell2.setAttribute("style","");
                }
                            cell2.onmouseover = function () {
                                // this.setAttribute("style","background-color: rgb(255, 241, 187); background-image: url(\"WebResource.axd?d=hiq3Wl3GZRnfxSvPNw3lzMsrxBesL3eK6Wlyv8Kx5ZHmBXR7_YT7j3sD3aV8dTj86ghUZ35ntCnT-2CX46X7DQQsIezxkAhXI26kgOECye34RIOH0nP51pBqj7OozKmnwfaxds-JS7MR_GccRZNWDWBAABOZOt7JGhV70jmRl8GMgc1qCLPyKEQOscSjBvqLbv8o57DKmidwnwDLDkdy2F7FUi-Zuu0yAGHIoYGfWZgZUIb0dx5KBnvkuJBt3ecC0&t=636544612560000000\"); background-repeat: repeat-x;");
                                this.setAttribute("style", "background-color: rgb(255, 241, 187);");
                    // cell1.setAttribute("style","background-color: rgb(255, 241, 187);");
                }
                            cell2.onmouseout = function () {
                                this.setAttribute("style", "");
                            cell1.setAttribute("style","");
                }
                            cell1.innerText = map.LAitem;

                            //////////////////////////////////////////////////////
                            // Desni del..
                            /////////////////////////////////////////////////////
                            let id = "txt" + map.IDVmData;
                            let ctrl = null;
                            if(map.control !== "undefined") {
                                cell2.innerHTML = map.control;    
                }
                            // Za mdje, ki pri sebi nimajo podatkov o kontrolah.
                            else {
                                let _IDtypemData = map.IDtypemData;
                            let _IDtoolBox = map.IDtoolBox;

                            if (map.IDtoolBox == "6"&&map.IDtypemData!=12) { // Combobox, razen item cb.
                                createCombobox(cell2, id, map);
                    }
                            else {
                        switch(_IDtypemData) {
                            case 1:     // Integer
                            case 10:    // TinyInt
                                // itemInputList.push({'IDtypemData': map.IDtypemData ,'ctr': createNumericBoxGeneral(cell2, id, _IDtypemData)});
                            ctrl = createNumericBoxGeneral(cell2, id, _IDtypemData);
                            break;
                            case 2:
                            case 3:
                            ctrl = createTextBox(cell2, id);
                            break;
                            case 4:
                            // createDateBox(cell2, id);
                            ctrl = createDateBoxNEW(cell2, id);

                            break;
                            case 6:
                            case 7:
                            case 9:
                            ctrl = createNumericBoxGeneral(cell2, id, _IDtypemData);
                            break;
                            case 5:
                            ctrl = createGrid(cell2, map);
                            break;
                            case 11:
                            ctrl = createFileUpload(cell2, id);
                            break;
                            case 12: // Item
                            if(map.IDtoolBox == 6) { // combobox
                                createCombobox(cell2, id, map); 
                                }
                            else if(map.IDtoolBox == 8) { // treeview
                                let data = [];
                            let dataRow = {"COtree":map.item.COtree, "IDVitem":map.item.IDVitem, "IDVtreeItem":map.item.IDVtreeItem};
                                    // let dataRow = {"COtree":"Testiranje", "IDVitem":"29", "IDVtreeItem":"29"};
                                    // let dataRow = {"COtree":"PMW Dev", "IDVitem":"2", "IDVtreeItem":"1"};
                            data.push(dataRow);
                            createTreeDiv(cell2, id, data);
                                }
                            else if(map.IDtoolBox == 9) { // listbox
                                createListbox(cell2, id, map.values);
                                }
                            break;
                            default:
                            break;
                        }
                    }
                            itemInputList.push({'IDtypemData':_IDtypemData, 'IDtoolBox':_IDtoolBox,'ctrl':ctrl});
                }
            }

                            function createMetadataRow(table, map) {
                
                //@TODO
                if(typeof itemInputList == 'undefined')
                            itemInputList=[];

                            let body = table.children[1];

                            let lastId = body.children[body.children.length-1].id;
                            let newLastIndex = parseInt(lastId.charAt("GvIMList~TR~0~_TOPGROUP_^".length))+1;
                            let newLastId = "GvIMList~TR~0~_TOPGROUP_^" + newLastIndex + "*R0";
                            AddedMDList.addedSelectedRows[0] = newLastId;

                            let newRow = body.insertRow(-1);
                            newRow.id = newLastId;
                            newRow.setAttribute( "class", "");
                            newRow.setAttribute( "style", "height:21px");

                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            // cell1 je levi del - Labela.
                            // cell2 je desni del - vnosno polje.
                            let cell1 = newRow.insertCell(0);
                            let cell2 = newRow.insertCell(1);

                            if(newLastIndex%2==0) {
                                newRow.setAttribute("class", "GridOffice2007BlueAnyRecord");
                            cell1.setAttribute( "class", "GridOffice2007BlueAnyRecord");
                            cell2.setAttribute( "class", "GridOffice2007BlueAnyRecord");
                }
                            else {
                                newRow.setAttribute("class", "GridOffice2007BlueAlternateRecord");
                            cell1.setAttribute( "class", "GridOffice2007BlueAlternateRecord");
                            cell2.setAttribute( "class", "GridOffice2007BlueAlternateRecord");
                }

                            cell1.onmouseover = function () {
                                //this.setAttribute("style","background-color: rgb(255, 241, 187); background-image: url(\"WebResource.axd?d=hiq3Wl3GZRnfxSvPNw3lzMsrxBesL3eK6Wlyv8Kx5ZHmBXR7_YT7j3sD3aV8dTj86ghUZ35ntCnT-2CX46X7DQQsIezxkAhXI26kgOECye34RIOH0nP51pBqj7OozKmnwfaxds-JS7MR_GccRZNWDWBAABOZOt7JGhV70jmRl8GMgc1qCLPyKEQOscSjBvqLbv8o57DKmidwnwDLDkdy2F7FUi-Zuu0yAGHIoYGfWZgZUIb0dx5KBnvkuJBt3ecC0&t=636544612560000000\"); background-repeat: repeat-x;");
                                this.setAttribute("style", "background-color: rgb(255, 241, 187);");
                            cell2.setAttribute("style","background-color: rgb(255, 241, 187);");
                }
                            cell1.onmouseout = function () {
                                this.setAttribute("style", "");
                    // cell2.setAttribute("style","");
                }
                            cell2.onmouseover = function () {
                                // this.setAttribute("style","background-color: rgb(255, 241, 187); background-image: url(\"WebResource.axd?d=hiq3Wl3GZRnfxSvPNw3lzMsrxBesL3eK6Wlyv8Kx5ZHmBXR7_YT7j3sD3aV8dTj86ghUZ35ntCnT-2CX46X7DQQsIezxkAhXI26kgOECye34RIOH0nP51pBqj7OozKmnwfaxds-JS7MR_GccRZNWDWBAABOZOt7JGhV70jmRl8GMgc1qCLPyKEQOscSjBvqLbv8o57DKmidwnwDLDkdy2F7FUi-Zuu0yAGHIoYGfWZgZUIb0dx5KBnvkuJBt3ecC0&t=636544612560000000\"); background-repeat: repeat-x;");
                                this.setAttribute("style", "background-color: rgb(255, 241, 187);");
                    // cell1.setAttribute("style","background-color: rgb(255, 241, 187);");
                }
                            cell2.onmouseout = function () {
                                this.setAttribute("style", "");
                            cell1.setAttribute("style","");
                }
                            cell1.innerText = map.LAitem;
                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            // Desni del - vnosno polje.
                            let _IDtypemData =  map.IDtypemData;
                            let _IDtoolBox = map.IDtoolBox;
                            let _IDVmData = map.IDVmData;
                            let mdprop = _IDVmData + "_" + _IDtypemData + "_" + _IDtoolBox;
                            let ctrl = null;
                            let id = "txt" + map.IDVmData;
                            if (map.IDtoolBox == "6"&&map.IDtypemData!=12) { // Combobox, razen item cb.
                                let _style = cell2.getAttribute("style");
                            // cell2.setAttribute("style","white-space:nowrap;"+ _style);
                            ctrl = createCombobox(cell2, id, map);
                            if (map.UAdata==1||map.UAchange==1) {
                                createAddValuesButton(cell2, id);
                    }
                    // alert('[DEBUG]: combobox added');
                }
                            else {
                    // let id = "txt" + map.IDVmData;
                    if(map.IDtypemData == 1) {// Integer ali tinyint
                                ctrl = createInteger(cell2, id, "");
                    }
                            else if(map.IDtypemData == 10) {
                                ctrl = createTinyInt(cell2, id, "");
                    }
                            else if(map.IDtypemData == 2 || map.IDtypemData == 3) { // nvarchar ali ntext
                                // ctrl = createTextBox(cell2, id);
                                ctrl = createTextBoxNEW(cell2, id, mdprop);
                    }
                            else if(map.IDtypemData == 4) { /* date*/
                                ctrl = createDateBox(cell2, id);
                        // createDateBoxNEW(cell2, id);
                    }
                            else if( map.IDtypemData == 6) { // decimal
                                ctrl = createDec(cell2, id, null);
                       // ctrl = createDec2(cell2, id, null);
                       // alert('createDec');
                    }
                            else if(map.IDtypemData == 5) { // grid
                                createGrid(cell2, map);
                    }
                            else if( map.IDtypemData == 7 ) { // float
                                ctrl = createFlo(cell2, id, null);
                    }
                            else if(map.IDtypemData == 9) { // currency
                                // ctrl = createMon(cell2, id); 
                                ctrl = createMoney(cell2, id, null);
                    }
                            else if(map.IDtypemData == 11) { // image
                                ctrl = createFileUpload(cell2, id);
                    }
                            else if(map.IDtypemData == 12) { // item
                        
                        if(map.IDtoolBox == 6) {
                                // combobox
                                // createListbox(cell2, id, map.values); // test
                                createCombobox(cell2, id, map); 
                        }
                            else if(map.IDtoolBox == 8) {
                                // treeview
                                let data = [];
                            let dataRow = {"COtree":map.item.COtree, "IDVitem":map.item.IDVitem, "IDVtreeItem":map.item.IDVtreeItem};
                            // let dataRow = {"COtree":"Testiranje", "IDVitem":"29", "IDVtreeItem":"29"};
                            // let dataRow = {"COtree":"PMW Dev", "IDVitem":"2", "IDVtreeItem":"1"};
                            data.push(dataRow);
                            createTreeDiv(cell2, id, data);
                        }
                            else if(map.IDtoolBox == 9) {
                                // listbox
                                createListbox(cell2, id, map.values);
                        }
                    }
                            else if(map.IDtypemData == 8) { // xml

                            }
                            else if(map.IDtypemData == 13) { // calculated
                                let formula=map.CLmData;
                            formula=formula.replaceAll('[','');
                            let tokens=formula.split(']');
                            formula=formula.replaceAll(']','');//pomembno, da je pod tokenizatorjem!!!!


                            let _div=document.createElement('div');
                            _div.id='txt'+map.IDVmData;
                            _div.setAttribute('title',formula);
                            _div.setAttribute('mdprop',map.IDVmData+'_'+map.IDtypemData+'_'+map.IDtoolBox);
                            cell2.appendChild(_div);

                            let calcFields=[];
                            for(let i=0;i<tokens.length;i++){
                                let aToken=tokens[i];
                            let el=document.getElementById(aToken);
                            if(el!=null) {
                                calcFields.push(el);
                            }
                        }
                            let res=0;
                            let tempFlds=[];
                            for(let i=0;i<calcFields.length;i++){
                                let aFld1=calcFields[i];

                            for(j=0;j<calcFields.length;j++){
                                let aFld2=calcFields[j];
                            if(aFld1==aFld2) {
                                    continue;
                                }
                            else {
                                tempFlds.push(aFld2);                                    
                                }
                            }
                            
                            aFld1.addEventListener('focusout', (event) => {
                                let formulaTemp= 'txt45+txt46';
                            formula=formulaTemp;
                            for(let k=0;k<calcFields.length;k++){
                                let f=calcFields[k];
                            formula=formula.replaceAll(f.id, f.control.GetValue());
                                }
                            _div.innerText=eval(formula);
                            });

                            tempFlds=[];
                        }
                    }                
                }
                            itemInputList.push({'IDVmData':_IDVmData,'IDtypemData':_IDtypemData,'IDtoolBox':_IDtoolBox, 'name':map.LAitem,'ctrl':ctrl});
            }

                            function parseMDAttrs(attrs) {
                 return JSON.parse(attrs);
            }

                            function BtnRemoveMetadataFromItem_Submit() {
                                //alert(theForm);
                                __doPostBack('UpWinItem', 'move|1');
                            return false;
            }

                            function BtnRemoveMetadataFromItem_ClientClick() {
                                let leftTable = document.getElementById("GvIMList~OT~");
                            let rightTable = document.getElementById("GvMetadataList~OT~");

                            let leftTbody = leftTable.children[1];
                            let rightTbody = rightTable.children[1];

                            let i=1;
                            let tr = null;
                            let LAitem = "";
                            let leftChildren = leftTbody.children;
                            for(;i<leftChildren.length;i++){
                                tr = leftChildren[i];
                            if(tr.className == "") {
                                LAitem = tr.children[0].innerText;
                            let styleAttr = tr.getAttribute("style");
                            tr.setAttribute("style", styleAttr + ";visibility:collapse;");
                            break;
                    }
                }
                            let rightChildren = rightTbody.children;
                            i =1;
                            let currText = "";
                            for(;i<rightChildren.length;i++) {
                                tr = rightChildren[i];
                            currText = tr.children[0].innerHTML;

                            if(currText == LAitem) {
                                let style = tr.getAttribute("style");
                            style = style.replace('visibility:collapse;','');
                            tr.setAttribute("style", style);
                            break;
                    }
                }
                // alert ("[DEBUG] " + i + " " + LAitem);
            }

                            //@TODO kontrola enega oznacenega cbja
                            var checkedNodeID = [];
                            var checkedNode = null;

                            var actionID = 0;
                            var elementID = 0;

                            function count() {
                return count.i++;
            }
                            count.i = 0;

                            function ClientSideOnNodeCheckChanged(tv, checkedNode, inputID) {
                if (checkedNode.CheckState == "Checked") {
                    // alert('Vhod ' + ' ' + checkedNode.ID + ' ' + checkedNode.Text + ' inputID.value: ' + inputID.value);
                    var checkedNodeID = checkedNode.ID;

                            var allNodes = tv.GetAllNodes();

                            if (inputID.value == '') {
      //                  alert('inputID.value == empty string');
                        for (var i = 0; i < allNodes.length; i++) {
                            var aNode = allNodes[i];
                            if (aNode.ID!=checkedNodeID)
                            aNode.UnCheck();
                        }
                    }
                            else {
    //                    alert('inputID.value != empty string');
                        for (var j = 0; j < allNodes.length; j++) {
                            var aNode = allNodes[j];
                            //alert(j + ' ' +aNode.ID +' '+ ' '+ inputID.value+' ' + (aNode.ID == inputID.value));
                            if (aNode.ID == inputID.value) {
                                //                            alert('Najden check.');
                                aNode.UnCheck();
                            }
                        }
                    }
                            inputID.value = checkedNode.ID;
                            //alert(inputID.value + ' ' + checkedNode.ID);
                            aNode.Checked();
                    //alert('Izhod ' + aNode.Text + ' ' + aNode.Checked);// + ' ' + inputID != null ? inputID.value : 'empty');
                }
                    /*
                else {
                                alert('node unchecked');
                }
                            */
            }

                            function testLocation() {
                                alert(window.location.search);
            }

                            function ClientSideOnNodeExpand(aNode, inputField) {
               // alert('ClientSideOnNodeExpand ' + aNode.ID + ' ' + inputField.value);
                if (inputField.value == '')
                            inputField.value =  aNode.ID;
                            else
                            inputField.value = inputField.value + '|' + aNode.ID;

               // alert(inputField.value);
            }

                            function ClientSideOnNodeCollapse(aNode, inputField) {
               // alert('ClientSideOnNodeCollapse ' + aNode.ID + ' ' + inputField.value);
                var str = inputField.value;
                            var res = str.split('|');
                            var tokens = "";
                            for (var i = 0; i < res.length; i++) {
                    if (aNode.ID != res[i]) {
                        if (i == 0)
                            tokens = res[i];
                            else
                            tokens = tokens + '|' + res[i];
                    }
                }
                            inputField.value = tokens;
               // alert('ClientSideOnNodeCollapse ' + aNode.ID + '\n' + inputField.value);
            }

                            function ClientSideOnLoadGetExpanded(tv) {
                                //alert('Vhod ' + tv.ID);
                                //
                                //var expandedNodes = tv.GetExpandedNodes();

                                // for(var i = 0; i < expandedNodes.length; i++) {
                                //    var aNode = expandedNodes[i];
                                //    alert(aNode);
                                //}
                            }

                            function copy(target, params) {
                                __doPostBack(target, params);
            }

                            function closeFormTemplateWinOnCancel() {
                                //alert('[DEBUG]on cancel');
                                window.top.hideWinItemOnCancel();
            }

                            function ajaxSaveFormularTemplate(doClose) {
                                //@TODO moram se pozanimat, kako je s potrjevanjem oz. save form template.
                                let formData = new FormData();
                            formData.append("_target", "saveFormTemplate");
                            let docData = { };
                            let dataTask = { };
                            //docData.sys24='';
                            //docData.sys15='';
                            docData.fld_SYfile='';
                            docData.IDVmData6=document.getElementById('TxtFormName').value;
                            docData.fld_posType=0;
                            docData.fld_strut = '';
                            docData.fld_dupli = '';

                            // Item status
                            let fields = document.getElementsByName("rbTaskStatus");
                            let isApproved = null;

                            if(fields[0].checked) {
                                isApproved = "0";
                }
                            else {
                                isApproved = "1";
                }
                            docData.fld_taskStatus = isApproved;
                            let formBody=_sfRtFormularContent.GetHTML();
                            formBody=formBody.replace(/\n|\t/g, ' '); //removes new lines
                formBody=formBody.replace(/>\s+</gm, '><'); //removes blanks between tags

                        //This "encrypting" is needed to send html to server.
                        formBody=formBody.replaceAll("<","#||#");

                        formData.append("templateBody", formBody);
                        docData.IDVmData15="templateBody";

                        // okno workflow
                        // Current workflow
                        let IDVwfl = document.getElementById("DdlWFItemList").value;
                        // alert("IDVwfl " + IDVwfl);
                        docData.fld_IDVwfl=IDVwfl;

                        // Selected Performer
                        dataTask.sys6 = document.getElementById("DdlPerformer").value;

                        // Planned End Date
                        let _dt = document.getElementById("DateAPFinishP_text").value;
                        let _select = parent.document.getElementById('appDateFormat');
                        let formatter = _select.options[_select.selectedIndex].text;
                        let formatTokens = formatter.split(".");

                        let idx_d = 0;
                        let idx_m = 0;
                        let idx_y = 0;
                        for(let i=0;i<formatTokens.length;i++) {
                            let tokenElement = formatTokens[i];

                        if(tokenElement=="yyyy") {
                            idx_y = i;
                    }
                        else if(tokenElement=="MM") {
                            idx_m = i;
                    }
                        else if(tokenElement="dd") {
                            idx_d = i;
                    }
                }
                        let dateTokens = _dt.split(".");
                        dataTask.sys7 = dateTokens[idx_y]+"."+dateTokens[idx_m]+"."+dateTokens[idx_d];

                        let output = "";
                        for (let prop in docData) {
                   if (Object.prototype.hasOwnProperty.call(docData, prop)) {
                        if(typeof docData[prop]=='object') {
                            let _obj = docData[prop];
                        output = output + prop + ': ' + _obj?.name + "\n";
                        }
                        else
                        output = output + prop + ': ' + docData[prop] + "\n";
                    }
                }
                        output=output+"----------------------------------------------------\n";

                        for (let prop in dataTask) {
                   if (Object.prototype.hasOwnProperty.call(dataTask, prop)) {
                            output = output + prop + ': ' + dataTask[prop] + "\n";
                    }
                }

                // if(!confirm(output)){
                            //     return;
                            // }
                            let settingsData = JSON.stringify(docData);
                        formData.append("dataDocItem", settingsData);
                        formData.append("dataTask", JSON.stringify(dataTask));
                        /////////////////////////////////////////////////////////////////////
                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = formData;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            let tst=0;
                        let resObj = JSON.parse(result);

                        if(!doClose) {
                            let btnClose=document.getElementById('closeFormularTmpBtn');
                        if(btnClose.value!='Close') {
                            btnClose.value = 'Close';
                        }
                    }

                        window.top.hideWinItem(resObj.status, resObj.doTask, resObj.selectedNode,
                        resObj.newIDVitem, resObj.action, doClose/*taskStatus==1*/);
                }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);    
            }

                        async function ajaxSaveFormularItem(btn) {

                            let formData = new FormData();
                        formData.append("_target", "saveItemForm");
                        let docData = { };

                        // OKNO SETTINGS
                        // code for children
                        docData.sys24 = document.getElementById("txtCCode").value;

                        // form for children
                        let formSelect = document.getElementById("DdlUseFormular");
                        docData.sys15 = formSelect.selectedIndex == 0 ? "" : formSelect.value;

                        // is Folder
                        let SYfile = document.getElementById("CbSYfileFormular").checked;
                        docData.fld_SYfile =  SYfile ? 0 : 1;

                        // item type
                        let rButtons = document.getElementById("RbAddItemCType").children[0].children[0].children;
                        let j=0;
                        for(;j<rButtons.length;j++) {
                            let td = rButtons[j];
                        if(td.children[0].checked) {
                        break;
                    }
                }
                        docData.fld_posType = j;
                        //////////////////////
                        let _ItemBindList = ""
                        let _i=0;
                        let nodes = TvStructureItemBind_obj.GetCheckedNodes();
                        if(nodes) {
                    for(;_i<nodes.length;_i++) {
                            _ItemBindList = _ItemBindList + nodes[_i].ID + "|";                                         
                    }
                }

                        let _AutoBindList = "";
                        _i=0;
                        nodes = TvStructureAutoBind_obj.GetCheckedNodes();
                        if(nodes) {
                    for(;_i<nodes.length;_i++) {
                            _AutoBindList = _AutoBindList + nodes[_i].ID + "|";                                         
                    }
                }
                        docData.fld_strut = _ItemBindList;
                        docData.fld_dupli = _AutoBindList;

                        let fld_incl_parent_struct= document.getElementById('fld_incl_parent_struct').checked?1:0;
                        let fld_incl_children_struct= document.getElementById('fld_incl_children_struct').checked?1:0;

                        docData.fld_incl_parent_struct= fld_incl_parent_struct;
                        docData.fld_incl_children_struct= fld_incl_children_struct;

                        let fld_incl_parent_dupli= document.getElementById('fld_incl_parent_dupli').checked?1:0;
                        let fld_incl_children_dupli= document.getElementById('fld_incl_children_dupli').checked?1:0;

                        docData.fld_incl_parent_dupli= fld_incl_parent_dupli;
                        docData.fld_incl_children_dupli= fld_incl_children_dupli

                        let dataTask = { };
                        ///////////////////////////////////////////////////////
                        // okno workflow
                        // Current workflow
                        let IDVwfl = document.getElementById("DdlWFItemList").value;
                        // alert("IDVwfl " + IDVwfl);
                        docData.fld_IDVwfl=IDVwfl;

                        // Selected Performer
                        dataTask.sys6 = document.getElementById("DdlPerformer").value;

                        // Planned End Date
                        let _dt = document.getElementById("DateAPFinishP_text").value;

                        let _select = parent.document.getElementById('appDateFormat');
                        let formatter = _select.options[_select.selectedIndex].text;
                        let formatTokens = formatter.split(".");

                        let idx_d = 0;
                        let idx_m = 0;
                        let idx_y = 0;
                        for(let i=0;i<formatTokens.length;i++) {
                            let tokenElement = formatTokens[i];

                        if(tokenElement=="yyyy") {
                            idx_y = i;
                    }
                        else if(tokenElement=="MM") {
                            idx_m = i;
                    }
                        else if(tokenElement="dd") {
                            idx_d = i;
                    }
                }
                        let dateTokens = _dt.split(".");
                        dataTask.sys7 = dateTokens[idx_y]+"."+dateTokens[idx_m]+"."+dateTokens[idx_d];
                        //////////////////////////////////////////////////////////////////////////////////////////////

                        // Item status
                        let fields = document.getElementsByName("rbTaskStatus");
                        let isApproved = null;

                        if(fields[0].checked) {
                            isApproved = "0";
                }
                        else {
                            isApproved = "1";
                }

                        docData.fld_taskStatus = isApproved;

                        // glavno okno save formular

                        let inputFields = $("[id^='IDVmD']");
                        inputFields = form1.querySelectorAll("[id^='IDVmData'][id$='no0']");
                        let i=0;
                        for(;i<inputFields.length;i++) {
                            let inp = inputFields[i];
                        let inpId = inp.id;
                        let inpValue = inp.value;

                        let parsedId = inpId.split("_");
                        let IDVmData = parsedId[0];
                        let numOf = parsedId[1];

                        let elId = inp.id;
                        let _list = elId.split("_");

                        // _list.length == 1 pomeni 
                        switch(inp.tagName) {
                        case "INPUT": {
                            if(_list.length == 2) {
                            let _id = _list[0];
                        let _val = null;
                        if(inp.type=='file') {
                                    
                                    if(inp.files.length>0) {
                            _val = inp.files[0].name;
                        formData.append(_id + '_file',inp.files[0]);
                                    }
                        else {
                            //Če je file upload, potem je treba preverjati, ali obstaja
                            //checkbox...
                            let _cb = document.getElementById('cb'+IDVmData);
                        let _lnk = document.getElementById('lnk'+IDVmData);
                        //Če obstaja checkbox, potem je to edit, drugače je new.
                        if(_cb) {
                                            if(_cb.checked) {
                            // alert("Id "+ _lnk.title );
                            _val = 'id_' + _lnk.title;     
                                            }
                        else {
                            _val = '';
                                            }
                                        }
                                    }
                                }
                        else {
                            _val = inp.value;
                                    // docData[_list[0]]=inp.value;    
                                }
                        docData[_id]=_val;
                            }
                        }
                        break;
                        case "DIV":
                        //Za tole bo potrebna revizija.
                        if (_list.length == 2 && typeof inp.control != "undefined") {
                                if(typeof inp.control.Items != "undefined") {
                            let _items = inp.control.Items;
                        let _output = "";
                        for(let _o=0;_o<_items.length;_o++) {
                                        if( _items[_o].Checked) {
                            _output = _output + _items[_o].Value + "|";
                                        }
                                    }
                        docData[ _list[0]] = _output;
                                }
                        else if(inp.control.currentDate!=undefined) {
                            let dateTxt=inp.control.GetText();
                        if(dateTxt=='')
                        docData[_list[0]]='';
                        else {
                            let dt = inp.control.currentDate;//array
                        docData[_list[0]]=dt[0]+"."+dt[1]+"."+dt[2];
                                    }
                                }
                        else if(inp.control.m_sSavingValue!=undefined){
                            // let result = inp.parentElement.querySelectorAll("[id^='"+inp.id+"_hidden']");
                            //     if(result.length==1) {
                            //        docData[_list[0]] = result[0].value;
                            // }
                            // docData[_list[0]]= inp.control.GetValue(); 
                            //Tole je še ena SF neumnost...     
                            docData[_list[0]] = inp.control.m_sSavingValue;      
                                }

                        else if(inp.control.GetCheckedNodes!=undefined) {
                            let cNodes = inp.control.GetCheckedNodes();
                        if(cNodes.length==1) {
                            docData[_list[0]] = cNodes[0].ID;
                                    }
                                }
                        else
                        docData[_list[0]]=inp.control.textbox.value;
                            }
                        else if(_list.length == 4 && typeof inp.control != "undefined" && inp.id.includes("Calendar")) {
                            let date = inp.control.GetSelectedDays().length>0 ?inp.control.GetSelectedDays()[0] :null;
                        if(date!=null) {
                            docData[_list[0]] = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
                                }
                            }
                        else if(_list.length==2&&inp.getAttribute('mdprop')!=null){
                            let mdprop=inp.getAttribute('mdprop');
                        //parse attrib mdprop, then split it by '_' and assign 2nd token to variable.
                        let __IDtypemData=inp.getAttribute('mdprop').split('_')[1];
                        if(__IDtypemData==13) {
                            docData[_list[0]] = inp.getAttribute('title');
                                }
                            }
                        break;
                        case "SELECT":
                        if(_list.length == 2) {
                            // let _v = 
                            docData[_list[0]] = inp.selectedOptions[0].value;
                            }
                        break;
                        case "TEXTAREA": {
                            // alert("parsedId " + parsedId + " " + inpValue);
                            docData[_list[0]] = inpValue;
                            }
                        break;
                        default:
                        continue;
                    }
                } // END for inputFields

                        inputFields = $("[id^='grid_table']");

                        i=0;
                        for(;i<inputFields.length;i++) {
                            let _f =inputFields[i];
                        let _fId = _f.id;
                        docData[_f.id] = _fId.replace("_table", "");
                }

                        //This is required for special data for create user formular
                        let IDVtreeItemParent = parent?.Tv.control?.GetSelectedNode()?.ID
                        if(IDVtreeItemParent==10) {
                            let qId = "IDVmData_PW_Q";
                        let aId = "IDVmData_PW_A";
                        let questionFld = document.getElementById(qId);
                        let answerFld = document.getElementById(aId);
                        docData[qId] = questionFld.value;
                        docData[aId] = answerFld.value;
                }

                        let output = "";
                        for (let prop in docData) {
                   if (Object.prototype.hasOwnProperty.call(docData, prop)) {
                        if(typeof docData[prop]=='object') {
                            let _obj = docData[prop];
                        output = output + prop + ': ' + _obj?.name + "\n";
                        }
                        else
                        output = output + prop + ': ' + docData[prop] + "\n";
                    }
                }
                        output=output+"----------------------------------------------------\n";
                        for (let prop in dataTask) {
                   if (Object.prototype.hasOwnProperty.call(dataTask, prop)) {
                            output = output + prop + ': ' + dataTask[prop] + "\n";
                    }
                }

                        //////////////////////////////////////////////////////////////////
                        let valueCode=docData?.IDVmData18;

                        if(valueCode !== undefined) {
                            let _IDVitem=parseRequestParams(window.location.search, 'IDVitem');
                        let respObj=await testCodeValue(valueCode, _IDVitem);
                    if(respObj.resp>0) {
                            _winWorkflow.Close();
                        let inpt=form1.querySelector('[id^="IDVmData18"]');
                        inpt.style.background='red';
                        inpt.title='DUPLICATED CODE\nEntered code already exists!';
                        return;
                    }
                }
                //////////////////////////////////////////////////////////////////////////////////////
                // if(!confirm(output)){
                            //     return;
                            // }

                            let settingsData = JSON.stringify(docData);
                        formData.append("dataDocItem", settingsData);

                        settingsData = JSON.stringify(dataTask);
                        formData.append("dataTask", settingsData);

                        ///////////////////////////////////////////////////////
                        let isSuccess=false;
                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = formData;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            isSuccess = true;
                        let resObj = JSON.parse(result);
                        let _url=window.location.search.split('&');
                        _url=_url.filter(function(value){return value.startsWith('SelectedNodeID');});
                        let __IDVtreeItem_Users=_url.length==1?_url[0]:0;
                        __IDVtreeItem_Users=__IDVtreeItem_Users.split('=');
                        __IDVtreeItem_Users=__IDVtreeItem_Users.length==2?__IDVtreeItem_Users[1]:0;
                        //alert('[DEBUG]: '+__IDVtreeItem_Users);

                        if(__IDVtreeItem_Users==10) {
                            let userObj={ };
                        userObj.firstName=docData.IDVmData1;
                        userObj.lastName=docData.IDVmData2;
                        userObj.email=docData.IDVmData19;
                        userObj.userName=docData.IDVmData3;
                        userObj.password=docData.IDVmData20;
                                        postData("/pmw_api/api/Account/CreateUser", userObj).then((data) => {
                            window.top._winItem.Close();
                                        });
                                    }
                        else {
                            let isOpened = _winWorkflow.IsOpened();
                        if(isOpened) {
                            _winWorkflow.Close();
                                        }
                        window.top.hideWinItem(resObj.status, resObj.doTask,
                        resObj.selectedNode, resObj.newIDVitem, resObj.action, isOpened);
                                    } 
                }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);
            }
                        function deleteStatusRow() {
                            //GENERALY SPEAKING, IT REMOVES ERROR MESSAGE
                            // AFTER USER INTERACTED W A FIELD IN QUESTION.
                            let _table=form1.querySelector("[id=formItemBody]");
                        if(_table&&_table.rows.length==2) {
                            _table.deleteRow(0);
                }
            }

                        async function postData(url = "", data = { }) {
                // Default options are marked with *
                const _response = await fetch(url, {
                            method: "POST", // *GET, POST, PUT, DELETE, etc.
                        mode: "cors", // no-cors, *cors, same-origin
                        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                        //credentials: "same-origin", // include, *same-origin, omit
                        credentials: "omit", // same-origin, *same-origin, include
                        headers: {
                            "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                        redirect: "follow", // manual, *follow, error
                        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify(data), // body data type must match "Content-Type" header
                }); console.log(_response);
                        return _response.json(); // parses JSON response into native JavaScript objects
            }

                        function onFileInputChange(inputId, cbId){
                            // let inpt = document.getElementById(inputId);
                            let cb = document.getElementById(cbId);
                        // alert(inpt.value + ' ' + cb.checked);
                        if(cb.checked)
                        cb.checked=!cb.checked;
                //alert(inputId + ' ' + cbId);
            }

                        function clearFileInput(id) {
                            let inpt = document.getElementById(id);
                        // alert(inpt.value);
                        inpt.value = '';
            }

                        function validateCreateUser() {
                            //alert('validateCreateUser');
                            let IDVtreeItemParent = parent?.Tv.control?.GetSelectedNode()?.ID
                        if(IDVtreeItemParent==10) {
                            let pwFields = document.querySelectorAll('[id^="IDVmData4"]');
                        if(pwFields[0].value!=""&&pwFields[1].value!=""&&pwFields[0].value!=pwFields[1].value) {
                            // alert("Customize “Password confirmation doesn't match Password");
                            document.getElementById('LblStatus').innerHTML = "Password confirmation doesn't match Password";
                        closeWinWorkflow();
                        // window.top.closeItemWindow();
                        return false;
                    }
                    
                }
                        _winWorkflow.Open(null, null);
            }

                        //success, task, selectedNode, newIDVitem, itemEditMode, doClose

                        function doSave(btn) {
                
                if(isFormTemplate==true) {
                            ajaxSaveFormularTemplate(true);
                        return;
                }
                        // Če tale div obstaja, pomeni kreiranje/editiranje itema skozi formular.            
                        let isFormular = document.getElementById("UpItemThroughFormular") != null;

                        if(isFormular) {
                            ajaxSaveFormularItem(btn);
                    // window.top.hideWinItem(resObj.status, resObj.doTask, resObj.selectedNode, resObj.newIDVitem, resObj.action, isOpened);
                }
                        else {
                            // alert("save item");
                            ajaxSaveItem(btn);
                }
            }

                        async function ajaxSaveItem(btn) {
                            // alert(window.location.href );
                            let data = new FormData();
                        data.append("_target", "saveItem");

                        let test = $("input[id^='IDVmData']");

                        let dataValues = { };
                        // Podati moramo še IDVitem, oz. nič, če gre za novega.
                        data.append("_IDVitem", "0");

                        ///////////////////////////////////////////////////////
                        // okno settings

                        // code for children
                        dataValues.sys24 = document.getElementById("txtCCode").value;

                        // form for children
                        let formSelect = document.getElementById("DdlUseFormular");
                        dataValues.sys15 = formSelect.selectedIndex == 0 ? "" : formSelect.value;

                        // is Folder
                        let SYfile = document.getElementById("CbSYfileFormular").checked;
                        dataValues.fld_SYfile =  SYfile ? 0 : 1;

                        // item type
                        let rButtons = document.getElementById("RbAddItemCType").children[0].children[0].children;
                        let j=0;
                        for(;j<rButtons.length;j++) {
                            let td = rButtons[j];
                        if(td.children[0].checked) {
                        break;
                    }
                }
                        dataValues.fld_posType = j;

                        let ItemBindList = document.getElementById("TvStructureItemBind_Focused").value;
                        let AutoBindList = document.getElementById("TvStructureAutoBind_Focused").value;

                        // Potrebno je preveriti, ali obstaja kakšen cb, ki oznacen, a ga ni v seznamu. (mogoče samo zbiranje v seznam nima smisla,
                        // ker je tale operacija nujna).
                        let _ItemBindList = ""
                        let _i=0;
                        let nodes = TvStructureItemBind_obj.GetCheckedNodes();
                        if(nodes) {
                    for(;_i<nodes.length;_i++) {
                            _ItemBindList = _ItemBindList + nodes[_i].ID + "|";                                         
                    }
                }
                        // alert("Nabran sproti: " + ItemBindList + "\nNabran: " + _ItemBindList);    

                        let _AutoBindList = "";
                        _i=0;
                        nodes = TvStructureAutoBind_obj.GetCheckedNodes();
                        if(nodes) {
                    for(;_i<nodes.length;_i++) {
                            _AutoBindList = _AutoBindList + nodes[_i].ID + "|";                                         
                    }
                }
                        // alert("Nabran sproti: " + ItemBindList + "\nNabran: " + _ItemBindList+"\n\nNabran sproti: " + AutoBindList + "\nNabran: " + _AutoBindList);  

                        dataValues.fld_strut = _ItemBindList;
                        dataValues.fld_dupli = _AutoBindList;

                        let fld_incl_parent_struct= document.getElementById('fld_incl_parent_struct').checked?1:0;
                        let fld_incl_children_struct= document.getElementById('fld_incl_children_struct').checked?1:0;

                        dataValues.fld_incl_parent_struct= fld_incl_parent_struct;
                        dataValues.fld_incl_children_struct= fld_incl_children_struct;

                        let fld_incl_parent_dupli= document.getElementById('fld_incl_parent_dupli').checked?1:0;
                        let fld_incl_children_dupli= document.getElementById('fld_incl_children_dupli').checked?1:0;

                        dataValues.fld_incl_parent_dupli= fld_incl_parent_dupli;
                        dataValues.fld_incl_children_dupli= fld_incl_children_dupli

                        let dataTask = { };
                        ///////////////////////////////////////////////////////
                        // okno workflow
                        // Current workflow
                        let IDVwfl = document.getElementById("DdlWFItemList").value;
                        dataValues.fld_IDVwfl =  IDVwfl;

                        // Selected Performer
                        dataTask.sys6 = document.getElementById("DdlPerformer").value;

                        // Planned End Date
                        // let _dt = document.getElementById("DateAPFinishP_text").value;
                        let _dt = document.getElementById("DateAPFinishP");
                        let _currDt = _dt?.control?.currentDate;
                        if(_currDt)
                        dataTask.sys7 = _currDt[0]+"."+_currDt[1]+"."+_currDt[2];
                        /////////////////////////////////////////////////////////////////////////////////////////

                        // Item status
                        let fields = document.getElementsByName("rbTaskStatus");
                        let taskStatus = null;

                        if(fields[0].checked) {
                            taskStatus = "0";
                }
                        else {
                            taskStatus = "1";
                }
                        dataValues.fld_taskStatus = taskStatus;

                        ///////////////////////////////////////////////////////
                        // main item metadata window

                        //All metadata should have this attribute which consists of
                        // IDVmData + IDtypemData + IDtoolBox
                
                        // :not([id^="grid"])[mdprop] => id se NE začne z grid IN ima atribut mdprop
                        // , vejica pomeni ALI
                        // [id=^="grid_table"][mdprop] => id se začne z grid_table in ima atribut mdprop                
                        let mdl = document.querySelectorAll(':not([id^="grid"])[mdprop],[id^="grid_table"][mdprop]');
                        for(let i=0;i<mdl.length;i++) {
                            let mdCtrl = mdl[i];
                        if(mdCtrl.parentElement.parentElement.style.visibility == "collapse") {
                        continue;
                    }
                        let mdprop = mdCtrl.getAttribute('mdprop').split('_');
                        let _IDVmData = parseInt(mdprop[0]);
                        let _IDtypemData = parseInt(mdprop[1]);
                        let _IDtoolBox = parseInt(mdprop[2]);

                        let _val = "";
                        let _key = mdCtrl.id;

                        if(_IDtoolBox==6) { //Combobox
                            let selIdx = mdCtrl.selectedIndex;
                        if(selIdx!=0) {
                            _val = mdCtrl.value;
                        }
                    }
                        // else if()
                        else
                        //Numeric type should hold control object
                        switch(_IDtypemData) {
                        case 1:
                        case 6:
                        case 7:
                        case 9:
                        case 10: {
                            let _obj = mdCtrl.control!==undefined?mdCtrl.control:null;
                        if(_obj!=null) {
                            _val = _obj.GetText();
                                // dataValues[_IDVmData+'_TST']=_val;
                            }
                        break;
                        }
                        case 2:
                        case 3: {
                            _val = mdCtrl.value;
                        // dataValues[_IDVmData+'_TST']=_val;
                        break;
                        }
                        case 4: {
                            let _parentObject = itemInputList[i];
                        let currDate = _parentObject?.ctrl?.control?.currentDate;

                        if(currDate) {
                            //Date is stored in sf created object.
                            _val = currDate[0] + "." + currDate[1] + "." + currDate[2];
                            }
                        else {
                            //If currentDate is undefined, we assume date is 
                            //stored in the pure client side object.
                            let _tempVal = _parentObject?.ctrl?.control?.textBox?.value;
                        let _select = parent.document.getElementById('appDateFormat');
                        let formatter = _select.options[_select.selectedIndex].text;
                        let formatTokens = formatter.split(".");
                        let idx_d = 0;
                        let idx_m = 0;
                        let idx_y = 0;
                        for(let i=0;i<formatTokens.length;i++) {
                            let tokenElement = formatTokens[i];
                        if(tokenElement=="yyyy") {
                            idx_y = i;
                                    }
                        else if(tokenElement=="MM") {
                            idx_m = i;
                                    }
                        else if(tokenElement="dd") {
                            idx_d = i;
                                    }
                                }
                                
                                if(_tempVal&&_tempVal.length>0) {
                            let dateTokens = _tempVal.split(".");
                        _val = dateTokens[idx_y]+"."+dateTokens[idx_m]+"."+dateTokens[idx_d];
                                }
                        else _val=""; 
                            }


                        break;
                        }
                        case 5: {
                            if(mdCtrl.id.startsWith("grid_table")) {
                            let splitedId = mdCtrl.id.split("_");
                        _val = "grid_" + splitedId[splitedId.length-1];
                                // dataValues[mdCtrl.id] = _val;
                            }
                        break;
                        }
                        case 11: {
                            if(mdCtrl.files.length > 0) {
                            _val = mdCtrl.files[0].name;
                        data.append(mdCtrl.id + "_file", mdCtrl.files[0]);
                                // dataValues[_IDVmData+'_TST'] = _val;    
                            }
                            // else {
                            //     dataValues[_IDVmData+'_TST'] = "";
                            // }
                            break;
                        }
                        case 12: {
                            switch(_IDtoolBox) {
                                case 6: {
                                    break;
                                }
                        case 8: {
                            let cNodes = mdCtrl?.control?.GetCheckedNodes();
                        if(cNodes!=null) {
                            _val = cNodes[0].ID;
                                        //alert('Node: '+ _val);
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
                            _val = mdCtrl.innerHTML;
                        }
                    }
                        // END else too!!!!
                        dataValues[_key] = _val;
                } // end for....
                        //En test
                        // dataValues["TEST_null"] = null;

                        let output = "";
                        for (let prop in dataTask) {
                   if (Object.prototype.hasOwnProperty.call(dataTask, prop)) {
                            output = output + prop + ': ' + dataTask[prop] + "\n";
                    }
                }
                        for (let prop in dataValues) {
                   if (Object.prototype.hasOwnProperty.call(dataValues, prop)) {
                            output = output + prop + ': ' + dataValues[prop] + "\n";
                    }
                }

                        let settingsData = JSON.stringify(dataValues);
                        data.append("dataItem", settingsData);

                        settingsData = JSON.stringify(dataTask);
                        data.append("dataTask", settingsData);

                        //////////////////////////////////////////////////////////////////////////
                        // THIS HERE PART CHECKS FOR MD CODE DUPLICATION.
                        let valueCode=dataValues.txt18;
                        let _IDVitem=parseRequestParams(window.location.search, 'IDVitem');
                        let respObj=await testCodeValue(valueCode, _IDVitem);
                if(respObj.resp>0) {
                            _winWorkflow.Close();
                        let inpt=form1.querySelector('[mdprop^="18"]');
                        inpt.style.background='red';
                        inpt.title='DUPLICATED CODE\nEntered code already exists!';
                        return;
                }
                // END MD CODE DUPLICATION CHECK.
                ////////////////////////////////////////////////////////////////////////////

                ///////////////////////////////////////////////////////
                // Ajax klic.....
                // if(!confirm(output)) {
                            //     return;
                            // }
                            let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;

                        if(btn!=null)
                        btn.disabled=true;
                        options.success = function (result) {
                            let resObj = null;
                        try {
                            resObj = JSON.parse(result);
                        let isOpened = _winWorkflow.IsOpened();
                        if(isOpened) {
                            _winWorkflow.Close();
                                        }
                        // alert('[DEBUG disabled]');
                        if(btn!=null) {
                            btn.disabled = false;
                                        }
                        window.top.hideWinItem(resObj.status, resObj.doTask,
                        resObj.selectedNode, resObj.newIDVitem, resObj.action, isOpened/*taskStatus==1*/);  
                                    }
                        catch(err) {
                            alert(err);
                                    }
                                                                      
                                  }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);
            }

                        function clearErrorOnFocus(el) { //Restores the field in question to its default look.
                            el.style.background = 'white';
                        el.title='';
            }

                        function isEmptyValue(value, index, array) {
                            let test=0;
                        return  value.value=='';
            }

                        //This function is called from code generated on the server (on item edit).
                        function serverRowAdder(button, gridID, gridTable) {
                            let atr = button.getAttribute("value");
                        // Tole je malo bedasto, ampak izgleda, da je potrebno, ker se id grida za
                        // item gradi drugače kot za item formular.
                        gridID = gridID+'|';
                        let root = document.getElementById(gridTable);
                        let gridIDsplit = gridID.split('|');
                        let searchId = "grid_"+gridIDsplit[0];
                        // let fields = root.querySelectorAll('input:not([id*="hidden"])[id^="'+searchId+'"],select[id^="'+searchId+'"]');
                        let _tempValue = "";
                        let _id = "";
                        let formData = new FormData();
                        formData.append("args", gridID);
                        const queryString = window.location.search;
                        const urlParams = new URLSearchParams(queryString);
                        let _IDVitem=urlParams.get('IDVitem')!=null?urlParams.get('IDVitem'):0;
                        formData.append("IDVitem", _IDVitem);

                        let _row = root.children[0].children[root.children[0].children.length-1];
                        let _flds = _row.querySelectorAll('[mdprop]');
                        let _v = null;
                        let _controlArr=[];
                        for(let i=0;i<_flds.length;i++) {
                            let _fld = _flds[i];
                        let mdprop = _fld.getAttribute('mdprop');
                        let _IDVmData = parseInt(mdprop.split('_')[0]);
                        let _IDtypemData = parseInt(mdprop.split('_')[1]);
                        let _IDtoolBox = parseInt(mdprop.split('_')[2]);
                        _id = _fld.id;
                        let idSplit = _id.split('_');
                        let __id = idSplit[0]+'_'+idSplit[1]+'_'+idSplit[2];

                        if(_IDtoolBox==6) {
                            _v = _fld.value;
                    }
                        else
                        switch(_IDtypemData) {
                        case 1:
                        case 6:
                        case 7:
                        case 9:
                        case 10: {
                            let _obj = _fld.control;
                        _v = _obj.GetText();
                        break;
                        }
                        case 2:
                        case 3: {
                            _v = _fld.value;
                        break;
                        }
                        case 4: {
                            let _obj = _fld.control;
                        let currDate = _obj.currentDate;
                        _v = currDate[0]+"."+currDate[1]+"."+currDate[2];
                        break;
                        }

                        case 11: {
                            // __id = "file_"+_fld.id;
                            let fArray=_fld.files; // array of input files.
                        if(fArray.length===1) {
                            formData.append(fArray[0].name, fArray[0]);
                        _v = fArray[0].name;
                            }
                        __id=__id+'_'+idSplit[3];
                        break;
                        }
                        case 12: {
                            break;
                        }
                    }
                        _controlArr.push({_IDVmData, value:_v});

                        formData.append(__id, _v);     
                } //END for(let i=0;i<_flds.length;i++)

                        const emptyValueList = _controlArr.filter(isEmptyValue);

                        if(emptyValueList.length==_flds.length) {
                    if(!confirm('There isnt any input.')){
                        return;
                    }
                }

                        let output = "";
                        for(let pair of formData.entries()){
                            output = output + pair[0] + ": " + pair[1] + "\n"; 
                }
                        alert("FormData: " + output);

                        //alert("[gridID]: " + gridID + " " + gridTable+ "\n"+_values);
                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = formData;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            //On success submited data is also shown in fresh grid row.
                            //let respRow = JSON.parse(result);
                            let len = root.rows.length;
                        let _newRow = root.insertRow(len-1);
                        let cell1 = null;
                        let cell2 = null;
                        for(let _i=0;_i<_flds.length;_i++) {
                            let aFld = _flds[_i];
                        cell1 = _newRow.insertCell();

                        if(_i<_flds.length-1) {
                            cell2 = _newRow.insertCell();
                        cell2.innerHTML = '&nbsp;';    
                        }
                        //celica za gumbe
                        else if(_i==_flds.length-1) {
                            //Edit
                            let btnDiv = document.createElement('div');
                        btnDiv.style.whiteSpace='nowrap';
                        cell2 = _newRow.insertCell();
                        // cell2.innerHTML = '&nbsp;';
                        cell2.appendChild(btnDiv);
                        const aButtonEdit = document.createElement('input');
                        aButtonEdit.type = 'button';
                        aButtonEdit.value = 'Edit';
                        aButtonEdit.className='btnAll';
                        aButtonEdit.onmouseover= function() {
                            this.className = 'btnAll02';
                            };
                        aButtonEdit.onmouseout= function() {
                            this.className = 'btnAll';
                            };
                        aButtonEdit.style.display='inline-block';
                            aButtonEdit.onkeydown = (event) =>{
                                if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                                    // event.stopImmediatePropagation();
                                    // event.preventDefault();
                                }
                            }
                            aButtonEdit.onclick = () => {
                            editButtonGlobal(event, aButtonEdit, (len - 2), searchId);    
                            }
                            // aButton.addEventListener('click', function(){
                            //    
                            // });
                            btnDiv.appendChild(aButtonEdit);

                        //Save
                        const aButtonSave = document.createElement('input');
                        aButtonSave.type = 'button';
                        aButtonSave.value = 'Save';
                        aButtonSave.style.display='none';
                            aButtonSave.onkeydown = (event) =>{
                                if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                                    // event.stopImmediatePropagation();
                                    // event.preventDefault();
                                }
                            }
                            aButtonSave.onclick = () => {
                            saveButtonGlobal(event, aButtonSave, (len - 2), searchId);    
                            }

                        aButtonSave.className='btnAll';
                            aButtonSave.onmouseover=()=> {
                            aButtonSave.className = 'btnAll02';  
                            };
                            aButtonSave.onmouseout=()=>{
                            aButtonSave.className = 'btnAll';  
                            };
                        btnDiv.appendChild(aButtonSave);

                        //Delete
                        const aButtonDelete = document.createElement('input');
                        aButtonDelete.type = 'button';
                        aButtonDelete.value = 'Delete';
                        aButtonDelete.style.display='inline-block';
                            aButtonDelete.onkeydown = (event) =>{
                                if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                                    // event.stopImmediatePropagation();
                                    // event.preventDefault();
                                }
                            }
                            aButtonDelete.onclick = () => {
                            deleteButtonGlobal(event, aButtonDelete, (len - 2), searchId);    
                            }

                        aButtonDelete.className='btnAll';
                            aButtonDelete.onmouseover=()=> {
                            aButtonDelete.className = 'btnAll02';  
                            };
                            aButtonDelete.onmouseout=()=>{
                            aButtonDelete.className = 'btnAll';  
                            };


                        btnDiv.appendChild(aButtonDelete);

                        //Cancel
                        const aButtonCancel = document.createElement('input');
                        aButtonCancel.type = 'button';
                        aButtonCancel.value = 'Cancel';
                        aButtonCancel.style.display='none';
                            aButtonCancel.onkeydown = (event) =>{
                                if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                                   // event.stopImmediatePropagation();
                                   // event.preventDefault();
                                }
                            }
                            aButtonCancel.onclick = () => {
                            cancelButtonGlobal(event, aButtonCancel, (len - 2), searchId);    
                            }
                        aButtonCancel.className='btnAll';
                            aButtonCancel.onmouseover=()=> {
                            aButtonCancel.className = 'btnAll02';  
                            };
                            aButtonCancel.onmouseout=()=>{
                            aButtonCancel.className = 'btnAll';  
                            };
                        btnDiv.appendChild(aButtonCancel);
                        }

                        cell1.id = (len-2)+ '_' + _i;
                        // if(aFld.type.startsWith("select")) {
                            //    cell1.innerHTML =  aFld.options[aFld.selectedIndex].text
                            //   
                            // }
                            // else if(aFld.type=="file") {
                            //     let fnSplit = aFld.value.split('\\');
                            //     let _fn = fnSplit[fnSplit.length-1];
                            // }
                            // else {
                            //     cell1.innerHTML = aFld.value;    
                            // }

                            let labelDiv = document.createElement('div');
                        let inputDiv = document.createElement('div');
                        cell1.appendChild(labelDiv);
                        cell1.appendChild(inputDiv);
                        labelDiv.style.display = 'inline';
                        inputDiv.style.display = 'none';

                        // labelDiv.innerHTML = 
                        // inputDiv.innerHTML = 'Test ' + _i;


                        //Vnosna polja
                        let idSplit = aFld.id.split('_');
                        // let idSplit = aFld.getAttribute('mdprop');
                        //Tale object je en šit, ampak zaenkrat nimam časa za spremembo...
                        let obj_id = 'obj_' + idSplit[2];
                        let obj = window[obj_id];
                        //Tukaj vemo, kakšne so začetne vrednosti za določeno vnosno polje...
                        if(typeof obj==='object' && obj !== null && idSplit.length>=4) {
                        // po IDtypemData
                            switch(idSplit[3]) {
                                case '1':  //Integer
                        let _value = aFld.control.GetText();
                        labelDiv.innerHTML = _value;
                        aFld.control.SetText("0");
                        //Input field inside the cell;
                        createInteger(inputDiv, 'Test_'+ len + '_' + _i, _value);
                        break;
                        case '4':  //Date
                        let today = new Date();
                        aFld.value = (today.getMonth()+1)+"."+today.getDate()+"."+today.getFullYear();
                        let cd = obj.currentDate;
                        labelDiv.innerHTML = cd[0]+"."+cd[1]+"."+(cd[2]+1);

                        //Datumska kontrola je sestavljena iz input hidden in div-a, ki ima še 
                        //naslednike.
                        let _hiddenInpt = aFld.parentElement.children[0].cloneNode(false);
                        let _id = _hiddenInpt.id;
                        _id.replace('hidden', len+'_hidden');
                        _hiddenInpt.id = _id
                        _hiddenInpt.name = _id
                        inputDiv.appendChild(_hiddenInpt);

                        let newDatetime = aFld.cloneNode(true);
                        let nodes = newDatetime.querySelectorAll('[id]');
                        //div
                        let __id = newDatetime.id+'_'+len;
                        newDatetime.id = __id;
                        let objName = __id;

                        let textInput = nodes[0];
                        __id = textInput.id;
                        __id.replace('text', len+'_text');
                        textInput.id = __id;
                        __id.replace('_text','$text');
                        textInput.name = __id;

                        let buttonInput = nodes[1];
                        __id = buttonInput.id;
                        __id.replace('down',len+'_down');
                        buttonInput.id = __id;
                        inputDiv.appendChild(newDatetime);

                                   // $create(Syncfusion.Web.UI.DropDownCalendarControl, {"name":objName,"scriptObjectId":"_sf"+objName,"serverId":objName}, null, null, newDatetime);
                                   // let attributes=[{"ID":objname+"__Calendar","Attributes":{"ScriptObjID":"obj_89_Calendar","AlternativeClass":"calendar_AlternativeDay","name":"grid_130_89_4$_Calendar"}}];
                        // Syncfusion.Web.UI.ControlManager.SetControlAttributtes("grid_130_89_4__Calendar",attributes);

                        break;
                        case '6': //Decimal
                        aFld.value='0,0000';
                        break;
                        case '7':
                        aFld.value='0,00';
                        break;
                        case '9':
                        break; 
                           }
                        }
                        else if(aFld.type.startsWith("select")) {
                            let idx = aFld.selectedIndex!=-1?aFld.selectedIndex:0;
                        labelDiv.innerHTML = aFld.options[idx].text;

                        //kontrola za combobox
                        let newId = aFld.id + '_'+len;
                        let newSelect = document.createElement('select');
                        newSelect.id = newId;
                        newSelect.name = newId;
                        newSelect.setAttribute('mdprop',aFld.getAttribute('mdprop'));
                        newSelect.className = 'formularCbBox';
                        newSelect.style = 'box-sizing: border-box';
                        newSelect.innerHTML = aFld.innerHTML;
                        newSelect.value = aFld.value;
                        inputDiv.setAttribute('oldVal',aFld.value);
                        aFld.value = '0';
                        inputDiv.appendChild(newSelect);
                        }
                        else {
                            let mdprop=aFld.getAttribute('mdprop').split('_');
                        let __IDVmData=mdprop[0];
                        let __IDtypemData=mdprop[1];
                        let __IDtoolBox=mdprop[2];

                        if(__IDtypemData==11) {
                            labelDiv.innerHTML = aFld.files[0]?.name;
                        aFld.value = "";        
                            }
                        else {
                            labelDiv.innerHTML = aFld.value;
                        aFld.value = "";        
                            }
                            
                        }
                    }
                        // This is due to sf shananigans with parent controls.
                        window.setTimeout(function () {
                            document.getElementById(_flds[0].id).focus(); 
                    }, 10);
                    //alert("success!");
                }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);

                        return false;
            }

                        // This function is assigned to be called from client when new metadata is added to item.
                        function clientRowAdder(inputFields, gridID, gridTable) {
                            let data = new FormData();
                        let i=0;
                        for(;i<inputFields.length;i++) {
                            let inputObj = inputFields[i];
                        let _IDtypemData = parseInt(inputObj.IDtypemData);
                        let id = inputObj.getId();
                        let inputValue = null;
                        if(_IDtypemData===11) {
                            inputValue = inputObj.getValue();
                        let fArray=inputObj.ctrl.files; // array of input files.
                        if(fArray.length===1)
                        data.append(fArray[0].name, fArray[0]);
                    }
                        else {
                            // inputValue = inputObj.getId(); 
                            inputValue = inputObj.getValue(); 
                    }
                        data.append(id, inputValue);
                }

                        data.append("args", gridID);
                        // alert(str);

                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            // alert("ok");
                            let numOfRows = gridTable.rows.length;
                        let _newRow = gridTable.insertRow(numOfRows-1);
                        let i=0;
                        let cell1 = null;
                        let cell2 = null;
                        let div = null;
                        let IDtypemData = null;
                        let ctrlObject = null;
                        for(;i<inputFields.length;i++) {
                            ctrlObject = inputFields[i];
                        let _input = ctrlObject.ctrl;
                        cell1 = _newRow.insertCell();
                        cell2 = _newRow.insertCell();
                        let val = ctrlObject.getValue();

                        div = document.createElement('div');
                        div.style.display = 'inline';
                        cell1.appendChild(div);

                        if(_input.type=="select-one") {
                            div.innerHTML = _input.options[_input.selectedIndex].text
                        }
                        else
                        // div.innerHTML = val[val.length-1];
                        div.innerHTML = val;

                        div = document.createElement('div');
                        div.style.display = 'none';
                        cell1.appendChild(div);

                        cell2.innerHTML = '&nbsp;';
                        ctrlObject.reset();
                    }
                        cell2.innerHTML = '';
                        let buttonDiv = document.createElement("div");
                        let editButton = document.createElement("input");
                        editButton.style.display = "inline-block";
                        editButton.type="button";
                        editButton.value='Edit';
                        //Opremimo gumb z indeksom vrstice, da bomo vedeli katero popravljat.
                        editButton.rowNumber=gridTable.rows.length-3;
                    editButton.onclick = (event) => {
                            let _row = gridTable.rows[numOfRows-1];
                        alert('Vrstica '+ editButton.rowNumber);
                        if(editButton.value=='Edit') {
                            editButton.value = 'Save';

                        let _IDtypemDataList = gridTable.rows[0].children;
                        let i = 0;
                        let inpt = null;
                        for(;i<_IDtypemDataList.length;i++) {

                            let aIDtypemData = _IDtypemDataList[i].getAttribute("idtypemdata");
                        let aIDtoolBox = _IDtypemDataList[i].getAttribute("idtoolbox");

                        if(aIDtypemData==null)
                        continue;
                        //rowElement je starš od input diva.
                        let rowElement = _row.children[i];

                        let leftDiv=rowElement.children[0];
                        let rightDiv=rowElement.children[1];

                        leftDiv.style.display = 'none';
                        rightDiv.style.display = 'inline';
                        let _val = leftDiv.innerHTML;

                        if(aIDtoolBox==6){
                                    if(rightDiv.innerHTML=='') {
                            inpt = createCombobox(rightDiv, 'tst_' + aIDtypemData + '_i', _IDtypemDataList[i].cbData);    
                                    }
                        else {
                            inpt = rightDiv.children[0];
                                    }
                        let cbValues= _IDtypemDataList[i].cbData.values;
                        let __i=0;
                        for(;__i<cbValues.length;__i++){
                            let aValue=cbValues[__i];
                        if(aValue._value==_val) {
                            inpt.value = aValue._id;
                        break;
                                        }   
                                    }
                                }
                        else if(aIDtypemData == 1) {
                                    if(rightDiv.innerHTML=='') {
                            inpt = createNumericIntegerInput(rightDiv, 'tst_' + aIDtypemData + '_i', aIDtypemData);
                                    }
                        else {
                            inpt = rightDiv.children[0];
                                    }
                        inpt.value = _val;
                                }
                        else if(aIDtypemData == 2) {
                                    if(rightDiv.innerHTML=='') {
                            inpt = createTextBox(rightDiv, 'tst_' + aIDtypemData + '_i');
                                    }
                        else {
                            inpt = rightDiv.children[0];
                                    }
                        inpt.value = _val;
                                }
                            }
                        }
                        else if(editButton.value=='Save') {
                            editButton.value = 'Edit';
                        let _IDtypemDataList = gridTable.rows[0].children;
                        let i = 0;
                        let inpt = null;
                        for(;i<_IDtypemDataList.length;i++) {
                            let aIDtypemData = _IDtypemDataList[i].getAttribute("idtypemdata");
                        let aIDtoolBox = _IDtypemDataList[i].getAttribute("idtoolbox");

                        if(aIDtypemData==null)
                        continue;
                        let rowElement = _row.children[i];

                        let leftDiv=rowElement.children[0];
                        let rigthDiv=rowElement.children[1];
                        leftDiv.style.display = 'inline';
                        rigthDiv.style.display = 'none';

                        let _val=null;
                        inpt=rigthDiv.children[0];
                        if(aIDtoolBox==6){
                            leftDiv.innerHTML = inpt.options[inpt.selectedIndex].innerHTML
                            // leftDiv.innerHTML=inpt.value; 
                        }
                        else if(aIDtypemData==1) {
                            leftDiv.innerHTML = inpt.value;
                                }
                        else if(aIDtypemData==2) {
                            leftDiv.innerHTML = inpt.value;
                                }
                            }    
                        }
                        event.stopPropagation();
                    };
                    editButton.onkeydown =(event)=> {
                        if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                            // event.stopImmediatePropagation();
                            // event.preventDefault();
                        }
                    };

                        let deleteBtn = document.createElement("input");
                        deleteBtn.style.display = "inline-block";
                        deleteBtn.type="button";
                        deleteBtn.value = "Delete"; 
                    deleteBtn.onclick = (event) => {
                            // alert("Click Delete " + numOfRows);
                            let data = new FormData();
                        data.append("_target", "delGridRow");
                        data.append("args_del", gridID);
                        // -2 ker tabela na ekranu začne 2 in tabela na serverju 0
                        data.append("_rowIdx", (numOfRows-2)+"");
                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            gridTable.deleteRow(numOfRows - 1);
                        }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);    
                    };
                    deleteBtn.onkeydown =(event)=> {
                        if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                            // event.stopImmediatePropagation();
                            // event.preventDefault();
                        }
                    };
                        buttonDiv.appendChild(editButton);
                        buttonDiv.appendChild(deleteBtn);
                        buttonDiv.style.whiteSpace="nowrap";
                        // cell2.appendChild(editButton);
                        cell2.appendChild(buttonDiv);
                        inputFields[0].ctrl.focus();
                 }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);

                        return false;
            }

                        function ajaxCall(srcDivID, gridID, tableID) {
                            // alert("Div id: " + srcDivID + "\nGrid id: " + gridID+"\nTable id: " + tableID);
                            let div = document.getElementById(srcDivID);
                        let children = div.childNodes;
                        let data = new FormData();

                        for(let i=0;i<children.length-1;i++) {
                            let child = children[i];
                        let id = child.id;
                        let value = child.value;
                        if(child.type == "file") {
                            let val = value.split("\\");
                        value = val[val.length-1];
                        let file = child.files[0];
                        data.append(file.name, file);
                    }
                        data.append(id, value);
                }
                        data.append("args",gridID);

                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            // alert("Div id: " + srcDivID + "\nGrid id: " + gridID+"\nTable id: " + tableID);
                            let table = document.getElementById(tableID);
                        let row = table.insertRow(-1);
                        let idx = 0;
                        for(let i=0;i<children.length-1;i++) {
                            let aChild = children[i];

                        if(typeof aChild.value === 'undefined') {
                                            continue;
                                        }

                        let val = aChild.value.split("\\");
                        idx = 2 * i;

                        let cell1 = row.insertCell(idx);
                        cell1.innerText = val[val.length-1];
                        if(i < children.length-2) {
                            let cell2 = row.insertCell(idx+1);
                        cell2.innerHTML = '&nbsp;';
                                        }
                                    }
                                  };
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);
                /*
                let table = document.getElementById(tableID);
                let row = table.insertRow(-1);
                let idx = 0;
                for(let i=0;i<children.length-1;i++) {
                            let aChild = children[i];
                        let val = aChild.value.split("\\");
                        idx = 2 * i;

                        let cell1 = row.insertCell(idx);
                        cell1.innerText = val[val.length-1];
                        if(i < children.length-2) {
                            let cell2 = row.insertCell(idx+1);
                        cell2.innerHTML = '&nbsp;';
                    }
                }

                        */
                        return false;//evt.preventDefault();
            }

                        function onClientNodeExpand(element) {
                            // let inputElement = document.getElementById("TvStructureItemBind_Focused");
                            // alert(inputElement.value);
                        }

                        function parseRequestParams(queryString, param) {
                // const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                        // let _IDVitem=urlParams.get('IDVitem')!=null?urlParams.get('IDVitem'):0;
                        return urlParams.get(param)!=null?urlParams.get(param):0;
            }

                        function cChangedItemBind(node) {
                            let n = node;
                        let inputElement = document.getElementById("TvStructureItemBind_Focused");
                        let _val = inputElement.value;

                        if(node.Checked) {
                            _val = _val + node.ID + "|";
                }
                        inputElement.value = _val;
                //alert(inputElement.value);
            }

                        function cChangedAutoBind(node) {
                            let n = node;
                        let inputElement = document.getElementById("TvStructureAutoBind_Focused");
                        let _val = inputElement.value;

                        if(node.Checked) {
                            _val = _val + node.ID + "|";
                }
                        inputElement.value = _val;
                //alert(inputElement.value);
            }

                        function onMDValuesRowClick(elem) {
                            // alert('Row click ' + elem.value);
                            let inpt = document.getElementById("_DataTypePlaceholder");
                        let deTxt = document.getElementById("TxtMDValueDE");
                        let reTxt = document.getElementById("TxtMDValueRE");
                        let _fldDefaultCB = document.getElementById("CbMetadataDefaultValue");
                        let idx = elem.selectedIndex;

                        let obj = elem.data[idx];

                        let _delete = document.getElementById("btnMDvalues_Delete");
                        if(obj._id!="") {
                            _delete.setAttribute("disabled", "disabled");
                }
                        else {
                            _delete.removeAttribute("disabled");
                }

                        inpt.value = obj._value;
                        deTxt.value = obj.DEtext;
                        reTxt.value = obj.REtext;
                        _fldDefaultCB.checked = obj.isDef == 1;
                        _fldDefaultCB.removeAttribute("disabled");

                        let _edit = document.getElementById("btnMDvalues_Edit");
                        _edit.removeAttribute("disabled");
            }

                        function btnPressed_NEW() {
                            actionID = 1;
                        let _new = document.getElementById("btnMDvalues_New");
                        _new.setAttribute("disabled","disabled");

                        let _edit = document.getElementById("btnMDvalues_Edit");
                        _edit.setAttribute("style","display:none;");

                        let _save = document.getElementById("btnMDvalues_Save");
                        _save.removeAttribute("style");

                        let _delete = document.getElementById("btnMDvalues_Delete");
                        _delete.setAttribute("disabled","disabled");

                        let _cancel = document.getElementById("btnMDvalues_Cancel");
                        _cancel.removeAttribute("style");

                        let _close = document.getElementById("btnMDvalues_Close");
                        _close.setAttribute("style","display:none;");

                        let _fldValue = document.getElementById("_DataTypePlaceholder");
                        _fldValue.removeAttribute("disabled");
                        _fldValue.focus();

                        let _fldDeTxt = document.getElementById("TxtMDValueDE");
                        _fldDeTxt.removeAttribute("disabled");

                        let _fldReTxt = document.getElementById("TxtMDValueRE");
                        _fldReTxt.removeAttribute("disabled");

                        let _fldDefaultCB = document.getElementById("CbMetadataDefaultValue");
                        _fldDefaultCB.removeAttribute("disabled");            
            }

                        function btnPressed_Cancel() {
                            actionID = 0;
                        let _new = document.getElementById("btnMDvalues_New");
                        _new.removeAttribute("disabled");
                        _new.removeAttribute("style");

                        let _edit = document.getElementById("btnMDvalues_Edit");
                        _edit.removeAttribute("disabled");
                        _edit.removeAttribute("style");

                        let _save = document.getElementById("btnMDvalues_Save");
                        _save.setAttribute("style","display:none;");

                        let _delete = document.getElementById("btnMDvalues_Delete");
                        _delete.removeAttribute("disabled");

                        let _wf = document.getElementById("btnMDvalues_WF");
                        _wf.setAttribute("style","display:none;");

                        let _cancel = document.getElementById("btnMDvalues_Cancel");
                        _cancel.setAttribute("style","display:none;");

                        let _close = document.getElementById("btnMDvalues_Close");
                        _close.removeAttribute("style");

                        // POLJA
                        let _fldValue = document.getElementById("_DataTypePlaceholder");
                        _fldValue.setAttribute("disabled","disabled");
                        _fldValue.value = "";

                        let _fldDeTxt = document.getElementById("TxtMDValueDE");
                        _fldDeTxt.setAttribute("disabled","disabled");
                        _fldDeTxt.value = "";

                        let _fldReTxt = document.getElementById("TxtMDValueRE");
                        _fldReTxt.setAttribute("disabled","disabled");
                        _fldReTxt.value = "";

                        let _fldDefaultCB = document.getElementById("CbMetadataDefaultValue");
                        _fldDefaultCB.setAttribute("disabled","disabled");
                        _fldDefaultCB.value = "";
            }

                        function btnPressed_Edit() {
                            // alert('test edit');
                            let select = document.getElementById("existingValues");
                        let _id = select.options[select.selectedIndex].value;

                        actionID = 2;
                        elementID = _id;
                        let _new = document.getElementById("btnMDvalues_New");
                        // _new.setAttribute("disabled","disabled");
                        _new.setAttribute("style","display:none;");

                        let _edit = document.getElementById("btnMDvalues_Edit");
                        _edit.setAttribute("disabled","disabled");

                        let _wf = document.getElementById("btnMDvalues_WF");
                        _wf.removeAttribute("style");

                        let _save = document.getElementById("btnMDvalues_Save");
                        _save.removeAttribute("style");

                        let _delete = document.getElementById("btnMDvalues_Delete");
                        _delete.setAttribute("disabled","disabled");

                        let _cancel = document.getElementById("btnMDvalues_Cancel");
                        _cancel.removeAttribute("style");

                        let _close = document.getElementById("btnMDvalues_Close");
                        _close.setAttribute("style","display:none;");

                        let _fldValue = document.getElementById("_DataTypePlaceholder");
                        _fldValue.removeAttribute("disabled");
                        let _fldDeTxt = document.getElementById("TxtMDValueDE");
                        _fldDeTxt.removeAttribute("disabled");
                        let _fldReTxt = document.getElementById("TxtMDValueRE");
                        _fldReTxt.removeAttribute("disabled");
            }

                        function btnPressed_Save(approved) {
                            let _fldValue = document.getElementById("_DataTypePlaceholder");
                        let _fldDeTxt = document.getElementById("TxtMDValueDE");
                        let _fldReTxt = document.getElementById("TxtMDValueRE");
                        let _fldDefaultCB = document.getElementById("CbMetadataDefaultValue");

                        let select = document.getElementById("existingValues");
                        // let _id = select.options[select.selectedIndex].value;
                        // alert('selected value: ' + elementID + "\nState " + actionID + "\nIndex " + select.selectedIndex + "\nApproved " + approved);
                        let record = {id:"",
                        value:_fldValue.value,
                        deTxt:_fldDeTxt.value,
                        reTxt:_fldReTxt.value,
                        isDef:_fldDefaultCB.checked?1:0,
                        state:actionID,
                        index:select.selectedIndex,
                               approved:approved};
                        select.data.push(record);

                        let data = new FormData();
                        data.append("_target","usrMDValSave");
                        data.append("_IDVmData",select.IDVmData);
                        data.append("_data", JSON.stringify(record));

                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            let resObject = JSON.parse(result);
                        let length = select.options.length;
                    for (let i = length-1; i >= 0; i--) {
                            select.options[i] = null;
                    }

                        for(j=0;j<resObject.length;j++) {
                            let opt = document.createElement("option");
                        opt.setAttribute("value", resObject[j]._id);
                        opt.text = resObject[j]._value;
                        select.add(opt);
                    }
                        select.data = resObject;
                        //select.IDVmData = id;

                        btnPressed_Cancel();
                }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);
            }

                        function btnPressed_Close() {
                            // Kaj je treba pocistiti?

                            let select = document.getElementById("existingValues");
                        let outerSelect = document.getElementById("txt"+select.IDVmData );
                        let isNotPresent = true;
                        // Skopiramo v zunanji select.
                        for(let i=0;i<select.options.length;i++) {
                            let aOption = select.options[i];

                        for(let j=0;j<outerSelect.options.length;j++) {
                            let outerOption = outerSelect.options[j];
                        if(aOption.innerText==outerOption.innerText) {
                            isNotPresent = false;
                        break;
                        }
                    }
                        if(isNotPresent) {
                            let newOption = aOption.cloneNode(true);
                        outerSelect.add(newOption);
                    }
                        isNotPresent = true;
                }
                        let inpt = document.getElementById("_DataTypePlaceholder");
                        inpt.value = "";
                        let deTxt = document.getElementById("TxtMDValueDE");
                        deTxt.value = "";
                        let reTxt = document.getElementById("TxtMDValueRE");
                        reTxt.value = "";
                        _winMetadataValue.Close();
            }

                        function onKeyDownInteger(el,event){
                            let kc = event.keyCode
                        if(kc<48||kc>57) {
                    //alert("Koda: " + event.keyCode);
                    //if(kc==188) {
                    //     if(el.value.includes(",")) {
                    //         event.preventDefault();
                    //     }
                    //}
                    //else 
                    if(kc==16) { //shift
                        }
                        else if(kc==9) { //tab
                        }
                        else if(kc==46) { //delete
                        }
                        else if(kc==8) { //backspace
                        }
                    else if(kc>36&&kc<41) { // arrows
                        }
                        else {
                            event.preventDefault();
                        return;
                    }    
                }
                if(el.value.length>el.getAttribute("flen")) {
                    
                    if(kc==46) { //delete
                        }
                        else if(kc==16) { //shift
                        }
                        else if(kc==9) { //tab
                        }
                        else if(kc==8) { //backspace
                        }
                    else if(kc>36&&kc<41) { // arrows
                        }
                        else {
                            alert("Too long.");
                        event.preventDefault();
                    }    
                }
            }

                        function onKeyDownReal(el,event){
                            let kc = event.keyCode
                        if(kc<48||kc>57) {
                    //alert("Koda: " + event.keyCode);        	
                    if(kc==188) {
                        if(el.value.includes(",")) {
                            event.preventDefault();
                        }
                    }
                        else if(kc==16) { //shift
                        }
                        else if(kc==9) { //tab
                        }
                        else if(kc==46) { //delete
                        }
                        else if(kc==8) { //backspace
                        }
                    else if(kc>36&&kc<41) { // arrows
                        }
                        else {
                            event.preventDefault();
                        return;
                    }    
                }
                if(el.value.length>el.getAttribute("flen")) {
                    if(kc==46) { //delete
                        }
                        else if(kc==16) { //shift
                        }
                        else if(kc==9) { //tab
                        }
                        else if(kc==8) { //backspace
                        }
                    else if(kc>36&&kc<41) { // arrows
                        }
                        else {
                            alert("Too long.");
                        event.preventDefault();
                    }    
                }
            }
                        //Vzorec
                        function onKeyDown(el,event){
                            let kc = event.keyCode
                        if(kc<48||kc>57) {
                    // alert("Koda: " + event.keyCode);        	
                    if(kc==188) {
                        if(el.value.includes(",")) {
                            event.preventDefault();
                        }
                    }
                        else if(kc==46) { //delete
                        }
                        else if(kc==8) { //backspace
                        }
                    else if(kc>36&&kc<41) { // arrows
                        }
                        else {
                            event.preventDefault();
                        return;
                    }    
                }
                if(el.value.length>el.fLen)
                        event.preventDefault();
            }

                        function onclk(ctrl) {
                            //alert("focus");
                            ctrl.setSelectionRange(0, ctrl.value.length);
            }

                        function onkup(ctrl) {
    	        if(ctrl.value.length==1) {
                            // alert("Value " + ctrl.value);
                        }
            }

                        //Globalna funkcija, ker je asp retardiran in ne more dodati lambe v src.
                        function enterKey(event) {
                if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                    // event.stopImmediatePropagation();
                    // event.preventDefault();
                }
            }

                        function deleteBtnGlobal(event) {
                if (event.keyCode === 13) {
                            //editButton.click();
                            event.stopPropagation();
                    // event.stopImmediatePropagation();
                    // event.preventDefault();
                }
            }

                        //  EDIT - Save - Delete - Cancel
                        function editButtonGlobal(event, currBtn, rowIndex, tableId) {
                            currBtn.style.display = "none";
                        currBtn.nextSibling.style.display = "inline";
                        currBtn.nextSibling.nextSibling.nextSibling.style.display = "inline";

                        let _root = currBtn.parentElement.parentElement.parentElement; // TR
                        let _children = _root.children; // List of TDs
                        for(let i=0;i<_children.length-1;i++) {
                            let tempTD = _children[i];
                        if(tempTD.children.length==0) {
                        continue;
                    }
                        let _labelDiv = tempTD.children[0];
                        let _inputDiv = tempTD.children[1];
                        _labelDiv.style.display = 'none';
                        _inputDiv.style.display = 'inline';

                        _labelDiv.setAttribute('oldVal',_labelDiv.innerHTML);
                    // _inputDiv.setAttribute('oldVal',_labelDiv.innerHTML);
                }
            }

                        //  Edit - SAVE - Delete - Cancel
                        function saveButtonGlobal(event, currBtn, rowIndex, tableId) {
                            currBtn.style.display = "none";
                        currBtn.previousSibling.style.display = "inline";
                        currBtn.nextSibling.nextSibling.style.display = "none";

                        let _root = currBtn.parentElement.parentElement.parentElement; // TR
                        // let _children = _root.children; // List of TDs
                        let _children = _root.querySelectorAll('[mdprop]');
                        let dataRow=[];
                        let mdprop=null;
                        for(let i=0;i<_children.length;i++) {
                            let elem = _children[i];
                        mdprop=elem.getAttribute('mdprop');
                    // if(elem.children.length==0) {
                            //     continue;
                            // }
                            let _labelDiv = elem.parentElement.previousSibling;
                        let _inputDiv = elem.parentElement;
                        _labelDiv.style.display = 'inline';
                        _inputDiv.style.display = 'none';

                        let ctrl = elem.control;
                        let _v = "";
                        if(ctrl!=undefined) {
                            _v = ctrl.GetText();
                    }
                        else {
                            _v = elem.value;
                    }
                        dataRow.push({id:mdprop, value:_v, rowIndex:rowIndex+1, columnIndex:i+1 });
                        _labelDiv.innerHTML = _v;
                }
                // for(let i=0;i<dataRow.length;i++) {
                            //     let o=dataRow[i];
                            //     alert('DEBUG:\nId:'+o.id + '\nValue:' + o.value + '\nColumn:'+ o.columnIndex+'\nRow:'+o.rowIndex);
                            // }

                            let data = new FormData();
                        data.append("_target", "saveGridRow");
                        data.append("gridId", tableId);
                        data.append("rowIndex", rowIndex);
                        const queryString = window.location.search;
                        const urlParams = new URLSearchParams(queryString);

                        data.append("IDVitem",urlParams.get('IDVitem'));
                        data.append("dataItem",JSON.stringify(dataRow));
                        let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            let resObj = null;
                        try {
                            resObj = JSON.parse(result);
                                    }
                        catch(err) {
                            alert(err);
                                    } 
                                }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);
            }

                        //  Edit - Save - DELETE - Cancel
                        function deleteButtonGlobal(event, currBtn, rowIndex, tableId) {
                            // if (confirm('u sure?')) {
                            currBtn.parentElement.parentElement.parentElement.style.display = 'none';    
                // }
                
            }

                        //  Edit - Save - Delete - CANCEL
                        function cancelButtonGlobal(event, currBtn, rowIndex, tableId) {
                            currBtn.style.display = 'none';
                        currBtn.previousSibling.previousSibling.style.display = 'none';
                        currBtn.previousSibling.previousSibling.previousSibling.style.display = 'inline';

                        let _root = currBtn.parentElement.parentElement.parentElement; // TR
                        let _children = _root.children; // List of TDs
                        for(let i=0;i<_children.length-1;i++) {
                            let tempTD = _children[i];
                        if(tempTD.children.length==0) {
                        continue;
                    }
                        let _labelDiv = tempTD.children[0];
                        let _inputDiv = tempTD.children[1];
                        _labelDiv.style.display = 'inline';
                        _inputDiv.style.display = 'none';

                        _labelDiv.innerHTML = _labelDiv.getAttribute('oldVal');

                        //Kontrola za editiranje v gridu...
                        let inputCtrl = _inputDiv.querySelector('[mdprop]');
                        let mdprop = inputCtrl.getAttribute('mdprop').split('_');
                        if(mdprop[2]==6) { //combobox
                            let oldValSelect = _inputDiv.getAttribute('oldVal');
                        inputCtrl.value = oldValSelect;
                    }
                        else { //ostalo(zaenkrat)
                       switch (mdprop[1]) {
                           case 1:
                        case 4:
                        case 6:
                        case 7:
                        case 9:
                        case 10:
                        inputCtrl?.control.SetText(_labelDiv.innerHTML);
                        break;
                               
                       } 
                    }
                }
            }

                        function editButtonGlobal_OLD(event, elem, rowIndex, tableId) {
                            let gridTable = document.getElementById(tableId);
                        let _row = gridTable.rows[rowIndex+1];
                        if(elem.value=='Edit') {
                            elem.value = 'Save';

                        let cancelBtn = elem.nextSibling.nextSibling;
                        cancelBtn.style.display = "inline";

                        let _IDtypemDataList = gridTable.rows[0].children;
                        let i = 0;
                        let inpt = null;
                        for(;i<_IDtypemDataList.length;i++) {
                            let aIDtypemData = _IDtypemDataList[i].getAttribute("idtypemdata");

                        if(aIDtypemData==null)
                        continue;
                        let rowElement = _row.children[i];
                        let _val = rowElement.innerHTML;
                        rowElement.setAttribute('oldVal', _val);
                        rowElement.innerHTML = '';
                        let _id = 'tst_'+aIDtypemData+'_i';
                        if(aIDtypemData == 1) {
                            inpt = createInteger(rowElement, _id, _val);
                        window[_id].control.SetValue=_val;
                            // inpt = createNumericIntegerInput(rowElement,'tst_'+aIDtypemData+'_i',aIDtypemData);
                            
                        }
                        else if(aIDtypemData == 2) {
                            inpt = createTextBox(rowElement, 'tst_' + aIDtypemData + '_i');
                        }
                        else if(aIDtypemData==3) {//ntext
                        }
                        else if(aIDtypemData==4) { //datetime
                        }
                        else if(aIDtypemData==5) { //grid?!?
                        }
                        else if(aIDtypemData==6) { //decimal
                            inpt = createDec(rowElement, _id);
                        }
                        else if(aIDtypemData==7) { //float
                            inpt = createFlo(rowElement, _id);
                        }
                        else if(aIDtypemData==8) { //xml
                        }
                        else if(aIDtypemData==9) { //currency
                            inpt = createDec(rowElement, _id);
                        }
                        else if(aIDtypemData==10) { //tinyint
                        }
                        //inpt.value = _val;
                    }
                }
                        else if(elem.value=='Save') {
                            elem.value = 'Edit';
                        let _IDtypemDataList = gridTable.rows[0].children;
                        let i = 0;
                        let inpt = null;
                        for(;i<_IDtypemDataList.length;i++) {
                            let aIDtypemData = _IDtypemDataList[i].getAttribute("idtypemdata");

                        if(aIDtypemData==null)
                        continue;
                        let rowElement = _row.children[i];
                        let _val = rowElement.children[0].value;
                        rowElement.innerHTML = _val;
                    }    
                }
                        event.stopPropagation();
            }

                        function checkCode(ctrl, ev) {
                            let aKey;
                        if(ev.which) {
                            aKey = ev.which;
                }
                        if(aKey!=13) {
                            alert(ctrl.value + ' ' + aKey);
                }    
            }

                        async function sendData(url, data) {
                const formData  = new FormData();

                        for(const name in data) {
                            formData.append(name, data[name]);
                }
                        const response = await fetch(url, {
                            method: 'POST',
                        body: formData
                });
                        return response;
            }

                        async function testCodeValue(codeValue, IDVitem) {
                            let fData = { };
                        fData._target = "testCodeValue";
                        fData._data = codeValue;
                        fData._IDVitem = IDVitem;
                        let _resp= await sendData('saveFile.aspx', fData);
                        // .then(response=>alert( response.json().resp))
                        return _resp.json();
            }

                        function cancelBtnGlobal_OBSOLETE(event, button, selRow, tableId) {
                            let gridTable = document.getElementById(tableId);
                        let _row = gridTable.rows[rowIndex+1];

                        let saveBtn = button.previousSibling.previousSibling;
                        button.style.display = "none";
                        saveBtn.value = 'Edit';
            }

                        function deleteBtnGlobal_OBSOLETE(event, selRow, tableId){
                            let gridTable = document.getElementById(tableId);

                        let data = new FormData();
                        data.append("_target", "delGridRow");
                        data.append("args_del", gridID);
                        // -2 ker tabela na ekranu začne 2 in tabela na serverju 0
                        data.append("_rowIdx", (selRow-2)+"");
                // alert(data._target + " " + data.args_del + " " + data._rowIdx);
                /*
                let options = { };
                        options.url = "saveFile.aspx";
                        options.type = "POST";
                        options.data = data;
                        options.contentType = false;
                        options.processData = false;
                        options.success = function (result) {
                            gridTable.deleteRow(selRow - 1);
                }
                        options.error = function (err) {alert(err.statusText); };
                        $.ajax(options);

                        */
            }

                        $(function() {
                            //Selektor iz elementa (GvIMList) izbere podelement input, katerih id se zacne "txt" in nimajo podstringa "hidden"  
                            let rootItem = document.getElementById('GvIMList');
                        let form = document.form1;
                        let formAction = form.action;

                        //To pomeni, da je ali zapiranje ekrana item(butasto navigiranje), ali je ekran item formular.
                        if(rootItem==null) {
                //     let isFormular = null;
                //     let idx = formAction.indexOf('isFormular');
                //     //Substring, ki se zacne z mode=X&... itn.
                //     let res = formAction.substring(idx);
                //     //Sparsamo parameter.
                //     isFormular = res.split('&')[0];
                //     //Sparsamo vrednost parametra.
                //     isFormular = isFormular.split('=')[1];
                //
                //     let formular = document.getElementById('UpItemThroughFormular');
                //     // let flds = formular.querySelectorAll("input[id^='IDVmD'],textarea[id^='IDVmD'],select[id^='IDVmD']");
                //     let flds = formular.querySelectorAll("[id^='IDVmD'][id$='_no0']");
                //
                //     for(let i=0;i<flds.length;i++) {
                //         let aFld = flds[i];
                //         let IDVmData =aFld.id.split('_')[0].split('IDVmData')[1];
                //         if(aFld.tagName=="DIV") {
                //             let _id = aFld.id + '_hidden';
                //             let result = formular.querySelectorAll("[id='"+_id+"']");
                //             if(result.length==1) {
                //                 itemInputList.push({'IDVmData':IDVmData,'ctrl':result[0]});
                //             }
                //             else if(aFld.control!="undefined") {
                //                 itemInputList.push({'IDVmData':IDVmData,'ctrl':aFld});
                //             }
                //         }
                //         else {
                //             itemInputList.push({'IDVmData':IDVmData,'ctrl':aFld});
                //         }
                //     }
                //    
                //     if(isFormular==1)
                    return;
                }
                        let itemList =  rootItem.querySelectorAll('[mdprop]');

                        let mode = null;
                        if(formAction.includes('mode')) {
                            let idx = formAction.indexOf('mode');
                        //Substring, ki se zacne z mode=X&... itn.
                        let res = formAction.substring(idx);
                        //Sparsamo parameter. 
                        mode = res.split('&')[0];
                        //Sparsamo vrednost parametra. 
                        mode = mode.split('=')[1];    
                }

                        for(let i = 0;i<itemList.length;i++) {
                            let elem = itemList[i];
                        let IDVmData = 0;
                        let IDtypemData = 0;
                        let IDtoolBox = 0;
                        let properties = elem.getAttribute('mdprop').split('_');
                        IDVmData = properties[0];
                        IDtypemData = properties[1];
                        IDtoolBox = properties[2];
                        let _obj = {'IDVmData':IDVmData,
                        'IDtypemData':IDtypemData,
                        'IDtoolBox':IDtoolBox ,
                        'ctrl':elem
                    };
                        _obj.getObject = function() {
                        return this?.ctrl?.control;        
                    }
                        itemInputList.push(_obj);
                }
                        let str = '';

               // let fData = new FormData(form);
               // let search = new URLSearchParams(fData);
               // let queryString = search.toString();
               //console.log( "ready!" );
            });
                    </script>

                    <style type="text/css">
                        #txtFormularMDtoItem {
                            width: 183px;
        }
                        .style5
                        {
                            width: 250px;
        }
                        .style11
                        {
                            height: 480px;
                        width: 1055px;
        }
                        .style13
                        {
                            height: 30px;
                        width: 1055px;
        }
                        .style14
                        {
                            height: 11px;
                        width: 1055px;
        }
                        #divPrint
                        {
                            margin - top: 0px;
        }
                        .style15
                        {
                            height: 649px;
        }
                        .style16
                        {
                            height: 420px;
        }
                        .style17
                        {
                            width: 645px;
                        height: 420px;
        }
                        .style19
                        {
                            height: 420px;
                        width: 469px;
        }
                        .style20
                        {
                            overflow: auto;
                        height: 100%;
        }
                        .style21
                        {
                            width: 250px;
                        overflow: auto;
                        height: 100%;
        }
                        .style22
                        {
                            width: 116px;
        }
                        .style23 {
                            width:50%;
                        height:600px;
                        overflow: auto;
        }
                        /*  */
                        .btnAddLeftOut {
                            height:30px;
                        width: 30px;
                        background: transparent url(./../App_images/btnAddLeft.gif);
                        background-repeat: no-repeat;
                        background-size: 100% 200%;
                        border: none;
                        cursor:pointer;
	    }

                        .btnAddLeftOver {
                            height:30px;
                        width: 30px;
                        background: transparent url(./../App_images/btnAddLeft.gif) 0px -30px;
                        background-repeat: no-repeat;
                        background-size: 100% 200%;
                        border: none;
                        cursor:pointer;
        }

                        .btnAddRightOut {
                            height:30px;
                        width: 30px;
                        background: transparent url(./../App_images/btnAddRight.gif);
                        background-repeat: no-repeat;
                        background-size: 100% 200%;
                        border: none;
                        cursor:pointer;
        }

                        .btnAddRightOver {
                            height:30px;
                        width: 30px;
                        background: transparent url(./../App_images/btnAddRight.gif) 0px -30px;
                        background-repeat: no-repeat;
                        background-size: 100% 200%;
                        border: none;
                        cursor:pointer;
        }
                        .itemBody {
                            overflow: scroll !important;
                        overflow-scrolling: auto;
                        position: relative;
            /*z-index: 10002;*/
        }
                    </style>
                </head>
                <body id="itemBody" >
                    <%-- <asp: Panel ID="VerticalScrollPanel" runat="server" ScrollBars="Vertical" style="overflow: auto;width: 100%; height: 100%;"  > --%>
                        <form id="form1" runat="server" >
                            <div hidden>
                                <div id="mock_numeric">
                                    <sf: NumericTextBox ID="NumericTextBox_mock" ShowButtons="False" ClientIDMode="Static" Value="0" runat="server" />
                                </div>
                                <div id="mock_DateCtrl" >
                                    <sf: DropDownCalendarControl ID="Date_mock" runat="server" />
                                </div>
                            </div>
                            <asp: ScriptManager ID="ScriptManager1" runat="server" EnableHistory="True" EnablePartialRendering="True"
                                EnablePageMethods="True" EnableScriptGlobalization="True" />
                            <script type="text/javascript">
                                var xPos, yPos;
                                var prm = Sys.WebForms.PageRequestManager.getInstance();
                                prm.add_beginRequest(BeginRequestHandler);
                                prm.add_endRequest(EndRequestHandler);
                                function BeginRequestHandler(sender, args) {
                    var node = args._postBackElement;
                                while (node != null) {
                        if (node.id == "placeHolderDiv") {
                                    xPos = $get('placeHolderDiv').scrollLeft;
                                yPos = $get('placeHolderDiv').scrollTop;
                                return true;
                        }
                                node = node.parentNode;
                    }
                                return false;
                }

                                function EndRequestHandler(sender, args) {
                    if($get('placeHolderDiv') != null) {
                                    $get('placeHolderDiv').scrollLeft = xPos;
                                $get('placeHolderDiv').scrollTop = yPos;
                    }
                }
                            </script>
                            <asp: UpdatePanel runat="server" ID="UpBasicItem" UpdateMode="Always" ChildrenAsTriggers="True"  >
                                <ContentTemplate>
                                    <asp: MultiView ID="MvItem" runat="server" >
                                        <asp: View ID="VwItem" runat="server"  >
                                            <table style="background-color:#BFDBFF; width:100%; height:30px">
                                                <tr>
                                                    <td style="width:60px" align="right">
                                                        <asp: Button ID="btnItemSettings" runat="server" CssClass="btnAll"
                                                            onmouseover="this.className='btnAll02'" onmouseout="this.className='btnAll'"
                                                            Text="<%$ Resources:Resource, Settings %>"
                                                            OnClientClick='openWinS();return false;'
                                                            CausesValidation="true" ValidationGroup="vgItem" />
                                                        <%-- <syncfusion: NumericTextBox runat="server" ShowButtons="False" ViewStateMode="Disabled" EnableViewState="False" Value="321" ></syncfusion: NumericTextBox> --%>
                                                        <div id="GridPlaceHolder" runat="server" style="display:none" ></div>
                                                    </td>
                                                    <td align="right">
                                                        <table border="0">
                                                            <tr>
                                                                <td>
                                                                    <asp: Button ID="BtnItemFinish" runat="server" CssClass="btnAll"
                                                                        onMouseover="this.className='btnAll02'" onMouseout="this.className='btnAll'"
                                                                        Text="<%$ Resources:Resource, BtnFinishText %>"
                                                                        ToolTip="<%$ Resources:Resource, BtnFinishText %>"
                                                                        OnClientClick="openWinWorkflow(this); return false;" />
                                                                </td>
                                                                <td>
                                                                    <input type="button" class="btnAll" onclick="doSave(this)" value="Save" onmouseout="this.className='btnAll'"
                                                                        onmouseover="this.className='btnAll02'" />
                                                                </td>
                                                                <td>
                                                                    <asp: Button ID="BtnItemAddCancel" runat="server" CssClass="btnAll"
                                                                        onMouseover="this.className='btnAll02'" onMouseout="this.className='btnAll'"
                                                                        Text="<%$ Resources:Resource, BtnCancelText %>"
                                                                        ToolTip="<%$ Resources:Resource, BtnCancelText %>"
                                                                        onclick="BtnItemAddCancel_Click"
                                                                        OnClientClick="" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td class="style23" id="_itemBody">
                                                        <%-- <div>Test1!!!</div> --%>
                                                        <%-- <div>Test2!!!</div> --%>
                                                        <%-- <div>Test3!!!</div> --%>
                                                        <syncfusion: GridGroupingControl ID="GvIMList" runat="server" Width="100%"
                                                            AutoFormat="Office 2007 Blue" ClientObjectID="AddedMDList"
                                                            PostBackOnFocusedChanged="False" EnableCallbacks="False"
                                                            PostBackOnRowDblClick="False" DataSourceCachingMode="Session"
                                                            ShowGroupDropArea="False" AllowDragOnSelect="false"
                                                            onrowdatabound="GvIMList_RowDataBound"
                                                            AjaxActionMode="Server"

                                                            ReCreateChildControls="True">
                                                            <TableDescriptor AllowEdit="False" AllowNew="False">
                                                                <Columns>
                                                                    <syncfusion: GridColumnDescriptor MappingName="LAitem" HeaderText="<%$ Resources:Resource, Name %>" Width="120">
                                                                        <GroupByOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                                    </syncfusion: GridColumnDescriptor>
                                                                    <syncfusion: GridColumnDescriptor Name="value" HeaderText="<%$ Resources:Resource, Value %>" Width="200">
                                                                        <GroupByOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                                    </syncfusion: GridColumnDescriptor>
                                                                </Columns>
                                                                <ChildGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                                <TopLevelGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                            </TableDescriptor>
                                                            <Appearance>
                                                                <RecordPreviewCell CssClass="GridOffice2007BlueRecordPreview" />
                                                                <GroupHeaderRowHeaderCell CssClass="GridOffice2007BlueGroupedColumnHeaders" />
                                                                <ColumnHeaderCell CssClass="GridOffice2007BlueColumnHeaders" />
                                                                <TopLeftHeaderCell CssClass="GridOffice2007BlueTopLeftHeaderCell" />
                                                                <RowHeaderCell CssClass="GridOffice2007BlueRowHeaders" />
                                                                <AnyRecordFieldCell CssClass="GridOffice2007BlueAnyRecord" />
                                                                <AlternateRecordFieldCell CssClass="GridOffice2007BlueAlternateRecord" />
                                                                <GroupIndentCell CssClass="GridOffice2007BlueGroupIndentCell" />
                                                                <GroupCaptionCell CssClass="GridOffice2007BlueGroupCaption" />
                                                                <GroupCaptionPlusMinusCell CssClass="GridOffice2007BluePlusMinus" />
                                                                <FilterBarCell CssClass="GridOffice2007BlueFilterBarCell" />
                                                                <AnySummaryCell CssClass="GridOffice2007BlueAnySummary" />
                                                            </Appearance>
                                                            <ChildGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                            <TableOptions ShowRowHeader="false" AllowSortColumns="False" />
                                                            <TopLevelGroupOptions ShowCaption="False" />
                                                            <NestedTableGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                            <PageManager EnableOnDemandPaging="False" TotalRecordsCount="5" />
                                                        </syncfusion: GridGroupingControl>
                                                        <br />
                                                    </td>
                                                    <td width="5px">&nbsp;</td>
                                                    <td>
                                                        <table style="margin:auto;">
                                                            <tr>
                                                                <td>
                                                                    <input type="button" class="btnAddLeftOut"
                                                                        onmouseover="this.className='btnAddLeftOver'" onmouseout="this.className='btnAddLeftOut'"
                                                                        onclick="BtnAddMetadataToItem_ClientClick();" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="button" class="btnAddRightOut"
                                                                        onmouseover="this.className='btnAddRightOver'" onmouseout="this.className='btnAddRightOut'"
                                                                        onclick="BtnRemoveMetadataFromItem_ClientClick();" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="5px">&nbsp;</td>
                                                    <td class="style23">
                                                        <syncfusion: GridGroupingControl ID="GvMetadataList" runat="server" Width="100%"
                                                            AutoFormat="Office 2007 Blue"
                                                            BorderCollapse="Separate" CssClass="GridOffice2007Blue"
                                                            DataSourceCachingMode="ViewState" DragSelectionBackColor="Yellow"
                                                            GroupDropAreaCssClass="GridOffice2007BlueGroupDropArea"
                                                            ShowGroupDropArea="False" PostBackOnRowDblClick="False"
                                                            AllowDragOnSelect="false" ShowSearchBox="True" PageSize="60000"
                                                            OnDataBound="GvMetadataList_OnDataBound" EnableCallbacks="False"
                                                            OnPreRender="GvMetadataList_OnPreRender"
                                                            ReCreateChildControls="true" >
                                                            <TopLevelGroupOptions AllowActiveFilteringMode="false" ShowFilterBarTextCell="true" ShowFilterBar="true" />
                                                            <TableDescriptor AllowEdit="false" AllowFilter="true" AllowNew="false">
                                                                <Columns>
                                                                    <syncfusion: GridColumnDescriptor HeaderText="<%$ Resources:Resource, MetadataName %>"
                                                                        MappingName="LAitem" Name="LAitem" Width="300">
                                                                        <GroupByOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                                    </syncfusion: GridColumnDescriptor>
                                                                </Columns>
                                                                <ChildGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                                <TopLevelGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                            </TableDescriptor>
                                                            <TopLevelGroupOptions AllowActiveFilteringMode="False" ShowCaption="False" ShowFilterBar="True" ShowFilterBarTextCell="True" />
                                                            <Appearance>
                                                                <RecordPreviewCell CssClass="GridOffice2007BlueRecordPreview" />
                                                                <GroupHeaderRowHeaderCell CssClass="GridOffice2007BlueGroupedColumnHeaders" />
                                                                <ColumnHeaderCell CssClass="GridOffice2007BlueColumnHeaders" />
                                                                <TopLeftHeaderCell CssClass="GridOffice2007BlueTopLeftHeaderCell" />
                                                                <RowHeaderCell CssClass="GridOffice2007BlueRowHeaders" />
                                                                <AnyRecordFieldCell CssClass="GridOffice2007BlueAnyRecord" />
                                                                <AlternateRecordFieldCell CssClass="GridOffice2007BlueAlternateRecord" />
                                                                <GroupIndentCell CssClass="GridOffice2007BlueGroupIndentCell" />
                                                                <GroupCaptionCell CssClass="GridOffice2007BlueGroupCaption" />
                                                                <GroupCaptionPlusMinusCell CssClass="GridOffice2007BluePlusMinus" />
                                                                <FilterBarCell CssClass="GridOffice2007BlueFilterBarCell" />
                                                                <AnySummaryCell CssClass="GridOffice2007BlueAnySummary" />
                                                            </Appearance>
                                                            <ChildGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                            <TableOptions ShowRowHeader="false" />
                                                            <NestedTableGroupOptions AllowExpressionFilter="False" FilterStatusBarWidth="450" ShowFilterStatusMessage="False" />
                                                            <PageManager EnableOnDemandPaging="False" TotalRecordsCount="5" />
                                                        </syncfusion: GridGroupingControl>
                                                        <syncfusion: GridPager ID="GpMetadataList" runat="server" PageSize="20"
                                                            PagingControlID="GvFormularMetadataList" Skin="Office2007Blue"
                                                            Width="100%" Visible="False">
                                                            <PagerItems>
                                                                <syncfusion: NextPreviousGridPagerItem FirstPageText="&lt;&lt;" PreviousPageText="&lt;"
                                                                    ShowFirstPageButton="true" ShowLastPageButton="False"
                                                                    ShowNextPageButton="false" ShowPreviousPageButton="true" />
                                                                <syncfusion: NumericGridPagerItem ButtonCount="2" />
                                                                <syncfusion: NextPreviousGridPagerItem LastPageText="&gt;&gt;" NextPageText="&gt;"
                                                                    ShowFirstPageButton="false" ShowLastPageButton="true"
                                                                    ShowNextPageButton="true" ShowPreviousPageButton="false" />
                                                            </PagerItems>
                                                        </syncfusion: GridPager>
                                                    </td>
                                                </tr>

                                            </table>
                                        </asp: View>
                                        <asp: View ID="VwFormular" runat="server" ><%-- Formular template.  --%>
                                            <asp: UpdatePanel runat="server" ID="upFormular" UpdateMode="Conditional" >
                                                <ContentTemplate>
                                                    <table cellpadding="0" cellspacing="0" class="grid" width="100%" border="0" >
                                                        <tr>
                                                            <td style="vertical-align:top" class="style14" colspan="3">
                                                                <table style="border:none;background-color:#92C0F4; height:30px;" width="100%;" cellpadding="0" cellspacing="0" >
                                                                    <tr>
                                                                        <td align="right">
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="button" class="btnAll" onclick="openWinWorkflowFormTemp(3)"
                                                                                            value="WorkFlow"
                                                                                            onmouseout="this.className='btnAll'"
                                                                                            onmouseover="this.className='btnAll02'" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <%-- <asp: Button ID="BtnSaveFormular" runat="server" CssClass="btnAll" --%>
                                                                                        <%--             onMouseover="this.className='btnAll02'" onMouseout="this.className='btnAll'"         --%>
                                                                                        <%--             Text="<%$ Resources:Resource, BtnSaveText %>"  --%>
                                                                                        <%--             ToolTip="<%$ Resources:Resource, BtnSaveText %>"  --%>
                                                                                        <%--             onclick="BtnFormularSave_Click" /> --%>
                                                                                        <input type="button" class="btnAll" onclick="ajaxSaveFormularTemplate(false)"
                                                                                            value="Save"
                                                                                            onmouseout="this.className='btnAll'"
                                                                                            onmouseover="this.className='btnAll02'" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <%-- <asp: Button ID="BtnCancelFormular" runat="server" CssClass="btnAll" --%>
                                                                                        <%--             onMouseover="this.className='btnAll02'" onMouseout="this.className='btnAll'" --%>
                                                                                        <%--             Text="<%$ Resources:Resource, BtnCancelText %>"  --%>
                                                                                        <%--             ToolTip="<%$ Resources:Resource, BtnCancelText %>" --%>
                                                                                        <%--             onclick="BtnCancelFormular_Click" /> --%>
                                                                                        <input type="button" class="btnAll" onclick="closeFormTemplateWinOnCancel()"
                                                                                            value="Cancel" id="closeFormularTmpBtn"
                                                                                            onmouseout="this.className='btnAll'"
                                                                                            onmouseover="this.className='btnAll02'" />
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table border="1">
                                                                    <tr>
                                                                        <td>
                                                                            <asp: Literal ID="Literal8" runat="server" Text="<%$ Resources:Resource, Caption %>" />
                                                                        </td>
                                                                        <td>&nbsp;</td>
                                                                        <td class="style22" align="left" colspan="1" width="500px">
                                                                            <asp: TextBox ID="TxtFormName" ClientIDMode="Static" runat="server" CssClass="txtBox" Width="500px" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr height="30px" style="height:30px" valign="middle">
                                                                        <td>
                                                                            <asp: Literal ID="Literal4" runat="server" Text="<%$ Resources:Resource, FormWidth %>" />
                                                                        </td>
                                                                        <td>&nbsp;</td>
                                                                        <td class="style22" align="left" width="500">
                                                                            <asp: TextBox ID="TxtFormWidth" runat="server" cssClass="txtBox" Width="500px" Text="100%" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="1" class="style20">
                                                                <Syncfusion: RichTextEditor Font-Names="Verdana" Font-Size="8pt" ID="RtFormularContent"
                                                                    runat="server" Height="700px" Width="700px" OnTextChanged="RtFormularContent_snuffTextChange"
                                                                    AutoFormat="Office2007 Blue" ShowTableToolbar="True"
                                                                    ShowUpdateCancelButton="False" OnCallbackRefresh="testRTE"
                                                                    ShowToolsToolbar="True" />
                                                            </td>
                                                            <td valign="top" class="style21">
                                                                <syncfusion: GridGroupingControl ID="GvFormularMetadataList" runat="server" Width="100%"
                                                                    AutoFormat="Office 2007 Blue" AutoSaveChildControlChanges="false"
                                                                    BorderCollapse="Separate" CssClass="GridOffice2007Blue"
                                                                    DataSourceCachingMode="ViewState" DragSelectionBackColor="Yellow"
                                                                    GroupDropAreaCssClass="GridOffice2007BlueGroupDropArea" PostBackOnFocusedChanged="False"
                                                                    ShowGroupDropArea="False" PostBackOnRowDblClick="False"
                                                                    AllowDragOnSelect="false" ClientSideOnRecordClick="copyMetadataToClipboard(this)"
                                                                    Height="60%" ShowSearchBox="True"  >
                                                                    <TopLevelGroupOptions AllowActiveFilteringMode="false" ShowFilterBarTextCell="true"
                                                                        ShowFilterBar="true" ShowCaption="False" ></TopLevelGroupOptions>
                                                                    <TableDescriptor AllowEdit="false" AllowFilter="true" AllowNew="false">
                                                                        <Columns>
                                                                            <syncfusion: GridColumnDescriptor HeaderText="<%$ Resources:Resource, MetadataName %>"
                                                                                MappingName="LAitem" Name="LAitem" Width="200">
                                                                            </syncfusion: GridColumnDescriptor>
                                                                        </Columns>
                                                                    </TableDescriptor>
                                                                    <Appearance>
                                                                        <RecordPreviewCell CssClass="GridOffice2007BlueRecordPreview" />
                                                                        <GroupHeaderRowHeaderCell CssClass="GridOffice2007BlueGroupedColumnHeaders" />
                                                                        <ColumnHeaderCell CssClass="GridOffice2007BlueColumnHeaders" />
                                                                        <TopLeftHeaderCell CssClass="GridOffice2007BlueTopLeftHeaderCell" />
                                                                        <RowHeaderCell CssClass="GridOffice2007BlueRowHeaders" />
                                                                        <AnyRecordFieldCell CssClass="GridOffice2007BlueAnyRecord" />
                                                                        <AlternateRecordFieldCell CssClass="GridOffice2007BlueAlternateRecord" />
                                                                        <GroupIndentCell CssClass="GridOffice2007BlueGroupIndentCell" />
                                                                        <GroupCaptionCell CssClass="GridOffice2007BlueGroupCaption" />
                                                                        <GroupCaptionPlusMinusCell CssClass="GridOffice2007BluePlusMinus" />
                                                                        <FilterBarCell CssClass="GridOffice2007BlueFilterBarCell" />
                                                                        <AnySummaryCell CssClass="GridOffice2007BlueAnySummary" />
                                                                    </Appearance>
                                                                    <TableOptions ShowRowHeader="false" />
                                                                    <PageManager EnableOnDemandPaging="False" TotalRecordsCount="5" />
                                                                </syncfusion: GridGroupingControl>
                                                                <syncfusion: GridPager ID="GpGvFormularMetadataList" runat="server" PageSize="20"
                                                                    PagingControlID="GvFormularMetadataList" Skin="Office2007Blue" Width="100%" >
                                                                    <PagerItems>
                                                                        <syncfusion: NextPreviousGridPagerItem FirstPageText="&lt;&lt;"
                                                                            PreviousPageText="&lt;" ShowFirstPageButton="true" ShowLastPageButton="False"
                                                                            ShowNextPageButton="false" ShowPreviousPageButton="true" />
                                                                        <syncfusion: NumericGridPagerItem ButtonCount="3" />
                                                                        <syncfusion: NextPreviousGridPagerItem LastPageText="&gt;&gt;"
                                                                            NextPageText="&gt;" ShowFirstPageButton="false" ShowLastPageButton="true"
                                                                            ShowNextPageButton="true" ShowPreviousPageButton="false" />
                                                                    </PagerItems>
                                                                </syncfusion: GridPager>
                                                                <input type="text" id="txtFormularMDtoItem" class='textBox' />
                                                                <asp: TextBox runat="server" class='textBox' ID="txtFormularMDtoItem1" />
                                                                <input type="button" id="btnFormularMDtoItem11" class="btnAll" value="Copy"
                                                                    onmouseover="this.className='btnAll02'" onmouseout="this.className='btnAll'"
                                                                    onclick="copyToClipboard();" />
                                                            </td>
                                                        </tr>
                                                        <%-- <tr> --%>
                                                            <%--     <td align="right" colspan="2"> --%>
                                                                <%--         <table></table> --%>
                                                                <%--     </td> --%>
                                                            <%--     <td align="right" class="style5">&#160;</td> --%>
                                                            <%-- </tr> --%>
                                                    </table>

                                                </ContentTemplate>
                                            </asp: UpdatePanel>
                                        </asp: View>
                                        <asp: View ID="ViewItemFormular" runat="server">
                                            <asp: UpdatePanel runat="server" ID="UpItemThroughFormular" UpdateMode="Conditional" ChildrenAsTriggers="true">
                                                <ContentTemplate>
                                                    <table cellpadding="0" cellspacing="0" style="height:100%; width:100%;" >
                                                        <tr style="background-color:#BFDBFF;height:30px">
                                                            <td style="width:70px">
                                                                <asp: Button ID="btnItemSettingsF" runat="server" CssClass="btnAll"
                                                                    onmouseout="this.className='btnAll'" onmouseover="this.className='btnAll02'"
                                                                    Text="<%$ Resources:Resource, Settings %>"
                                                                    OnClientClick='openWinS(); return false;' CausesValidation="true" ValidationGroup="vgItem" />
                                                            </td>
                                                            <td style="width:70px">
                                                                <asp: Button ID="btnItemFormPrint" runat="server" CssClass="btnAll"
                                                                    onmouseout="this.className='btnAll'" onmouseover="this.className='btnAll02'"
                                                                    Text="Print"
                                                                    OnClientClick="ClickToPrint();" />
                                                            </td>
                                                            <td align="right">
                                                                <asp: Button ID="BtnItemFormFinish" runat="server" BorderStyle="None" CssClass="btnAll"
                                                                    onMouseout="this.className='btnAll'" onMouseover="this.className='btnAll02'"
                                                                    Text="<%$ Resources:Resource, BtnFinishText %>"
                                                                    ToolTip="<%$ Resources:Resource, BtnFinishText %>"
                                                                    OnClientClick="validateCreateUser();return false;" />
                                                            </td>
                                                            <td align="right" style="width:70px">
                                                                <asp: Button ID="BtnItemFormSave" runat="server" BorderStyle="None" CssClass="btnAll"
                                                                    onMouseout="this.className='btnAll'" onMouseover="this.className='btnAll02'"
                                                                    Text="<%$ Resources:Resource, BtnSaveText %>"
                                                                    ToolTip="<%$ Resources:Resource, BtnSaveText %>"
                                                                    OnClick="BtnItemFormularSave_Click" />
                                                            </td>
                                                            <td align="right" style="width:70px">
                                                                <asp: Button ID="BtnItemFormCancel" runat="server" BorderStyle="None" CssClass="btnAll"
                                                                    onMouseout="this.className='btnAll'" onMouseover="this.className='btnAll02'"
                                                                    Text="<%$ Resources:Resource, BtnCancelText %>"
                                                                    ToolTip="<%$ Resources:Resource, BtnCancelText %>"
                                                                    OnClick="BtnItemAddCancel_Click" />
                                                            </td>
                                                            <td style="width:10px"></td>
                                                        </tr>
                                                    </table>
                                                    <table cellpadding="25" cellspacing="0" width="100%" border="1" id="formItemBody" >
                                                        <%-- <tr style="line-height: 10px"> --%>
                                                            <%--     <td><div id="statusLineFormItem"></div></td> --%>
                                                            <%-- </tr> --%>
                                                        <tr>
                                                            <td align="left" valign="top" onkeyup="setInputFieldSize(document.activeElement);" >
                                                                <asp: PlaceHolder runat="server" ID="PhItemFormular" />

                                                                <script type="text/javascript">
                                                                    function ClickToPrint() {
                                                        var docPrint = window.open("", "Print", "menubar=no,location=no,status=no,resizable=1,toolbar=no,width=350,height=250");
                                                                    docPrint.document.open();
                                                                    docPrint.document.write('<html><head><title>Print form</title>');
                                                                        docPrint.document.write('</head><body>');
                                                                            docPrint.document.write(document.getElementById("divPrint").innerHTML);
                                                                            docPrint.document.write('</body></html>');
                                                                    docPrint.window.print();
                                                                    docPrint.close();
                                                    }

                                                                    function setInputFieldSize(inputFld) {
                                                        
                                                        var text = inputFld.value;
                                                                    //alert('Test ' + inputFld.style.width + ' ' + text.length + ' ' + inputFld.style.size);
                                                                    var textLength = text.length;

                                                                    if (textLength < 25) {
                                                                        textLength = 25;
                                                        }

                                                                    var newWidth = 5.50 * 1 + textLength * 5.50;

                                                        //inputFld.style.width = newWidth+'px';
                                                    }
                                                                </script>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </ContentTemplate>
                                            </asp: UpdatePanel>
                                        </asp: View>
                                        <asp: View ID="ViewItemReport" runat="server">
                                        </asp: View>
                                    </asp: MultiView>
                                </ContentTemplate>
                            </asp: UpdatePanel>
                            <asp: HiddenField ID="TaskApprovement" runat="server" Value="<%$ Resources:Resource, TaskApprovement %>" />
                            <%-- NEW -> Settings --%>
                            <syncfusion: Window ID="WinS" Title="Settings" runat="server" Width="600px" IconImageUrl="~/App_images/favicon.ico"
                                ClientObjectId="_winS" Height="480px" AutoFormat="Office2007 Blue" DraggingStyle="Original" InitiallyShown="True">
                                <table style="border:none;background-color:#BFDBFF; width:100%;">
                                    <tr>
                                        <td>
                                            <syncfusion: TabStrip ID="tsMD" runat="server" Width="100%" AutoFormat="Office2007 Blue"
                                                AutoPostBack="false" MultiPageID="mpMD" >
                                                <Items>
                                                    <syncfusion: TabStripItem Text="Settings" PageViewID="p1" Selected="True" ID="tsiMDp1" />
                                                    <syncfusion: TabStripItem Text="Structure" PageViewID="p2" ID="tsiMDp2" />
                                                    <syncfusion: TabStripItem Text="Duplicates" PageViewID="p3" ID="tsiMDp3" />
                                                </Items>
                                            </syncfusion: TabStrip>
                                        </td>
                                        <td align="right">
                                            <%-- <asp: Button runat="server" ID="Button4" onmouseover="this.className='btnAll02'" --%>
                                            <%--             CssClass="btnAll" onclick="settingsWinClose_click"  --%>
                                            <%--             onmouseout="this.className='btnAll'" OnClientClick="_winFormular.Close()"  --%>
                                            <%--             Text="<%$ Resources:Resource, lblOk %>" /> --%>
                                            <input type="button" value="Ok" class="btnAll" onclick="_winS.Close()" onmouseout="this.className='btnAll'" onmouseover="this.className='btnAll02'" />
                                        </td>
                                    </tr>
                                </table>

                                <syncfusion: MultiPage ID="mpMD" runat="server" Width="100%" Height="100%" EnableXHTML="False">
                                    <%--  Settings --%>
                                    <syncfusion: PageView runat="server" ID="p1" Width="100%" Height="100%">
                                        <table style="height:360px" >
                                            <tr style="height:30px">
                                                <td>
                                                    <asp: Literal ID="Literal3" runat="server" Text="<%$ Resources:Resource, ChildrenCode %>" />
                                                </td>
                                                <td>
                                                    <asp: TextBox ID="txtCCode" runat="server" CssClass="txtBox" Width="150px" />
                                                </td>
                                            </tr>
                                            <tr style="height:30px">
                                                <td>
                                                    <asp: Literal ID="lUF" runat="server" Text="<%$ Resources:Resource, ChildrenFormular %>" />
                                                </td>
                                                <td>
                                                    <asp: DropDownList ID="DdlUseFormular" runat="server" CssClass="formularCbBox"></asp: DropDownList>
                                                </td>
                                            </tr>
                                            <tr style="height:30px">
                                                <td colspan="2">
                                                    <asp: CheckBox ID="CbSYfileFormular" runat="server" Checked="true" Text="<%$ Resources:Resource, LblFolder %>" />
                                                </td>
                                            </tr>
                                            <tr style="height:30px">
                                                <td colspan="2">
                                                    <asp: RadioButtonList ID="RbAddItemCType" runat="server" Height="25px" RepeatDirection="Horizontal">
                                                        <asp: ListItem Selected="True" Text="<%$ Resources:Resource, BtnItem %>" Value="0"></asp: ListItem>
                                                        <asp: ListItem Text="<%$ Resources:Resource, BtnItemAttachment %>" Value="1"></asp: ListItem>
                                                        <asp: ListItem Text="<%$ Resources:Resource, BtnItemAttachmentItem %>" Value="2"></asp: ListItem>
                                                        <asp: ListItem Text="<%$ Resources:Resource, Structure %>" Value="3"></asp: ListItem>
                                                    </asp: RadioButtonList>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </syncfusion: PageView>

                                    <%--  Structure --%>
                                    <syncfusion: PageView runat="server" ID="p2" Width="100%" Height="100%">
                                        <table style="height:360px;" >
                                            <tr>
                                                <%-- <td style="border: 1px solid;width: auto;vertical-align:top"> --%>
                                                    <td style="width: auto;vertical-align:top" >
                                                        <input type="checkbox" id="fld_incl_parent_struct" name="fld_incl_parent_struct" checked />
                                                        <label for="fld_incl_parent_struct">Include current Item at selected destination(s)</label>
                                                        <br />
                                                        <input type="checkbox" id="fld_incl_children_struct" name="fld_incl_children_struct" />
                                                        <label for="fld_incl_children_struct">Include children at selected destination(s).</label>
                                                    </td>
                                            </tr>
                                            <tr>
                                                <td style="width: auto;">
                                                    <syncfusion: TreeView ID="TvStructureItemBind" runat="server" ExpandTransition="Fade"
                                                        AutoFormat="Outlook" BorderColor="Gray" BorderStyle="None"
                                                        BorderWidth="1px" Height="350px" DragAndDropEnabled="false" EditNode="False"
                                                        CssClass="TreeView" AutoPostBackOnNodeSelect="False" EnableCallbacks="True"
                                                        OnNodeExpanded="onExpandNode_click" ClientSideOnNodeExpand="onClientNodeExpand(this)"
                                                        ClientObjectId="TvStructureItemBind_obj" ClientSideOnNodeCheckChanged="cChangedItemBind(this)" >
                                                        <DataBindings>
                                                            <syncfusion: TreeViewItemBinding ValueField="IDVitemChild" ExpandMode="ServerSideCallback" ShowCheckBox="true" />
                                                        </DataBindings>
                                                    </syncfusion: TreeView>
                                                </td>
                                            </tr>
                                        </table>
                                    </syncfusion: PageView>
                                    <%--  Duplicates --%>
                                    <syncfusion: PageView runat="server" ID="p3" Width="100%" Height="100%">
                                        <table style="height:360px" >
                                            <tr>
                                                <td style="width: auto;vertical-align:top">
                                                    <input type="checkbox" id="fld_incl_parent_dupli" name="fld_incl_parent_dupli" checked />
                                                    <label for="fld_incl_parent_dupli">Include current Item at selected destination(s)</label>
                                                    <br />
                                                    <input type="checkbox" id="fld_incl_children_dupli" name="fld_incl_children_dupli" />
                                                    <label for="fld_incl_children_dupli">Include children at selected destination(s).</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <syncfusion: TreeView ID="TvStructureAutoBind" runat="server" ExpandTransition="Fade"
                                                        AutoFormat="Outlook" BorderStyle="None" Height="350px" DragAndDropEnabled="false"
                                                        EditNode="False" AutoPostBackOnNodeSelect="False" EnableCallbacks="True"
                                                        ClientObjectId="TvStructureAutoBind_obj"
                                                        OnNodeExpanded="onExpandNode_click" ClientSideOnNodeCheckChanged="cChangedAutoBind(this)">
                                                        <DataBindings>
                                                            <syncfusion: TreeViewItemBinding ValueField="IDVitemChild" ExpandMode="ServerSideCallback" ShowCheckBox="true" />
                                                        </DataBindings>
                                                    </syncfusion: TreeView>
                                                </td>
                                            </tr>
                                        </table>
                                    </syncfusion: PageView>
                                </syncfusion: MultiPage>
                            </syncfusion: Window>
                            <asp: UpdatePanel ID="UpWorkflow" runat="server" UpdateMode="Conditional">
                                <ContentTemplate>
                                    <syncfusion: Window ID="WinWorkflow" Title="" runat="server" Width="540px"
                                        Height="440px" AutoFormat="Office2007 Blue" IconImageUrl="~/App_images/favicon.ico"
                                        ClientObjectId="_winWorkflow" DraggingStyle="Original" PersistDuringAsyncPostBack="true" >
                                        <asp: Panel ID="Panel3" runat="server" >
                                            <table cellpadding="0" cellspacing="0" width="500px" style="height:360px; margin:10px">
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal2" runat="server"
                                                            Text="<%$ Resources:Resource, LblCurrentWorkflow %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <asp: DropDownList ID="DdlWFItemList" runat="server" CssClass="txtBox" Width="300px" />
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal32" runat="server" Visible="false"
                                                            Text="<%$ Resources:Resource, LblActivityMDlist %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <Syncfusion: MultiSelectionDropDown ID="DdlAMD" runat="server" Visible="false"
                                                            AutoFormat="Office2007 Blue" Width="300px" />
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal12" runat="server" Text="<%$ Resources:Resource, LblSelectedPerformer %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <asp: DropDownList ID="DdlPerformer" runat="server" CssClass="txtBox"

                                                            DataTextFormatField="{COtree}" Width="300px" />
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px; text-decoration:underline" valign="top">
                                                        <asp: Literal ID="Literal17" runat="server" Text="<%$ Resources:Resource, LblPerformerTimeFrame %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal29" runat="server" Text="<%$ Resources:Resource, LblPlannedEndDate %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <Syncfusion: MultiSelectionDropDown ID="DdlAPFinishP" runat="server" AutoFormat="Office2007 Blue"
                                                            Visible="False" Width="150px" />

                                                        <Syncfusion: DropDownCalendarControl ID="DateAPFinishP" runat="server"
                                                            AutoFormat="Office2007 Blue" BorderColor="#999999" BorderStyle="None"
                                                            ClientObjectId="dateAPFinishP" CustomFormat="dd/MM/yyyy" Format="CustomString"
                                                            ShowDropDown="true" Width="150px">
                                                            <calendarstyle bordercolor="Gray" borderstyle="Solid" borderwidth="1px" />
                                                        </Syncfusion: DropDownCalendarControl>
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal31" runat="server" Visible="false"
                                                            Text="<%$ Resources:Resource, LblAppointmentPeriod %>"></asp: Literal>
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <Syncfusion: NumericTextBox ID="TxtAppointmentPeriod" runat="server" Visible="false"
                                                            AutoFormat="Office2007 Blue" Font-Names="Trebuchet MS" Font-Size="12px"
                                                            Value="0" Width="150px" DecimalDigits="0" ShowButtons="false" />
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal1" runat="server" Text="<%$ Resources:Resource, LblItemStatus %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <asp: RadioButtonList ID="rbTaskStatus" runat="server" RepeatDirection="Horizontal">
                                                            <asp: ListItem Text="<%$ Resources:Resource, LblNotDone %>" Selected="True"></asp: ListItem>
                                                            <asp: ListItem Text="<%$ Resources:Resource, LblDone %>"></asp: ListItem>
                                                        </asp: RadioButtonList>
                                                    </td>
                                                </tr>

                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal22" runat="server" Visible="false"
                                                            Text="<%$ Resources:Resource, LblPlannedEndDate %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <Syncfusion: MultiSelectionDropDown ID="DdlTPFinishP" runat="server" Visible="false"
                                                            AutoFormat="Office2007 Blue" Width="150px" />
                                                        <Syncfusion: DropDownCalendarControl ID="DateTPFinishP" runat="server"
                                                            AutoFormat="Office2007 Blue" BorderColor="#999999" BorderStyle="None"
                                                            ClientObjectId="dateTPFinishP" CustomFormat="dd/MM/yyyy" Format="Short"
                                                            ShowDropDown="true" Visible="false" Width="150px"  >
                                                            <calendarstyle bordercolor="Gray" borderstyle="Solid" borderwidth="1px" />
                                                        </Syncfusion: DropDownCalendarControl>
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="top">
                                                        <asp: Literal ID="Literal24" runat="server" Visible="false"
                                                            Text="<%$ Resources:Resource, LblActivityTimeFrame %>" />
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="width:140px" valign="top">
                                                    </td>
                                                    <td style="width:340px" valign="top">
                                                        <asp: Label ID="WinWorkFlow_ErrorText" runat="server" Text="" />
                                                    </td>
                                                </tr>
                                                <tr style="height:30px">
                                                    <td style="width:140px" valign="middle">
                                                    </td>
                                                    <td style="width:340px" valign="middle" align="right">
                                                        <table class="grid" cellpadding="0" cellspacing="0" style="width:150px">
                                                            <tr>
                                                                <td>
                                                                    <input type="button" class="btnAll" onclick="doSave(this)"
                                                                        value="Ok" onmouseout="this.className='btnAll'"
                                                                        onmouseover="this.className='btnAll02'" />
                                                                </td>
                                                                <td>
                                                                    <input type="button" class="btnAll" onclick="closeWinWorkflow()"
                                                                        value="Cancel" onmouseout="this.className='btnAll'"
                                                                        onmouseover="this.className='btnAll02'" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </asp: Panel>
                                    </syncfusion: Window>
                                </ContentTemplate>
                            </asp: UpdatePanel>
                            <%-- Metadata user values --%>
                            <syncfusion: Window ID="WinMetadataValue" runat="server" Height="100%"
                                ClientObjectId="_winMetadataValue" AutoFormat="Office2007 Blue"
                                Width="800px" IconImageUrl="~/App_images/favicon.ico"  >
                                <asp: UpdatePanel UpdateMode="Conditional" runat="server" ID="UpMetadataValue"  >
                                    <ContentTemplate>
                                        <asp: Panel ID="PnlMetadataValue" runat="server">
                                            <table border="0" cellpadding="0" cellspacing="0" style="margin:auto;margin-left:10px;margin-top:10px;margin-right:10px;">
                                                <tr>
                                                    <td id="ExistingValuesCell" >Existing Values</td>
                                                    <td align="right" width="5px">&nbsp;</td>
                                                    <td align="right" colspan="100%" >
                                                        <select name="existingValues" id="existingValues" class="txtBox"
                                                            size="4" style="width:100%;height: 135px;" onclick="onMDValuesRowClick(this)" ></select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="right" width="145" height="35px" >
                                                        <i>Value</i>
                                                    </td>
                                                    <td align="right" width="5px">&nbsp;</td>
                                                    <td align="left" >
                                                        <div >
                                                            <input type="text" id="_DataTypePlaceholder" class="txtBox" id="valueHolder" disabled="disabled" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="right" height="60px" width="145">
                                                        <div >Description</div>
                                                    </td>
                                                    <td align="right" height="60px" width="5px">&nbsp;</td>
                                                    <td align="left" height="60px" width="650">
                                                        <textarea id="TxtMDValueDE" class="txtBox" rows="2" cols="20" style="height:40px;width:600px;" disabled="disabled"></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="right" width="145" height="60px">
                                                        <div >Remark</div>
                                                    </td>
                                                    <td align="right" width="5px" height="60px">&nbsp;</td>
                                                    <td align="left" width="650" height="60px">
                                                        <textarea id="TxtMDValueRE" class="txtBox" rows="2" cols="20" style="height:40px;width:600px;" disabled="disabled"></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="right" height="25px" width="145">&nbsp;</td>
                                                    <td align="right" width="5px">&nbsp;</td>
                                                    <td align="left">
                                                        <input type="checkbox" id="CbMetadataDefaultValue" value="Default value" disabled="disabled" />
                                                        <label for="CbMetadataDefaultValue">Default Value</label>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table id="buttonsTable" cellpadding="1" cellspacing="0" border="0" style="margin:auto;margin-left:20px;margin-top:20px;margin-right:20px;">
                                                <tr>
                                                    <td></td>
                                                    <td width="100%"><div></div></td>
                                                    <td>
                                                        <input id="btnMDvalues_New" type="button" value="New"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            onclick="btnPressed_NEW();" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Edit" type="button" value="Edit"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            onclick="btnPressed_Edit()" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_WF" type="button" value="Workflow"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            style="display:none;"
                                                            onclick="btnPressed_Save(1)" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Finish" type="button" value="Finish"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            style="display:none;" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Save" type="button" value="Save"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            style="display:none;"
                                                            onclick="btnPressed_Save(0)" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Delete" type="button" value="Delete"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Withdraw" type="button" value="Withdraw"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            style="display:none;" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Close" type="button" value="Close"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            onclick="btnPressed_Close()" />
                                                    </td>
                                                    <td>
                                                        <input id="btnMDvalues_Cancel" type="button" value="Cancel"
                                                            class="btnAll" onmouseover="this.className='btnAll02'"
                                                            onmouseout="this.className='btnAll'"
                                                            style="display:none;"
                                                            onclick="btnPressed_Cancel()" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </asp: Panel>
                                    </ContentTemplate>
                                </asp: UpdatePanel>
                            </syncfusion: Window>
                        </form>
                        <%-- </asp: Panel> --%>
                </body>
            </html>


