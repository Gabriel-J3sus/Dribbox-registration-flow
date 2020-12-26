import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import crypto from 'crypto';
import * as Yup from 'yup';

import User from '../models/User';
import UserView from '../views/users_views';

export default {
  async create(request: Request, response: Response) {
    let { email, password, } = request.body;

		const usersRepository = getRepository(User);

		const schema = Yup.object().shape({
			email: Yup.string().email('Insert a valid email').required(),
			password: Yup.string().required(),
		});
		
		await schema.validate({email, password}, {
			abortEarly: false,
		});

		try {
			const userSearch = await usersRepository.findOneOrFail(email);

			if (userSearch) {
				return response.json({ error: 'This email already exists' })
			}

		} catch(err) {
			password = await hash(password, 10);
			
			const token = crypto.randomBytes(4).toString('hex');

			const user = usersRepository.create({ email, password, token });
		
			await usersRepository.save(user);
		
			return response.status(201).json(UserView.render(user));
		}			
	},
	
	async index(request: Request, response: Response) {
		const usersRepository = getRepository(User);

		const users = await usersRepository.find();

		return response.json(users);
	},

	async show(request: Request, response: Response) {
		const { email, password } = request.body;

		const usersRepository = getRepository(User);
		
		const schema = Yup.object().shape({
			email: Yup.string().email('Insert a valid email').required(),
			password: Yup.string().required(),
		});
		
		await schema.validate({email, password}, {
			abortEarly: false,
		});
    
		try {
			const user = await usersRepository.findOneOrFail(email);
    
      		const compareHashedPassorword = await compare(password, user.password)

			if (!compareHashedPassorword) {
				return response.status(203).json({ error: 'Wrong password' })
			}

			return response.status(202).json(UserView.render(user));

		}	catch (err) {

			return response.status(203).json({ error: 'Wrong email'})
		}
	}
}