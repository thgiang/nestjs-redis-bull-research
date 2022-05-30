import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Query } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('banker')
export class BankerController {
  constructor(@InjectQueue('banker') private readonly bankerQueue: Queue) {}

  @Get('add')
  async add() {
    for (let i = 0; i < 10; i++) {
      const userId = 1234;
      const time = Date.now();
      await this.bankerQueue.add('banker_job_name', {
        groupKey: 'hehe',
        userId: userId,
        requestTime: time,
      });
    }
    return 'Added job!';
  }
}
