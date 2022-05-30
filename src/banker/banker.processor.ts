import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('banker')
export class BankerProcessor {
  private readonly logger = new Logger(BankerProcessor.name);

  @Process('banker_job_name')
  handleTranscode(job: Job) {
    //const delay = Math.floor(Math.random() * 3000);
    const delay = 2435;
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
    }, delay);
  }
}
