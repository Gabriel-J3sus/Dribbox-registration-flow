import User from '../models/User';

export default {
    render(user: User) {
        return {
            email: user.email,
            password: user.password,
            token: user.token,
        };
    }
};