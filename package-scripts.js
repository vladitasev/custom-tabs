const getScripts = require("@ui5/webcomponents-tools/components-package/nps.js");

const options = {
	port: 8083,
};

const scripts = getScripts(options);

module.exports = {
	scripts,
};
