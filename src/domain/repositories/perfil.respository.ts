import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Perfil } from '../entities/perfil.entity';

@Injectable()
export class PerfilRepository extends Repository<Perfil> {   
    
    /* custom repository*/
    
    /*
    async findByEmail(chapa: string): Promise<Funcionario | undefined> {
        return this.findOne({ where: { chapa } });
    }
        */
        

}