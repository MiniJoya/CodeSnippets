#Enable arp
                               #(ip address)
/ip arp enable [find address="xxx.xxx.xxx.xxx"];

#Disable arp
                               #(ip address)
/ip arp disable [find address="xxx.xxx.xxx.xxx"];

#Search by name in queue simple (can be used any other attribute like target instead of name)

/queue simple print where name ~ "";

#Export clients from queue simple to an .rsc file (stored on files folder)

/queue simple export file="filename.rsc";

#Export clients ARP from queue simple to an .rsc file (stored on files folder)

/ip arp export file="filename.rsc";
