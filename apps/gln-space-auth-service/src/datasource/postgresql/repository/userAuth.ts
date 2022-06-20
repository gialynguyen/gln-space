import { createBaseRepository } from '@gln-libs/node-infrastructure';

import { primaryDataSource } from '../datasource';
import { UserAuthEntity } from '../entity/userAuth';

export const UserAuthRepository = primaryDataSource
  .getRepository(UserAuthEntity)
  .extend({
    ...createBaseRepository<UserAuthEntity>(),
    async findByEmail(email: string): Promise<UserAuthEntity[]> {
      const example = await this.find({
        email,
      });

      return example;
    },
  });
