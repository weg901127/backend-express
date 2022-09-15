import * as errorCode from '../utils/error/errorCode';
import { executeQuery, makeExecuteQuery, pool } from '../mysql';
import { Meta } from '../users/users.type';

export const createReview = async (bookInfoId: number, commentText: string) => {
  console.log('create review');
  console.log(`${bookInfoId} ${commentText}`);
};

export const getReview = async (bookInfoId: number | string) => {
  console.log('get review');
  console.log(`${bookInfoId}`);
  let reviews;
  if (bookInfoId === 'all') {
    reviews = [{
      reviewer: 'seongyle',
      commentText: 'blabla',
      bookInfoId: 42,
    },
    {
      reviewer: 'yena',
      commentText: '42seoul, jiphyeonjeon developer',
      bookInfoId: 41,
    },
    ];
  } else {
    reviews = [{
      reviewer: 'seongyle',
      commentText: 'blabla',
      bookInfoId: 42,
    },
    ];
  }
  return (reviews);
};

export const updateReview = async () => {
  console.log('update review');
};

export const deleteReview = async () => {
  console.log('deleteReview');
};
