import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "../../components/Notification/NotificationStack";

type Input = {
	username: string;
	password: string;
};
const InputSchema = z.object({
	username: z.string().min(4, "Username must be at least 4 characters"),
	password: z
		.string()
		.regex(/[A-Za-z\d@$!%*#?&]{4,}/, "Minimum four characters")
		.regex(/(?=.*[A-Z])/, "At least one big letter")
		.regex(/(?=.*\d)/, "At least one number")
		.regex(/(?=.*[@$!%*#?&])/, "At least one special character"),
});

function LoginPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Input>({
		resolver: zodResolver(InputSchema),
	});
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<Input> = (data) => {
		if (data.username === "admin" && data.password === "A0m!n") {
			toast.success("Login successful!", 3);
			navigate("/products");
		} else {
			toast.error("Wrong username or password");
		}
		setIsSubmitting(false);
	};
	const onError: SubmitErrorHandler<Input> = () => {
		toast.error("Errors in form fields");
	};

	return (
		<div className="mt-4">
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<fieldset className="flex flex-col content-around justify-center items-center space-y-4">
					<div className="form-control">
						<label className="input-group">
							<span className="w-32 flex-none">Username</span>
							<input
								type="text"
								placeholder="username"
								autoComplete="username"
								className="input input-bordered w-full"
								disabled={isSubmitting}
								{...register("username")}
							/>
						</label>
						{errors.username && (
							<label className="label">
								<span className="label-text-alt">{errors.username?.message}</span>
							</label>
						)}
					</div>
					<div className="form-control">
						<label className="input-group">
							<span className="w-32 flex-none">Password</span>
							<input
								type="password"
								placeholder="password"
								autoComplete="current-password"
								className="input input-bordered w-full"
								disabled={isSubmitting}
								{...register("password")}
							/>
						</label>
						{errors.password && (
							<label className="label">
								<span className="label-text-alt">
									Password must have: {errors.password?.message}{" "}
								</span>
							</label>
						)}
					</div>
					<button
						className="btn btn-primary btn-wide"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting && (
							<span className="loading loading-spinner loading-lg"></span>
						)}{" "}
						Login
					</button>
				</fieldset>
			</form>
		</div>
	);
}

export default LoginPage;
