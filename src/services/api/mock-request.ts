import { Method } from 'axios';
import { AUTH_MOCK_RESPONSES } from '../auth/constants';

const MOCK_RESPONSES: { [key: string]: any } = {
  ...AUTH_MOCK_RESPONSES,
};

export const mockRequest = <Res>(
  method: Method,
  url: string = '',
  data?: any
): Promise<Res> => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('promise');
      res(MOCK_RESPONSES[url]);
    }, 2000);
  });
};
