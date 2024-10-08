import { Module } from '@nestjs/common';
import { FlyHttp } from './services/fly-http.service';
import { AxiosService } from './services/axios.service';

@Module({
  providers: [AxiosService, FlyHttp],
  exports: [FlyHttp],
})
export class FlyHttpModule {}
