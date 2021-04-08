export function cellphone(e){
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value=value.replace(/(.{0})(\d)/,"$1($2")
  value=value.replace(/(.{3})(\d)/,"$1) $2")
  if(value.length === 10) {
    value=value.replace(/(.{0})$/,"-$1")
  } else if (value.length === 11) {
      value=value.replace(/(.{1})$/,"-$1")
  } else if (value.length === 12) {
      value=value.replace(/(.{2})$/,"-$1")
  } else if (value.length === 13) {
      value=value.replace(/(.{3})$/,"-$1")
  } else if (value.length >= 14) {
      value=value.replace(/(.{4})$/,"-$1")
  }
  e.currentTarget.value = value;

  return e;
}