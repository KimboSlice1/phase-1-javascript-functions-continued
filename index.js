function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (plan = 'go to the office') {
    return `This Monday, I will ${plan}.`
}

function wrapAdjective(flair = "*") {
    return function inner(parameter = 'special!'){
    return `You are ${flair}${parameter}${flair}!`
    }
}
//wrapAdjective('you are')('parameter');
    //const outer = 'you are'
    //const inner = function (idk = 'a dedicated programmer') {
    //return `${outer}, ${idk}` }

//wrapAdjective('*'')('a dedicated programmer');