import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 35989,
  tittle: 'Incrível',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-10-02T04:10'),
};

export const sampleWithPartialData: IPost = {
  id: 93202,
  tittle: 'Sérvia',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-10-01T20:23'),
};

export const sampleWithFullData: IPost = {
  id: 23240,
  tittle: 'recontextualize virtual copying',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-10-01T22:04'),
};

export const sampleWithNewData: NewPost = {
  tittle: 'withdrawal',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-10-01T23:35'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
