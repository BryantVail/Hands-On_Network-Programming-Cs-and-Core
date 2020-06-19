({
  name: "Factory-Pattern",
  url: "",
	desc:
		"Defines an interface for creating an object, but lets the classes that 'implement' the interface decide which class to instantiate; enables a class to postpone instantiation to sub-classes.",
	notes: [
    "replaces 'constructors'; abstracting the process of object generation so that the type of the object instantiated can be determined at 'run-time'.",
    
  ],
  aspects: [
    {
      name: "where to use it",
      desc: "",
      notes: [
        "tedious when the client needs to specify the class name while creating the objects; a simple way to create the object",
        "product = FactoryMethod()",
        "FactoryMethod: returns new ConcreteProduct"
      ],
      aspects: [
        {
          name: "Product",
          desc: "defines the interface of objects the FactoryMethod() creates."
        },
        {
          name: "ConcreteProduct",
          desc: "class that implements the ProductInterface"
        },
        {
          name: "Creator",
          desc: "Abstract Class- declared the FactoryMethod()",
        }
      ]
    }
  ]
});
