export const textTruncate = (text, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (text.length > length) {
    return text.substring(0, length - ending.length) + ending;
  } else {
    return text;
  }
};

const pad = (n) => {
  return n<10 ? '0'+n : n;
}

export const dateFormatter = (dateObject) => {
  const dateStringAPIFormat = `${dateObject.getFullYear()}-${pad(dateObject.getMonth()+1)}-${pad(dateObject.getDate())}`;
  return dateStringAPIFormat;
}