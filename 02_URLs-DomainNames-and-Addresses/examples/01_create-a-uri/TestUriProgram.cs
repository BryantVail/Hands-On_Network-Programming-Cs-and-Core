using System;
using System.Net;
using System.Threading;

namespace UriTests
{
  public class TestUriProgram
  {

    public static Uri GetSimpleUri()
    {
      var builder = new UriBuilder();
      builder.Scheme = "http";
      builder.Host = "packt.com";

      return builder.Uri;
    }

    public static void Main(string[] args)
    {
      var simpleUri = GetSimpleUri();
      Console.WriteLine(simpleUri.ToString());
      // Thread.Sleep(10000);
      Console.ReadKey();
    }
  }
}



