window.Pipes = (function() {
	'use strict';

	var Pipes = function(el, game) {
		this.el = el;
		this.game = game;
		this.lowerTop = 0;
		this.upperTop = 0;
	};

	Pipes.prototype.spawnPipes = function() {
		this.lowerTop = Math.ceil(Math.random() * 30);
		this.upperTop = this.lowerTop - 55;

		var pipeSet = window.document.createElement('div');
		pipeSet.className = 'pipeSet';
		var upperPipe = window.document.createElement('div');
		upperPipe.className = 'pipe reverse';
		upperPipe.style.top = this.upperTop + 'em';
		var lowerPipe = window.document.createElement('div');
		lowerPipe.className = 'pipe';
		lowerPipe.style.top = this.lowerTop + 'em';

		this.el.appendChild(pipeSet);
		pipeSet.appendChild(lowerPipe);
		pipeSet.appendChild(upperPipe);
	};

	Pipes.prototype.checkPipes = function() {
		var pipe = $('.pipe');
		var offset = pipe.offset();
		if(offset !== undefined) {
			if(offset.left < -50) {
				this.el.removeChild(this.el.childNodes[0]);
			}	
			pipe = $('.pipe');
			offset = pipe.offset();
			if(offset !== undefined && offset.left > 267 && offset.left < 270) {
				this.game.score++;
			}
		}
	};

	return Pipes;

})();