using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using System;
using Microsoft.Extensions.Hosting;
using MimeKit;
using iText.Html2pdf;

namespace SyncfusionFileManager.Controllers
{
    public class PartialViewController : Controller
    {

        private readonly IHostEnvironment _env;

        public PartialViewController(IHostEnvironment env)
        {
            _env = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PartialView(int Id=0)
        {
            return PartialView("_PartialView",Id);
        }


        [HttpPost]
        public async Task<IActionResult> DownloadLicensePdf()
        {
            var pathToFile = Path.Combine(_env.ContentRootPath, "wwwroot/templates/Certificate2.html");
            var builder = new BodyBuilder();
            using (StreamReader SourceReader = System.IO.File.OpenText(pathToFile))
            {
                builder.HtmlBody = SourceReader.ReadToEnd();
            }

            var htmlString = builder.HtmlBody.Replace("{accountNo}", "00000000XXXXXX");
            htmlString = htmlString.Replace("{companyName}", "");
            htmlString = htmlString.Replace("{contactPerson}","");

            //replace the indexes with its actual values 
            byte[] bytes;
            using (MemoryStream stream = new MemoryStream())
            {
                HtmlConverter.ConvertToPdf(htmlString, stream);
                bytes = stream.ToArray();
            }

            return File(bytes, "application/pdf", "LicenseRenewRecipt.pdf");
        }
    }
}
