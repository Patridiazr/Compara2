from igramscraper.instagram import Instagram
import json


instagram = Instagram()

# authentication supported
#instagram.with_credentials('usua', 'contrasena')
#instagram.login()

#Getting an account by id
#account = instagram.get_account_by_id(3)
#or
#Getting an account by username
account = instagram.get_account('_tontaku_')


# Available fields
datos = [

    {
    'Id':account.identifier,
    'Username':account.username,
    'Full_name':account.full_name,
    'Biography':account.biography,
    #'Profile pic url: ': account.get_profile_picture_url,
    'External_Url':account.external_url,
    'Number_of_published_posts':account.media_count,
    'Number_of_followers':account.followed_by_count,
    'Number_of_follows':account.follows_count,
    'Is_private':account.is_private,
    'Is_verified':account.is_verified
}
]

with open('datos.json','w') as file:
    json.dump(datos,file)

print('Account info:')
print('Id: ', account.identifier)
print('Username: ', account.username)
print('Full name: ', account.full_name)
print('Biography: ', account.biography)
print('Profile pic url: ', account.get_profile_picture_url())
print('External Url: ', account.external_url)
print('Number of published posts: ', account.media_count)
print('Number of followers: ', account.followed_by_count)
print('Number of follows: ', account.follows_count)
print('Is private: ', account.is_private)
print('Is verified: ', account.is_verified)


#with open('datos.json', 'r') as file:
#    data = json.load(file)
#    print(data)