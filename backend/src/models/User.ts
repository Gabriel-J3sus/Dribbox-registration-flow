import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    email: string;

    @Column()
    password: string;

    @Column()
    token: string;
}