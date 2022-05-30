import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Query } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('banker')
export class BankerController {
  constructor(@InjectQueue('banker') private readonly bankerQueue: Queue) {}

  @Get('add')
  async add() {
    const userId = 1234;
    const time = Date.now();
    await this.bankerQueue.add('banker_job_name', {
      user_id: userId,
      time: time,
    });
    return 'Added job!';
  }
}
