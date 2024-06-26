import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";

export class SnapMouseEventHandler extends EventHandler {
    constructor() {
        super();
    }

    get type() {
        return EventType.SNAP;
    }

    onMouseDown(e) {
        e.down = true;
    }

    onMouseMove(e) {
        e.editor.render();
    }

    onMouseUp(e) {
        e.down = false;
    }

    onMouseWheel(e) {
    }
}