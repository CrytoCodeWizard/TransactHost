import { HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { PasswordInput } from '@/components/password-input';

import { cn } from '@/lib/utils';
import { signup, userDataSchema } from '@/api/authService';

interface SignUpFormProps extends HTMLAttributes<HTMLDivElement> { }

const formSchema = z
    .object({
        companyName: z.string().min(1, { message: 'Please enter your company name' }),
        taxId: z.string().min(1, { message: 'Please enter your Tax ID' }),
        firstName: z.string().min(1, { message: 'Please enter your first name' }),
        lastName: z.string().min(1, { message: 'Please enter your last name' }),
        email: z
            .string()
            .min(1, { message: 'Please enter your email' })
            .email({ message: 'Invalid email address' }),
        password: z
            .string()
            .min(1, {
                message: 'Please enter your password',
            })
            .min(7, {
                message: 'Password must be at least 7 characters long',
            }),
        confirmPassword: z
            .string()
            .min(1, {
                message: 'Please enter your password',
            })
            .min(7, {
                message: 'Password must be at least 7 characters long',
            }),
        country: z.string().min(1, { message: 'Please enter your country' }),
        postalCode: z.string().min(1, { message: 'Please enter your postal code' }),
        city: z.string().min(1, { message: 'Please enter your city' }),
        address: z.string().min(1, { message: 'Please enter your address' }),
        euTaxNumber: z.string().min(1, { message: 'Please enter your EU tax number' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ['confirmPassword'],
    });

const SignUpForm = ({ className, ...props }: SignUpFormProps) => {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: '',
            taxId: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            country: 'Albania',
            postalCode: '1234',
            city: 'Tirana',
            address: '123-123-123',
            euTaxNumber: '123',
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const transformedData = {
                name: data.companyName,
                country: data.country,
                postalCode: data.postalCode,
                city: data.city,
                address: data.address,
                taxNumber: data.taxId,
                user: [
                    {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        password: data.password,
                    }
                ],
                euTaxNumber: data.euTaxNumber,
            };
            const responseData = await signup(transformedData as userDataSchema);
            console.log(responseData)
            if (!responseData.error) {
                navigate('/sign-in');
            } else {
                console.error('Signup failed:', responseData.error);
            }
        } catch (error) {
            console.error('Failed to signup:', error);
        }
    };

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-secondary"
                                            placeholder="Company Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="taxId"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Tax ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-secondary"
                                            placeholder="Tax ID"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-secondary"
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-secondary"
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-secondary"
                                            placeholder="name@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" className="border-secondary" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I accept the terms and conditions by registering my company.
                            </label>
                        </div>
                        <Button variant="secondary">Register</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default SignUpForm;
