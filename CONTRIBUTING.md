## Contribute

> Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you're new to contribute to Open Source on GitHub, [this guide](https://guides.github.com/activities/contributing-to-open-source/) can help you get started. Please check out the [contribution guide](CONTRIBUTING.md) for more details on how issues and pull requests work.

### Steps to add Resources

- go to [/src/data/resourcesData.js](https://github.com/WebDevsCom/webDevsCom/blob/master/src/data/resourcesData.js)
- structure of Data to add

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

- available categories:-
  - web-dev
  - mob-dev
  - frontend
  - backend
  - language
  - project
  - course
  - podcast
  - interview
  - productive
  - data-science
