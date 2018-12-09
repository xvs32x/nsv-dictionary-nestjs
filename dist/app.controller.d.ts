import { AppService } from './app.service';
import { FindManyOptions } from 'typeorm';
import { WordEntity } from './word.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    random(): Promise<WordEntity>;
    query(query: FindManyOptions<WordEntity>): Promise<WordEntity[]>;
    upsert(word: {
        term: string;
        translate: string;
    }): Promise<WordEntity>;
    remove(query: WordEntity): Promise<WordEntity>;
}
