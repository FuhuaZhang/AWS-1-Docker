import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    private blogRepository: Repository<Blog>;
    constructor(@InjectRepository(Blog) blogRepository) {
        this.blogRepository = blogRepository;
    }

    async findOne(id): Promise<Blog> {
        return await this.blogRepository.findOne(id);
    }
}