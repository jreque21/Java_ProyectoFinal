import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { Payment, PaymentFormData } from '../lib/types'

const API_URL = import.meta.env.VITE_API_URL as string

export function usePayments() {
  return useQuery<Payment[]>({
    queryKey: ['payments'],
    queryFn: async () => {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Error fetching payments')
      return response.json()
    }
  })
}

export function useTask(id: number) {
  return useQuery<Payment>({
    queryKey: ['payment', id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) throw new Error('Error fetching payment')
      return response.json()
    }
  })
}



