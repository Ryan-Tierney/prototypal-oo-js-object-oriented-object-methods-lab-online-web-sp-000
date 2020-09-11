function boardMember(name, homeState, training) { 
  this.name = name; 
  this.homeState = homeState; 
  this.training = training; 
}

boardMember.prototype.veto = function() { 
  console.log('No, I must disagree'); 
} 

boardMember.prototype.approve = function() {
  console.log('You can do that!');
} 

boardMember.prototype.doCharity = function() { 
  console.log('I lie to help people');
} 

boardMember.prototype.releasePressStatement = function() { 
  console.log('You will see greate things from Scuber');
} 

boardMember.prototype.sayHi = function() { 
  console.log(`Hi my name is ${this.name}. I am from ${this.homeState} and I was trained in ${this.training}.`);
}