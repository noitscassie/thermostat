# Thermostat Challenge

[Introduction](#introduction) | [Running the App](#running-the-app) | [Challenges](#challenges) | [Tech Stack](#tech-stack)

## Introduction

The Thermostat Challenge (known affectionately by literally no one except me as Thermy the Thermostat) is the Week 5 Challenge at Makers Academy. The full spec is available [here](https://github.com/makersacademy/course/tree/master/thermostat). In brief, the challenge was to create a browser-based thermostat application that could increment and reduce temperatures, toggle a power saving mode that would change maximum and minimum temperatures, and a weather widget that could display weather data in a city selected by the user.

## Running the App

At the point of completing this project, simply running a local server via a service such as `rackup` would allow this project to run. Since completing this project, it appears that there is a gem error with Sinatra and DataMapper which prevents `rackup` from running. ([GitHub Issue](https://github.com/sinatra/sinatra/issues/1294)).

## Challenges

Following four weeks of programming almost exclusively in Ruby, this was our first week working in a different language. As such, this week came with all the challenges associated with learning a new programming language: design patterns, scope, a new testing framework, and different ways of thinking about the world. this

Despite this, there were also several other challenges we faced during the week. Using jQuery gave us our first experience of using an external library. Meanwhile, viewing weather information for a city gave us our first chance to use an API, as we used the service provided by [Open Weather Map](https://openweathermap.org/api) to load live data. 

## Approach

To begin gaining familiarity with JavaScript and the Jasmine testing framework, we began the week first by completing [FizzBuzz in JavaScript](https://github.com/peterwdj/fizzbuzzJavaScript), and then [recreating Makers' Week 1 Weekend Airport Challenge](https://github.com/peterwdj/airport-js). In order to complete the challenge, we followed the user stories set out in the spec for the challenge outlined above.


## Tech Stack
 - JavaScript
 - jQuery
 - Test framework: Jasmine
 - Sinatra
 - Postgres (used as part of the final challenge to store and load state)
