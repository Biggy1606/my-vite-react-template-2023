export type NotificationStatus = "success" | "error" | "warning" | "info";
export interface INotificationBase {
	message: string;
	status: NotificationStatus;
	duration?: number;
}
export interface INotification extends INotificationBase {
	id: number;
}
