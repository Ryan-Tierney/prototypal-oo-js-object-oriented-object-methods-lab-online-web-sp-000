function BoardMember(name, homeState, training) { 
  this.name = name; 
  this.homeState = homeState; 
  this.training = training; 
}

BoardMember.prototype.veto = function() { 
  console.log('No, I must disagree'); 
}; 

BoardMember.prototype.approve = function() {
  console.log('You can do that!');
}; 

BoardMember.prototype.doCharity = function() { 
  console.log('I lie to help people');
}; 

BoardMember.prototype.releasePressStatement = function() { 
  console.log('You will see greate things from Scuber');
}; 

BoardMember.prototype.sayHi = function() { 
  console.log(`Hi my name is ${this.name}. I am from ${this.homeState} and I was trained in ${this.training}.`);
}