using System;
using System.Net;


namespace HandsOnNetworkProgrammingCsAndCore.DnsAndResourceLocation.UrlsDNsAndDeviceAddresses
{
    public class UriBuilderExample
    {

        public static Uri GetSimpleUri()
        {
            var builder = new UriBuilder();
            builder.Scheme = "http";
            builder.Host = "packt.com";
            return builder.Uri;
        }

        public static Uri GetSimpleUri_Constructor()
        {
            var builder = new UriBuilder("http", "packt.com");
            return builder.Uri;
        }

    }
}






