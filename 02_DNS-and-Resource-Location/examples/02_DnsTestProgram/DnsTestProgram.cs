using System;
using System.Net;
using System.Threading;

namespace DnsTest{
  public class DnsTestProgram{
    public static void Main(string[] args){
      var domainEntry = Dns.GetHostEntry("Google.com");
      Console.WriteLine(domainEntry.HostName);
      foreach(var ip in domainEntry.AddressList){
        Console.WriteLine(ip);
      }
      Console.ReadKey();
    }
  }
}



