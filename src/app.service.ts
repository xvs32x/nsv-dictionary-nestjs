import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WordEntity } from './word.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(WordEntity) private wordRepository: Repository<WordEntity>,
  ) {
  }

  /**
   * Get random word for learning
   */
  getRandomWord() {
    return this.wordRepository.createQueryBuilder('word')
      .orderBy('RAND()')
      .getOne();
  }

  query(options: FindManyOptions<WordEntity>): Promise<WordEntity[]> {
    return this.wordRepository.find(options);
  }

  upsert(word: WordEntity): Promise<WordEntity> {
    return this.wordRepository.save(word);
  }

  remove(word: WordEntity): Promise<WordEntity> {
    return this.wordRepository.remove(word);
  }
}
