export const menu = string => {
  switch (string) {
    case 'home':
      // noinspection JSUnresolvedFunction
      home();
      break;
    case 'critOpti':
      // noinspection JSUnresolvedFunction
      critOpti();
      break;
    default:
      break;
  }
};
