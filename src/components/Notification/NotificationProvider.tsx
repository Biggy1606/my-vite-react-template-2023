import React, { useState } from "react";
import { INotification } from "./NotificationType";

interface INotificationStore {
	notifications: INotification[] | [];
	setNotifications: React.Dispatch<React.SetStateAction<[] | INotification[]>>;
	duration?: number;
}
// Store for notifications
export const NotificationContext = React.createContext<INotificationStore>({
	notifications: [],
	setNotifications: () => {},
	duration: undefined,
});

// Just store for notifications, logic is in useNotification hook
export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// Queue for notifications
	const [notifications, setNotifications] = useState<Array<INotification> | []>(
		[],
	);
	NotificationContext.displayName = "Notifications";
	return (
		<NotificationContext.Provider
			value={{
				notifications,
				setNotifications,
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;
