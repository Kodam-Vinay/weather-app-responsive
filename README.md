=> this is a weather app built using express js
=> in this i used openweathermap API https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=a3547addf902f2a1e709f062a2e801dd
=> in this project i used handlebars(hbs) which is like html syntax but more powerful, template engines
=> resuable code moved into partials
=> to access the public folder i created a static path using express.static(staticPath)//middleware
=> to access the views first we need to create view engine and we need to give path to access that files inside views folder
=> to access the partials first we need to create a path to access partials 
=> based on weather it shows the weather icon 
