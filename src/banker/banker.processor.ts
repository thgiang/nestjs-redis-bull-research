import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('banker')
export class BankerProcessor {
  private readonly logger = new Logger(BankerProcessor.name);

  @Process('banker_job_name')
  handleTranscode(job: Job) {
    this.logger.debug('Job starting');
    this.logger.debug(job.data);
    this.logger.debug('Job completed');
  }
}
