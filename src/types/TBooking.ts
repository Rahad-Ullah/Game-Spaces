import { TFacility } from "./TFacility";

export type TBooking = {
  _id: string;
  user: string;
  date: string;
  facility: TFacility;
  startTime: string;
  endTime: string;
  payableAmount: number;
  paymentStatus: string;
  isBooked: string;
  trxID: string;
};
