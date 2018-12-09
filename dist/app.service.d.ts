import { WordEntity } from './word.entity';
import { FindManyOptions, Repository } from 'typeorm';
export declare class AppService {
    private wordRepository;
    constructor(wordRepository: Repository<WordEntity>);
    getRandomWord(): Promise<WordEntity | null>;
    query(options: FindManyOptions<WordEntity>): Promise<WordEntity[]>;
    upsert(word: WordEntity): Promise<WordEntity>;
    remove(word: WordEntity): Promise<WordEntity>;
}
