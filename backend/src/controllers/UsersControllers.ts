import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import UserView from '../views/users_views';

import { hash, compare } from 'bcryptjs';

export default {
  async create(request: Request, response: Response) {
    let { email, password, } = request.body;

		const usersRepository = getRepository(User);

		password = await hash(password, 10);

		const user = usersRepository.create({ email, password });

		await usersRepository.save(user);

		return response.status(201).json(UserView.render(user));
	},
	
	async index(request: Request, response: Response) {
		const usersRepository = getRepository(User);

		const users = await usersRepository.find();

		return response.json(users);
	},

	async show(request: Request, response: Response) {
		const { email, password, } = request.body;

    	const usersRepository = getRepository(User);
    
		try {
			const user = await usersRepository.findOneOrFail(email);
    
      		const compareHashedPassword = await compare(password, user.password)

			if (!compareHashedPassword) {
				return response.status(203).json({ error: 'Wrong password' })
			}

			return response.status(202).json(UserView.render(user));

		}	catch (err) {

			return response.status(203).json({ error: 'Wrong email'})
		}
	}
}