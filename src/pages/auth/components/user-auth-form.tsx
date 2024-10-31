import { HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'

import { PasswordInput } from '@/components/password-input';
import { useAuth } from '@/context/AuthContext'

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> { }

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter your email' })
		.email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(1, {
			message: 'Please enter your password',
		})
		.min(5, {
			message: 'Password must be at least 5 characters long',
		}),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const { login } = useAuth();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			await login(data.email, data.password);
			navigate('/');
		} catch (error) {
			console.error('Failed to login:', error);
		}
	}

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='grid gap-3'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem className='space-y-1'>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input className='focus-visible:ring-secondary' placeholder='name@example.com' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem className='space-y-1'>
									<div className='flex items-center justify-between'>
										<FormLabel>Password</FormLabel>
										<Link
											to='/forgot-password'
											className='text-sm font-medium text-muted-foreground hover:opacity-75'
										>
											Forgot password?
										</Link>
									</div>
									<FormControl>
										<PasswordInput placeholder='********' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							variant='secondary'>
							Login
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}
