## guildsite-azeroth

> This is a backup and archive of (Mobiusgames) Mu Philippine's **Azeroth** guild website, as it was last seen on webs.com (freewebs.com) before it was deactivated. I'm uploading it in public for future references, and maybe get to update the site to use modern web design and layout techniques if time permits.  
>
> **NOTE:** The original site uses static files and outdated HTML/JS approaches. Some functionality on various pages may not work on modern browsers. Some links may lead to 404 not found pages because some of the original static html files are missing.

## Demo

https://github.com/muonlineph/guildsite-azeroth/public


### Content

- [Demo](#demo)
- [Content](#content)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. NodeJS
	- node version 12.16.3
	- npm version 6.14.4
3. NodeJS modules (installed via npm)
	- gulp v.4.0.2
	- browser-sync v.2.26.7


## Installation

1. Clone this repository.  
`https://github.com/muonlineph/guildsite-azeroth.git`

2. Install dependencies.  
`npm install`


## Usage

1. Run the localhost static website development environment.  
`npm run dev`

2.  Edit the existing static files from the **./public** directory and wait for live reload. Your updates will reflect on the web browser.

3. To include new static website files on live reload:
	- Stop the localhost **dev** server.
	- Create your new static (.html, .js, .css) files inside the **./public** directory.
	- Re-start the **dev** server.  
`npm run dev`

4. Run the production static website (does not use live reload).  
`npm run start`

## Credits

Many thanks to GM Ethan for writing most of the site's content and for guild members' active participation in-game and on-site.

@weaponsforge  
20211108