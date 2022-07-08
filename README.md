# Json-API-Project

## Project Description 

In one of my previous projects in which I created a website using the Open Library API I found that there were several things lacking from the point of view of a user. One akward situation I found using the project was that for many novels information was incomplete. Although a user can read the data, the user could not create update or destroy (the other functions of CRUD. This project uses the Open Library API's data as a baseline and makes it more CRUD/user friendly. 


## Sample Code from Open library API

Using a fetch request I can fetch data from the API here an example of what I would get if I retrieved the file via a simple fetch request 


...
// This :
const url4 =`https://openlibrary.org/works/OL381550W.json` // The Island of Dr. Moreau 

fetch(url4)
.then(res => (res.json()))
.then(x => console.log(x))



// Would retrieve this:
Object { title: "The Island of Dr. Moreau", key: "/works/OL381550W", authors: (1) […], type: {…}, covers: (56) […], subjects: (23) […], subject_times: (1) […], description: "See work: https://openlibrary.org/works/OL15308975W", latest_revision: 19, revision: 19, … }
​
authors: Array [ {…} ]
​
covers: Array(56) [ 968312, 6806742, 8866473, … ]
​
created: Object { type: "/type/datetime", value: "2009-10-27T19:38:35.179683" }
​
description: "See work: https://openlibrary.org/works/OL15308975W"
​
key: "/works/OL381550W"
​
last_modified: Object { type: "/type/datetime", value: "2022-06-21T00:47:32.799635" }
​
latest_revision: 19
​
revision: 19
​
subject_times: Array [ "Late 19th century" ]
​
subjects: Array(23) [ "Islands", "Survival after airplane accidents, shipwrecks", "Fiction", … ]
​
title: "The Island of Dr. Moreau"
​
type: Object { key: "/type/work" }
...
