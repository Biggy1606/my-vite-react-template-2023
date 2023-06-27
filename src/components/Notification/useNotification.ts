import { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";
import { INotification, NotificationStatus } from "./NotificationType";

// Hook for adding notifications to the queue in local storage
export function useNotification() {
	const { notifications, setNotifications } = useContext(NotificationContext);

	// const addNotificationToQueue = (
	// 	message: string,
	// 	status: NotificationStatus,
	// ) => {
	// 	addNotification(message, status);
	// };

	// const removeNotificationFromQueue = (id: number) => {
	// 	removeNotification(id);
	// };

	const addNotificationToQueue = (
		message: string,
		status: NotificationStatus,
	) => {
		const id = notifications.length + 1;
		const notification: INotification = { id, message, status };
		setNotifications([...notifications, notification]);
	};
	const removeNotificationFromQueue = (id: number) => {
		setNotifications(
			notifications.filter((notification) => notification.id !== id),
		);
	};
	const clearNotifications = () => {
		setNotifications([]);
	};

	return {
		notifications: notifications,
		addNotification: addNotificationToQueue,
		removeNotification: removeNotificationFromQueue,
        clearNotifications: clearNotifications,
	};
}
