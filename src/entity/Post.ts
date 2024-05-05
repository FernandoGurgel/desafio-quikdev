import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity('post')
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:"100"})
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    userId: User;
}
