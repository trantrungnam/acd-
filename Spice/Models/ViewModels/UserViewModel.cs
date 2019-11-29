using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spice.Models.ViewModels
{
    public class LoginInput 
    {
        public string email { get; set; }
        public string password { get; set; }
        public bool rememberme { get; set; }
    }

}
