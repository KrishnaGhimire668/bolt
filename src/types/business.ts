export type BusinessStatus =
  | "online"
  | "processing"
  | "offline";

export interface Business {
  id: string;
  title: string;
  description: string;
  status: BusinessStatus;
  payload: object;
}