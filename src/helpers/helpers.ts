import { promises } from 'dns';
import Lodash from 'lodash';
import { Length } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
import { Observable } from 'rxjs';

export class Helpers {
    
    private _errorMessage: any = 'Erro nos parâmetros programáticos do web-service!';
    public get getErrorMessage(): any {
        return this._errorMessage;
    };    
    public set setErrorMessage(value: any) {
        this._errorMessage = value;
    };


    
    public handleError(_error: any): string {   
    
        return _error.response?.data?.message ||             
            _error.message ||             
            _error.response ||             
            _error ||            
            //'Erro nos parâmentos do código e web-service!'       
            this._errorMessage
    };
    
   
    public formatDateDDMMYYYY(pDate:Date){
        pDate.setUTCHours(+3)
        //new Date(pDate).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).slice(0, 10);
        return pDate.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).slice(0,10);
    };
  
    public formatDateTimeDDMMYYYY(pDate:Date){       
        return pDate.toLocaleString();
    };
    
    
    //Map object Json
    //public lodashUtil(_obj:object): Promise< any >{        
    public utilLodash(_obj:object){
        try{
            //return Lodash.map(_obj, (item) => Lodash.mapKeys(item, (value, key) => key.toLowerCase()));
            return Lodash.map(_obj, (item) => Lodash.mapKeys(item, (value, key) => key.toString().toLowerCase()));            
        }catch(error){
            return this.handleError(error);
        };
    };
    

    public funcReturnObject(obj:any,pTitle:string=`Response`,pApplication:string=`Error`){               
        if(obj !== undefined && obj !== null && obj.constructor == Object){
          return obj;
        }else{                      
          const cRetObject:object = {message:{'Application':pApplication,'Response': obj}};
          return cRetObject;    
        };    
    };

    /** TESTAR
         let vDataIncial = new Date();

    console.log(vDataIncial.toLocaleString());

    const [month, day, year] = [
        vDataIncial.toLocaleString().slice(3,5),
        vDataIncial.toLocaleString().slice(0,2),
        vDataIncial.toLocaleString().slice(6,10),
    ];

    return console.log(`${year}-${month}-${day}`);
    
     */

    public async validationPipe(objInterface: Object, Dto: any){
        //Validar com DTO
        const validationPipe = new ValidationPipe({
            whitelist: true // Remove propriedades não definidas no DTO
            ,forbidNonWhitelisted: true // Lança erro se houver propriedades não permitidas
            ,transform: true // Converte automaticamente os tipos dos dados
        });

        try{
            //Validar DTO
            const result = await validationPipe.transform(
                objInterface,
                { type: 'body', metatype: Dto, data: '' }
            );
            
            return result;

        }catch(error){
            //console.log({response:error.response});
            //return {response:error.response};
            //return error;
            //console.log(error.response);
            throw error.response
            //return {response:error.response};

        };

    }

}