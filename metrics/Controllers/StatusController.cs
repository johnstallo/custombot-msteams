using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace metrics.Controllers
{
    [Route("api/[controller]")]
    public class ServerController : Controller
    {
        // GET api/server
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return GetServerStatus();
        }

        // GET api/server/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "metric";
        }

        // POST api/server
        [HttpPost]
        public void Post([FromBody]string metric)
        {
        }

        // PUT api/server/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string metric)
        {
        }

        // DELETE api/server/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public string[] GetServerStatus() {
            return new string[] { "Status: ok", "Requests: 22k", "Response time (ms): 206", "Failure rate: 2.9%" };
        }
    }
}
