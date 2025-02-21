import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Perfil } from '../entities/perfil.entity';

@Injectable()
export class PerfilRepository extends Repository<Perfil> {   

}