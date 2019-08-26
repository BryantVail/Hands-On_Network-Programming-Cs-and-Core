//Chapter 01, Networks in a Nutshell
({
    mediaType: book, 
    chapters: [
        {
            name: networksInANutshell, 
            number: 1,
            description: "overview of networks; types, requirements, elements.",
            topics: [
                "unique challenges of distributing computational or data resources over a net- how those challenges arise in software",
                "components of a network- and arranging of those components",
                "impact of device variability, latency, instability, standardization on networks",
                "concepts, terms, data structures used for network programming- and how those are exposed by .net-core"
            ],
            sections: [
                {
                    name: "Expanding The Scope of Software - distributed systems and the challenges they introduce",
                    description: 
                        "define what nets are, aspects of nets we are concerned with, addressing how net architecture impacts the programs we write- and what software solutions facilitate effective networks",
                    sections: [
                        {
                            name: "what is a network", 
                            description: 
                                "an arbitrarily large set of computational or navigational devices, connected by channels of communication across which computational resources can be reliably sent, received, forwarded, or prcessed.", 
                            notes: [
                                "SimpleDescription: 'physical implementation of an undirected graph; series of nodes & edges- or connections- between the nodes.'",

                            ],
                            aspects: [
                                {
                                    name: "node",
                                    description: "be able to meaningfully interact with other nodes on the network",
                                    notes: [
                                        "networks should scale", 

                                    ]
                                }
                            ]
                        },
                        {
                            name: "an arbitrarily large set", 
                            description: 
                                "one would not (and should not) care about how many devices are actually connected to the hardware, or how many routes needed to reliably pass resources or requests along",
                            notes: [
                                "basic property of almost all computer networks is 'device-agnosticism'; any device on a network should assume nothing regarding the number or type of devices on the network at any given time.",
                                "program or device may need to discern whether a certain device or piece of software exists on the network- nothing about the connection will illustrate this information.",
                                "solution: send & receive messages in a format that is standardized for comms protocol over which messages can be send",
                                "using the messages: device can request info about availability, config, or capabilities of other devices on the network- without actually knowing whether or not the devices it expects to be available on the network are, actually, available on the network.",
                                "ensuring that the receiving end of any given outgoing connection from a device is properly connected, or that the receiving devices are configured accordingly, is the concern of the engineers of the software.",
                                "attribute: other devices on the network cannot and will not be notified that the device or software has been connected & made a resource.",

                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "computational devices",
                            description: 
                                "a device on a network with 'open communication' to other nodes on the network; an atomic unit or collection of parts that can facilitate the reqiurements of the network.", 
                            notes: [
                                "possible network: keyboard, mouse, monitors, computer; connected by 'standardized channels' of communication",
                                "while a network is always a distributed system, a distributed system is not always a network",
                                "device facilitating the network requirements: Accepts & communicates openly over device agnostic channels of communication to provide or leverage computational resources on that network"
                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "Navigational Devices",
                            description: 
                                "a valid network device, constituting a node on the network- but has no resources of its own; exists only to facilitate the successful communication of other devices on the network (ie: switch or router).",
                            notes: [
                                "router software: written at the system level in C or C++, on board firmware",
                                "outside the scope of this book"
                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "channels of communication",
                            description: 
                                "A shared interface for data transmission between any two devices on a network; no restraints on the physical implementation, or the format that the data must be transmitted over- just that two devices can communicate accross that channel.",
                            notes: [
                            ],
                            aspects: [
                            ]
                        },
                        {
                            name: "the software impact",
                            description: 
                                "considerations & constraints that developers must approach when building software outside of a local system",
                            notes: [

                            ], 
                            aspects: [
                                {
                                    name: "impact of device agnosticism",
                                    description: 
                                        "we assume that our software is not given information about which resources we expect to be available- are actually available",
                                    notes: [
                                        "we trust the atomic machine to manage getting the UI information printed or painted onto the screen",
                                        "verifying the presence of resources and our ability to access them, becomes a key component in the design of our software.",
                                        "adds to the complexity when multiple devices on the network could provide the resources we're looking for; determined by either our own program or handled by some other intelligent broker deployed to the network to facilitate this.",
                                    ],
                                    aspects: [

                                    ]
                                }, 
                                {
                                    name: "Writing for open communication",
                                    description: "common standard of communication to facilitate the receiving to one's sending; don't scream into the void.",
                                    notes: [
                                        "W3C, World Wide Web Consortium",
                                        "ISO, International Standards Organization",
                                        "Common Standards: TCP, UDP, HTTP",
                                        "addressing & naming standards: IpAddressing, DNS or Domain Naming System"
                                    ],
                                    aspects: [

                                    ]
                                },
                            ]//end theSoftwareImpact.aspects
                        }
                    ]
                },//end section: "Expanding The Scope of Software - distributed systems and the challenges they introduce"
                {
                    name: "Topologies and Physical Infrastructure",
                    description: "How networks are implemented; Logical & Physical topology",
                    sections: [
                        {
                            name: "Physical-and-Logical-Topologies",
                            description: "describes how the components of that network are arranged relative to one another",
                            notes: [

                            ],
                            aspects: [
                                {
                                    name: "physical-topology",
                                    notes: [
                                        "how a net is physically connected & organized in 'real space'",
                                        "describes the medium; connections",
                                        "location of devices",
                                        "layout of conns between nodes",
                                        "network-devices determine -in part- what connections are available",
                                        "determines: performance, resilience, & security; limitations & maximums",
                                        "One Firewall Node vs Multiple",
                                        "Physical Topology: identifies connections as wired || wireless. Opposed to 'link' or 'connection'",

                                    ],
                                    aspects: [
                                        {
                                            name: "equipment", 
                                            description: "switches, routers, bridges, NICs (Network Interface Controllers)",
                                            notes: [
                                                "some or all of them may be present on a given implementation",

                                            ]
                                        }
                                    ]
                                },//end physical topology
                                {
                                    name: "logical topology",
                                    description: 
                                        "Explains the conceptual organization of relevant actors on the network; the connective paths in which they 'can' or 'must' communicate with any other actors on the network",
                                    notes: [
                                        "physical topologies don't necessarily map directly to the Logical Model",
                                        "this book deals in 'logical topology'",
                                        "consider logically: what resources we need, or resources to provide=> how to meet those needs"
                                    ],
                                    aspects: [

                                    ]
                                }
                            ]
                        },
                        {
                            name: "Point-to-Point Topology",
                            description: "logical connection between two nodes on a network",
                            notes: [
                                " 'minimum complete network'; at least one connection between at least two nodes ",
                                "lowest cost",
                                "lowest impact on engineering considerations",
                                "benefits are relatively low also",
                                "communication-session on a more complicated 'logical-network' is still an instance of a logical 'point-to-point'",
                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "Linear-Topology",
                            description: "a line; most primitive extension of 'point-to-point'.",
                            notes: [
                                "one of the simplest topologies", 
                                "one node 'at most' connected to two other nodes at a given time",
                                "benefit: cost",
                                "detriment: poor resiliency; turns into a 'one-way' comms network at best if a link of the 'daisy-chain' is broken",
                                "passes the request along to the neighbor that 'DID NOT' send the message to the given terminal",
                                "detriment: tight coupling of nodes",

                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "bus topology",
                            description: "every node on the network is connected to another by way of a common channel of comms",
                            notes: [
                                "each node on the bus is responsible for knowing if the given message or packet is for them",
                                "packets must have information on who the message is going to in relation to the bus",
                                "bandwidth is limited by the single channel",
                                "single point of failure comes with the single channel of comms"
                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "star topology",
                            description: "each peripheral node connected by a single channel to a central 'hub-node'",
                            notes: [
                                "failures are isolated to the channel of a given node",
                                "hub goes down, system to communicate goes down",
                                "sub-topologies interact to create an additional type of topology; point-to-point combined at each node to the hub to create the star topology",
                                "compositional topologies"
                            ],
                            aspects: [
                                {
                                    name: "hub",
                                    description: "broker of communication between all peripheral nodes via 'point-to-point' connections",
                                    notes: [
                                        "failures are isolated to the channel of a given node",
                                        "hub goes down, system to communicate goes down"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Ring Topology",
                            description: 
                                "Unidirectional 'linear topology'; each single node has connection with two other nodes (at most?), but only sends messages in one direction",
                            notes: [
                                "benefit: no request broker needed",
                                "benefit: lowers management costs if appropriate",
                                "detriment: one chain link broken leaves the network useless as a two way comms medium",
                                "max-performance: determined by the SLOWEST link in the chain"
                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "Mesh Toplogy",
                            description: 
                                "non-formal topology where some nodes are connected by way of a single 'point-to-point' connection to some other nodes- and some may have multiple connections to multiple nodes",
                            notes: [
                                "most resilient & common network topologies in use today; almost entirely arbitrary in its organization.",
                                "form: so long it does not fully implement any of the other topologies; no 'obvious specification'",
                                "can-include: networks w/an arbitrary degree of connectivity between nodes- up to & including 'fully-connected-Mesh' network",
                            ],
                            aspects: [
                                {
                                    name: "fully-connected-mesh",
                                    description: "every node has a direct connection to every other node; no terribly scalable",
                                    notes: [
                                        "detriment: not very scalable; quadratic increase in connections for each new node",
                                        "benefit: most resilient, and stable; no node has responsibility of packet-forwarding or request-switching; all nodes have direct connection to each on the network- so direct messages are available",
                                        "full connectivity is not reliant on one node",
                                        "prohibitively expensive",

                                    ],
                                    aspects: [

                                    ]
                                }
                            ]
                        },
                        {
                            name: "hybrid and specialized topologies",
                            description: 
                                "most networks are composed of multiple topologies. eg: star topology; where peripheral nodes link using linear topology individually to facilitate the more complex makeup of the star.",
                            notes: [

                            ],
                            aspects: [
                                {
                                    name: tree-topology, 
                                    description: 
                                        "node of a linear net topology is also the access-point to a secondary linear-topology; hierarchical-linear-topology"
                                }
                            ]
                        }
                    ]//end section.sections
                },//end section "Topologies and Physical Infrastructure"
                {
                    name: "the software impact of distributing resources on a network",
                    description: "", 
                    sections: [
                        {
                            name: "security",
                            description: "most obvious & complicated",
                            notes: [
                                "securing is a moving target; takes vigilence", 
                                "ethical obligation",
                                "can't be sure that upstream access to the network is secure",
                                "only see: process req's on access points to the software [that one takes part in building]",
                                "request-sanitizing-algorithms in use to mitigate what may be in the body of a message",
                                "know what 'using' statements to have"
                            ],
                            aspects: [
                                {
                                    name: "open communication", 
                                    notes: [
                                        "may get a number of mal-formed req's that attempt to be parsed before determining they can't be read.",
                                        "need to first read: exposes one to malicious commands or codes",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "communicationOverhead",
                            description: " 'OTHER' most obvious concern ",
                            notes: [
                                "spend substantial time familiarizing with specific messaging standards of different comms protocols (which is covered in this book)",
                                "headers: telling the software when to stop reading from the connection (etc)",
                                "locally hosted code: benefit of DLLs of libraries among consumer apps to facilitate a shared contract for data structures, use file-access APIs to expose nuts & bolts of data in a message",
                                "network: context has to be given with the message itself", 
                            ],
                            aspects: [
                                {
                                    name: "headers",
                                    notes: [
                                        "informs software on when to stop reading from the connection to get the full & uninterupted binary stream",
                                        "convert the binary stream back into meaningful data structures"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Resilience", 
                            description: "reliability of the connection; access to the resource that addresses common or necessary faults.",
                            notes: [
                                "address moments where network resources may not be available",
                                "consider if the software being built is a dependency for other systems",
                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "Asynchrony",
                            description: 
                                "the concept of processing the result of a request that is not provided by the code internal to your system- when that result becomes available",
                            notes: [
                                "ties in with resiliency",
                                "most presently in UIs where the input should be dealt with while also leaving the UI with the user still able to interact & raise additional events"
                            ],
                            aspects: [
                                {
                                    name: 'round-trip-time',
                                    notes: [
                                        "technically could lock the program in this time",
                                        "Major Key to 'reasonably performing network software'",
                                    ]
                                }
                            ]
                        }
                    ]//end section.sections
                },//end section: "the software impact of distributing resources on a network"
                {
                    name: "NetworkObjects-and-Data-Structures-in-NET-Core",
                    description: 
                        ".net Core class libraries; resources that position one to start working with clean abstractions for complicated network protocols & standards to produce valuable components on a distributed network.",
                    sections: [
                        {
                            name: "using System.Net",
                            description: 
                                "System.Net is a suite of 'general-purpose' .NET Core classes and utilites for programming most protocols & networked system behaviors; root namespace for the most common networking classes.",
                            notes: [
                                
                            ],
                            aspects: [
                                {
                                    name: "Common Classes",
                                    notes: [
                                        "WebRequest",
                                        "WebResponse",
                                        "FtpWebRequest",
                                        "HttpWebRequest"
                                    ]
                                },
                                {
                                    name: "DNS Resolution & Domain Name Service access"
                                },
                                {
                                    name: "Internet Protocol (IP) resolution",
                                },
                                {
                                    name: "socket utility class definitions"
                                }
                            ]
                        },
                        {
                            name: "getting-specific-with-namespaces",
                            description:"Sub-Namespaces of 'System.Net' include many necessary collections of code as well.",
                            notes: [
                                "dotnet-api: https://docs.microsoft.com/en-us/dotnet/api/?view=netcore-2.1"
                            ],
                            aspects: [
                                {
                                    name: "System.Net.Http",
                                    description:
                                        "utility providing HTTP standards-compliant messages and interactions within your .NET Core app",
                                },
                                {
                                    name: "System.Net.NetworkInformation",
                                    description: "provides: Traffic Data, Address Information, with other details about the 'host' node on the network",
                                },
                                {
                                    name: "System.Net.Security",
                                    description: "provides reliably secure networked communication and resource sharing & accessing"
                                },
                                {
                                    name: "System.Net.Sockets",
                                    description: "Exposes netcore managed access to the 'WinSock Interface'",
                                }
                            ]
                        }
                    ]
                },//end section: "NetworkObjects-and-Data-Structures-in-NET-Core"
                {
                    name: "A whole new computing world",
                    description: 
                        "maximum value a piece of software can deliver is limited by the number of downstream consumers of that software who have the ability to leverage it.",
                    sections: [
                        {
                            name: "Long-Distance Communication",
                            description: 
                                "protocols like FTP & SMTP facilitate communication- reliant on robust, & resilient physical infrastructure supporting the internet",
                            notes: [
                                "peer-to-peer comms protocols can facilitate systems of networked multiplayers for 'real-time', high intensity, high-action games",
                            ]
                        },
                        {
                            name: "Share Functionality, not code",
                            description: 
                                "Well defined standards -like RESTful HTTP APIs- promote Stable, clean, well-isolated web API projects that allow a variety of consumers to request functionality that has been written on demand; instead of sharing code 'directly', keep the abstractions & allow only conceptual access to the business logic/process through well documented channels of comms.",
                            notes: [
                                "RESTful API Desgin &  Messaging format of HTTP",
                            ]
                        }
                    ]
                },//end section: "A whole new computing world"
                {
                    name: "Summary + Questions",
                    questions: [
                        //Sumary & Questions
                        {
                            number: 1,
                            name: "What is the definition of a network?",
                            answer: "a. An Arbitrarily large set of computational or navigational devices, connected by channels of communication accross which computational resources can be reliably: sent, received, forwarded, or processed."
                        },
                        {
                            number: 2,
                            name: "What is the difference between a physical and logical topology?",
                            answer: ""
                        },
                        {
                            number: 3,
                            name: "Which was the only network topology discussed in this chapter that is not exposed to a potential single point of failure?",
                            answer: "Mesh Network"
                        },
                        {
                            number: 4,
                            name: "What are some of the physical devices that implement channels of communication on a network? What physical devices serve as nodes?",
                            answer: {
                                primary: "nodes",
                                aspects: [
                                    {
                                        name: "Routers and Switches",
                                        desc: "nodes that do not offer a resource but facilitate communication on a network",
                                    },
                                    "Atomic Devices on the network"
                                ]
                            },
                        },
                        {
                            number: 5, 
                            name: "What is the root namespace for the most common networking libraries and classes provided by .NET Core?",
                            answer: {
                                primary: "System.Net",
                                aspects: [
                                    {
                                        name: "System.Net.Http"
                                    },
                                    {
                                        name: "System.Net.NetworkInformation"
                                    },
                                    {
                                        name: "System.Net.Security"
                                    },
                                    {
                                        name: "System.Net.Sockets"
                                    }
                                ]
                            }
                        },
                        {
                            number: 6,
                            name: "Name at least four classes exposed by the System.Net namespace",
                            answer: [
                                "WebRequest",
                                "WebResponse",
                                "FtpWebRequest",
                                "HttpWebRequest"
                            ]
                        },
                        {
                            number: 7,
                            name: "What are the four other most commonly used namespaces provided by .NET Core for reliable and stable network programming?",
                            answer: {
                                primary: "",
                            }
                        }
                    ]
                }//end section: "Summary + Questions"
            ]//end sections
        },//end 01_chapter
        {
            name: "DNS and Resource Location",
            number: 2,
            description: "real-world implementations of network concepts; resource allocation/distributing resources at the scale of the internet.",
            notes: [
                "distributing resources &&& being able to access them accross the network",
                "systems & standards that make it possible",
                "code will be written"
            ],
            topics: [
                "how data & services are exposed & made available on everything from wi-fi to the internet",
                "specific standards used to identify resources at different levels of the network; URLs & domain names, to device names & local directory access",
                "using the 'DNS' class in .NET Core to access external resources & resolve requests for data within your network"
            ],
            sections: [
                {
                    name: "Technical Requirements",
                    description: "Tools to program, .NET Core command-line-interface (CLI)",
                    notes: [
                        "source-code:  https://github.com/PacktPublishing/Hands-On-Network-Programming-with-C-and-.NET-Core"
                    ]
                },
                {
                    name: "Needles in a Haystack - Data on the Internet",
                    description: 
                        "using resources on the internet involves finding them; reliable delivery leans on the necessity of all devices on the network being uniquely addressed- any software that wants to communicate must also know the target address.",
                    sections: [
                        {
                            name: "The First Network Addresses",
                            description: "telecom context",
                            notes: [
                                "intended requests can be delivered, responses can also find the originating device",
                                "telecom networks",
                                "Phone Numbers; 9,999,999,999 possible devices supported",
                                "2-digit country codes: raise possibilities to a Trillion devices or >100 unique addresses for each human- with 240Billion to spare",
                                "phone books solved the strict number association to an address; hard to remember phone numbers without a name visually associated with it."
                            ],
                            aspects: [
                                {
                                    name: "addressing Principals",
                                    description: "",
                                    aspects: [
                                        {
                                            name: "Usability",
                                            description: 
                                                "to be used by anyone who wanted to communicate over the network; requirement that it is not prohibitively complex",
                                            notes: [
                                                "simplicity of phone books"
                                            ]
                                        },
                                        {
                                            name: "Scalability",
                                            description: 
                                                "connect all possible users with a single unified network; solution needs to grow with the population & geographic region being supported",
                                            notes: [
                                                "extensive range of valid addresses"
                                            ]
                                        },
                                        {
                                            name: "Performance",
                                            description: 
                                                "must cast a shadow on the alternative/existing method of communication; a limitation to what customers will tolerate relating to speed & reliability.",
                                            notes: [
                                                "speeds; embedding semantic meaning into the syntactic standards of the address"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Area Code",
                                    description: "theoretically determined specific geographic regions; routing numbers/calls happened much quicker",
                                    notes: [
                                        "max of 9,999,999 within a 7-digit collection after taking the area code into account for determining area",
                                        "applying semantic meaning  to a 'syntactic standard'",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "DNS - The Modern Phone Book",
                            description: "Domain Name System; system from which one can reliably ask for the address of a given device.",
                            notes: [
                                "uses IP (Internet Protocol) addressing",
                                "the computer network's phone book; distributed mapping of 'human-readable' domain names to their underlying IP Addresses"

                            ],
                            aspects: [
                                {
                                    name: "fixed length numeric addressing",
                                    description: "",
                                    notes: [
                                        "Binary; strictly numeric addresses could be represented consistently in binary",
                                    ]
                                }
                            ]
                        }
                    ]
                },//end section: "Needles in a Haystack - Data on the Internet"
                {
                    name: "URLs, Domain Names, and Device Addresses",
                    description: 
                        "URL naming convention is much less error prone; DNS's bridge between the usability of URLs or Domain Names, & the speed & reliability of IP Addressing",
                    sections: [
                        {
                            name: "URLs - User Friendly Addressing",
                            description: 
                                "a Universally agreed-upon standard for locating resources on the 'web'; specifies order, delimiters, and components that collectively define a location of a resource.",
                            notes: [

                            ],
                            aspects: [

                            ]
                        },
                        {
                            name: "URL Components",
                            description: "Scheme, Authority Component, Path, Query, Fragment-Identifier ",
                            notes: [
                                "scheme:[//authority/]path[?query][#fragment]"
                            ],
                            aspects: [
                                {
                                    name: "Scheme",
                                    description: "transport mechanism || location type",
                                    notes: [
                                        "universally valid schemes including: ['http','ftp']",
                                        "always followed by a 'colon' as a delimiter",
                                        "should contain an optional 'authority' specification- which has its own sub-components"
                                    ],
                                    aspects: [
                                    ]
                                },
                                {
                                    name: "authority-component",
                                    description: "",
                                    notes: [
                                        "designated prefix: '//'",
                                        "indicates that characters following should be parsed according to the specification for a URL Authority",
                                        "prefix is followed by: access credentials, or user information- transmitting an optional userId and/or password to the destination host",
                                        "if included, these optional values will be delimited by a colon (':'), and separated from the rest of the authority component with an '@' sign (aroba)"
                                    ],
                                    aspects: [
                                        {
                                            name: "prefix",
                                            description: "'//'",
                                            notes: [
                                                "followed by: access credentials, or user information- transmitting an optional userId and/or password to the destination host",

                                            ]
                                        },
                                        {
                                            name: "body",
                                            description: "access credentials, user information",
                                            notes: [
                                                "if this element is included, the values are delimited by a colon (\":\"), and separated from the rest of the authority component with an '@' Sign (aroba)",
                                                "always includes a 'host-domain'; host-domain follows '//' or in the event of 'access credentials', the '@' delimiter",
                                            ]
                                        },
                                        {
                                            name: "host-domain",
                                            description: "specifies the physical address of the hardware hosting the resource being located",
                                            notes: [
                                                "specified as either a 'registered domain name', or the underlying IP Address for the hardware"
                                            ]
                                        },
                                        {
                                            name: "listening port",
                                            description: 
                                                "Indicates the port(s) the hardware is responding to regarding a given specific request.",
                                            notes: [
                                                "delimited from the host domain name or IP Address by a colon (':'), indicating the only ports the hardware requests should be sent"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Path Component",
                                    description: "series of path segments to guide the travel of requests to arrive at the resource",
                                    notes: [
                                        "delimited with '/'", 
                                    ]
                                },
                                {
                                    name: "Query Component",
                                    description: "'?' delimiter afterh the 'path' component indicates the beginning of the 'query' component.",
                                    notes: [
                                        "each DIFFERENT query within a URL is delimited by a '=' delimiter, and the requested value of the query parameter - each parameter being delimited by either a semi-colon (';'), or ampersand ('&') between any two query parameters & their values",

                                    ]
                                },
                                {
                                    name: "Fragment Component", 
                                    description: "Often used to identify a 'sub-component' of the eventually-returned resource & used by web-browsers to navigate to a specific fragment of the HTML document that was searched for.",
                                    notes: [
                                        "prefix special key: '#'",
                                        
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Putting it all together",
                            description: "scheme:[//authority/]path[?query][#fragment]",
                            notes: [
                                "scheme:[//authority/]path[?query][#fragment]",
                                "required: {scheme}:{path}",
                            ],
                            aspects: [
                                {
                                    name: "Authority Specification",
                                    description: 
                                        "'//[access_credentials][@]host_domain[:port]'; if an authority component is present it will always be prefixed with '//', and will always CONTAIN the 'host-domain'; with credentials, the 'host-domain' will be necessarily delimited by the '@'",
                                    notes: [
                                        "'@' is the delimiter for aspects of the 'authority spec'",
                                    ],
                                    aspects: [
                                        {
                                            name: "access-credentials",
                                            description: "[user_id][:][password]",
                                            notes: [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "query specification",
                                    description:
                                        " '?[parameter=value][(;|&) [parameter=value]...; extending the allowable character length of a valid URL",
                                    notes: [

                                    ]
                                }
                            ]
                        },
                        {
                            name: "The URL as a sub-type of the URI",
                            description: 
                                "URI: a string of characters adhering to a well-difined syntax that universally and uniquely identifies a resource on a network",
                            notes: [
                                "URI; Uniform Resource Identifier",
                                "URL; Uniform Resource Locator",
                                "uri & url difference: a simple URI, assumes an ability to identify it- that is to distinguish the resource from any other arbitrary resource; whereas a URL designates an identity for a resource",
                                "URL is ALWAYS a URI",
                                ".NET classes refer to the more generic 'URI' specificaiton"
                            ],
                            aspects: [
                                {
                                    name: "URL, Uniform Resource Locator",
                                    description: "kind of URI; guaranteed to be able to identify &&& locate a requested resource"
                                },
                                {
                                    name: "URI, Uniform Resource Identifier",
                                    description: "guaranteed to distinguish the resource from any other arbitrary resource"
                                }
                            ]
                        },
                        {
                            name: "The System.Net.UriBuilder class",
                            desc: "factory class for generating instances of the Uri class",
                            notes: [
                                "provides users with several 'overloaded constructors' to allow the specification of more of the components of a valid URL progressively",
                            ],
                            aspects: [
                                {
                                    name: "",
                                    desc: ""
                                }
                            ]
                        }
                    ],//end sections
                    examples: [
                        {
                            number: 1,
                            name: "build a URI",
                            desc: "use 'public Uri GetSimpleUri()', and create a URI instance"
                        }
                    ]
                }
            ]
        },//end 02_chapter, "DNS and Resource Location"
        {
            number: 3,
            name: "",
            section: [
                {
                    name: "",
                }
            ]
        },
    ]//end 'chapters'
})

    







