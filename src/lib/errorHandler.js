import { NotificationManager } from "react-notifications";

export const errorHandler = (error) => {
  console.log("error", error)
  NotificationManager.error(error?.response?.data?.message || error.message || error);
};


export const successHandler = (msg) => {
  //console.log("msg", error)
  NotificationManager.success( msg);
};
