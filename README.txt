//Read Me

Reci.P is a web app created by Joshua Waldman and Luvy Cunanan. 
Technologies used: 
    -HTML
    -CSS
    -JavaScript
    -Express
    -Mongoose
    -EJS
    -Express-Sessions
    -FontAwesome
    -Google GoogleFonts
Planned using:    
    -Trello
    -diagrams.net


Reci.P is a web app that was made to serve as a online cookbook for the user to store their favorite recipes from all their favorite recipe websites in one place. After signing up and loggin in to their account using their chosen username and password the user can assign a category (Breakfast, Lunch, or Dinner) to their recipe so that it's easier to decide what to cook when choosing a recipe. On top of storing the recipe's url we also provide a place for the user to enter in notes about the recipe. (e.g. if the user adds more of a certain ingredient or if the recipe takes longer than the website says that it does.)   
User's can add and remove and edit their recipes and notes as many times as they would like.

User Stories:
    -View landing page
    -Sign Up to Reci.P
    -Log in their Reci.P account
    -Add Recipes to their database
    -View all recipes that they've added
    -View all recipes of a specific category
    -Edit their recipes

WIREFRAMES IN WIREFRAME FOLDER

Milestone/Trials & Tribulations:
1.Our initial idea included not only users but a comment section too. After spending more time than we should have we realized that our idea was a bit out of reach for our skills at the time so we had to pivot to a simpler model that was just Recipes and categories. 

2. When building out our recipe index page we spent 20 minutes stuck with a broken page until we realized that we had .length spelled as .lenght.

3. CSS caused some big headaches as well. When working on one of our page's flex displays we tried everything we could and even got an instructor involved to help solve our problem. Turns out, there was an extra 's' on our class name. Once we discovered and removed that 's', everything worked as expected. We will not disclose how long that took us to figure out. 
3. After completing our MVP we decided that we wanted to add the User functionality. That was a complete headache because that meant refatoring all of our code to include a user in the recipe creation and sorting process. After remembering the mongoose $and function that all became a lot clearer. 

