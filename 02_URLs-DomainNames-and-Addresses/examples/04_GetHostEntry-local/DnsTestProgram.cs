using System;
using System.Net;

namespace DnsTest
{
  public class DnsTestProgram
  {
    public static void Main(string[] args)
    {
      var domainEntry = Dns.GetHostEntry("fun.with.dns.com");

      Console.WriteLine(domainEntry.HostName);

      for (int i = 0; i < domainEntry.AddressList.Length; i++)
      {
        var ip = domainEntry.AddressList.GetValue(i);
        Console.WriteLine(ip);
      }

      foreach (var ip in domainEntry.AddressList)
      {
        Console.WriteLine(ip);
      }//end foreach

      // 
      // next example below
      // 

      //get host pair from ip
      var domainEntryByAddress = Dns.GetHostEntry("127.0.0.1");
      //print domain-name from ip
      Console.WriteLine(domainEntryByAddress.HostName);

      foreach (var ip in domainEntryByAddress.AddressList)
      {
        Console.WriteLine(ip);
      }//end foreach

      //hold the console until a keypress
      Console.ReadKey();
    }
  }
}