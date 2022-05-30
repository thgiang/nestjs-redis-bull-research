import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { BankerProcessor } from './banker.processor';
import { BankerController } from './banker.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'banker',
      limiter: {
        max: 1,
        duration: 500,
        groupKey: 'groupKey',
      },
    }),
  ],
  controllers: [BankerController],
  providers: [BankerProcessor],
})
export class BankerModule {}
