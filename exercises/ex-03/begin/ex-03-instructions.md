# Exercise 3 Instructions

## Objectives
* Create a module, PayeesModule
* Create a component, PayeesManager
* Register PayeesManager with PayeesModule
* Register PayeesModule with AppModule

## Using the CLI

* Create a module  
Make sure you are in the app folder  
Create a module with the CLI  
`ng generate module payees --spec false --routing --dry-run`  
Remove the `--dry-run` option when you are confident you have the command right  
Change directory into the newly created module

* Create a component, PayeesManager  
Make sure you are in the payees folder
`ng generate component payees-manager --spec false --dry-run`
Try some other commands, accessible through
`ng generate component --help`
Remove the `--dry-run` option when you are confident you have the command right  

* Registration  
Open payees/payees.module.ts  
Note that PayeesManagerComponent is already registered there
Open app.module.ts  
Note that PayeesModule is already registered there  
Now open app-routing.module  
Uncomment the two commented out lines  
Try clicking on the "Payees" link in the browser, and see what happens!