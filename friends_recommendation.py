import pymysql
import sys

# mydb = pymysql.connect(host =  "us-cdbr-east-06.cleardb.net",
#   database =  "heroku_e41c1baee36a515",
#   user = "b9e60d1985c298",
#   password =  "3e689dd2", )
mydb = pymysql.connect(host="127.0.0.1",
                       database="lms",
                       user="root",
                       password="", )
mycursor = mydb.cursor()

def recommend_friends(active_user_interests , key_list, values_list):
  
  match_interests = []
  recommended_users = []

  for i in values_list:
    match_interests =[value for value in active_user_interests if value in i]
    recommended_users.append([key_list[values_list.index(i)] , len(match_interests)])
  return (recommended_users)

#active_user Id
userId = sys.argv[1]
#get ids of user friends
user_friends = []
query = "select friendId from userFriends where userId = %s"
mycursor.execute(query , [userId])
result = mycursor.fetchall()
for user in result:
  user_friends.append(user[0])

#get active_user interests
active_user_interests = []
query = "select interestId from userinterests where userId = %s"
mycursor.execute(query , [userId])
result = mycursor.fetchall()
for interest in result:
  active_user_interests.append(interest[0])


#get all users interests 
userinterests = {}
final_list = []
user_i = []
query = "select userId , interestId from userinterests where userId not like %s"
mycursor.execute(query , [userId])
result = mycursor.fetchall()
for user , interest in result:
   user_i.append([user ,interest ])

for i in user_i:
  userinterests[i[0]]  = []

for i in user_i:
  userinterests[i[0]].append(i[1])

key_list =list(userinterests.keys())
values_list = list(userinterests.values())

recommended_users = recommend_friends(active_user_interests , key_list , values_list)
my_set = set(tuple(x) for x in recommended_users)
sorted_recommended_users = sorted(my_set  , key = lambda x:x[1])
# print(sorted_recommended_users)
for i in sorted_recommended_users:
  final_list.append(i[0])

sorted_final_list = final_list[::-1]
recommended = set(sorted_final_list).intersection(user_friends)
for i in recommended:
  sorted_final_list.remove(i)
print(sorted_final_list)

