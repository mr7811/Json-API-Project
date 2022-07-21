# Json-API-Project

## Project Description 

In one of my previous projects in which I created a website using the Open Library API I found that there were several things lacking from the point of view of a user. One akward situation I found using the project was that for many novels information was incomplete. Although a user can read the data, the user could not create update or destroy (the other functions of CRUD. This project uses the Open Library API's data as a baseline and makes it more CRUD/user friendly. 


## API

Books can be found using /books
in the root route you should see something like api route


Information could be found in the seed folder in books.json for each individual book this is an example:



```
"Title": "A World Set Free",
    "Author": "H.G Wells",
    "Description":"The World Set Free is a novel written in 1913 and published in 1914 by H. G. Wells. The book is based on a prediction of a more destructive and uncontrollable sort of weapon than the world has yet seen.", 
    "Cover":"https://books.google.com/books/content?id=mvL3zQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71GDNa0ICB8kyXYQPci7OgoyFeah7ukDXf0qjWnMYxu-agWlKUSkaoXxB63p-GjMNm9rQg0CGYH2amTAo0qdo6Pe-wXxRjtHMecL4jOCrDrpu3Ox-w_ws2qfvV9c-BFIRa1EsI_&source=gbs_api" ,
    "URL":"https://www.google.com/books/edition/The_World_Set_Free/olkjEAAAQBAJ?hl=en&gbpv=0",
    "linkToBuy": "https://www.amazon.com/World-Free-Herbert-George-Wells-ebook/dp/B0082RZ8CI/ref=sr_1_1?keywords=The+World+Set+Free&qid=1658362013&s=books&sr=1-1",
    "NYPL_Link": "https://nypl.overdrive.com/media/6331863?utm_campaign=searchfeed&utm_source=google"
  },
  {
  ```



## An Example Model Using Mongoose and Express
I will add some data in addition to the given data from the API to create a more intuitive API. I will be adding a link in which you can buy the product from google books, along with a link in which you can borrow the book in NYPL. The rest being standard properties of books.
Here is a sample code:

```
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Book = new Schema({
    Title: { type: String },
    Author: { type: String },
    Description: { type: String },
    Cover: { type: String },
    URL: { type: String },
    linkToBuy: { type: String },
    NYPL_Link: { type: String },
  });
```
