using System;
using System.Net;
using System.Threading;

namespace DnsTest
{
  public class DnsTestProgram
  {
    public static void Main(string[] args)
    {
      var domainEntry = Dns.GetHostEntry("Google.com");

      Console.WriteLine(domainEntry.HostName);

      foreach (var ip in domainEntry.AddressList)
      {
        //Dns.GetHostEntry returns IPHostEntry instance
        //the IPHostEntry class: associates a DomainNameSystem (DNS) host name with 
        //an array of 'aliases' and an array of 'matching IP addresses'
        Console.WriteLine(ip);
        // Google.com
        // 2607:f8b0:4002:c06::66
        // 173.194.219.113
        // 173.194.219.102
        // 173.194.219.101
        // 173.194.219.100
        // 173.194.219.139
        // 173.194.219.138
      }

      Console.ReadKey();
      // Thread.Sleep(10000);
    }//end Main
  }
}