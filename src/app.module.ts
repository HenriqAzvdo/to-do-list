import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { TarefaModule } from './tarefa/modules/tarefa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_todo',
      entities: [Tarefa],
      synchronize: true   //qualquer alteração dentro do banco de dados já reflete na Workbanch.
    }),
    TarefaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
