var sarina=require("sarina");
var sarinaevent=require("./../event");

// create a sarina app by passing configuration
var app=sarina.create({});

// add to modules
app.module(sarinaevent);

// Defining model
app.exec("subscriber",["event"],function($event){
    return {
        run:function(){
            return new Promise(function(resolve,reject){
                $event.on('hi',function(name){
                    console.log("hi name");
                })
            })
        }
    }
});
app.exec("publisher",["event"],function($event){
    return {
        run:function(){
            return new Promise(function(resolve,reject){
                $event.emit('hi','javad');
            })
        }
    }
    
});

// finally we need to start app
app.start();