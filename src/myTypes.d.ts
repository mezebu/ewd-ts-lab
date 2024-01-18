export interface Friend {
  name: string;
  phone: string;
  dob?: Date;
  age: number;
  interests?: string[];
}

interface Contact {
  email: string;
  extension: number;
}

export interface Colleague {
  name: string;
  department: string;
  contact: Contact;
}

export interface ColleagueHistory {
  current: Colleague[];
  former: Colleague[];
}

export interface EmailContact {
  name: string;
  email: string;
}
