# CODE QUALITY

In order to assure the quality of the code we should follow these rules:
  - Code and comments must be in English
  - Variables should be self explanatory
  - No hardcodes
  - DRY
  - To summarize all it should be the best code we can deliver



# Pull request / merge request

Since this is a new team and we are not mature enough i encourage all of you this Pull Request system, 
so you would not have direct permissions in this repository, but you guys can fork it and whenever you
have some code ready (features, bugfixes, developments etc.), create a nice Pull Request and it will
be accepted as soon as possible.


## Commits
The commits should be followed with a tag of the work we have done -> [INFO],
followed by a short and descriptive message -> Added contributing.md

So the full commit should be like this -> [INFO] Added contributing.md

Normally our tags will look like:
  - DEVELOPMENT -> When we add a new full development, for example a screen.
  - FEATURE -> When we add new functionality in a development that was already created and in production / remote origin server, for example a button in a screen.
  - BUGFIX -> Whenever we encounter a bug, whether it's in a Development or in a Feature.
  - TEST -> When we create a new TEST (feature test, integration etc.)
  

## Branches
For now we will only have 1 common branch which is Main, and we will create branches whenever we are developing a task (test, development, feature etc.).

So when we finish our task we can merge it in that git repository.


## Development cycle.
In order to start your first development *read the previous rules*, and since we don't have Docker (still),

I encourage you to work with VScode and install a Linter, it's important cause this repo will have some code rules that must be followed and must satisfy
linter (code rules).

Also if you wan't to know how to install the project in your computer, follow the RAEADME.md steps
