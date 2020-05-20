import './UserPhoto.scss'

export default function () {
    const UserPhoto = document.createElement('div');
    UserPhoto.id = 'UserPhoto';
    const img = new Image();
    img.src = "https://www3.autoimg.cn/newsdfs/g30/M0B/63/24/720x360_0_autohomecar__ChwFlF7Dvy-AJmggAATNvh53tZY005.jpg";
    UserPhoto.appendChild(img);
    document.getElementById('root').appendChild(UserPhoto);

}