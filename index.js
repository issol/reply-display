var modal = document.getElementById('login_modal');

var reply_modal = document.getElementById('reply_modal');

var reply_list_container = document.getElementById('reply_list_container');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName('close')[0];

var reply_span = document.getElementsByClassName('reply_close')[0];

function reply_count() {
  const reply = document.getElementById('reply_count');
  reply.innerText = parseInt(reply.innerText) + 1;
}

function like_count() {
  const like = document.getElementById('like_count');
  like.innerText = parseInt(like.innerText) + 1;
}

function dislike_count() {
  const dislike = document.getElementById('dislike_count');
  dislike.innerText = parseInt(dislike.innerText) + 1;
}

function share_count() {
  const share = document.getElementById('share_count');
  share.innerText = parseInt(share.innerText) + 1;
}

function remove_reply() {}

const user_database = [
  {
    user_name: '네이버유저',
    user_picture: 'assets/gamer.svg',
    platform_image: 'assets/naver.png',
    reply_count: 0,
    like_count: 0,
    dislike_count: 0,
    share_count: 0,
  },
  {
    user_name: '카카오유저',
    user_picture: 'assets/son.svg',
    platform_image: 'assets/kakao.svg',
    reply_count: 0,
    like_count: 0,
    dislike_count: 0,
    share_count: 0,
  },
  {
    user_name: '페북유저',
    user_picture: 'assets/student.svg',
    platform_image: 'assets/facebook.svg',
    reply_count: 0,
    like_count: 0,
    dislike_count: 0,
    share_count: 0,
  },
  {
    user_name: '구글유저',
    user_picture: 'assets/business-person.svg',
    platform_image: 'assets/google.svg',
    reply_count: 0,
    like_count: 0,
    dislike_count: 0,
    share_count: 0,
  },
  {
    user_name: '트위터유저',
    user_picture: 'assets/boy.svg',
    platform_image: 'assets/twitter.svg',
    reply_count: 0,
    like_count: 0,
    dislike_count: 0,
    share_count: 0,
  },
];

const badwords = ['네이버', '구글', '카카오', '페이스북', '페북', '트위터'];

function login(platform) {
  modal.style.display = 'none';
  reply_modal.style.display = 'block';
  if (platform === 'naver') {
    document.getElementById('user_picture').src = user_database[0].user_picture;
    document.getElementById('login_platform').src = user_database[0].platform_image;
    document.getElementById('logined_user').innerText = user_database[0].user_name;
  } else if (platform === 'kakao') {
    document.getElementById('user_picture').src = user_database[1].user_picture;
    document.getElementById('login_platform').src = user_database[1].platform_image;
    document.getElementById('logined_user').innerText = user_database[1].user_name;
  } else if (platform === 'facebook') {
    document.getElementById('user_picture').src = user_database[2].user_picture;
    document.getElementById('login_platform').src = user_database[2].platform_image;
    document.getElementById('logined_user').innerText = user_database[2].user_name;
  } else if (platform === 'google') {
    document.getElementById('user_picture').src = user_database[3].user_picture;
    document.getElementById('login_platform').src = user_database[3].platform_image;
    document.getElementById('logined_user').innerText = user_database[3].user_name;
  } else if (platform === 'twitter') {
    document.getElementById('user_picture').src = user_database[4].user_picture;
    document.getElementById('login_platform').src = user_database[4].platform_image;
    document.getElementById('logined_user').innerText = user_database[4].user_name;
  }
}

function submit_reply() {
  const reply = document.getElementById('written_reply').value;
  badwords.find((word) => {
    if (reply.indexOf(word) !== -1) {
      alert(`"${word}"를 포함한 댓글은 작성하실 수 없습니다.`);
    }
  });
  const current_user_name = document.getElementById('logined_user').innerText;
  const current_user_picture = document.getElementById('user_picture').src;
  const current_user_platform = document.getElementById('login_platform').src;
  createReply(current_user_name, current_user_picture, current_user_platform, reply);
}

function createReply(name, picture, platform, reply) {
  reply_modal.style.display = 'none';
  const reply_list = document.createElement('div');
  reply_list.style = 'margin: 20px 10px 0 10px; background-color:white;';

  reply_list_container.appendChild(reply_list);
  const reply_info = document.createElement('div');
  reply_info.style = 'display: flex; align-items: center;justify-content: space-between;';
  reply_list.appendChild(reply_info);
  const user_profile = document.createElement('div');
  user_profile.style = 'display:flex; align-items:center; justify-content:space-between; margin-left:10px; width:250px;';
  reply_info.appendChild(user_profile);
  const arrow_img = document.createElement('img');
  arrow_img.src = 'assets/down-right-arrow.svg';
  const user_img = document.createElement('img');
  user_img.src = picture;
  user_img.style = 'width:25px;height:25px';
  const platform_img = document.createElement('img');
  platform_img.src = platform;
  platform_img.style = 'width:15px;height:15px;';
  const user_id = document.createElement('h5');
  user_id.innerText = name;
  const user_badge = document.createElement('img');
  user_badge.src = 'assets/badge-black.svg';
  user_badge.style = 'width:15px; height:15px';
  const created_at = document.createElement('p');
  created_at.innerText = '2021.01.15.04:46';
  created_at.style = 'font-size:10px;color:gray;';
  const menu_div = document.createElement('div');
  reply_info.appendChild(menu_div);
  menu_div.onclick = function () {
    const confirm_remove = confirm('삭제하시겠습니까?');
    if (confirm_remove) {
      reply_list.style = 'display:none;';
    }
  };
  const menu_img = document.createElement('img');
  menu_img.src = 'assets/rotated-menu.svg';
  menu_div.appendChild(menu_img);
  user_profile.appendChild(arrow_img);
  user_profile.appendChild(user_img);
  user_profile.appendChild(platform_img);
  user_profile.appendChild(user_id);
  user_profile.appendChild(user_badge);
  user_profile.appendChild(created_at);

  const list_reply = document.createElement('div');
  list_reply.style = 'margin-left:60px;margin-right:10px;line-height:15px;font-size:11px;';
  list_reply.innerText = reply;
  reply_list.appendChild(list_reply);

  const list_detail = document.createElement('div');
  list_detail.style = 'display:flex;justify-content:space-between; margin-top:5px;';
  list_reply.appendChild(list_detail);

  const list_detail_left = document.createElement('div');
  list_detail_left.style = 'display:flex;justify-content:space-between; margin-top:5px;';
  list_detail.appendChild(list_detail_left);

  const list_detail_right = document.createElement('div');
  list_detail_right.style = 'display:flex;margin-top:5px;';
  list_detail.appendChild(list_detail_right);

  const button_reply = document.createElement('button');
  button_reply.style =
    'display:flex; justify-content:center;align-items:center;width:50px;height:20px;margin-right:5px;border-radius:20px;border:1px solid; border-color:gray; background:white;';
  button_reply.onclick = function () {
    reply_count.innerText = parseInt(reply_count.innerText) + 1;
  };
  list_detail_left.appendChild(button_reply);

  const button_like = document.createElement('button');
  button_like.style =
    'display:flex; justify-content:center;align-items:center;width:50px;height:20px;margin-right:5px;border-radius:20px;border:1px solid; border-color:gray; background:white;';
  button_like.onclick = function () {
    like_count.innerText = parseInt(like_count.innerText) + 1;
  };
  list_detail_right.appendChild(button_like);

  const button_dislike = document.createElement('button');
  button_dislike.style =
    'display:flex; justify-content:center;align-items:center;width:50px;height:20px;margin-right:5px;border-radius:20px;border:1px solid; border-color:gray; background:white;';
  button_dislike.onclick = function () {
    dislike_count.innerText = parseInt(dislike_count.innerText) + 1;
  };
  list_detail_right.appendChild(button_dislike);

  const button_share = document.createElement('button');
  button_share.style =
    'display:flex; justify-content:center;align-items:center;width:50px;height:20px;margin-right:5px;border-radius:20px;border:1px solid; border-color:gray; background:white;';
  button_share.onclick = function () {
    share_count.innerText = parseInt(share_count.innerText) + 1;
  };
  list_detail_right.appendChild(button_share);

  const div_reply = document.createElement('div');
  div_reply.style = 'display:flex; justify-content:center;align-items:center';
  button_reply.appendChild(div_reply);

  const div_like = document.createElement('div');
  div_like.style = 'display:flex; justify-content:center;align-items:center';
  button_like.appendChild(div_like);

  const div_dislike = document.createElement('div');
  div_dislike.style = 'display:flex; justify-content:center;align-items:center';
  button_dislike.appendChild(div_dislike);

  const div_share = document.createElement('div');
  div_share.style = 'display:flex; justify-content:center;align-items:center';
  button_share.appendChild(div_share);

  const reply_img = document.createElement('img');
  reply_img.src = 'assets/reply-gray.svg';
  reply_img.style = 'width:20px; height:15px;';
  div_reply.appendChild(reply_img);

  const like_img = document.createElement('img');
  like_img.src = 'assets/thumb-up-gray.svg';
  like_img.style = 'width:20px;height:15px;';
  div_like.appendChild(like_img);

  const dislike_img = document.createElement('img');
  dislike_img.src = 'assets/thumb-down-gray.svg';
  dislike_img.style = 'width:20px;height:15px;';
  div_dislike.appendChild(dislike_img);

  const share_img = document.createElement('img');
  share_img.src = 'assets/share-gray.svg';
  share_img.style = 'width:20px;height:15px;';
  div_share.appendChild(share_img);

  const reply_count = document.createElement('h5');
  const like_count = document.createElement('h5');
  const dislike_count = document.createElement('h5');
  const share_count = document.createElement('h5');
  reply_count.innerText = 0;
  like_count.innerText = 0;
  dislike_count.innerText = 0;
  share_count.innerText = 0;
  div_reply.appendChild(reply_count);
  div_like.appendChild(like_count);
  div_dislike.appendChild(dislike_count);
  div_share.appendChild(share_count);

  const devide_line = document.createElement('hr');
  devide_line.style = 'magin-top:20px; border:solid 1px lightgray;';

  reply_list.appendChild(devide_line);
}

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal || event.target === reply_modal) {
    modal.style.display = 'none';
    reply_modal.style.display = 'none';
  }
};
