import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  DELETE_COLOR,
  CREATE_COLOR,
  FIND_COLOR,
  COLOR_DATA,
  CREATE_TASK,
  FIND_TASK,
  TASK_DATA,
  CREATE_COMPONENT,
  FIND_COMPONENT,
  DELETE_COMPONENT,
  CREATE_CATCHER,
  FIND_CATCHER,
  DELETE_CATCHER,
  CATCHER_DATA,
  COMPONENT_DATA,
  GET_NANO_CSS,
  CSS_DATA,
  CREATE_TEAM,
  TEAM_DATA,
  FIND_TEAM,
  INVITE,
  DECLINE,
  USER_INFO,
  JOIN,
  LOGOUT,
  GET_USER_INFO,
  DELETE_TASK
} from './constant';
import axios from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd';

axios.defaults.headers['x-csrf-token'] = Cookies.get('csrfToken');

const createColorAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/color/create',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
  } else {
    message.error('操作失败');
  }
};

const findColorAsync = function* (showMessage = true) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/color/find'
  });
  if (response.data && response.data.success) {
    showMessage && message.success('操作成功！');
    yield put({
      type: COLOR_DATA,
      data: response.data.data
    });
  } else {
    message.error('获取数据失败');
  }
};

const deleteColorAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/color/delete',
    data: {
      id: action.id
    }
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(findColorAsync, false);
  } else {
    message.error('获取数据失败');
  }
};

const createTaskAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/task/create',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
  } else {
    message.error('操作失败');
  }
};

const findTaskAsync = function* (showMessage = true) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/task/find'
  });
  if (response.data && response.data.success) {
    showMessage && message.success('操作成功！');
    yield put({
      type: TASK_DATA,
      data: response.data.data
    });
  } else {
    message.error('获取数据失败');
  }
};

const deleteTaskAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/task/delete',
    data: {
      id: action.id
    }
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(findTaskAsync, false);
  } else {
    message.error('获取数据失败');
  }
};

const createComponentAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/component/create',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
  } else {
    message.error('操作失败');
  }
};

const findComponentAsync = function* (showMessage = true) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/component/find'
  });
  if (response.data && response.data.success) {
    showMessage && message.success('操作成功！');
    yield put({
      type: COMPONENT_DATA,
      data: response.data.data
    });
  } else {
    message.error('获取数据失败');
  }
};

const deleteComponentAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/component/delete',
    data: {
      id: action.id
    }
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(findComponentAsync, false);
  } else {
    message.error('获取数据失败');
  }
};


const createCatcherAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/catcher/create',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
  } else {
    message.error('操作失败');
  }
};

const findCatcherAsync = function* (showMessage = true) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/catcher/find'
  });
  if (response.data && response.data.success) {
    showMessage && message.success('操作成功！');
    yield put({
      type: CATCHER_DATA,
      data: response.data.data
    });
  } else {
    message.error('获取数据失败');
  }
};

const deleteCatcherAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/catcher/delete',
    data: {
      id: action.id
    }
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(findCatcherAsync, false);
  } else {
    message.error('获取数据失败');
  }
};

const getNanoCssAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/task/getNanoCss',
    data: {
      rawCss: action.rawCss
    }
  });
  yield put({
    type: CSS_DATA,
    data: response.data.data
  });
};

const createTeamAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/team/create',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(findTeamAsync, false);
  } else {
    message.error('操作失败');
  }
};

const findTeamAsync = function* (showMessage = false) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/team/find'
  });
  if (response.data && response.data.success) {
    showMessage && message.success('操作成功！');
    yield put({
      type: TEAM_DATA,
      data: response.data.data
    });
  } else {
    message.error('获取数据失败');
  }
};

const inviteAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/team/invite',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
  } else {
    message.error(response.data.error);
  }
};

const declineInvitationAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/team/decline',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(getUserInfoAsync, false);
  } else {
    message.error(response.data.error);
  }
};

const joinAsync = function* (action) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/team/join',
    data: action.data
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
    yield call(getUserInfoAsync, false);
    yield call(findTeamAsync, false);
  } else {
    message.error(response.data.error);
  }
};

const getUserInfoAsync = function* (showMessage = false) {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/user/info'
  });
  if (response.data && response.data.success) {
    showMessage && message.success('操作成功！');
    yield put({
      type: USER_INFO,
      data: response.data.userInfo
    });
  } else {
    message.error('获取数据失败');
  }
};

const logoutAsync = function* () {
  const response = yield call(axios, {
    method: 'post',
    url: '/api/v1/user/logout'
  });
  if (response.data && response.data.success) {
    message.success('操作成功！');
  } else {
    message.error(response.data.error);
  }
};

const watcher = function* () {
  yield takeEvery(CREATE_COLOR, createColorAsync);
  yield takeEvery(FIND_COLOR, findColorAsync);
  yield takeEvery(DELETE_COLOR, deleteColorAsync);

  yield takeEvery(CREATE_TASK, createTaskAsync);
  yield takeEvery(FIND_TASK, findTaskAsync);
  yield takeEvery(DELETE_TASK, deleteTaskAsync);
  yield takeEvery(GET_NANO_CSS, getNanoCssAsync);

  yield takeEvery(CREATE_COMPONENT, createComponentAsync);
  yield takeEvery(FIND_COMPONENT, findComponentAsync);
  yield takeEvery(DELETE_COMPONENT, deleteComponentAsync);

  yield takeEvery(CREATE_CATCHER, createCatcherAsync);
  yield takeEvery(FIND_CATCHER, findCatcherAsync);
  yield takeEvery(DELETE_CATCHER, deleteCatcherAsync);

  yield takeEvery(CREATE_TEAM, createTeamAsync);
  yield takeEvery(FIND_TEAM, findTeamAsync);
  yield takeEvery(INVITE, inviteAsync);

  yield takeEvery(DECLINE, declineInvitationAsync);
  yield takeEvery(JOIN, joinAsync);

  yield takeEvery(LOGOUT, logoutAsync);
  yield takeEvery(GET_USER_INFO, getUserInfoAsync, false);
};

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watcher()]);
}