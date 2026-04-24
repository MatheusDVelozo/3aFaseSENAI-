import type { Request, Response } from "express";
import type { Usuario } from "../prisma/generated/prisma/client"
import { log } from "console";
// import { PacienteService, pacienteService } from "../services/AuthService";

class PacienteController {
    constructor(private readonly service: any) {                                //TROCAR ANY POR PACIENTE
    }

    async listarTodosPacientes(_: Request, res: Response) {
        try {
            const pacientes = await this.service.listarTodosPacientes();
            return res.status(200).json(pacientes)
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            })

        }
    }

    async criarPaciente(req: Request, res: Response) {
        try {
            const dadosPaciente = req.body as any                                               //TROCAR ANY POR PACIENTE
            const pacienteCriado = await this.service.criarPaciente(dadosPaciente)
            return res.status(200).json(pacienteCriado)
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            })

        }
    }

    async buscarPacienteId(req: Request, res: Response) {
        try {
            const idPaciente = Number(req.params.id)
            const paciente = await this.service.buscarPacienteId(idPaciente)
            return res.status(200).json(paciente)
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            })
            
        }
    }

    async atualizarPaciente(req: Request, res: Response) {
        try {
            const idPaciente = Number(req.params.id)
            const dadosParaAtualizar = req.body as Omit<any, 'id'>                                          //TROCAR ANY POR PACIENTE
            const pacienteAtualizado = await this.service.atualizarPaciente(idPaciente, dadosParaAtualizar)
            return res.status(200).json(pacienteAtualizado);
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                error
            })
        }
    }

    async deletarPaciente(req: Request, res: Response) {
        try {
            const idPaciente = Number(req.params.id)
            const paciente = await this.service.deletarPaciente(idPaciente)
            return res.status(200).json({
                mensagem: "Paciente deletado com sucesso!",
                data: paciente
            });
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                error
            })
        }
    }















}