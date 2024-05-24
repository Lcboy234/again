import bcrypt from 'bcryptjs'

const users = [
    {
      name: 'Admin User',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456', 5),
      isAdmin: true,
    },
    {
      name: 'Kai Xiang Cheah',
      email: '123@gmail.com',
      password: bcrypt.hashSync('123456', 5),
      isAdmin: false,
    },
    {
      name: 'Ray',
      email: '456@gmail.com',
      password: bcrypt.hashSync('123456', 5),
      isAdmin: false,
    },
  ];
  
  export default users;