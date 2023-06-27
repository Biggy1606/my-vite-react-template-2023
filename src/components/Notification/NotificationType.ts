export type NotificationStatus = "success" | "error" | "warning" | "info";
export interface INotificationBase {
	message: string;
	status: NotificationStatus;
	timeout?: number;
}
export interface INotification extends INotificationBase {
	id: number;
}
