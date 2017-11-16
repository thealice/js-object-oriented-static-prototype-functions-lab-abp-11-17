function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return data.map(function(userData){
    return new IcebreakerResponse(userData[0], userData[1])
  })
}
// const data = [
//   ["Avi", "avi@flatironschool.com"],
//   ["Grace", "grace@hopper.com"],
//   ["Alan", "alan@xparc.com"]
// ]

let icebreakerResponses = IcebreakerResponse.BatchCreate(emails);
