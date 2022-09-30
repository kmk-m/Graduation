#from mysql import connector
import requests
import pymysql

mydb = pymysql.connect(host =  "us-cdbr-east-06.cleardb.net",
  database =  "heroku_e41c1baee36a515",
  user = "b9e60d1985c298",
  password =  "3e689dd2", )
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

query = "select userId from users where firstName = %s and lastName = %s"
mycursor.execute(query , (firstname , lastame))
result = mycursor.fetchall()
for row in result:
   print(row[0])
course_name = None
sub = []
user_interest = []
search_input = 'javascript'
query = "select name from interests where id = (select interestid from userinterests where userId = (select userId from users where firstName = %s and lastName = %s))"
mycursor.execute(query , (firstname , lastame))
result = mycursor.fetchall()
for row in result:
    user_interest.append(row[0])
    print(row)


query = "select name from courses where name like %s"
mycursor.execute(query , ['%'+search_input+'%'])
result = mycursor.fetchall()

# return courses of that user want
for row in result:
    print (row[0])
    course_name = row[0] 

query = "select name from categories where id = (select courseId from courses where name = %s)"
mycursor.execute(query ,[course_name])
result2 = mycursor.fetchall()
for row in result2:
    sub.append(row) 
    print(row)

if len(sub[0]) == 1:
    query = "select name from courses where courseId = (select id from categories where %(cat)s = any(subject)) and name Not like %(name)s "
    mycursor.execute(query , ({'cat' :sub[0][0] ,'name': '%'+search_input+'%' }))
    result = mycursor.fetchall()

    for row in result:
        print (row[0])
else:
    for row in range(len(user_interest[0])):
        interest_subject = user_interest[0][row]
    
        query = "select name from courses where courseId = (select id from categories where name = (select id from categories where name = %(subject)s) and name Not like %(name)s"
        mycursor.execute(query , ({'subject' :interest_subject , 'name': '%'+search_input+'%'}))
        
        result = mycursor.fetchall()
        if len(result) > 0:
            for row in result:
                print (row[0])
    
