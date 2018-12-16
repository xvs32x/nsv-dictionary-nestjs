import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordEntity } from './word.entity';
const serverName = 'heroku';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.NODE_ENV === 'development' ? 'localhost' : 'eu-cdbr-west-02.cleardb.net',
      port: 3306,
      username: process.env.NODE_ENV === 'development' ? 'root' : ('b5868a' + '056b7e4c'),
      password: process.env.NODE_ENV === 'development' ? '' : ('e744' + 'bff2'),
      database: process.env.NODE_ENV === 'development' ? 'words' : (serverName + '_e185ea72ecb7e1b'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([WordEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
