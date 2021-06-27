import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../entities/Compliment'

@EntityRepository(Compliment)
class CompilmentsRepositories extends Repository<Compliment> {

}

export { CompilmentsRepositories }