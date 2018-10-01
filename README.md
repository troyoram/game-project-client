# Tic-Tac-Toe Project

The Tic-Tac-Toe game is the first project assigned to students in General
Assembly's Web Development Immersive (WDI) course.  The student is tasked with
using material learned in class during the first two weeks to create and deploy
a web application to log in using auhtenticated credentials and participate in
playing Tic-Tac-Toe games alternating between Player "X" and Player "O".

The live version of the game can be found [here](https://troyoram.github.io/game-project-client/)

## Technologies Used

Browser: Google Chrome with DevTools
Editor: Atom
Other Tools: Node Package Manager

## User Stories

1.  As a user, I want to login with email and password, so that my ID is authenticated.
2.  As a user, I want to change my password, so that it can be more meaningful.
3.  As a user, I want logout capability, so that game session will be closed.
4.  As a user, I want player active status, so that current player is known
5.  As a user, I want invalid cell choices disabled, so that cheating is prohibited
6.  As a user, I want game status displayed, so that win tie, or game in progress is known
7.  As a user, I want current game disabled upon win or tie, so that cheating is prohibited
8.  As a user, I want to select a new game, so that game playing can continue
9.  As a user, I want clearly defined graphics, so that game is visually appealing.

## Wireframe

![Wireframe](https://troyoram.github.io/game-project-client/public/wireframe.png)

## Schedule

Tuesday, September 25th

Planning
 1.  Review game-project-scope-study
 2.  User Stories
 3.  Review project-planning-wireframes-practice
 4.  Wire Frames

Set Up
 1.  Download Browser Template
 2.  Create a Github Repository
 3.  Deploy to Github Pages

Wednesday, September 26th
Game Engine
 1.  Create Empty Board in JS
 2.  Create Current Player
 3.  Add Current Player to Board
 4.  Current Player rotates between x and o
 5.  Cannot choose already occupied spots
 6.  Check Board for Winner

Thursday, September 27th
Game UI
 1.  Design a game board
 2.  Add a click handler for when a space on the game board is clicked
 3.  If the user clicks on a valid space then add their X or O
 4.  Do not allow users to add an X or O to an invalid space
 5.  Do not allow users to add an X or O to any spaces after the game is over
 6.  Update the game engine when the game board is updated
 7.  Add messaging for the user when the turn changes
 8.  Add messaging for the user when the user clicks on an invalid space
 9.  Add messaging for the user when the game is over (win or draw)

Friday, September 28th
Authentication
 1.  Review api-token-auth
 2.  Sign Up (curl then web app)
 3.  Sign In (curl then web app)
 4.  Change Password (curl then web app)
 5.  Sign Out (curl then web page)
 6.  All API calls have success or failure messages

Game API
 1.  Review query-ajax-post
 2.  Create Game, start new game (curl then web app)
 3.  Update Game, play the game (curl then web app)
 4.  Get Games (curl then web app)

Saturday-Monday, September 29th-October 1st
Final Touches
 1.  README
 2.  Troubleshoot/Debug
 3.  Style

Tuesday, October 2nd
Project Presentation

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node Package Manager

```sh
npm install
```

### Installing

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/browser-template-master.zip`.
1. Rename the template directory from `browser-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled "…or push an existing
   repository from the command line." Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

## Testing

There were no requirments for developing automated tests for this project.  As
a result, no automated tests exist the the Tic-Tac-Toe project.

### Coding style tests

Linter for Atom was used to enforce coding style

## Deployment

grunt deploy was used to deploy to github

## Built With

No web frameworks, dependency management, or RSS feeds were used for this project

## Contributing

Please read [CONTRIBUTING.md](https://troyoram.github.io/game-project-client/CONTRIBUTING.md) for details on the process for submitting pull requests.

## Versioning

git commit and git push was used for versioning. For the versions available, see the [tags on this repository](https://troyoram.github.io/game-project-client/).

## Authors

* **Troy Oram** - *Initial work* - [GitHub](https://troyoram.github.io/game-project-client/)

## License

This project is licensed is licensed under a CC-BY-NC-SA 4.0 license - see the [LICENSE.md](https://troyoram.github.io/game-project-client/LICENSE.md) file for details

## Acknowledgments

* Compliments to Jack Allan on [stack overflow](https://stackoverflow.com/a/24376236) for the tic-tac-toe winner determination code
