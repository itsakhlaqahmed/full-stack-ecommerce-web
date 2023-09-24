import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Ahmed',
        email: 'ahmed@email.com',
        password: bcrypt.hashSync('abcde', 10),
        isAdmin: false
    },
    {
        name: 'Hasan',
        email: 'hasan@email.com',
        password: bcrypt.hashSync('abc123', 10),
        isAdmin: false
    },
]

export default users;