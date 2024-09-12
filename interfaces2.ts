interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

interface Story{
    crateStory()
}

class YouTube implements TakePhoto,Story{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short:string
  ) {}
  crateStory(): void {
      console.log("Stroy created")
  }
}


