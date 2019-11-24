import moment from "moment";

export default function Period() {
  const date = moment().format("YYYY-MM-DD");
  const firstDate = moment(date)
    .startOf("month")
    .format("YYYY-MM-DD");
  const secondDate = moment(firstDate)
    .add(15, "days")
    .format("YYYY-MM-DD");
  const thirdDate = moment(firstDate)
    .add(1, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  var period = date;
  //   console.log(`Today = ${date}`);
  //   console.log(`First Period = ${firstDate}`);
  //   console.log(`Second Period = ${secondDate}`);
  //   console.log(`Next Month Period = ${thirdDate}`);
  if (date === firstDate) {
    period = moment(firstDate).format("YYYY-MM-DD");
    console.log(`งวดประจำวันที่ = ${period}`);
  } else if (date > firstDate && date <= secondDate) {
    period = moment(secondDate).format("YYYY-MM-DD");
    console.log(`งวดประจำวันที่ = ${period}`);
  } else {
    period = moment(thirdDate).format("YYYY-MM-DD");
    console.log(`งวดประจำวันที่ = ${period}`);
  }
  return period;
}
