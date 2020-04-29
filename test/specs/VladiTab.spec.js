const assert = require("assert");

describe("ui5-vladi-tab rendering", () => {
	browser.url("http://localhost:8083/test-resources/pages/index.html");

	it("tests if web component is correctly rendered", () => {

		const innerContent = browser.$("#myFirstComponent").shadow$("div");

		assert.ok(innerContent, "content rendered");
	});
});
