export class Login {
  userId: string;
  email: string;
  document: string;
  password: string;
  grantType: string;
  // token: string;
}

export class User {
  access_token: string;
  user_id: string;
  person: Person;
}

export class Person {
  Id: string;
  Name: string;
  SocialName: string;
  Phone: string;
  Cpf: string;
  MaritalState: string;
  Genre: string;
  PartnerId: string;
  Birthday: Date;
  DateCreated: Date;
  DateChanged: Date;
  IsActive: boolean;
}
