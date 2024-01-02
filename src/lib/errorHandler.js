import { NotificationManager } from "react-notifications";

export const errorHandler = (error) => {
  console.log("error", error)
  NotificationManager.error(error?.response?.data?.message || error.message || error);
};
