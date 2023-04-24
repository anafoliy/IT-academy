// let message;
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
let message;
switch (login) {
    case 'Сотрудник':
        message = 'Привет';
        break;
    case 'Директор':
        message = 'Здравствуйте';
        break;
    case '':
        message = 'Нет логина';
        break;
    default:
        message = '';
}