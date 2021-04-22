import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('blog')
export class Blog
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    createdAt: Date;
}