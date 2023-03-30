const Pubdate = (prop) => {
  const year = prop.substr(0, 4);
  const month = prop.substr(4, 2);
  const day = prop.substr(6, 2);
  return year + '년 ' + month + '월 ' + day + '일';
};

export default Pubdate;
