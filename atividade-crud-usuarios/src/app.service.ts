import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    getHello(): string {
      return 'Hello World!';
    }

    olaMundo(): string {
      return 'olá mundo';
    }
}
