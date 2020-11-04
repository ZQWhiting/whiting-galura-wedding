export function dims() {
	var doc = document,
		w = window;
	var docEl =
		doc.compatMode && doc.compatMode === 'CSS1Compat'
			? doc.documentElement
			: doc.body;

	var width = docEl.clientWidth;
	var height = docEl.clientHeight;

	// mobile zoomed in?
	if (w.innerWidth && width > w.innerWidth) {
		width = w.innerWidth;
		height = w.innerHeight;
	}

	return { width: width, height: height };
}
