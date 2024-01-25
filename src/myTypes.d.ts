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

export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department; // *****
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined;

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};
