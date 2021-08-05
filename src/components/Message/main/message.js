import Notifition from './notification'
let MessageInstance;

function getMessageInstance() {
  MessageInstance = MessageInstance || Notifition.newInstance();
  return MessageInstance;
}

function notice(type, { duration = 3, content = '' }) {
  let instance = getMessageInstance();

  instance.add(
    type,
    {
      duration,
      content
    }
  )
}

export default {
  info (options) {
    return notice('info', options);
  },
  success (options) {
    return notice('success', options);
  },
  warning (options) {
    return notice('warning', options);
  },
  danger (options) {
    return notice('danger', options);
  },
}


