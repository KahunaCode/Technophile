
function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(num2call){
  return `${this.phoneNumber} calls ${num2call}`;
};


module.exports = Phone;