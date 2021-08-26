import { alert, notice, info, success, error } from '@pnotify/core';

function pnotifyNotice() {
  error({
    text: 'Error: enter more correctly',
    styling: 'brighttheme',
    delay: 2000,
  });
}
function pnotifyError() {
  notice({
    text: 'All pictures uploaded',
    styling: 'brighttheme',
    delay: 2000,
  });
}

export { pnotifyError, pnotifyNotice };
