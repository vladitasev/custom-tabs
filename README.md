# custom-tabs

Custom tabs for UI5 Web Components TabContainer


## How to run the project:
- `npm i`
- `npm run start`
- Open [http://localhost:8083/test-resources/pages/index.html](http://localhost:8083/test-resources/pages/index.html) in your browser.

Observe the "custom" tab design in both the tab strip and overflow menu (when you shrink the browser).


## How it works:

1. The app consumes the `@next` version (`0.0.0-dc606098a` or newer):

	```json
	"dependencies": {
		"@ui5/webcomponents-base": "0.0.0-dc606098a",
		"@ui5/webcomponents": "0.0.0-dc606098a",
		"@ui5/webcomponents-theme-base": "0.0.0-dc606098a",
		"@ui5/webcomponents-tools": "0.0.0-dc606098a"
	  }
	```

2. There is a new component `src/VladiTab.js`:

	It extends `Tab.js`

	```js
	class VladiTab extends Tab
	```
	
	and registers its own templates:
	
	```js
		static get stripTemplate() {
			return TabInStripTemplate;
		}
	
		static get overflowTemplate() {
			return TabInOverflowTemplate;
		}
	```
	
	and styles:
	 
	```js
	TabContainer.registerTabStyles(stripCss);
	TabContainer.registerStaticAreaTabStyles(overflowCss);
	``` 
	
	It even creates a specific property called `special` (of type `Boolean`) that allows some tabs to have
	a different font-size for example. In the test sample provided, the first tab is with the `special` attribute set.

3. The application bundles this new component, along with the Tab Container itself:

	```js
	import "@ui5/webcomponents/dist/TabContainer.js";
	import "@ui5/webcomponents/dist/TabSeparator.js";
	import "./dist/VladiTab.js";
	```

4. And finally the app uses it in `test/pages/index.html`:
	```html
		<ui5-tabcontainer show-overflow>
			<ui5-vladi-tab text="Products" additional-text="125" special>
				Content 1
			</ui5-vladi-tab>
			<ui5-tab-separator></ui5-tab-separator>
			<ui5-vladi-tab icon="sap-icon://menu2" text="Laptops" semantic-color="Positive" additional-text="25">
				Content 2
			</ui5-vladi-tab>
			<ui5-vladi-tab icon="sap-icon://menu" text="Monitors" selected semantic-color="Critical" additional-text="45">
				Content 3
			</ui5-vladi-tab>
			<ui5-vladi-tab icon="sap-icon://menu2" text="Keyboards" semantic-color="Negative" additional-text="15">
				Content 4
			</ui5-vladi-tab>
			<ui5-vladi-tab icon="sap-icon://menu2" disabled text="Disabled"  semantic-color="Negative" additional-text="40">
				Content 5
			</ui5-vladi-tab>
			<ui5-vladi-tab icon="sap-icon://menu2" text="Neutral" semantic-color="Neutral" additional-text="40">
				Content 6
			</ui5-vladi-tab>
			<ui5-vladi-tab icon="sap-icon://menu2" text="Default" additional-text="40">
				Content 7
			</ui5-vladi-tab>
		</ui5-tabcontainer>
	```

**Note:** When providing your own tab templates, make sure you keep the top-level `li` element for the tab strip template
and the top-level `ui5-li-custom` element for the overflow menu template.
