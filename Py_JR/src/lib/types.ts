// Pagos
export interface Payment {
    id_alumno: number
    name_alumno: string
    horario: string
    status: boolean | number
    amount: number
    createdAt: string
    updatedAt: string
  }
  
export type PaymentFormData = Pick<Payment, 'name_alumno' | 'horario' | 'amount' | 'status'>

export interface Task {
    id: number
    title: string
    description?: string
    done: boolean|number
    createdAt: string
    updatedAt: string
  }
  
export type TaskFormData = Pick<Task, 'title' | 'description' | 'done'>

