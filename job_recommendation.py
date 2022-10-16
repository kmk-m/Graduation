import pymysql
import sys

def selected_job_qualifications(user_interest , all_skills , user_skills , company , job_des):
    job_skills = []
    common_skills = []
    global final_output
    recommended_courses = []
    global mycursor
    for value in all_skills:
        if value in job_des:
            job_skills.append(value)
    for skill in user_skills:
        if skill in job_skills:
            common_skills.append(skill)
    if len(user_skills) == 0:
        for i in common_skills:
            query = "SELECT name , MAX(rating) as rate FROM courses where name like %(name)s group by name;"
            mycursor.execute(query , {'name': '%'+i+'%'})
            result = mycursor.fetchall()
            for course in result:
                recommended_courses.append(course[0])
                break
        final_output[company].append([user_interest , 'missing' , common_skills , len(common_skills) , 'recommended_courses' ,  recommended_courses])
    elif job_skills == common_skills or all(common_skills) in job_skills:
        final_output[company].append([user_interest , 'Qualified'])
    else:
        for skill in common_skills:
            job_skills.remove(skill)

        for i in job_skills:
            query = "SELECT courseId , MAX(rating) as rate FROM courses where name like %(name)s group by name;"
            mycursor.execute(query , {'name': '%'+i+'%'})
            result = mycursor.fetchall()
            for course in result:
                recommended_courses.append(course[0])
                break

        final_output[company].append([user_interest , 'missing' , job_skills , len(job_skills) , 'recommended_courses' ,  recommended_courses])
    return('final_output =  ', final_output)

mydb = pymysql.connect(host="127.0.0.1",
                       database="lms",
                       user="root",
                       password="", )
mycursor = mydb.cursor()

userId = sys.argv[1]
# userId = '4e994d60-4af0-11ed-bb93-b07b258218c6'

# getting active_user interests
user_interests = []
query = "select categoryId from userInterests where userId = %s"
mycursor.execute(query , [userId])
result = mycursor.fetchall()
for skill in result:
    user_interests.append(skill[0])
# print(user_interests)

# getting list with all skils
all_skills = []
query = "select name from categories"
mycursor.execute(query)
result = mycursor.fetchall()
for skill in result:
    all_skills.append(skill[0])
# print(all_skills)

#getting active_user skills
user_skills = []
query = "select name from categories where id in (select categoryId from userSkills where userId = %s)"
mycursor.execute(query , userId)
result = mycursor.fetchall()
for skill in result:
    user_skills.append(skill[0])
final_output = {}
query = "select id from companies"
mycursor.execute(query)
result = mycursor.fetchall()
for company in result:
    final_output[company[0]] = []
for i in user_interests:
    query = "select companyId , categoryId , describtion from jobdescribtions where categoryId = %s"
    mycursor.execute(query , i)
    result = mycursor.fetchall()
    for company , interest , describtion in result:
        selected_job_qualifications(interest , all_skills , user_skills , company , describtion)
res = dict()
for key in sorted(final_output):
    res[key] = sorted(final_output[key])
print(res)
