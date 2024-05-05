import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import {Post} from "./Post";

@Entity('comment')
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    userId: User;

    @ManyToOne(() => Post)
    @JoinColumn({ name: 'post_id' })
    postId: Post;
}
