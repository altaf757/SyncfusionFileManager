using Microsoft.AspNetCore.Mvc;

namespace SyncfusionFileManager.Controllers
{
    public class PartialViewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public ActionResult LoadViewWithAjax() 
        {
            return PartialView("_LoadViewWithAjax");
        }
    }
}
