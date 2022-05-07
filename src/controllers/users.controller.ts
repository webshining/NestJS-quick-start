import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "../services/users.service";
import {UserBodyDto} from "../dtos/user-body.dto";

@Controller('/users')
export class UsersController {
	constructor(private userService: UsersService) {}

	@Post('/register')
	async register(@Body() userDto: UserBodyDto) {
		let user
		user = await this.userService.getByUsername(userDto.username)
		if(user) return {error: "Пользователь с таким username уже существует"}
		user = await this.userService.getByEmail(userDto.email)
		if (user) return {error: "Пользователь с таким email уже существует"}
		return await this.userService.create(userDto)
	}

	@Get()
	async getUsers() {
		const users = await this.userService.getAll()
		return {users}
	}

	@Get(':username')
	async getUser(@Param('username') username: string) {
		const user = await this.userService.getByUsername(username)
		return {user}
	}
}