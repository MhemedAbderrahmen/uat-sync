import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'uat_user',
      password: 'uat_password',
      database: 'uat-db',
      entities: [Project],
      synchronize: true,
    }),
    ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
