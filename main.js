let katasList = document.querySelector('.katas-list')

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

function createHTML(title, array) {
    const kataHeading = document.createElement('h2')
    const kataBody = document.createElement('h3')
    
    kataHeading.append(title)
    kataBody.append(array)
    document.body.append(kataHeading)
    document.body.append(kataBody)

}
// KATA 1
const kata1Heading = document.createElement('h2')
const kata1Body = document.createElement('h3')
let kata1Array = []                               
let counter = 1
while (counter <= 20) {
    kata1Array.push(counter)
    counter += 1
}
kata1Heading.append('Kata One')
kata1Body.append(kata1Array)
document.body.append(kata1Heading)
document.body.append(kata1Body)

// KATA 2
let kata2Array = []
counter = 1
while (counter <= 20) {
    if ((counter%2)===0) {
        kata2Array.push(counter)
    }
    counter +=1
  }
createHTML("Kata Two", kata2Array)
    
// KATA 3
let kata3Array = []
counter = 1
while (counter <= 20) {
  if (counter%2===1) {
    kata3Array.push(counter)
  }
  counter +=1
}
createHTML('Kata Three', kata3Array)

// KATA 4
 let kata4Array = []
 counter = 5
while (counter <= 100) {
     kata4Array.push(counter)
     counter += 5
 }
 createHTML('Kata 4', kata4Array)

 // KATA 5
let kata5Array = []
counter = 1
counterX = 1
while (counterX < 100) {
    counterX = counter * counter;
    kata5Array.push(counterX)
    console.log(counterX)
    counter += 1
}
createHTML('Kata 5', kata5Array)

 // KATA 6
 let kata6Array = []
 counter = 20
 while (counter >= 0) {
     kata6Array.push(counter)
     counter -= 1
 }
 createHTML('Kata 6', kata6Array)

 //KATA 7
 let kata7Array = []
 counter = 20
 while (counter >= 0) {
     if (!(counter %2)) {
         kata7Array.push(counter)
     }
     counter -= 1
 }
 createHTML('Kata 7', kata7Array)

 // KATA 8 
 let kata8Array = []
 counter = 20
 while (counter >= 0) {
     if ((counter % 2)) {
         kata8Array.push(counter)
     }
     counter -= 1
 }
 createHTML('KATA 8', kata8Array)

// KATA 9
// KATA 10
let kata10Array = []
counter = 10
counterX = 1
while (counterX <= 100 && counter != 0) {
    counterX = counter * counter;
    kata10Array.push(counterX)
    counter -= 1
}
createHTML('Kata 10', kata10Array)

// KATA 11
let kata11Array = []
for(let index = 0; index < sampleArray.length; index += 1 ) {
    if (!(sampleArray[index]%2)) {
        kata11Array.push(sampleArray[index])
    }
}
createHTML('Kata 11', kata11Array)

// 12
let kata12Array = []
for(let index = 0; index < sampleArray.length; index += 1 ) {
    if (!(sampleArray[index]%2)) {
        kata12Array.push(sampleArray[index])
    }
}
createHTML('Kata 12', kata12Array) 

//KATA 13
let kata13Array = []
for(let index = 0; index < sampleArray.length; index += 1) {
    if((sampleArray[index]%2)) {
        kata13Array.push(sampleArray[index])
    }
}
createHTML('Kata 13', kata13Array)

// KATA 14
let Kata14Array = []
counter = 1
for(let index=0; index < sampleArray.length; index +=1) {
    counterX = sampleArray[index] * sampleArray[index];
Kata14Array.push(counterX)
}
createHTML('Kata 14', Kata14Array)

// KATA 15
let kata15sum = 0
for(let index = 0;  index < 21; index += 1) {
    kata15sum += index
}
createHTML('Kata 15', kata15sum)

// KATA 16
let kata16sum = 0
for (let index = 0; index < sampleArray.length; index += 1) {
    kata16sum += sampleArray[index]
}
createHTML('Kata 16', kata16sum)

// KATA 17
let lowestNumber = 10000
let kata17Array = []
for(let index = 0; index < sampleArray.length; index += 1){
    if(sampleArray[index] < lowestNumber) {
        lowestNumber = sampleArray[index]
    }
}
kata17Array.push(lowestNumber)
createHTML('Kata 17', kata17Array)

//KATA 18
let highestNumber = 0
let kata18Array = []
for(let index = 0; index < sampleArray.length; index += 1){
    if(sampleArray[index] > highestNumber) {
        highestNumber = sampleArray[index]
    }
}
kata18Array.push(highestNumber)
createHTML('Kata 18', kata18Array)

let boxElement = document.querySelector('.boxes')

// KATA 19
for (let counter =0; counter < 21; counter += 1) {
    let boxes = document.createElement('div')
    boxes.className = 'boxes'
}

