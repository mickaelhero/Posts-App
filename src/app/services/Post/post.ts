export class Post {
  id?: number;
  title: string;
  body: string;
  userID: number;


  constructor(title: string, body: string, userID: number) {
    this.title = title;
    this.body = body;
    this.userID = userID;
  }

}
