using Microsoft.AspNetCore.Mvc;

namespace SyncfusionFileManager.Controllers
{
    public class PartialViewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PartialView(int Id=0)
        {
            return PartialView("_PartialView",Id);
        }
    }
}
