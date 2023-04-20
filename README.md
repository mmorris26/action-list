# Action List Using React and APIs

# Motivation

The aim of this project is to practice my React skills. The second part of the SEI course teaches us to build web applications using React. We also learnt how to use APIs to read data from other sources and render that in our React application. This project pulls all of this knowledge together as well as the javascript, HTML and CSS we learnt for Project 1.

##

Below are the user stories for this project;

* As a user, I should be able to see my list of Action items.
* As a user, I should be able to mark an Action item as complete.
* As a user, I should be able to edit an Action item in the list.
* As a user, I should be able to delete an item from the list.
* As a user, I should be able to delete all items from the list.
* As a user, I should be able to delete only selected items from the list.
* As a user, I should be able to note the location of where my action is taking place.
* As a user, I should be able to see the weather forecast of the location.

# Design Process

## Wireframes

Below shows my initial design for the Actions section of my web app.
![IMG_4213](https://user-images.githubusercontent.com/126505751/233420163-f174b7d8-1c1e-4a61-a5c4-8c81baeb77f5.jpg)



From this design I then thought about how I would lay this out with CSS and produced the following design.

![IMG_4214](https://user-images.githubusercontent.com/126505751/233420194-9ea20046-287f-4c44-82a1-f7179f7a0404.png)

Here it can be see that I am planning to use a CSS grid layout with 4 columns. My individual actions will have 4 fields each, 3 of these will be paragraph elements and one select element.

Finally for the tab that displays the weather to the user this is my original design.

![IMG_4215](https://user-images.githubusercontent.com/126505751/233420235-dafc39b0-d3b6-4175-82e3-c0c8d8c779ee.jpg)

## Current State

Having gone through the building process below shows the current state of the homepage of my app.

![image](https://user-images.githubusercontent.com/126505751/233421319-723b7858-f5ae-4962-9360-122fd879ea6a.png)

and the weather page 

![image](https://user-images.githubusercontent.com/126505751/233421523-ad06f5cc-59cf-47db-aa00-66643e3cfccc.png)

## Building

Building this app took far longer than I originally anticipated. Initially I wanted to have a fairly flat hierarchy so that I wouldn't have to pass props down different levels that often. However as I started to build it I realised I need to split certain components out from each other as they were interferring. In the end my final tree structure looked like the following.

![image](https://user-images.githubusercontent.com/126505751/233422435-9c02f905-9de2-4919-89ef-5dcc7608ff42.png)

Essentially the structure is comprised of the following components;

* **App** - The component that houses my two parents components. This component holds the state of the location which is then passed down to the Weather component to make the relevant API calls with.
* **Action Item List** - This component holds the individual action items and renders them as list so that when a new one is added it assumes the desired format and the desired place in the list.
* **Action Item** - Holds all the functions and jsx for the Action Items themselves and makes numerous calls to methods in the Home component to make changes to the state rendered on the screen.
* **Home** - In terms of lines of code this is the biggest component. It holds the main state of the entire app which is the state of the Actions on the UI. All methods to remove, add, edit or get postcode information all have to ultimately change this state.
* **Add Action Item** - This component is the one that deals with the user input. It is a footer and allows the user to create new action items. 
* **Weather** - The Weather component houses the logic to make the necessary API calls to the weather API to get location based weather information. 

## Features To Add

Due to this project taking longer than expected there are a number of features I wanted to add but ultimately did not have time for. They are as follows;

* **Weather Forecast** - Originally I wanted to include two views of the weather, one based on the current weather and one based on the weather of the end date of the action. This is a feature I will add in the future.
* **Calendar** - When I have the relevant skills I want to be able to post my action items to Google Calendar and have them display the items as calendar events. I would create another route in my app to host the users calendar.
* **Input Validation** - Currently when a user creates a new action there is no validation on any of the onput fields. A refinement I would like to make is to 

