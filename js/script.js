"use strict";
import { cardComponet } from "../components/cardComponent.js";
import { products } from "../data/procucts.js";

const renderArea = document.querySelector("#render-area");

products.map((product) => {
    renderArea.innerHTML += cardComponet(product);
})
