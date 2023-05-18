interface StatusType {
  device_id: number;
  wind_command: boolean;
  water_command: boolean;
  light_command: boolean;
}

export default function handleStatus(ClickedStatus: number, body: StatusType) {
  switch (ClickedStatus) {
    case 0:
      return (body.wind_command = !false);

    case 1:
      return (body.wind_command = !false);
    case 2:
      return (body.water_command = !false);
    default:
      return;
  }
}
