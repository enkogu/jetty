let Jetty = require('./index')
var jetty = new Jetty(process.stdout);

let state = {
	items: 0
}

setInterval(() => state.items += 5, 100)

jetty.monitorState(state)