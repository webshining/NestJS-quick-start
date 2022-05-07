import {Controller, Get, Param} from "@nestjs/common";
import {UsersService} from "../services/users.service";

@Controller('/users')
export class UsersController {
	constructor(private userService: UsersService) {}

	@Get('/:id')
	getUser(@Param('id') id: string) {
		return {userId: 'userId: ' + id}
	}
}