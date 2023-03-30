const CategoryName = ({ categoryCode }) => {
  const getCategoryName = () => {
    switch (categoryCode) {
      case 2:
        return '소설';
      case 3:
        return '시/에세이';
      case 4:
        return '경제/경영';
      case 5:
        return '자기계발';
      case 6:
        return '인문';
      case 7:
        return '역사/문화';
      case 8:
        return '사회';
      case 9:
        return '과학';
      case 10:
        return '예술/종교';
      case 11:
        return '어린이/청소년';
      case 12:
        return '생활';
      case 13:
        return '취미';
      case 14:
        return '어학';
      case 15:
        return 'IT';
      case 16:
        return '학습';
      case 17:
        return '해외도서';
      case 18:
        return '라이트노벨';
      case 19:
        return '만화';
      case 20:
        return '기타';
      default:
        return '';
    }
  };

  return getCategoryName();
};

export default CategoryName;
