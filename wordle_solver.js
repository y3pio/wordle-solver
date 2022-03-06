const enterKey = (k) => {
  window.dispatchEvent(new KeyboardEvent(
		'keydown', {'key': k}
	));
};

JSON.parse(localStorage['nyt-wordle-state']).solution.split('').forEach(c => enterKey(c));

enterKey("Enter");
