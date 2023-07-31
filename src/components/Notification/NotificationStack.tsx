import Notification from "./Notification";
import { useNotification } from "./useNotification";
// -----------------------------------------------------------
// Component that renders notification stack
// -----------------------------------------------------------
function NotificationStack() {
	const { notifications, removeNotification } = useNotification();

	// It takes notification array from hook and renders it
	const renderNotifications = () => {
		return notifications.map((notification) => {
			return (
				<Notification
					key={notification.id}
					notification={notification}
					removeNotification={removeNotification}
				/>
			);
		});
	};

	return <div className="toast toast-end">{renderNotifications()}</div>;
}

export default NotificationStack;
