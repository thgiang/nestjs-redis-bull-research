import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('banker')
export class BankerProcessor {
  private readonly logger = new Logger(BankerProcessor.name);

  @Process({ name: 'banker_job_name', concurrency: 10 })
  async handleTranscode(job: Job) {
    //const delay = Math.floor(Math.random() * 3000);
    const delay = 2000;
    const a = await new Promise((resolve, rej) => {
      setTimeout(() => {
        const text =
          'Process time ' + Date.now() / 1000 + ': ' + JSON.stringify(job.data);
        if (job.data.groupKey === 'hehe0') {
          this.logger.debug(text);
        } else if (job.data.groupKey === 'hehe1') {
          this.logger.warn(text);
        } else {
          this.logger.log(text);
        }
        resolve(1);
      }, delay);
    });
  }
}
