import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const NotificationIcon: FunctionComponent<Props> = ({
  stroke = "currentColor",
  fill = stroke,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke={stroke}
  >
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill={fill} />
    <path d="M12 27V25.5H14.1V17.85C14.1 16.45 14.5125 15.2042 15.3375 14.1125C16.1625 13.0208 17.25 12.3333 18.6 12.05V11.325C18.6 10.9417 18.7375 10.625 19.0125 10.375C19.2875 10.125 19.6167 10 20 10C20.3833 10 20.7125 10.125 20.9875 10.375C21.2625 10.625 21.4 10.9417 21.4 11.325V12.05C22.75 12.3333 23.8417 13.0208 24.675 14.1125C25.5083 15.2042 25.925 16.45 25.925 17.85V25.5H28V27H12ZM20 30C19.4667 30 19 29.8042 18.6 29.4125C18.2 29.0208 18 28.55 18 28H22C22 28.55 21.8042 29.0208 21.4125 29.4125C21.0208 29.8042 20.55 30 20 30ZM15.6 25.5H24.425V17.85C24.425 16.6167 24 15.5667 23.15 14.7C22.3 13.8333 21.2583 13.4 20.025 13.4C18.7917 13.4 17.7458 13.8333 16.8875 14.7C16.0292 15.5667 15.6 16.6167 15.6 17.85V25.5Z" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke={stroke} />
    <defs>
      <rect width="24" height="24" fill="white" transform="translate(8 8)" />
    </defs>
  </svg>
);

export default NotificationIcon;
