import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}
  create(createApplicationDto: CreateApplicationDto) {
    return this.applicationsRepository.save(createApplicationDto);
  }

  findAll() {
    return this.applicationsRepository.find();
  }

  findOne(id: string) {
    return this.applicationsRepository.findOneByOrFail({ id });
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    return this.applicationsRepository.update(id, updateApplicationDto);
  }

  remove(id: string) {
    return this.applicationsRepository.delete(id);
  }
}
