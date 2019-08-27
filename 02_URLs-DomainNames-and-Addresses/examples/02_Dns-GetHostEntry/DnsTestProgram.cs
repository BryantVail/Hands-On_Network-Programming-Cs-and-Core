using System;
using System.Net;
using System.Threading;

namespace DnsTest{
  public class DnsTestProgram{
    public static void Main (string[] args){
      var domainEntry = Dns.GetHostEntry("Google.com");
      Console.WriteLine(domainEntry.HostName);
      foreach(var ip in domainEntry.AddressList){
        //Dns.GetHostEntry returns IPHostEntry instance
        //the IPHostEntry class: associates a DomainNameSystem (DNS) host name with 
        //an array of 'aliases' and an array of 'matching IP addresses'
        Console.WriteLine(ip);
        // Console.ReadKey();
        Thread.Sleep(10000);
      }
    }//end Main
  }
}