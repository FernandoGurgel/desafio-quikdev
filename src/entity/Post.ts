import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity('post')
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:"100", name:'title'})
    title: string;

    @Column({name:'description'})
    description: string;

    @Column({name:'likes', default: 0})
    likes: number;

    @Column({name:'dislikes', default: 0})
    dislikes: number;

    @Column({name:'counterViews', default: 0})
    counterViews: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    userId: User;
}
