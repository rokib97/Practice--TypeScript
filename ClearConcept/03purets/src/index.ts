// class User {
//   public email: string;
//   name: string;
//   // #city: string = "Jaipur";
//   private city: string = "Jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const rokib = new User("rokib@rok.com", "rokib");

class User {
  private _courseCount = 1;
  protected myCount = 5;

  readonly city: string = "Dhaka";
  constructor(
    public email: string,
    public name: string,
    private userID: number
  ) {}

  public get getAppleEmail(): string {
    return `Apple Email: ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course Count Should be more than 1");
    }
    this._courseCount = courseNum;
  }

  private deleteToken(): void {
    console.log("Token Deleted");
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this.myCount = 4;
  }
}

const rokib = new User("rokib@rok.com", "rokib", 6969);
