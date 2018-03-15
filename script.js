function Button(name, text) {
	this.name = name;
	this.text = text;
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.name);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Push the button', 'Greetings!!');

btn1.create();