users = [
    {
        email:'chris@test.com'
        password: 'test123'
        password_confirmation: 'test123'
    }
]

users.each do |attribute|
    User.create attribute
end

apartments = [
  {
    street: '123 Side Street',
    city: 'SD',
    state: 'CA',
    manager: 'Sam',
    email: 'sam@test.com',
    price: '1400',
    bedrooms: 1,
    bathrooms: 1,
    pets: '3 pets max'
  },
  {
    street: '683 Front Street',
    city: 'SD',
    state: 'CA',
    manager: 'Bill',
    email: 'bill@test.com',
    price: '1900',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'gophers only'
  }
]

first_user = User.where(email: 'chris@test.com').first

apartments.each do |attribute|
  first_user.apartments.create attribute
end