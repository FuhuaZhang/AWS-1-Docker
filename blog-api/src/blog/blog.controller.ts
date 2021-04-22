import {Controller, Get, Param, Response} from "@nestjs/common";
import {BlogService} from "./blog.service";

@Controller('blogs/')
export class BlogController {

    private blogService: BlogService;

    constructor(blogService: BlogService)
    {
        this.blogService = blogService;
    }

    @Get(':id')
    async getBlog(@Param() param, @Response() response): Promise<void>
    {
        response.header('Access-Control-Allow-Origin', '*');
        const blog = await this.blogService.findOne(param.id);
        response.send(blog);
    }
}