import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/users.model";
import {Repository} from "typeorm";
import {UserBodyDto} from "../dtos/user-body.dto";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

	async getByEmail(email: string): Promise<User> {
		const user = await this.usersRepository.findOne({email})
		return user
	}
	async getByUsername(username: string): Promise<User> {
		const user = await this.usersRepository.findOne({username})
		return user
	}
	async getAll(): Promise<User[]> {
		const users = await this.usersRepository.find()
		return users
	}
	async create(dto: UserBodyDto) {
		const {name, username, email, password} = dto
		const user = new User()
		user.name = name
		user.username = username
		user.email = email
		user.password = password
		await this.usersRepository.save(user)
		return user
	}
}