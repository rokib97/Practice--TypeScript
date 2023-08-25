"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        return 8;
    }
}
class SnapChat extends TakePhoto {
    constructor(cameraMode, filter, version) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.version = version;
    }
    getSepia() {
        console.log(`Sepia... ${this.filter}`);
    }
}
const rkb = new SnapChat("pro", "emptyness", 13);
rkb.getRealTime();
