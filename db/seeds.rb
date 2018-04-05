# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(
    username: 'Demo User',
    email: 'demo@demo.com',
    password: 'password',
);

Nick = User.create!(
    username: 'Nick Welch',
    email: 'nwelch@gmail.com',
    password: 'password',
    profile_picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c17.0.64.64/p64x64/21751274_10155715933012733_239784575756338336_n.jpg?oh=2aeb2d164b3bd8ff56afe1331657053f&oe=5B38CB97'
);

