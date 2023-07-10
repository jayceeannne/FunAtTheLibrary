function createTitle(title) {
  return 'The ' + title 
}


function buildMainCharacter(name, age, pronouns) {
  var characterObject = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return characterObject
}


function saveReview(review, reviews){
  reviews.push(review)
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}

