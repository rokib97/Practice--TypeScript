interface USer {
  readonly dbId: number;
  name: string;
  email: string;
  userID: number;
  googleId?: number;
  stratTrail: () => string;
  endTrail(): string;
  getCouponCode(code: string, value: number): number;
}

// re opening interface
interface USer {
  githubToken: string;
}

// inheritance in interface
interface AdminCredential extends USer {
  role: "admin" | "seller" | "student";
}

let myUser: AdminCredential = {
  dbId: 120,
  role: "admin",
  name: "rokib",
  userID: 120,
  githubToken: "github",
  email: "h@h.com",
  stratTrail: () => "mystring",
  endTrail: () => "example string return",
  //   getCouponCode: function (a = "rokib10") {
  //     return 10;
  //   },s
  getCouponCode: (a = "rokib10", off = 10) => {
    return 10;
  },
};
