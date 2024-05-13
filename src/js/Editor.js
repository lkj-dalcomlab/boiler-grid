import {MouseEventManager} from "./event/MouseEventManager.js";
import {Page} from "./Page.js";

export class Editor {
    constructor({width, height}) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;

        this.#init();
    }

    #init() {
        const root = document.createElement('div');
        document.body.appendChild(root);
        root.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.page = new Page(this.ctx);
        this.eventManager = new MouseEventManager(this);
        this.page.render();
    }
}