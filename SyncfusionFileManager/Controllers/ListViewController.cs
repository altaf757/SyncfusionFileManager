using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace SyncfusionFileManager.Controllers
{
    public class ListViewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }


    //protected void Page_Load(object sender, EventArgs e)
    //{
    //    // Tole bom moral razdelati. Tale je za file download.
    //    if (Request["args"] != null)
    //    {
    //        var args = Request["args"].ToString();
    //        var passedArgs = args.Split('|');
    //        var parent_IDVmData = IDtoInt(passedArgs[0]);
    //        var _key = "grid_" + passedArgs[0]; // Taprvi je krovni IDVmData, ostali so kolone grida.

    //        var IDVitem = IDtoInt(Request["IDVitem"]);
    //        var grid = (Dictionary<int, List<object>>)Session[_key];

    //        if (grid == null)
    //        {
    //            grid = new Dictionary<int, List<object>>();
    //            Session[_key] = grid;
    //        }
    //        //@TODO Na tem mestu spremenimo vir metapodatkov.
    //        var colData = (List<List<string>>)Session["_gridColData_" + passedArgs[0]];
    //        var mdList = ((DataTable)Cache["MetadataList"]);

    //        var mdTable = initMetadataValuesTable();
    //        var columnIdx = 1;

    //        var columnData = (List<List<string>>)Session["_gridColData_" + parent_IDVmData];
    //        //This means to look at the first column height which represent number of rows and we add new row.
    //        var rowIdx = (IDVitem != 0) ? grid[IDtoInt(passedArgs[1])].Count + 1 : 0;
    //        for (var i = 1; i < passedArgs.Length - 1 /* Zadnji je prazen. */; i++)
    //        {
    //            var currColumnIDVmData = HelperMethods.IDtoInt(passedArgs[i]);
    //            var _reqVar = _key + "_" + currColumnIDVmData;
    //            var _reqVar_split = _reqVar.Split('_');

    //            // var column_IDVmData = _reqVar.Split('_')[2];
    //            var IDVmDataColumn = IDtoInt(_reqVar_split[_reqVar_split.Length - 1]);
    //            var IDtypemData = HelperMethods.IDtoInt(colData[i - 1][2]);
    //            var IDtoolBox = HelperMethods.IDtoInt(colData[i - 1][3]);
    //            var id = HelperMethods.IDtoInt(passedArgs[i]);
    //            if (!grid.ContainsKey(id))
    //            {
    //                grid.Add(id, new List<object>());
    //            }

    //            if (IDtypemData == (int)ID_TYPE_MDATA.IMAGE)
    //            {
    //                var fileKey = Request["file_" + _reqVar];
    //                var parsedPath = fileKey.Split('\\');
    //                var file = Request.Files[parsedPath[parsedPath.Length - 1]];
    //                grid[id].Add(file);
    //            }
    //            else
    //            {
    //                var value = Request[_reqVar];
    //                grid[id].Add(value);
    //            }
    //            if (IDVitem != 0)
    //                writeMetadataRow(parent_IDVmData, IDVmDataColumn, IDtypemData, IDtoolBox, 0, rowIdx, Request[_reqVar], mdTable, dataLayer);
    //        }
    //        if (IDVitem != 0)
    //            dataLayer.appendGridRow(IDVitem, parent_IDVmData, mdTable);
    //        // Response.Write(response);
    //        Response.End();
    //    }

    //    if (Request["_target"] != null && Request["_target"] == "mdItem")
    //    {
    //        var IDVtreeItemParent = Request["IDVtreeItem"] != null ? IDtoInt(Request["IDVtreeItem"]) : 0;
    //        var _IDVmDataParent = Request["_IDVmData_p"] != null ? HelperMethods.IDtoInt(Request["_IDVmData_p"]) : 0;

    //        // var dt = dataLayer.getTreeItemChildren(IDVtreeItemParent, 0);
    //        var dt = dataLayer.getMDitemTreeviewSublevel(_IDVmDataParent, IDVtreeItemParent);
    //        if (dt.Rows.Count > 0)
    //        {
    //            var _rows = dt.Rows;
    //            var i = 0;
    //            var items = "[";
    //            for (; i < _rows.Count; i++)
    //            {
    //                var _row = _rows[i];
    //                var _IDVitem = _row["IDVitem"].ToString();
    //                var _COtree = _row["COtree"].ToString();//.Trim();
    //                var _IDVtreeItem = _row["IDVtreeItem"].ToString();
    //                var _jsonRow = "{ \"IDVitem\":\"" + _IDVitem + "\",\"COtree\":\"" + _COtree +
    //                               "\",\"IDVtreeItem\":\"" + _IDVtreeItem + "\"}";
    //                if (i < _rows.Count - 1)
    //                    items = items + _jsonRow + ",";
    //                else
    //                    items = items + _jsonRow;
    //            }
    //            items = items + "]";

    //            Response.Write(items);
    //            Response.End();
    //        }
    //        else
    //        {
    //            Response.Write("[]");
    //            Response.End();
    //        }
    //    }
    //    if (Request["_target"] != null && Request["_target"] == "mdattrs")
    //    {
    //        var LAitem = Request["LAitem"];
    //        var md_dt = (DataTable)Cache["MetadataList"];
    //        var _rows = md_dt.Select("LAitem='" + LAitem + "'");

    //        var response = "HTTP/1.1 500 Bad bad";
    //        if (_rows.Length == 1)
    //        {
    //            var _IDVmData = (int)_rows[0][9];
    //            var _IDtypemData = (int)_rows[0][18];
    //            var _IDtoolBox = (int)_rows[0][6];
    //            var _DImData = HelperMethods.IDtoInt(_rows[0]["DImData"].ToString());
    //            var _UAdata = _rows[0][2].ToString();
    //            var _UAchange = _rows[0][3].ToString();

    //            var dict = new Dictionary<string, string>();
    //            dict.Add("IDVmData", _IDVmData.ToString());
    //            dict.Add("IDtypemData", _IDtypemData.ToString());
    //            dict.Add("IDtoolBox", _rows[0][6].ToString());
    //            dict.Add("LAitem", _rows[0][0].ToString());
    //            dict.Add("UAdata", _UAdata);
    //            dict.Add("UAchange", _UAchange);

    //            if (_IDtypemData == (int)ID_TYPE_MDATA.CALCULATED)
    //            {
    //                var formula = _rows[0]["CLmData"].ToString();
    //                formula = formula.Replace("[", "");
    //                var tokens = formula.Split(']');
    //                var CLmData = "";
    //                for (var i = 0; i < tokens.Length; i++)
    //                {
    //                    var aToken = tokens[i];

    //                    var sql = "select IDVmData from MD_0A0B00 where LAitem='" + aToken + "'";
    //                    var result = dataLayer.executeQuery(sql);
    //                    if (result.Rows.Count == 1)
    //                    {
    //                        aToken = "txt" + result.Rows[0]["IDVmData"].ToString();
    //                    }

    //                    CLmData = CLmData + "[" + aToken + "]";
    //                }
    //                dict.Add("CLmData", CLmData);
    //            }

    //            response = serialize(dict);
    //            var placeHolder = "##ctrl##";
    //            var control = ", \"control\": \"" + placeHolder + "\"";
    //            //Tukaj se doda html koda v json objekt za določeno kontrolo.
    //            if (_IDtoolBox == (int)IDtoolbox.COMBOX
    //                && _IDtypemData != (int)ID_TYPE_MDATA.ITEM)
    //            {
    //                var dt = dataLayer.getMDvalues(_IDVmData);
    //                response = createJSONarray(dt, response);
    //            }
    //            else if (_IDtypemData == (int)ID_TYPE_MDATA.GRID)
    //            {
    //                var columns = createMDgridColumnInfo(_IDVmData, dataLayer);
    //                Session["_gridColData_" + _IDVmData] = columns;
    //                var insertLocation = response.LastIndexOf("}");
    //                var sb = new StringBuilder(response);
    //                var columnsText = toJSON(columns, dataLayer);
    //                sb.Insert(insertLocation, " , " + columnsText + " ");
    //                response = sb.ToString();

    //                // Test 
    //                var data = new Dictionary<int, List<object>>();
    //                var gridTable = new FormularMaker(Session["glDtFrm"].ToString()).createTable(_IDVmData.ToString(), columns, data, true, false, dataLayer);
    //                control = control.Replace(placeHolder, gridTable);
    //            }
    //            else if (_IDtypemData == (int)ID_TYPE_MDATA.ITEM)
    //            {
    //                var dtTest = dataLayer.getMDvalues(_IDVmData);

    //                if (_IDtoolBox == (int)IDtoolbox.COMBOX ||
    //                    _IDtoolBox == (int)IDtoolbox.LISTBOX)
    //                {

    //                    var sql = "SELECT t1.IDVtreeItem as _id, t2.IDVitem, t2.COtree as _value " +
    //                          "FROM dbo.IT_0A0B00 t2 " +
    //                          "INNER JOIN dbo.IT_0D0B0A t1 ON t2.IDitem = t1.IDitem " +
    //                          "WHERE t2.SYpreVer = 0 " +
    //                          "AND t1.IDVtreeItemParent = ( SELECT t1.IDVtreeItem " +
    //                          "FROM dbo.MD_0B0B00 t1 " +
    //                          "WHERE IDVmData = " + _IDVmData + ")";
    //                    if (_DImData == 0)
    //                    {
    //                        sql = "SELECT t1.IDVtreeItem as _id, t2.IDVitem, t2.COtree as _value " +
    //                              "FROM	MD_0B0B00 t1 " +
    //                              "INNER JOIN IT_0A0B00 t2 on t2.IDVitem = t1.valueIDVitem " +
    //                              "WHERE t1.IDVmData = " + _IDVmData;
    //                    }

    //                    var dt = dataLayer.executeQuery(sql);
    //                    // var dt = dtTest;
    //                    if (dt.Rows.Count > 0)
    //                    {
    //                        response = HelperMethods.createJSONarray(dt, response);
    //                    }
    //                    else
    //                    {
    //                        response = response.Substring(0, response.Length - 1) + ",\"values\":[]}";
    //                    }
    //                }
    //                else if (_IDtoolBox == (int)IDtoolbox.TREEVIEW)
    //                {
    //                    var dt = (DataTable)null;
    //                    // if (_DImData==0) {
    //                    //     dt=dataLayer.getMDitemTreeviewSublevel(_IDVmData, 0);
    //                    // }
    //                    // else {
    //                    //     dt = dataLayer.getMDvalues(_IDVmData);
    //                    // }
    //                    dt = dataLayer.getMDitemTreeviewSublevel(_IDVmData, 0);
    //                    if (dt.Rows.Count == 1)
    //                    {
    //                        var IDVitem = (int)dt.Rows[0]["IDVitem"];
    //                        var COtree = dt.Rows[0]["COtree"].ToString();
    //                        var IDVtreeItem = dt.Rows[0]["IDVtreeItem"].ToString();
    //                        var insertLocation = response.LastIndexOf("}");
    //                        var itemJSON = " , \"item\":{\"IDVitem\":\"##IDVitem##\" , \"COtree\":\"##COtree##\",\"IDVtreeItem\":\"##IDVtreeItem##\" }";
    //                        itemJSON = itemJSON.Replace("##IDVitem##", IDVitem.ToString());
    //                        itemJSON = itemJSON.Replace("##COtree##", COtree);
    //                        itemJSON = itemJSON.Replace("##IDVtreeItem##", IDVtreeItem);

    //                        response = response.Insert(insertLocation, itemJSON);
    //                    }
    //                }
    //            }
    //            else
    //            {
    //                control = ", \"control\": \"" + FormularMaker.createControlString(_IDVmData.ToString(), _rows[0][0].ToString(), _IDVmData, _IDtypemData, _IDtoolBox, "", dataLayer) + "\"";

    //                // IMPORTANT!!! This removes faultly json format produced by c#, control generation
    //                //will be handled by client js.
    //                if (_IDtypemData == 1 || _IDtypemData == 4 || _IDtypemData == 6 || _IDtypemData == 7 ||
    //                    _IDtypemData == 9 || _IDtypemData == 10)
    //                {
    //                    control = ", \"control\": \"\"";
    //                }
    //            }
    //            var index = response.LastIndexOf('}');
    //            // response = response.Substring(0,index) + control + "}";   
    //        }
    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "mdValues")
    //    {
    //        if (Session["item_IDVitem"] == null || (int)Session["item_IDVitem"] == 0)
    //        {
    //            // To pomeni, da item ni shranjen in nimamo kljuca za shranit uporabniske md vrednosti.
    //            var dict = new Dictionary<string, string>();
    //            dict.Add("error", "Item not saved");
    //            Response.Write(HelperMethods.serialize(dict));
    //            Response.End();
    //        }
    //        else if (Request["_IDVmData"] != null || Request["_IDVmData"] != "")
    //        {
    //            var IDVmData = Request["_IDVmData"];
    //            var IDVitem = (int)Session["item_IDVitem"];
    //            IDVmData = IDVmData.Substring(3);
    //            var result = dataLayer.getAllMDvalues(HelperMethods.IDtoInt(IDVmData), IDVitem);

    //            //Tole še ne vem, ali bo treba preverjat.
    //            if (result.Rows.Count > 0)
    //            {
    //                // var list = (List<Dictionary<string,object>>) Session["usrValue_" + IDVmData];
    //                var _resultDict = HelperMethods.toDictionary(result.Rows);
    //                var resultDict = HelperMethods.tableRowsToDictionary(result);
    //                Session["usrValue_" + IDVmData] = resultDict;
    //                Response.Write(HelperMethods.serialize(resultDict));
    //            }
    //            Response.End();
    //        }
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "usrMDValSave")
    //    {
    //        if (Request["_data"] != null && Request["_data"] != "")
    //        {
    //            var jsonString = Request["_data"];
    //            // var result = HelperMethods.fromJSON(jsonString);
    //            var _json = HelperMethods.fromJSON(jsonString);
    //            var _IDVmData = HelperMethods.IDtoInt(Request["_IDVmData"]);
    //            var list = (List<Dictionary<string, string>>)Session["usrValue_" + _IDVmData];
    //            // if (list==null) {
    //            //     list = new List<Dictionary<string, object>>();
    //            //     Session.Add("usrValue_" + _IDVmData, list);
    //            // }    

    //            // var _IDVitem = HelperMethods.IDtoInt(Session["item_IDVitem"].ToString());
    //            var _IDVitem = (int)Session["item_IDVitem"];
    //            //IDtypemData
    //            var IDtypemDataSql = "select t1.IDtypemData " +
    //                                      "from MD_0A0B00 t1 " +
    //                                      "where t1.IDVmData = " + _IDVmData;
    //            var _result = dataLayer.executeQuery(IDtypemDataSql);
    //            var IDtypemData = (int)_result.Rows[0][0];
    //            /////////////////////////////////////////////////////////////////////////////////
    //            var index = HelperMethods.IDtoInt(_json["index"].ToString());
    //            var record = list[index];
    //            var syDefault = Convert.ToInt32(_json["isDef"].ToString());
    //            var DEtext = _json["deTxt"].ToString();
    //            var REtext = _json["reTxt"].ToString();
    //            var isApproved = HelperMethods.IDtoInt(_json["approved"].ToString());
    //            var isEdit = _json["state"].ToString() == "2" ? 1 : 0;

    //            var IDVvalueVmData = 0;
    //            if (record["IDVvalueVmData"].ToString() != "")
    //            {
    //                IDVvalueVmData = HelperMethods.IDtoInt(record["IDVvalueVmData"].ToString());
    //            }

    //            var IDVdataItem = 0;
    //            if (record["IDVdataItem"].ToString() != "")
    //            {
    //                IDVdataItem = HelperMethods.IDtoInt(record["IDVdataItem"].ToString());
    //            }

    //            if (IDVvalueVmData == 0 && IDVdataItem == 0)
    //            {
    //                IDVvalueVmData = HelperMethods.IDtoInt(record["_id"].ToString());
    //            }
    //            else if (IDVdataItem != 0 && IDVvalueVmData == 0)
    //            {
    //                IDVdataItem = HelperMethods.IDtoInt(record["_id"].ToString());
    //            }
    //            object mdValue = _json["value"];

    //            var _IDVdataItem = dataLayer.createUserMetadataValue(_IDVitem, _IDVmData, IDtypemData, DEtext, REtext,
    //            syDefault, isApproved, isEdit, IDVvalueVmData, IDVdataItem, mdValue);

    //            var result = dataLayer.getAllMDvalues(_IDVmData, _IDVitem);

    //            //Tole še ne vem, ali bo treba preverjat.
    //            if (result.Rows.Count > 0)
    //            {
    //                // var list = (List<Dictionary<string,object>>) Session["usrValue_" + IDVmData];
    //                // var resultDict = HelperMethods.toDictionary(result.Rows);
    //                var resultDict = HelperMethods.tableRowsToDictionary(result);
    //                Session["usrValue_" + _IDVmData] = resultDict;
    //                Response.Write(HelperMethods.serialize(resultDict));
    //            }
    //            Response.End();
    //        }
    //    }
    //    else if (Request.QueryString["id"] != null)
    //    {
    //        ShowTheFile(Convert.ToInt32(Request.QueryString["id"]));
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "saveItem_TEST")
    //    {
    //        var reqData = Request["dataItem"];
    //        var dict = HelperMethods.fromJSON(reqData);
    //        var s = "";
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "saveItem")
    //    {
    //        var reqData = Request["dataItem"];
    //        var dict = HelperMethods.fromJSON(reqData);

    //        var keyList = new List<string>(dict.Keys);
    //        for (var i = 0; i < keyList.Count; i++)
    //        {
    //            var _key = keyList[i];
    //            if (_key.StartsWith("grid"))
    //            {
    //                var grid = Session[dict[_key].ToString()];
    //                dict[_key] = grid;
    //            }
    //        }
    //        var fileKeys = Request.Files.Keys;
    //        var valueKeys = dict.Keys.ToList();
    //        for (var i = 0; i < fileKeys.Count; i++)
    //        {
    //            var _fKey = fileKeys[i];
    //            for (var j = 0; j < valueKeys.Count; j++)
    //            {
    //                var _vKey = valueKeys[j];

    //                if (_fKey.StartsWith(_vKey))
    //                {
    //                    dict[_vKey] = Request.Files[_fKey];
    //                }
    //            }
    //        }
    //        var mdValuesTable = createMetadataValuesTable(dict, (DataTable)Cache["MetadataList"], dataLayer);
    //        var node = (TreeViewNode)Session["SelectedNode"];
    //        var IDVitem = (int)Session["item_IDVitem"];
    //        var IDVtreeItem = (int)Session["item_IDVtreeItem"];
    //        var IDVitemParent = HelperMethods.IDtoInt(node.Value); ;
    //        var IDVtreeItemParent = HelperMethods.IDtoInt(node.ID);
    //        var approved = HelperMethods.IDtoInt(dict["fld_taskStatus"].ToString());
    //        var NOlevel = 1;
    //        var posType = HelperMethods.IDtoInt(dict["fld_posType"].ToString());
    //        var VIinfo = 0;
    //        var IsInternal = 0;
    //        var SYfile = HelperMethods.IDtoInt(dict["fld_SYfile"].ToString());
    //        // SYfile = 0;
    //        var SYnodeType = 0;
    //        var IDVwfl = HelperMethods.IDtoInt(dict["fld_IDVwfl"].ToString());
    //        var COtree = "";

    //        var fld_Strut = dict["fld_strut"] != null ? dict["fld_strut"].ToString() : "";
    //        var fld_Dupli = dict["fld_dupli"] != null ? dict["fld_dupli"].ToString() : "";

    //        var resultItem = dataLayer.writeNewItem(IDVitem, IDVtreeItem, IDVitemParent,
    //                                                                    IDVtreeItemParent, approved, NOlevel, posType, VIinfo, IsInternal,
    //                                                                        SYfile, SYnodeType, IDVwfl, COtree, mdValuesTable);

    //        var fld_incl_parent_struct = HelperMethods.IDtoInt(dict["fld_incl_parent_struct"].ToString());
    //        var fld_incl_children_struct = HelperMethods.IDtoInt(dict["fld_incl_children_struct"].ToString());

    //        if (fld_Strut != "" && fld_incl_parent_struct == 1)
    //        {
    //            var table = HelperMethods.initIdListTable();
    //            var idArr = fld_Strut.Split('|');

    //            for (var i = 0; i < idArr.Length - 1; i++)
    //            {
    //                var _id = IDtoInt(idArr[i]);
    //                HelperMethods.writeIdListRow(0, _id, "", table);
    //            }
    //            //call sp
    //            dataLayer.createMultipleItemInserts((int)resultItem["IDVitem"], (int)resultItem["IDVtreeItem"], table);
    //        }

    //        var fld_incl_parent_dupli = HelperMethods.IDtoInt(dict["fld_incl_parent_dupli"].ToString());
    //        var fld_incl_children_dupli = HelperMethods.IDtoInt(dict["fld_incl_children_dupli"].ToString());

    //        if (fld_Dupli != "" && fld_incl_parent_dupli == 1)
    //        {
    //            var table = HelperMethods.initIdListTable();
    //            var idArr = fld_Dupli.Split('|');

    //            for (var i = 0; i < idArr.Length - 1; i++)
    //            {
    //                var _id = IDtoInt(idArr[i]);
    //                HelperMethods.writeIdListRow(0, _id, "", table);
    //            }
    //            //call sp
    //            dataLayer.createMultipleItemCopy((int)resultItem["IDVtreeItem"], table);
    //        }

    //        Dictionary<string, object> resultTask = null;
    //        if (resultItem != null && resultItem.Count > 0)
    //        {

    //            if (fld_Strut != "" && fld_incl_children_struct == 1)
    //            {
    //                dataLayer.saveProperty(IT_0D0B0B_SYintKey_Structure, (int)resultItem["IDVtreeItem"], fld_Strut);
    //            }
    //            var linkedRes = dataLayer.createLinkedNodes((int)resultItem["IDVitem"], IDVitemParent, (int)resultItem["IDVtreeItem"],
    //                    IDVtreeItemParent, IT_0D0B0B_SYintKey_Structure);

    //            if (fld_Dupli != "" && fld_incl_children_dupli == 1)
    //            {
    //                dataLayer.saveProperty(IT_0D0B0B_SYintKey_Duplicates, (int)resultItem["IDVtreeItem"], fld_Dupli);
    //            }
    //            var _dt = dataLayer.getPropertyByIDVtreeItem(IDVtreeItemParent, IT_0D0B0B_SYintKey_Duplicates);

    //            var IDVtreeItemParentValue = "";
    //            if (_dt.Rows.Count == 1)
    //            {
    //                IDVtreeItemParentValue = _dt.Rows[0][0].ToString();
    //            }
    //            var IDVtreeItemParentList = !string.Equals(IDVtreeItemParentValue, "")
    //                ? IDVtreeItemParentValue.Split('|')
    //                : null;
    //            if (IDVtreeItemParentList != null)
    //            {
    //                for (var i = 0; i < IDVtreeItemParentList.Length; i++)
    //                {
    //                    var _IDVtreeItemParent = IDtoInt(IDVtreeItemParentList[i]);
    //                    if (_IDVtreeItemParent != 0)
    //                        dataLayer.copyItem((int)resultItem["IDVitem"], 0, _IDVtreeItemParent);
    //                }
    //            }

    //            //////////////////
    //            // Task section //
    //            //////////////////////////////////////////////////////////////////////////////////////////

    //            #region Tasks 
    //            var reqDataTask = Request["dataTask"];
    //            var dictTask = fromJSON(reqDataTask);

    //            var selectedPerformer_IDVtreeItem = IDtoInt(dictTask["sys6"].ToString());
    //            var currentUser_IDVtreeItem = IDtoInt(dataLayer.getUserIDVtreeItem());

    //            var task_IDVitem = (int)Session["task_IDVitem"];
    //            var task_IDVtreeItem = (int)Session["task_IDVtreeItem"];

    //            //This conditions means, it is item edit.     
    //            if (task_IDVitem == 0 && IDVitem != 0)
    //            {
    //                var _td = dataLayer.getPreviousTask(IDVitem);
    //                if (_td.Rows.Count == 1)
    //                {
    //                    task_IDVitem = (int)_td.Rows[0][0];
    //                }
    //            }
    //            //////////////////
    //            //Current user sends task to selected performer.
    //            if (selectedPerformer_IDVtreeItem != currentUser_IDVtreeItem && IDVitem != 0)
    //            {
    //                resultTask = HelperMethods.writeTaskForSelectedPerformer(task_IDVitem, task_IDVtreeItem, approved, IDVwfl, VIinfo, resultItem, dictTask, (DataTable)Cache["MetadataList"], dataLayer);
    //            }
    //            else
    //            {
    //                var mdTaskTable = createMetadataValuesTable(dictTask, (DataTable)Cache["MetadataList"], dataLayer);

    //                /* Task Item */
    //                writeMetadataRow(11, 11, 12, 1, 1, 1, resultItem["IDVtreeItem"], mdTaskTable, dataLayer);

    //                /* Task creator */
    //                writeMetadataRow(31, 31, 12, 6, 1, 1, dataLayer.getUserIDVtreeItem(), mdTaskTable, dataLayer);

    //                /* Task creation dt */
    //                var dtNow = DateTime.Now;
    //                var dtStr = dtNow.Year + " " + dtNow.Month + " " + dtNow.Day + " " + dtNow.Hour + " " + dtNow.Minute + " " + dtNow.Second + " " + dtNow.Millisecond;
    //                writeMetadataRow(10, 10, 4, 3, 0, 1, dtStr, mdTaskTable, dataLayer);

    //                /* Task name */
    //                writeMetadataRow(6, 6, 2, 1, 0, 1, resultItem["COtree"], mdTaskTable, dataLayer);

    //                /* Task status */
    //                writeMetadataRow(12, 12, 1, 2, 0, 1, approved, mdTaskTable, dataLayer);

    //                /* Task Activity */
    //                writeMetadataRow(13, 13, 12, 1, 0, 1, 16, mdTaskTable, dataLayer);

    //                resultTask = dataLayer.writeNewItem(task_IDVitem, task_IDVtreeItem, /* Tasks */ 8, 0, approved, 1, 0,
    //                    VIinfo, 1, 1, 4, IDVwfl, resultItem["COtree"].ToString(), mdTaskTable);
    //            }
    //            #endregion
    //        } //end if(resultItem!=null&&resultItem.Count>0)
    //        clearItemSession(Session);
    //        // Predpostavka je da nezapisan item nima IDVitem-a.
    //        var action = IDVitem == 0 ? "\"action\":\"itemcreated\"" : "\"action\":\"itemedited\"";
    //        var status = "\"status\":\"yes\"";
    //        var doTask = "\"doTask\":\"yes\"";
    //        var newIDVitem = "\"newIDVitem\":\"" + resultItem["IDVitem"] + "\"";
    //        var selectedNode = "\"selectedNode\":\"" + IDVtreeItem + "\"";
    //        var response = "{" + status + "," + action + "," + newIDVitem + "," + doTask + "," + selectedNode + "}";

    //        if (resultItem != null)
    //        {
    //            Session["item_IDVitem"] = (int)resultItem["IDVitem"];
    //            Session["item_IDVtreeItem"] = (int)resultItem["IDVtreeItem"];
    //        }

    //        if (resultTask != null)
    //        {
    //            Session["task_IDVitem"] = (int)resultTask["IDVitem"];
    //            Session["task_IDVtreeItem"] = (int)resultTask["IDVtreeItem"];
    //        }
    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "saveItemForm")
    //    {

    //        var reqData = Request["dataDocItem"];
    //        var dict = HelperMethods.fromJSON(reqData);

    //        var keyList = new List<string>(dict.Keys);
    //        for (var i = 0; i < keyList.Count; i++)
    //        {
    //            var _key = keyList[i];
    //            if (_key.StartsWith("grid"))
    //            {
    //                var grid = Session[dict[_key].ToString()];
    //                dict[_key] = grid;
    //            }
    //        }

    //        var fileKeys = Request.Files.Keys;
    //        var valueKeys = dict.Keys.ToList();
    //        for (var i = 0; i < fileKeys.Count; i++)
    //        {
    //            var _fKey = fileKeys[i];
    //            for (var j = 0; j < valueKeys.Count; j++)
    //            {
    //                var _vKey = valueKeys[j];

    //                if (_fKey.StartsWith(_vKey))
    //                {
    //                    dict[_vKey] = Request.Files[_fKey];
    //                }
    //            }
    //        }

    //        var mdValuesTable = createMetadataValuesTable(dict, (DataTable)Cache["MetadataList"], dataLayer);
    //        // Formular id
    //        var _formularId = Session["item_form_data"].ToString().Split('_');
    //        var IDVtreeItemForm = _formularId[2];
    //        writeMetadataRow(30, 30, 12, 6, 1, 1, IDVtreeItemForm, mdValuesTable, dataLayer);

    //        // At this list is ready to be written to db.
    //        // Zdaj je potrebno ločiti metapodatke in polja za zapis.
    //        var node = (TreeViewNode)Session["SelectedNode"];
    //        var IDVitem = (int)Session["item_IDVitem"];
    //        var IDVtreeItem = (int)Session["item_IDVtreeItem"];
    //        var IDVitemParent = IDtoInt(node.Value); ;
    //        var IDVtreeItemParent = IDtoInt(node.ID);
    //        var approved = IDtoInt(dict["fld_taskStatus"].ToString());
    //        var NOlevel = 1;
    //        var posType = IDtoInt(dict["fld_posType"].ToString());
    //        var VIinfo = 0;
    //        var IsInternal = 0;
    //        var SYfile = IDtoInt(dict["fld_SYfile"].ToString());
    //        // SYfile = 0;
    //        var SYnodeType = 0;
    //        var IDVwfl = IDtoInt(dict["fld_IDVwfl"].ToString());
    //        var COtree = "";

    //        var fld_Strut = dict.ContainsKey("fld_strut") && dict["fld_strut"] != null ? dict["fld_strut"].ToString() : "";
    //        var fld_Dupli = dict.ContainsKey("fld_dupli") && dict["fld_dupli"] != null ? dict["fld_dupli"].ToString() : "";
    //        var isItemEdit = IDVitem != 0;
    //        var success = true;
    //        if (IDVtreeItemParent == 10)
    //        {
    //            // Data for creating user is collected from json data, 
    //            // after creating user, its "ProviderUserKey" is attach to input DataTable 
    //            // with md values destined for db.

    //            var username = dict["IDVmData3"].ToString();
    //            var password = dict["IDVmData4"].ToString();
    //            var email = dict["IDVmData19"].ToString();
    //            var passwordQuestion = dict["IDVmData_PW_Q"].ToString();
    //            var passwordAnswer = dict["IDVmData_PW_A"].ToString();
    //            var results = (object[])null;

    //            if (isItemEdit)
    //            {
    //                results = setUserPassword(username, password);
    //                if ((Boolean)results[0])
    //                {
    //                    results = editUser(username, email, "");
    //                    if ((Boolean)results[0])
    //                    {
    //                        results = getUserId(username);
    //                    }
    //                    else
    //                    {
    //                        // end request
    //                    }
    //                }
    //                else
    //                {
    //                    // end request
    //                }

    //            }
    //            else
    //            {
    //                results = createUser(username, password, email, passwordQuestion, passwordAnswer);
    //            }

    //            success = results[0] != null;
    //            var userId = (System.Guid)results[0];
    //            if (success)
    //            {
    //                writeMetadataRow(22, 22, 2, 1, 1, 1, userId.ToString(), mdValuesTable, dataLayer);
    //            }
    //            else
    //            {
    //                var respDict = new Dictionary<string, string>();
    //                var statusKey = "";
    //                var statusMessage = "";
    //                MembershipCreateStatus _status = (MembershipCreateStatus)results[1];
    //                if (MembershipCreateStatus.DuplicateUserName.Equals(_status))
    //                {
    //                    statusMessage = "Username already exists!";
    //                    statusKey = "error";
    //                }
    //                else if (MembershipCreateStatus.DuplicateEmail.Equals(_status))
    //                {
    //                    statusMessage = "Email already exists!";
    //                    statusKey = "error";
    //                }
    //                else if (MembershipCreateStatus.InvalidPassword.Equals(_status))
    //                {
    //                    statusMessage = "Password invalid!";
    //                    statusKey = "error";
    //                }
    //                else if (!MembershipCreateStatus.Success.Equals(_status))
    //                {
    //                    statusMessage = "Error creating user. Please verify data you entered!";
    //                    statusKey = "error";
    //                }

    //                if (statusKey != "")
    //                {
    //                    respDict.Add(statusKey, statusMessage);
    //                    respDict.Add("_targetCtrl", "LblStatus");
    //                    // Response.Write("{\"status\":\""+statusMessage+"\"}");
    //                }
    //                else
    //                {
    //                    // Response.Write("{\"status\":\"ok\"}");
    //                }
    //            }
    //            SYfile = 1;
    //            SYnodeType = 1;
    //        }
    //        var resultItem = (Dictionary<string, object>)null;
    //        if (success)
    //        {
    //            resultItem = dataLayer.writeNewItem(IDVitem, IDVtreeItem, IDVitemParent, IDVtreeItemParent, approved,
    //                NOlevel, posType, VIinfo, IsInternal, SYfile, SYnodeType, IDVwfl, COtree, mdValuesTable);
    //        }

    //        var fld_incl_parent_struct = HelperMethods.IDtoInt(dict["fld_incl_parent_struct"].ToString());
    //        var fld_incl_children_struct = HelperMethods.IDtoInt(dict["fld_incl_children_struct"].ToString());
    //        var fld_incl_parent_dupli = HelperMethods.IDtoInt(dict["fld_incl_parent_dupli"].ToString());
    //        var fld_incl_children_dupli = HelperMethods.IDtoInt(dict["fld_incl_children_dupli"].ToString());

    //        if (resultItem != null)
    //        {
    //            if (fld_Strut != "" && fld_incl_parent_struct == 1)
    //            {
    //                var table = HelperMethods.initIdListTable();
    //                var idArr = fld_Strut.Split('|');

    //                for (var i = 0; i < idArr.Length - 1; i++)
    //                {
    //                    var _id = IDtoInt(idArr[i]);
    //                    HelperMethods.writeIdListRow(0, _id, "", table);
    //                }
    //                //call sp
    //                dataLayer.createMultipleItemInserts((int)resultItem["IDVitem"], (int)resultItem["IDVtreeItem"], table);
    //            }
    //            if (fld_Dupli != "" && fld_incl_parent_dupli == 1)
    //            {
    //                var table = HelperMethods.initIdListTable();
    //                var idArr = fld_Strut.Split('|');

    //                for (var i = 0; i < idArr.Length - 1; i++)
    //                {
    //                    var _id = IDtoInt(idArr[i]);
    //                    HelperMethods.writeIdListRow(0, _id, "", table);
    //                }
    //                //call sp
    //                dataLayer.createMultipleItemCopy((int)resultItem["IDVtreeItem"], table);
    //            }
    //        }

    //        Dictionary<string, object> resultTask = null;
    //        if (resultItem != null)
    //        {
    //            if (fld_incl_children_struct == 1 && fld_Strut != "")
    //            {
    //                dataLayer.saveProperty(IT_0D0B0B_SYintKey_Structure, (int)resultItem["IDVtreeItem"], fld_Strut);
    //            }
    //            var linkedRes = dataLayer.createLinkedNodes((int)resultItem["IDVitem"], IDVitemParent,
    //                    (int)resultItem["IDVtreeItem"], IDVtreeItemParent, IT_0D0B0B_SYintKey_Structure);

    //            if (fld_incl_children_dupli == 1 && fld_Dupli != "")
    //            {
    //                dataLayer.saveProperty(IT_0D0B0B_SYintKey_Duplicates, (int)resultItem["IDVtreeItem"], fld_Dupli);
    //            }
    //            var sql = "(SELECT dbo.IT_0D0B0B.value " +
    //                      "FROM   dbo.IT_0D0B0A " +
    //                      "INNER JOIN dbo.IT_0D0B0B ON dbo.IT_0D0B0A.IDVtreeItem = dbo.IT_0D0B0B.IDVtreeItem " +
    //                      "INNER JOIN dbo.SY_0F0A00 ON dbo.IT_0D0B0B.IDproperty = dbo.SY_0F0A00.IDproperty " +
    //                      "WHERE	(dbo.IT_0D0B0A.IDVtreeItem = " + IDVtreeItemParent + ") " +
    //                      "AND (dbo.SY_0F0A00.SYintKey = " + IT_0D0B0B_SYintKey_Duplicates + ")) ";
    //            var _dt = dataLayer.executeQuery(sql);
    //            var IDVtreeItemParentValue = "";
    //            if (_dt.Rows.Count == 1)
    //            {
    //                IDVtreeItemParentValue = _dt.Rows[0][0].ToString();
    //            }
    //            var IDVtreeItemParentList = !string.Equals(IDVtreeItemParentValue, "")
    //                ? IDVtreeItemParentValue.Split('|')
    //                : null;
    //            if (IDVtreeItemParentList != null)
    //            {
    //                for (var i = 0; i < IDVtreeItemParentList.Length; i++)
    //                {
    //                    var _IDVtreeItemParent = HelperMethods.IDtoInt(IDVtreeItemParentList[i]);
    //                    if (_IDVtreeItemParent != 0)
    //                        dataLayer.copyItem((int)resultItem["IDVitem"], 0, _IDVtreeItemParent);
    //                }
    //            }
    //            //////////////////
    //            // Task section //
    //            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //            reqData = Request["dataTask"];
    //            var dictTask = fromJSON(reqData);

    //            var selectedPerformer_IDVtreeItem = IDtoInt(dictTask["sys6"].ToString());
    //            var currentUser_IDVtreeItem = IDtoInt(dataLayer.getUserIDVtreeItem());

    //            var task_IDVitem = (int)Session["task_IDVitem"];
    //            var task_IDVtreeItem = (int)Session["task_IDVtreeItem"];

    //            //This conditions means, it is item edit.     
    //            if (task_IDVitem == 0 && IDVitem != 0)
    //            {
    //                var _td = dataLayer.getPreviousTask(IDVitem);
    //                if (_td.Rows.Count == 1)
    //                {
    //                    task_IDVitem = (int)_td.Rows[0][0];
    //                }
    //            }

    //            if (selectedPerformer_IDVtreeItem != currentUser_IDVtreeItem && IDVitem != 0)
    //            {
    //                resultTask = HelperMethods.writeTaskForSelectedPerformer(task_IDVitem, task_IDVtreeItem, approved, IDVwfl, VIinfo, resultItem, dictTask, (DataTable)Cache["MetadataList"], dataLayer);
    //            }
    //            else
    //            {
    //                var mdTaskTable = createMetadataValuesTable(dictTask, (DataTable)Cache["MetadataList"], dataLayer);

    //                /* Task Item */
    //                writeMetadataRow(11, 11, 12, 1, 1, 1, resultItem["IDVtreeItem"], mdTaskTable, dataLayer);

    //                /* Task creator */
    //                writeMetadataRow(31, 31, 12, 6, 1, 1, dataLayer.getUserIDVtreeItem(), mdTaskTable,
    //                    dataLayer);

    //                /* Task creation dt */
    //                var dtNow = DateTime.Now;
    //                var dtStr = dtNow.Year + " " + dtNow.Month + " " + dtNow.Day + " " + dtNow.Hour + " " +
    //                            dtNow.Minute +
    //                            " " + dtNow.Second + " " + dtNow.Millisecond;
    //                writeMetadataRow(10, 10, 4, 3, 0, 1, dtStr, mdTaskTable, dataLayer);

    //                /* Task name */
    //                writeMetadataRow(6, 6, 2, 1, 0, 1, resultItem["COtree"], mdTaskTable, dataLayer);

    //                /* Task status */
    //                writeMetadataRow(12, 12, 1, 2, 0, 1, approved, mdTaskTable, dataLayer);

    //                /* Task Activity */
    //                writeMetadataRow(13, 13, 12, 1, 0, 1, 16, mdTaskTable, dataLayer);

    //                resultTask = dataLayer.writeNewItem(task_IDVitem, task_IDVtreeItem, /* Tasks */ 8, 0, approved, 1, 0, VIinfo, 1,
    //                    1, 4, IDVwfl, resultItem["COtree"].ToString(), mdTaskTable);
    //            }
    //            // end task section
    //            //////////////////////////////////////////////////////////////////////////////////////////////
    //        }
    //        //Clears Session data.
    //        HelperMethods.clearItemSession(Session);
    //        var action = IDVitem == 0 ? "\"action\":\"itemcreated\"" : "\"action\":\"itemedited\"";
    //        var status = "\"status\":\"yes\"";
    //        var doTask = "\"doTask\":\"yes\"";
    //        var newIDVitem = "\"newIDVitem\":\"" + resultItem["IDVitem"] + "\"";
    //        var selectedNode = "\"selectedNode\":\"" + IDVtreeItem + "\"";
    //        var response = "{" + status + "," + action + "," + newIDVitem + "," + doTask + "," + selectedNode + "}";

    //        if (resultItem != null)
    //        {
    //            Session["item_IDVitem"] = (int)resultItem["IDVitem"];
    //            Session["item_IDVtreeItem"] = (int)resultItem["IDVtreeItem"];
    //        }
    //        if (resultTask != null)
    //        {
    //            Session["task_IDVitem"] = (int)resultTask["IDVitem"];
    //            Session["task_IDVtreeItem"] = (int)resultTask["IDVtreeItem"];
    //        }
    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "saveGridRow")
    //    {
    //        var reqData = Request["dataItem"];
    //        var aRow = HelperMethods.fromJSONArray(reqData);
    //        var gridId = Request["gridId"].ToString().Split('_');
    //        var IDVitem = IDtoInt(Request["IDVitem"]);
    //        var IDVmData = IDtoInt(gridId[2]);
    //        var rowIndex = IDtoInt(Request["rowIndex"]); ;
    //        var columnIndex = 0;

    //        var t = initMetadataValuesTable();

    //        for (var i = 0; i < aRow.Length; i++)
    //        {
    //            var aCell = (Dictionary<string, object>)aRow[i];
    //            var id = aCell["id"].ToString().Split('_');
    //            var _IDVmData = IDtoInt(id[0]);
    //            var _IDtypemData = IDtoInt(id[1]);
    //            var _IDtoolBox = IDtoInt(id[2]);
    //            var _value = aCell["value"];
    //            var _rowIdx = IDtoInt(aCell["rowIndex"].ToString());
    //            var _columnIdx = IDtoInt(aCell["columnIndex"].ToString());
    //            writeMetadataRow(_IDVmData, _columnIdx, _IDtypemData, _IDtoolBox, 0, _rowIdx, _value,
    //                t, dataLayer);
    //        }

    //        dataLayer.editGridRow(IDVitem, IDVmData, rowIndex, columnIndex, t);
    //        var response = "{\"status\":\"ok\"}";
    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "mdgridTable")
    //    {
    //        Response.Write("ok");
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "sysMDValSave")
    //    {
    //        var _MDval = Request["usrMDvalue"];
    //        var _dict = HelperMethods.fromJSON(_MDval);
    //        var IDVmData = (int)Session["IDVmData"];
    //        var _d = new Dictionary<string, string>();
    //        var response = "";
    //        if (IDVmData != 0)
    //        {
    //            var _IDtypemData = (int)Session["IDtypemData"];
    //            // dodamo nov zapis
    //            object newMDvalue = _dict["_value"];
    //            var txtMDValueDE = _dict["DEtext"].ToString();
    //            var txtMDValueRE = _dict["REtext"].ToString();
    //            var IDVmDataColumn = IDVmData;
    //            var IDVvalueVmData = HelperMethods.IDtoInt(_dict["IDVvalueVmData"].ToString());
    //            var syDefault = HelperMethods.IDtoInt(_dict["SYdefault"].ToString());
    //            var state = HelperMethods.IDtoInt(_dict["state"].ToString());
    //            var isApproved = state == 1 ? 1 : 0;
    //            var newIDVvalueVmData = dataLayer.createMetadataValue(IDVmData, IDVmDataColumn, _IDtypemData, newMDvalue, IDVvalueVmData,
    //                                            txtMDValueDE, txtMDValueRE, syDefault, isApproved);
    //            // poberemo vse
    //            var sqlString = "SELECT	MD2.IDvalueVmData, md2.REtext, MD2.DEtext," +
    //                            " CASE " +
    //                            "WHEN MD1.IDtypemData =  2 THEN MD2.valueTX " +
    //                            "WHEN MD1.IDtypemData =  3 THEN MD2.valueNTX " +
    //                            "WHEN MD1.IDtypemData =  1 THEN CONVERT(VARCHAR(30),MD2.valueINT) " +
    //                            "WHEN MD1.IDtypemData =  4 THEN CONVERT(VARCHAR(30), MD2.valueDT) " +
    //                            "WHEN MD1.IDtypemData =  5 THEN CONVERT(VARCHAR(30), MD1.LAitem) " +
    //                            "WHEN MD1.IDtypemData =  6 THEN CONVERT(VARCHAR(30), MD2.valueDEC) " +
    //                            "WHEN MD1.IDtypemData =  7 THEN CONVERT(VARCHAR(30),MD2.valueFLO) " +
    //                            "WHEN MD1.IDtypemData =  8 THEN CONVERT(VARCHAR(255),MD2.valueXML) " +
    //                            "WHEN MD1.IDtypemData =  9 THEN CONVERT(VARCHAR(30),MD2.valueMON) " +
    //                            "WHEN MD1.IDtypemData = 10 THEN CONVERT(VARCHAR(30),MD2.valueTIN) " +
    //                            "WHEN MD1.IDtypemData = 11 THEN MD2.valueTX " +
    //                            "WHEN MD1.IDtypemData = 12 THEN CONVERT(VARCHAR(30),MD2.valueIDVitem) " +
    //                            "END	AS _value, MD2.SYdefault, 3 as 'Status' " +
    //                            "FROM	MD_0A0B00 MD1 " +
    //                                    "inner join MD_0B0B00 MD2 on MD1.IDVmData = MD2.IDVmData " +
    //                                    "where	MD1.IDVmData = " + IDVmData + " " +
    //                                    "and MD2.SYpreVer <> 1 " +
    //                            "order by MD2.IDvalueVmData";

    //            var result = dataLayer.executeQuery(sqlString);

    //            result = dataLayer.getMDvalues(IDVmData);

    //            var list = HelperMethods.tableRowsToDictionary(result);
    //            var jsonString = HelperMethods.serialize(list);
    //            response = jsonString;

    //            var values = Session["values"] as List<Dictionary<string, object>>;
    //            values.Clear();
    //            for (var i = 0; i < list.Count; i++)
    //            {
    //                var tempDictSrc = list[i];
    //                var tempDictDst = new Dictionary<string, object>();
    //                foreach (string _k in tempDictSrc.Keys)
    //                {
    //                    var _value = tempDictSrc[_k];
    //                    tempDictDst.Add(_k, _value);
    //                }
    //                values.Add(tempDictDst);
    //            }
    //            var j = 0;
    //        }
    //        else
    //        {
    //            object newMDvalue = _dict["_value"];
    //            var txtMDValueDE = _dict["DEtext"].ToString();
    //            var txtMDValueRE = _dict["REtext"].ToString();
    //            var values = Session["values"] as List<Dictionary<string, object>>;
    //            values.Add(_dict);

    //            var dstList = new List<Dictionary<string, string>>();
    //            for (var i = 0; i < values.Count; i++)
    //            {
    //                var tempDictSrc = values[i];
    //                var tempDictDst = new Dictionary<string, string>();
    //                foreach (string _k in tempDictSrc.Keys)
    //                {
    //                    var _value = tempDictSrc[_k].ToString();
    //                    tempDictDst.Add(_k, _value);
    //                }
    //                dstList.Add(tempDictDst);
    //            }
    //            // _d.Add("error","Metadata not saved!");
    //            response = HelperMethods.serialize(dstList);
    //        }

    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "sysMDValDelete")
    //    {
    //        var request = Request["usrMDvalue"];
    //        var result = dataLayer.deleteMetadataValue(HelperMethods.IDtoInt(request), true);
    //        var response = "";
    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "onMDValuesIndexChange")
    //    {
    //        var index = HelperMethods.IDtoInt(Request["index"]);
    //        var id = HelperMethods.IDtoInt(Request["id"]);
    //        var values = Session["values"] as List<Dictionary<string, object>>;
    //        var responseDict = new Dictionary<string, string>();
    //        var aVal = (Dictionary<string, object>)null;

    //        if (id != 0)
    //        {
    //            for (var i = 0; i < values.Count; i++)
    //            {
    //                aVal = values[i];
    //                var tempId = HelperMethods.IDtoInt(aVal["IDVvalueVmData"].ToString());
    //                if (tempId == id)
    //                {
    //                    break;
    //                }
    //            }
    //        }
    //        else
    //        {
    //            aVal = values[index];
    //        }
    //        foreach (string _k in aVal.Keys)
    //        {
    //            var _value = aVal[_k];
    //            responseDict.Add(_k, _value.ToString());
    //        }
    //        Response.Write(HelperMethods.serialize(responseDict));
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "onDateFormatChange")
    //    {
    //        var format = Request["_format"];
    //        Session["glDtFrm"] = format;
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "delGridRow")
    //    {
    //        var args = Request["args_del"].ToString();
    //        var passedArgs = args.Split('|');
    //        var _key = "grid_" + passedArgs[0]; // Taprvi je krovni IDVmData, ostali so kolone grida.
    //        var idx = HelperMethods.IDtoInt(Request["_rowIdx"]);
    //        var grid = (Dictionary<int, List<object>>)Session[_key];

    //        if (grid == null)
    //        {
    //            grid = new Dictionary<int, List<object>>();
    //            Session[_key] = grid;
    //        }

    //        for (var i = 1; i < passedArgs.Length - 1; i++)
    //        {
    //            var IDVmData = HelperMethods.IDtoInt(passedArgs[i]);
    //            var _l = grid[IDVmData][idx];
    //            var s = 0;
    //        }


    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "testCodeValue")
    //    {
    //        var codeValue = Request["_data"];
    //        var IDVitem = IDtoInt(Request["_IDVitem"]);
    //        var result = dataLayer.checkDuplicates(CONST_IDVmData_Code, 2, IDVitem, codeValue);
    //        // Response.Write("{\"resp\":\"Request: "+codeValue+": "+result+"\"},");
    //        Response.Write("{\"resp\":\"" + result + "\"}");
    //        Response.End();
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "changeConnString")
    //    {
    //        var _db = Request["_db"] != null ? HelperMethods.IDtoInt(Request["_db"].ToString()) : 0;
    //        var _conn = dataLayer.getConnection();
    //        var connString = (string)null;
    //        var userId = (string)null;
    //        var pw = new System.Security.SecureString();
    //        if (_db == 1)
    //        {
    //            connString = "Server=PMWDEV02; database=PMWDB_Dev; connection timeout=1440";
    //            userId = "PMWAdmin";
    //            pw.AppendChar('a');
    //        }
    //        else if (_db == 2)
    //        {
    //            connString = "Server=PMWDEV02; database=PMWDB_Empty; connection timeout=1440";
    //            userId = "PMWAdmin";
    //            pw.AppendChar('a');
    //        }
    //        else if (_db == 3)
    //        {
    //            connString = "Server=PMWDEV02; database=PMWDB_Dev_OLD; connection timeout=1440";
    //            userId = "celesnik";
    //            var _pw = new char[] { 'm', 'i', 'k', 'j', 'e', 'c', 'a', 'r' };
    //            for (var i = 0; i < _pw.Length; i++)
    //            {
    //                pw.AppendChar(_pw[i]);
    //            }
    //        }

    //        pw.MakeReadOnly();
    //        var cred = new SqlCredential(userId, pw);
    //        // dataLayer.setConnection(new System.Data.SqlClient.SqlConnection(connString, cred));
    //        var s = "";
    //    }
    //    else if (Request["_target"] != null && Request["_target"] == "saveFormTemplate")
    //    {
    //        var reqData = Request["dataDocItem"];
    //        var _body = Request["templateBody"];
    //        //Decrypting...
    //        _body = _body.Replace("#||#", "<");
    //        var dict = HelperMethods.fromJSON(reqData);
    //        // dict["sys14"] = _body;
    //        dict["IDVmData15"] = _body;
    //        // template bi moral imeti naslov, telo in verzijo za mdje.
    //        var mdValuesTable = createMetadataValuesTable(dict, (DataTable)Cache["MetadataList"], dataLayer);

    //        var IDVitem = (int)Session["item_IDVitem"];
    //        var IDVtreeItem = (int)Session["item_IDVtreeItem"];
    //        var IDVitemParent = 18;
    //        var IDVtreeItemParent = 18;

    //        var NOlevel = 1;
    //        var posType = 0;
    //        var VIinfo = 0;
    //        var IsInternal = 0;
    //        var SYfile = 1;
    //        var SYnodeType = 2;
    //        var IDVwfl = IDtoInt(dict["fld_IDVwfl"].ToString());
    //        var approved = HelperMethods.IDtoInt(dict["fld_taskStatus"].ToString());
    //        var COtree = "";

    //        // var resultItem = (Dictionary<string, object>)null;
    //        var resultItem = dataLayer.writeNewItem(IDVitem, IDVtreeItem, IDVitemParent, IDVtreeItemParent, approved,
    //                NOlevel, posType, VIinfo, IsInternal, SYfile, SYfile, IDVwfl, COtree, mdValuesTable);
    //        var resultTask = (Dictionary<string, object>)null;

    //        if (resultItem != null)
    //        {
    //            /////////////////////////////////////////////////////////////////////////////////
    //            // Task section
    //            ////////////////////////////////////////////////////////////////////////////////
    //            var reqDataTask = Request["dataTask"];
    //            var dictTask = fromJSON(reqDataTask);

    //            var selectedPerformer_IDVtreeItem = IDtoInt(dictTask["sys6"].ToString());
    //            var currentUser_IDVtreeItem = IDtoInt(dataLayer.getUserIDVtreeItem());

    //            var task_IDVitem = (int)Session["task_IDVitem"];
    //            var task_IDVtreeItem = (int)Session["task_IDVtreeItem"];

    //            //This conditions means, it is item edit.     
    //            if (task_IDVitem == 0 && IDVitem != 0)
    //            {
    //                var _td = dataLayer.getPreviousTask(IDVitem);
    //                if (_td.Rows.Count == 1)
    //                {
    //                    task_IDVitem = (int)_td.Rows[0][0];
    //                }
    //            }
    //            if (selectedPerformer_IDVtreeItem != currentUser_IDVtreeItem && IDVitem != 0)
    //            {
    //                resultTask = writeTaskForSelectedPerformer(task_IDVitem, task_IDVtreeItem, approved, IDVwfl, VIinfo, resultItem, dictTask, (DataTable)Cache["MetadataList"], dataLayer);
    //            }
    //            else
    //            {
    //                var mdTaskTable = createMetadataValuesTable(dictTask, (DataTable)Cache["MetadataList"], dataLayer);

    //                /* Task Item */
    //                writeMetadataRow(11, 11, 12, 1, 1, 1, resultItem["IDVtreeItem"], mdTaskTable, dataLayer);

    //                /* Task creator */
    //                writeMetadataRow(31, 31, 12, 6, 1, 1, dataLayer.getUserIDVtreeItem(), mdTaskTable, dataLayer);

    //                /* Task creation dt */
    //                var dtNow = DateTime.Now;
    //                var dtStr = dtNow.Year + " " + dtNow.Month + " " + dtNow.Day + " " + dtNow.Hour + " " + dtNow.Minute + " " + dtNow.Second + " " + dtNow.Millisecond;
    //                writeMetadataRow(10, 10, 4, 3, 0, 1, dtStr, mdTaskTable, dataLayer);

    //                /* Task name */
    //                writeMetadataRow(6, 6, 2, 1, 0, 1, resultItem["COtree"], mdTaskTable, dataLayer);

    //                /* Task status */
    //                writeMetadataRow(12, 12, 1, 2, 0, 1, approved, mdTaskTable, dataLayer);

    //                /* Task Activity */
    //                writeMetadataRow(13, 13, 12, 1, 0, 1, 16, mdTaskTable, dataLayer);

    //                resultTask = dataLayer.writeNewItem(task_IDVitem, task_IDVtreeItem, /* Tasks */ 8, 0, approved, 1, 0,
    //                    VIinfo, 1, 1, 4, IDVwfl, resultItem["COtree"].ToString(), mdTaskTable);
    //            }
    //            /////////////////////////////////////////////////////////////
    //        } //end if(resultItem!=null)
    //        clearItemSession(Session);
    //        // Predpostavka je da nezapisan item nima IDVitem-a.
    //        var action = IDVitem == 0 ? "\"action\":\"itemcreated\"" : "\"action\":\"itemedited\"";
    //        var status = "\"status\":\"yes\"";
    //        var doTask = "\"doTask\":\"yes\"";
    //        var newIDVitem = "\"newIDVitem\":\"" + resultItem["IDVitem"] + "\"";
    //        var selectedNode = "\"selectedNode\":\"" + IDVtreeItem + "\"";
    //        var response = "{" + status + "," + action + "," + newIDVitem + "," + doTask + "," + selectedNode + "}";

    //        if (resultItem != null)
    //        {
    //            Session["item_IDVitem"] = (int)resultItem["IDVitem"];
    //            Session["item_IDVtreeItem"] = (int)resultItem["IDVtreeItem"];
    //        }

    //        if (resultTask != null)
    //        {
    //            Session["task_IDVitem"] = (int)resultTask["IDVitem"];
    //            Session["task_IDVtreeItem"] = (int)resultTask["IDVtreeItem"];
    //        }
    //        Response.Write(response);
    //        Response.End();
    //    }
    //    else if (Request.Files.Count > 0)
    //    {
    //        handleGridRow();
    //    }
    //}
}
