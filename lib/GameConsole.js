function GameConsole(systemName){
  this.systemName = systemName;
}

GameConsole.prototype.play = function(title){
  return `${this.systemName} plays ${title.title}`;
};

module.exports = GameConsole;