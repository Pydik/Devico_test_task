import data from './animals.json';

// fetch API method
    function allLegs(){
        fetch('./animals.json')
            .then((response) => response.json())
            .then((json) => {
                const pigsLegs = json.pigs * 4
                const cowsLegs = json.cows * 4
                const chickenLegs = json.chickens * 2
                const result = pigsLegs + cowsLegs + chickenLegs
                console.log('All legs number is:', result)
            });
    }

// import statement method
function allLesg2(){
    const pigsLegs = data.pigs * 4 
    const cowsLegs = data.cows * 4
    const chickenLegs = data.chickens * 2
    const result = pigsLegs + cowsLegs + chickenLegs

    console.log('All legs number is:', result). // or return result
}