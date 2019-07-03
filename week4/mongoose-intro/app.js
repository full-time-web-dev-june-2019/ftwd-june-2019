
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blah');

const CatObject = require('./models/Cat');

// the collection in mongo is going to be called cats because we call our model Cat


//ADDING STUFF TO THE DATABASE

// const oneSingleCat = new CatObject({name:"Mrs. Kitty"});

// oneSingleCat.save()
// .then(()=>{
//     console.log('yay it worked');
// })
// .catch(()=>{
//     console.log('sorry, didnt work cant save the cat');
// })


//.create lets us create and save a new instance of a model without creating a variable to hold it
// its slightly shorter more fancy

// CatObject.create({name: 'Jameson', color: 'brown', age: 9, weight: 20})
// .then(()=>{
//     console.log('dot create worked')
// })
// .catch((err)=>{
//     console.log('dot create didnt work', err)
// })


//READING THE STUFF THAT IS CURRENTLY IN THE DATABASE

//.find always returns an array even if it only finds 1 match

// CatObject.find({}, {name: 1}).sort({name: -1})
// .then((allTheStuff)=>{

//     console.log(allTheStuff);

// })
// .catch((theErrorObject)=>{

//     console.log(theErrorObject)

// })


//.findOne will always return 1 even if there are multiple matches, it just gives you the first match it finds

// CatObject.findOne({name:"Figaro"})
// .then((oneSingleCat)=>{
//     console.log(oneSingleCat);
// })
// .catch((error)=>{
//     console.log(error);
// })


// CatObject.findById("5d1cf2841997d0f43fa88389")
// .then((theCat)=>{
//     console.log(theCat);
// })
// .catch((theError)=>{
//     console.log(theError);
// })


function successCallback(msg){
    console.log(msg);
}

function errorCallback(err){
    console.log(err);
}

// CatObject.updateMany({color: {$exists: false}}, { color: 'striped', age: 3 })
//   .then(successCallback)
//   .catch(errorCallback);

// CatObject.findByIdAndUpdate('5d1cf10e5531daf490dcf134', {
//     color: 'White',
//     age: 1
// })
// .then(successCallback)
// .catch((errorCallback))


// CatObject.findByIdAndRemove('5d1cf10e5531daf490dcf134')
// .then(successCallback)
// .catch(errorCallback)


// CatObject.deleteMany({name: 'Figaro'})
// .then(successCallback)
// .catch(errorCallback)
