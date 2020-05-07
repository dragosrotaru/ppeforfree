import { UUID, TimeStamp, PhoneNumber, Email } from "./primitive";

export type MutualAidGroupScrape = {
  _id: UUID;
  location_name: string;
  updated_at: TimeStamp;
  link_facebook: string;
  contact: MutualAidContactScrape;
  description: string;
  name: string;
  location_coord: MutualAidLocationScrape;
};

export type MutualAidGroupScrapeRaw = MutualAidGroupScrape & { id: UUID };

export type MutualAidContactScrape = {
  phone: PhoneNumber;
  email: Email;
};

export type MutualAidLocationScrape = {
  lng: number;
  lat: number;
};
