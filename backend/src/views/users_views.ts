import User from '../models/User';

export default {
    render(user: User) {
        return {
            email: user.email,
            token: user.token,
        };
    }
};