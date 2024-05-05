import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:"100"})
    name: string;

    @Column({length:"191"})
    email: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userEditor' })
    editorUser: User;
}
