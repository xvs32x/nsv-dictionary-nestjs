import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordEntity } from './word.entity';
const serverName = 'heroku';
// process.env.NODE_ENV === 'development'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east.cleardb.com',
      port: 3306,
      username: 'b5868a056b7e4c',
      password: 'e744bff2',
      database: serverName + '_e185ea72ecb7e1b',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([WordEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
