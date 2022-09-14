#from mysql import connector
import requests
import pymysql
mydb = pymysql.connect(host="localhost",user="root",passwd="",database="lms" )


# mydb = sequelize({
#     host : 'localhost',
#     database : 'waseet',
#     user : 'postgres',
#     port : 5432,
#     password : 'Wolfteam_12'
# });

  
# get cookie
firstUrl = 'http://127.0.0.1:3000/signin';
payload={'email': "fhakem75@gmail.com",'password': "Fahdhakem123"}
resp1 = requests.post(firstUrl, data=payload).json();
cookie = resp1['data']
# manually pass previously returned cookies into following request
  
# print the response dictionary

url = 'http://127.0.0.1:3000/dashboard'
cookies = {'access_token': cookie}

json_data = requests.get(url, cookies=cookies).json()
code = json_data['code']
message = json_data['message']
print(json_data , '\n' , message)
cat = None
sub = []
search_input = 'python'
user_interest = ['machine learning' , 'web development']
username = 'a'
mycursor = mydb.cursor()
query = "select coursename from courses where coursename like %s"
mycursor.execute(query , ['%'+search_input+'%'])
result = mycursor.fetchall()
# return courses of that user want
for row in result:
    print (row[0])
    cat = row[0] 

query = "select category from courses where coursename = %s"
mycursor.execute(query ,[cat])
result = mycursor.fetchone()
# print(result[0])
query = "select subject from courses where category = %s"
mycursor.execute(query ,result)
result2 = mycursor.fetchone()
for row in result2:
    sub.append(row) 
print(len(sub[0]))

# print(sub)
# print(sub[0][0])
if len(sub[0]) == 1:
    query = "select * from courses where subject = %(subject)s and coursename Not like %(coursename)s"
    mycursor.execute(query , ({'subject' :sub[0] , 'coursename': '%'+search_input+'%'}))
    result = mycursor.fetchall()
    # return courses that user want
    for row in result:
        print (row[0])
else:
     i = 0
     for row in range(len(user_interest)):
        interest_subject = user_interest[i]
        print(sub[0][row])
        
        query = "select coursename from courses where subject[1] = %(subject)s and coursename Not like %(coursename)s"
        mycursor.execute(query , ({'subject' :sub[0][row] , 'coursename': '%'+search_input+'%'}))
        i+=1
        result = mycursor.fetchall()
        print(result)
        # return courses of that user want
        # for row in result:
        #     print (row[0])

