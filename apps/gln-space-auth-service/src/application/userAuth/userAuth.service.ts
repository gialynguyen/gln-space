import { UserAuthRepository } from '@datasource/postgresql';

import { UserAuthFromEntityDTO } from './dto/userAuth.response.dto';
import { UserAuth, UserAuthRepsone } from './interface/userAuth';

export class UserAuthService {
  async createUserAuth(payload: UserAuth): Promise<UserAuthRepsone> {
    const userAuth = UserAuthRepository.create({ ...payload, status: 1 });

    const userAuthEntity = await UserAuthRepository.save(userAuth);

    delete userAuthEntity.password;
    return UserAuthFromEntityDTO.toClass(userAuthEntity);
  }

  async getByEmail(email: string): Promise<UserAuthRepsone> {
    const userTask = await UserAuthRepository.findOneBy({ email });

    return UserAuthFromEntityDTO.toClass(userTask);
  }
}
