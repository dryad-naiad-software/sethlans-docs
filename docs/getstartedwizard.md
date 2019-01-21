---
id: gstartedwizard
title: Get Started Wizard
---
After the Sethlans initial installation, log in with the administrative user.  The Get Started Wizard will be displayed.

This wizard covers two major parts of adding nodes to Sethlans for rendering.
* Server to Node Authorization
* Node Addition

### Server to Node Authorization
Instead of passing usernames and passwords around a server key is used.  This key must be present on a node in order to add the node to that server.

This prevents nodes from being added to any server without permission, as well as eliminates the need to supply usernames and passwords.

### Node Addition
A node needs to be added to a server before projects can render on it.  Once communication is established the server will send a benchmark request in order to gage the strength of the node.  The lower the benchmark score the faster the node.

## Welcome Screen
![welcome](assets/gswizard/initial.PNG)

This screen is displayed after login.  Once the Get Started Wizard has been run it is disabled.  
* Show this wizard instead of Dashboard - Toggles the Get Started Wizard.

## Server to Node Authorization Screen
![nodeadd](assets/gswizard/nodeadd.PNG)

## Node Selection Summary Screen
![node_summary](assets/gswizard/node_selection.PNG)

## Completion
![complete](assets/gswizard/complete.PNG)
