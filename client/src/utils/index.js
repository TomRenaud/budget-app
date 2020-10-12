import { useEffect, useState } from 'react';
import { orderBy, uniqBy } from 'lodash';
import moment from 'moment';

export const filteredList = (array, key = 'label') => {
  const ascFilteredList = orderBy(array, [key], ['asc']);
  return uniqBy(ascFilteredList, key);
};

export const sortByName = (array, key = 'label') =>
  orderBy(array, [key], ['asc']);

export const sortByAsc = (array) =>
  array.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return width;
};

export const isAdult = year =>
  moment(year).isValid()
    ? moment()
      .subtract(18, 'years')
      .year() >= parseInt(year)
    : false;