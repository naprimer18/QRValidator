using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace QRValidatorExtendedVersion.Controllers
{
    [Route("/errors")]
    public class ValueDataController : Controller
    {
        static readonly List<Errors> data;
        static ValueDataController()
        {

            data = new List<Errors>
            {
                new Errors { Type= "Nice", Message= "bliaa", PropertyName= "name#1" },
                new Errors { Type= "Warning", Message= "bliaa", PropertyName= "name#2" },

            };
        }

        [HttpGet]
        public IEnumerable<Errors> Get()
        {
            return data;
        }

        public class Errors
        {
            public string Type { get; set; }
            public string Message { get; set; }
            public string PropertyName { get; set; }
        }
    }
}
