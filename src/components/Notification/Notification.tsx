import { useEffect, useState } from "react";
import { INotification, NotificationStatus } from "./NotificationType";

enum NotificationColorsClasses {
	"info" = "alert alert-info",
	"success" = "alert alert-success",
	"warning" = "alert alert-warning",
	"error" = "alert alert-error",
}

const selectIcon = (status: NotificationStatus) => {
	switch (status) {
		case "error":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			);
		case "success":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			);
			break;
		case "info":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="stroke-current shrink-0 w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			);
			break;
		case "warning":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			);
			break;
		default:
			return null;
			break;
	}
};

interface NotificationProps {
	notification: INotification;
	removeNotification: (id: number) => void;
}

function Notification({ notification, removeNotification }: NotificationProps) {
	const [counter, setCounter] = useState<number | undefined>(
		notification.duration,
	);
	const isCloseable = !!!notification.duration;

	useEffect(() => {
		// Skip if counter is undefined
		if (counter === undefined) return;
		const intervalId = setInterval(() => {
			setCounter(counter - 1);
			if (counter === 0) {
				removeNotification(notification.id);
			}
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, [counter]);
	return (
		<div
			className={NotificationColorsClasses[notification.status]}
			key={notification.id}
		>
			{selectIcon(notification.status)}
			<span>{notification.message}</span>
			{isCloseable ? (
				<button
					className="btn btn-sm"
					onClick={() => removeNotification(notification.id)}
				>
					Close
				</button>
			) : null}
			{isCloseable ? null : (
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown">
						<span style={{ "--value": counter } as React.CSSProperties}></span>
					</span>
				</div>	
			)}
		</div>
	);
}

export default Notification;
