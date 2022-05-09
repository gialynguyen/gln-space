import { Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  async findById(id: string): Promise<T | undefined> {
    const results = await this.findByIds([id]);

    return results?.[0];
  }
}
