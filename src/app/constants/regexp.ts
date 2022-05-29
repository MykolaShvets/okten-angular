export const regEx = {
  model: new RegExp('^[a-zA-Zа-яА-ЯЁёіІїЇ]{1,20}$'),
  username: new RegExp('^[a-zA-Zа-яА-ЯЁёіІїЇ]{1,20}$'),
  password: new RegExp(/^[^a-zA-Zа-яА-ЯЁёіІїЇ\s]{2,20}$/)
}
