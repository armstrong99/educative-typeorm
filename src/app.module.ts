import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from 'dotenv';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employee } from './entities/employee';

config();
 
const SYNC = false;
 
export const dbConfig: TypeOrmModuleOptions = {
  url: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  type: 'postgres',
  entities: [Employee],
  logging: SYNC,
  synchronize: SYNC,
} as TypeOrmModuleOptions;

@Module({
  imports: [
     TypeOrmModule.forRoot(dbConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}