dhh = User.create!(:email => 'david@basecamp.com',
            :password => 'Admin!234', :password_confirmation => 'Admin!234',
            :first_name => 'David', :last_name => 'Hanson')
tenderlove = User.create!(:email => 'aaron.patterson@gmail.com',
            :password => 'Admin!234', :password_confirmation => 'Admin!234',
            :first_name => 'Aaron', :last_name => 'Patterson')
jvalim = User.create!(:email => 'jose.valim@platformatec.com.br',
            :password => 'Admin!234', :password_confirmation => 'Admin!234',
            :first_name => 'Jose', :last_name => 'Valim')
eric = User.create!(:email => 'condeeric@live.com',
            :password => 'Admin!234', :password_confirmation => 'Admin!234',
            :first_name => 'Eric', :last_name => 'Conde')
spastorino = User.create!(:email => 'santiago@wyeworks.com',
            :password => 'Admin!234', :password_confirmation => 'Admin!234',
            :first_name => 'Santiago', :last_name => 'Pastorino')
ryanb = User.create!(:email => 'ryan@railscasts.com',
            :password => 'Admin!234', :password_confirmation => 'Admin!234',
            :first_name => 'Ryan', :last_name => 'Bates')

dhh.tweets.create!(:body => 'Welcome to Ruby on Rails!')
tenderlove.tweets.create!(:body => 'I Love my Cats!')
jvalim.tweets.create!(:body => 'Just chillin...')
eric.tweets.create!(:body => 'Yeah Men!')
spastorino.tweets.create!(:body => 'Contributing to Rails!')
ryanb.tweets.create!(:body => 'Follow me at RailsCasts!')
