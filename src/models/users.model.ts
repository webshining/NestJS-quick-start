import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	name: string;

	@Column({ unique: true, nullable: false })
	username: string;

	@Column({ unique: true, nullable: false })
	email: string;

	@Column({ nullable: false })
	password: string;

	@Column({ nullable: true })
	img: string;

	@Column({ default: false })
	isActivated: boolean;
}