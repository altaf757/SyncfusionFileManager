using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SyncfusionFileManager.Controllers
{
    public class RichTextEditorController : Controller
    {
        public IActionResult Index()
        {
            string hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
            ViewBag.ajaxSettings = new
            {
                url = hostUrl + "api/FileManager/FileOperations",
                getImageUrl = hostUrl + "api/FileManager/GetImage",
                uploadUrl = hostUrl + "api/FileManager/Upload",
                downloadUrl = hostUrl + "api/FileManager/Download"
            };

            var symbol = new
            {
                tooltipText = "Insert Symbol",
                template = "<button class='e-tbar-btn e-control e-btn e-lib e-icon-btn' tabindex='-1' id='custom_tbar'  style='width:100%'><span class='e-btn-icon e-symbols e-icons rtecustomtool'></span></button>"
            };
            var selectAll = new
            {
                tooltipText = "Select All",
                template = "<button class='e-tbar-btn e-control e-btn e-lib e-icon-btn' tabindex='-1' style='width:100%'><span class='e-btn-icon e-select-all e-icons'></span></button>"
            };

            ViewBag.items = new object[] {
                "Bold", "Italic", "Underline", "StrikeThrough", "SuperScript", "SubScript", "|",
                "FontName", "FontSize", "FontColor", "BackgroundColor",  "|",
                "LowerCase", "UpperCase",
                "Formats", "Alignments", "|", "NumberFormatList", "BulletFormatList", "|",
                "Outdent", "Indent", "|",
                "CreateLink", "Image","CreateTable", "|", "FormatPainter", "ClearFormat", "|", "EmojiPicker", symbol, "|",
                "SourceCode", "FullScreen", "|", "Undo", "Redo",selectAll ,"Copy","Cut"
            };

            ViewBag.table = new[] {
                "TableHeader", "TableRows", "TableColumns", "TableCell", "-", "BackgroundColor", "TableRemove", "TableCellVerticalAlign", "Styles"
            };

            ViewBag.insertBtn = new
            {
                content = "Insert",
                isPrimary = true
            };
            ViewBag.cancelBtn = new
            {
                content = "Cancel"
            };

            ViewBag.listMetaData = new List<object>() { new { MetaData = "aaaa" }, new { MetaData = "bbbb" }, new { MetaData = "ccc" } };
            return View();
        }
    }
}
