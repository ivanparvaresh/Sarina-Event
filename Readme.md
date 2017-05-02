# Sarina.Event

This plugin has implemented NodeJs Event for sarina. 
Plugin created by [JavadParvaresh](https://github.com/javadparvaresh).


## Table of contents
- [Quick Start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [The Basics](#the-basics)
- [The Configuration](#the-configuration)
- [Apis](#apis)

## Quick start

Several quick start options are available:
- Clone the repo: `git clone https://github.com/javadparvaresh/Sarina-event.git`
- Install with [npm](https://www.npmjs.com): `npm install sarina.event`

## Bugs and feature requests

Have a bug or a feature request? [please open a new issue](https://github.com/javadparvaresh/Sarina-Event/issues/new).

## The Basics
```javascript

var sarina=require("sarina");
var sarinaevent=require("sarinaevent");

// create a sarina app by passing configuration
var app=sarina.create({});

// create subscriber for an event
app.exec("subscriber",["event"],function($event){
    return {
        run:function(){
            return new Promise(function(resolve,reject){
                $event.on('hi',function(name){ // receiver event and handle functionality
                    console.log("hi name"); 
                })
            })
        }
    }
});

// create a publisher for hi event
app.exec("publisher",["event"],function($event){
    return {
        run:function(){
            return new Promise(function(resolve,reject){
                $event.emit('hi','javad'); // we publish an event 
            })
        }
    }
    
});

// add to modules
app.module(sarinaevent);

```