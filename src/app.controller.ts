import { Get, Controller, Post, Body, Query, Delete, Param, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { FindManyOptions } from 'typeorm';
import { WordEntity } from './word.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('random')
  random() {
    return this.appService.getRandomWord();
  }

  @Get()
  query(@Query() query: FindManyOptions<WordEntity>) {
    return this.appService.query(query);
  }

  @Post()
  upsert(@Body() word: { term: string, translate: string }) {
    if (!word.term || !word.translate) {
      return new HttpException('Required fields are empty!', 422);
    }
    return this.appService.upsert({
      term: word.term,
      translate: word.translate,
    });
  }

  @Delete()
  remove(@Query() query: WordEntity) {
    return this.appService.remove(query);
  }
}
