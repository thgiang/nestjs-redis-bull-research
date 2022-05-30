import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { BankerProcessor } from './banker.processor';
import { BankerController } from './banker.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'banker',
    }),
  ],
  controllers: [BankerController],
  providers: [BankerProcessor],
})
export class BankerModule {}
