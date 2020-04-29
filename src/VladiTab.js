import Tab from "@ui5/webcomponents/dist/Tab.js";
import TabContainer from "@ui5/webcomponents/dist/TabContainer.js";
import Icon from "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/icons/positive.js";

// Templates
import TabInStripTemplate from "./generated/templates/VladiTabInStripTemplate.lit.js";
import TabInOverflowTemplate from "./generated/templates/VladiTabInOverflowTemplate.lit.js";

// Styless
import stripCss from "./generated/themes/VladiTabInStrip.css.js";
import overflowCss from "./generated/themes/VladiTabInOverflow.css.js";

const metadata = {
	tag: "ui5-vladi-tab",
	properties: {
		special: {
			type: Boolean,
		},
	},
};

class VladiTab extends Tab {
	static get metadata() {
		return metadata;
	}

	static async onDefine() {
		await Icon.define();
	}

	static get stripTemplate() {
		return TabInStripTemplate;
	}

	static get overflowTemplate() {
		return TabInOverflowTemplate;
	}

	get allCustomClasses() {
		const isSpecial = this.special ? "special-tab" : "";
		const isSelected = this.selected ? "selected-tab" : "";
		return `custom-in-strip ${isSpecial} ${isSelected}`;
	}
}

VladiTab.define();

TabContainer.registerTabStyles(stripCss);
TabContainer.registerStaticAreaTabStyles(overflowCss);

export default VladiTab;
