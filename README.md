# Commands
* diff - Opens TortoiseGit ShowCompare View and Compares a given Branch (default: HEAD) with another given Branch (default: process.env.BASE_FROM)
* log - Opens the TortoiseGit Log View based on the process.env.SMO_HOME

```
smo --help 
```
For more info

# Requirements
* Nodejs must be installed
* TortoiseGit must be installed, and located in the PATH
* SMO_HOME must be set as an Environment Variable
* BASE_FROM must be set as an Environment Variable

## Environment Variables
* SMO_HOME: The base directory from which the TortoiseGit and basic Git Commands will be executed
* BASE_FROM: The base Branch which will be used by default for the from Branch in the Diff Command

# Install
Execute in the Root Directory of this Project the following command
```
npm install -g --force ./
```
You should be able to use the "smo" Commands from every Terminal now.


# Development
* Create .env and set the following Environment Variables
  * SMO_HOME
  * BASE_FROM