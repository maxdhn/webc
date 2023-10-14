import { WebC } from "../../webc.js";

let page = new WebC();

page.setInputPath("page.webc");
page.defineComponents({
	"my-component-builder": "components/my-component-builder.webc",
});

let { html, css, js, components } = await page.compile({
	data: {
		dataProperty: ["PARENT VALUE", ["CHILD VALUE 1", "CHILD VALUE 2"]],
	},
});

console.log({ html, css, js, components });
