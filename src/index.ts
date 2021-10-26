import { applyPolyfills, defineCustomElements } from "@esri/calcite-components/dist/loader";
import "@esri/calcite-components";
import Application = require("./app/main");

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const Main = new Application();
Main.init();

