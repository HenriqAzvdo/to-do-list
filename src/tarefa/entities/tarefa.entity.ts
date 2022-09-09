import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_tarefa'})
export class Tarefa {

    @PrimaryGeneratedColumn()   //id será gerado de forma automática
    id: number

    @IsNotEmpty()   //caso passe valor vazio, retorna badrequest, informando que está vazio.
    @MaxLength(50)  //máx 50 caracteres
    @Column({nullable: false, length: 50})  //não pode ser nulo e máx de caracter de 50
    nome: string

    @IsNotEmpty()   //caso passe valor vazio, retorna badrequest, informando que está vazio.
    @MaxLength(500)  //máx 500 caracteres
    @Column({nullable: false, length: 500}) //não pode ser nulo e máx de caracter de 50
    descricao: string

    @IsNotEmpty()   //caso passe valor vazio, retorna badrequest, informando que está vazio.
    @MaxLength(50)  //máx 50 caracteres
    @Column({nullable: false, length: 50})  //não pode ser nulo e máx de caracter de 50
    responsavel: string

    @Column()
    data: Date

    @Column()
    status: boolean

}