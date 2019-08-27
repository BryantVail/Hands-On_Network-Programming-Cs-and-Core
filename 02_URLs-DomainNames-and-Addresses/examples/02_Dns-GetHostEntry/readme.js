({
  url:
    "https://docs.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code",
  name: "C# with visual studio code",
  desc: "",
  notes: [""],
  aspects: [
    {
      name: "commands",
      desc: "cmd for dotnet",
      notes: [""],
      aspects: [
        {
          name: "dotnet new console",
          desc: "builds project in the directory; .csproj and 'obj' directory."
        },
        {
          name: "dotnet new",
          desc:
            "creates a new project, configuration file, or solution based on the specified template.",
          notes: [""],
          aspects: [
            {
              name: ".NET Core 2.2",
              syntax: [
                "dotnet new <TEMPLATE> [--dry-run] [--force] [-i|--install] [-lang|--language] [-n|--name] [--nuget-source] [-o|--output] [-u|--uninstall] [Template options]",
                "dotnet new <TEMPLATE> [-l|--list] [--type]",
                "dotnet new [-h|--help]"
              ]
            }
          ]
        }
      ]
    }
  ]
});
