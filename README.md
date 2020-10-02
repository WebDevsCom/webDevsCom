# WEBDEVSCOM
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Community to help developers by providing them all kinds of free resources at one place. 

[![Author](https://img.shields.io/badge/Author-Binu42-brightgreen.svg)](http://binu42.netlify.com/)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Repo Link](https://img.shields.io/badge/Repo-Link-black.svg)](https://github.com/WebDevsCom/webDevsCom)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?)](https://github.com/prettier/prettier)

#### [Looking for contributors in helping me to add this resources](https://github.com/WebDevsCom/webDevsCom/issues/9#issue-629936276) please not add more than 3 resources in one PR.

<p align="center">
<img src="https://user-images.githubusercontent.com/45959932/83921121-5a997f80-a79b-11ea-897d-e18634b0a9e1.png" width="100%">
</p>

<p align="center">
  View our <a href="http://webdevscom.github.io/">Website</a>.
 </p>

## Main Libraries/Frameworks Used
  * [Bulma](https://bulma.io/documentation/components/card/)
  * [React](https://reactjs.org/)

## Installation
if you have not installed nodeJS install it. then:-
<br>
  ```sh 
  npm install && npm start
  ```


## Contribute
> Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you're new to contribute to Open Source on Github, [this guide](https://guides.github.com/activities/contributing-to-open-source/) can help you get started. Please check out the [contribution guide](CONTRIBUTING.md) for more details on how issues and pull requests work.

### Steps to add Resources
* go to [/src/components/Resources/resourcesData.js](https://github.com/WebDevsCom/webDevsCom/blob/master/src/components/Resources/resourcesData.js)
* structure of Data to add 
  
```javascript 
{
    id: 9,  // +1 than last available resource data
    link:
      'https://raw.githubusercontent.com/dipakkr/A-to-Z-Resources-for-Students/master/README.md', // raw url Link of  Repo. Readme file
    repoName: 'A-to-Z-Resources-for-Students',  // Available Repo. name
    description:
      'Curated list of resources for college students. you should definitely check this out.', // Description of Resources
    repoOwnerName: 'dipakkr', // Repo. owner name(Id) or Repo. owner organisation
    repoOwner: 'Deepak Kumar',    // Repo. owner full name or Repo. owner organisation
    category: ['web-dev', 'mob-dev', 'course', 'language'],    // category from which resource belong (choose from below available categories)
}
```

* available categories:-
  - web-dev
  - mob-dev
  - frontend
  - backend
  - language
  - project
  - course
  - podcast
  - interview


## Show your support

show your  :heart: and  :+1: by giving :star: to this Repo. if this project helped you in anyways!

## Stars History

[![Stargazers over time](https://starchart.cc/WebDevsCom/WebDevsCom.svg)](https://starchart.cc/WebDevsCom/WebDevsCom)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.binu.live"><img src="https://avatars2.githubusercontent.com/u/45959932?v=4" width="100px;" alt=""/><br /><sub><b>Binu kumar</b></sub></a><br /><a href="#infra-Binu42" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/WebDevsCom/webDevsCom/commits?author=Binu42" title="Code">💻</a> <a href="https://github.com/WebDevsCom/webDevsCom/commits?author=Binu42" title="Tests">⚠️</a> <a href="#maintenance-Binu42" title="Maintenance">🚧</a> <a href="#ideas-Binu42" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://jaydeepkhatri.me/"><img src="https://avatars0.githubusercontent.com/u/29619945?v=4" width="100px;" alt=""/><br /><sub><b>Jaydeep Khatri</b></sub></a><br /><a href="#content-jaydeepkhatri" title="Content">🖋</a></td>
    <td align="center"><a href="https://themesberg.com"><img src="https://avatars1.githubusercontent.com/u/8052108?v=4" width="100px;" alt=""/><br /><sub><b>Zoltán Szőgyényi</b></sub></a><br /><a href="#content-zoltanszogyenyi" title="Content">🖋</a></td>
    <td align="center"><a href="http://jackdolgin.org"><img src="https://avatars0.githubusercontent.com/u/29798528?v=4" width="100px;" alt=""/><br /><sub><b>Jack Dolgin</b></sub></a><br /><a href="#content-jackdolgin" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!