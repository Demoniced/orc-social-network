const express = require('express')
const app = express()
const PORT = 8000

const orcSubjects = {
    'david bardari':{
        'name':'David Bardari',
        'age': 59,
        'vehicles':'Taxi',
        'active areas': ['Middletown','Newburgh'],
        'retailers impacted':['Lowes','Home Depot'],
        'mugshot':' '
    },
    'carrime stratton':{
        'name':'Carrime Stratton',
        'age':44,
        'vehicles': 'unknown',
        'active areas':['Middletown','Newburgh','Poughkeepsie'],
        'retailers impacted':['Lowes','Home Depot','Target'],
        'mugshot':' '
    },
    'norman wilson':{
        'name':'Norman Wilson',
        'age':50,
        'vehicles': ['White SUV','White Pickup Truck'],
        'active areas':['Middletown'],
        'retailers impacted':['Lowes','Home Depot'],
        'mugshot':' '
    },
    'joe hernandez':{
        'name':'Joe Hernandez',
        'age':29,
        'vehicles': 'Black SUV',
        'active areas':['Middletown','Newburgh'],
        'retailers impacted':['Lowes','Home Depot'],
        'mugshot':' '
    }
    
}
//Sets server up on port 8000
app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}`)
})
//While on main page it sends index HTML
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
//when on /api it shows the whole api in JSON
app.get('/api',(req,res)=>{
    res.json(orcSubjects)
})
//Allows you to set a query paramater for the api
app.get('/api/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    if(orcSubjects[name]){
        res.json(orcSubjects[name])
    }else{
        console.log('error')
    }
})

