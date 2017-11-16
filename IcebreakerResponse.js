function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(icebreakerData){
    return new IcebreakerResponse(icebreakerData);
  })
}
// const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"];
//
// let icebreakerResponses = IcebreakerResponse.BatchCreate(emails);
