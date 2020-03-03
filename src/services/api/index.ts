import { request as realRequest } from './request';
import { mockRequest } from './mock-request';

const USE_MOCK = true;

export const request = !USE_MOCK ? realRequest : mockRequest;
