abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getRealTime(): number {
    return 8;
  }
}

class SnapChat extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public version: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log(`Sepia... ${this.filter}`);
  }
}
const rkb = new SnapChat("pro", "emptyness", 13);
rkb.getRealTime();
