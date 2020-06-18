using HandsOnNetworkProgrammingCsAndCore.DnsAndResourceLocation.UrlsDNsAndDeviceAddresses;
using System;
using System.Threading;

namespace UrlsDNsAndDeviceAddresses
{
    class Program
    {
        //static void Main(string[] args)
        //{
        //    var simpleUri = UriBuilderExample.GetSimpleUri();
        //    Console.WriteLine(simpleUri.ToString());

        //    Thread.Sleep(1000);
        //}

        static void Main(string[] args)
        {
            var simpleUri = UriBuilderExample.GetSimpleUri_Constructor();
            Console.WriteLine(simpleUri.ToString());
            Thread.Sleep(10000);
        }

    }
}
