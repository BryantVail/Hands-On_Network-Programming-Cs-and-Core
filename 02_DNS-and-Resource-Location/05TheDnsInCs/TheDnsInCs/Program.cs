using System;
using System.Net;

namespace TheDnsInCs
{
    class Program
    {
        static void Main(string[] args)
        {
            var domainEntry = Dns.GetHostEntry("google.com");
            Console.WriteLine(domainEntry.HostName);

            foreach(var ip in domainEntry.AddressList)
            {
                Console.WriteLine(ip);
            }

            Console.ReadLine();
        }
    }
}
