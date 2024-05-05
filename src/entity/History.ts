import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./Post";

@Entity('history_post')
export class History {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: 'old_value'})
    old: string;
    @Column({name:'new_value'})
    new: string;
    @Column()
    field: string;
    @ManyToOne(() => Post)
    @JoinColumn({ name: 'post_id' })
    postId: Post;
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
}