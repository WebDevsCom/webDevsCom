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
