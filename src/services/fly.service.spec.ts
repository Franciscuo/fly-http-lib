import { Test } from '@nestjs/testing';

import { AxiosService } from './axios.service';
import { FlyHttp } from './fly-http.service';
import { RequestHttp } from '../model/interface/request-http.interface';

describe('FlyHttp', () => {
  let flyHttp: FlyHttp;
  let axiosService: AxiosService;

  const requestHttp: RequestHttp = {
    url: 'http://localhost:8080',
    body: {},
    headers: {},
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FlyHttp,
        {
          provide: AxiosService,
          useValue: {
            post: jest.fn(),
            put: jest.fn(),
            patch: jest.fn(),
            delete: jest.fn(),
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    flyHttp = moduleRef.get<FlyHttp>(FlyHttp);
    axiosService = moduleRef.get<AxiosService>(AxiosService);
  });

  describe('post', () => {
    it('should call post method of AxiosService', async () => {
      await flyHttp.post(requestHttp);

      expect(axiosService.post).toHaveBeenCalledWith(requestHttp);
    });
  });

  describe('put', () => {
    it('should call put method of AxiosService', async () => {
      await flyHttp.put(requestHttp);

      expect(axiosService.put).toHaveBeenCalledWith(requestHttp);
    });
  });

  describe('patch', () => {
    it('should call patch method of AxiosService', async () => {
      await flyHttp.patch(requestHttp);

      expect(axiosService.patch).toHaveBeenCalledWith(requestHttp);
    });
  });

  describe('delete', () => {
    it('should call delete method of AxiosService', async () => {
      await flyHttp.delete(requestHttp);

      expect(axiosService.delete).toHaveBeenCalledWith(requestHttp);
    });
  });

  describe('get', () => {
    it('should call get method of AxiosService', async () => {
      await flyHttp.get(requestHttp);

      expect(axiosService.get).toHaveBeenCalledWith(requestHttp);
    });
  });
});
