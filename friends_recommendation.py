import requests
import pymysql

# mydb = pymysql.connect(host =  "us-cdbr-east-06.cleardb.net",
#   database =  "heroku_e41c1baee36a515",
#   user = "b9e60d1985c298",
#   password =  "3e689dd2", )
mydb = pymysql.connect(host =  "127.0.0.1",
  database =  "lms",
  user = "root",
  password =  "", )
mycursor = mydb.cursor()

  
# get cookie
firstUrl = 'http://127.0.0.1:3000/signin'
payload={'email': "fhakem75@gmail.com",'password': "Fahdhakem123"}
resp1 = requests.post(firstUrl, data=payload).json()
cookie = resp1['data']
# manually pass previously returned cookies into following request
  
# print the response dictionary

url = 'http://127.0.0.1:3000/dashboard'
cookies = {'access_token': cookie}

json_data = requests.get(url, cookies=cookies).json()
code = json_data['code']
firstname = json_data['data']['User']['firstName']
lastame = json_data['data']['User']['lastName']
# print(firstname , lastame)

# def sort_list(recommended_users):
#   my_set = set(tuple(x) for x in recommended_users)
#   sorted_recommended_users = sorted(my_set  , key = lambda x:x[1])
#   for i in sorted_recommended_users:
#     final_list.append(i[0])
#   return final_list


# def recommend_friends(active_user_interests , key_list, values_list):
  
#   match_interests = []
#   global recommended_users

#   for i in values_list:
#     match_interests =[value for value in active_user_interests if value in i]
#     recommended_users.append([key_list[values_list.index(i)] , len(match_interests)])
#   return (recommended_users)
  
# #get ids of user friends
# user_friends = []
# query = "select friendId from userFriends where userId ='df83ee61-4198-11ed-b17d-b07b258218c6'"
# mycursor.execute(query)
# result = mycursor.fetchall()
# for user in result:
#   user_friends.append(user[0])

# active_user_interests = ['0f7f66a4-3d1c-11ed-a60c-0045e21c18f1' ,"0b686702-3d1c-11ed-a60c-0045e21c18f1" ]
# recommended_users = [] 
# #get all users interests 
# userinterests = {}
# final_list = []
# user_i = []
# query = "select userId , interestId from userinterests where userId not like 'df83ee61-4198-11ed-b17d-b07b258218c6'"
# mycursor.execute(query)
# result = mycursor.fetchall()
# for user , interest in result:
#    user_i.append([user ,interest ])

# for i in user_i:
#   userinterests[i[0]]  = []

# for i in user_i:
#   userinterests[i[0]].append(i[1])

# key_list =list(userinterests.keys())
# values_list = list(userinterests.values())

# recommend_friends(active_user_interests , key_list , values_list)
# my_set = set(tuple(x) for x in recommended_users)
# sorted_recommended_users = sorted(my_set  , key = lambda x:x[1])
# for i in sorted_recommended_users:
#   final_list.append(i[0])
# sorted_final_list = final_list[::-1]
# recommended = set(sorted_final_list).intersection(user_friends)
# for i in recommended:
#   sorted_final_list.remove(i)
# print(sorted_final_list)

