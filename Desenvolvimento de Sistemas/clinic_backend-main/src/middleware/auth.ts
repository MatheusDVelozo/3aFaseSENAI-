import type { NextFunction } from "express";
import { verificarTokenAcesso } from "../utils/jwt";
import type { Request, Response } from "express";


export function auth(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization
    if (!header?.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing Token" })
    }

    try {
        const token = header.slice("Bearer ".length)
        const payload = verificarTokenAcesso(token)
        if (!payload) {
            return res.status(401).json({ message: "Invalid Token" })

        }
        next()

    } catch {
        return res.status(401).json({ message: "Invalid or expired Token" })

    }

}