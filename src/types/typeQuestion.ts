import { questions } from "@/data/questions"
import { ReactNode } from "react"

export type Questions = {
    id: number
    question: string
    correct: boolean
}