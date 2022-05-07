import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/users.model";
import {Repository} from "typeorm";
import {UserBodyDto} from "../dtos/user-body.dto";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

	async getByEmail(email: string): Promise<User> {
		const user = await this.usersRepository.findOne({where: {email}})
		return user
	}
	async getByUsername(username: string): Promise<User> {
		const user = await this.usersRepository.findOne({where: {username}})
		return user
	}
	async create(dto: UserBodyDto): Promise<User> {
		const user = await this.usersRepository.create(dto)
		return user
	}
}