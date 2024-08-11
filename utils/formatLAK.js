// It will be available as randomEntry() (camelCase of file name without extension)
export default function (num) {
  if (!num) return 0;
  if (typeof num !== "number") return "expected datatype to be number";

  return num.toLocaleString() + " ₭";
}
