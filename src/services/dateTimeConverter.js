// @flow
import moment from "moment";

export const getCurrentTime = () => moment(new Date());

export const unixTimeToMoment = (time) => moment(time, "x");

export const getTimeDifferenceInEnglish = (startMoment, endMoment) => {
  const duration = moment.duration(endMoment.diff(startMoment));
  return duration;
};

export const getTimeFromNowToMoment = (endTime) =>
  getTimeDifferenceInEnglish(getCurrentTime(), endTime);
