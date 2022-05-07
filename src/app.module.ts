import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./modules/users.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env'
		}),
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				type: 'postgres',
				database: process.env.DB_NAME,
				username: process.env.DB_USER,
				password: process.env.DB_PASS,
				host: process.env.DB_HOST,
				port: Number(process.env.DB_PORT),
				entities: [__dirname + '/**/*.model{.ts,.js}'],
				autoLoadEntities: true,
				synchronize: true,
			})
		}),
		UsersModule
	]
})
export class AppModule {}
