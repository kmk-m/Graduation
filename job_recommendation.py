import pymysql
import sys

def selected_job_qualifications(user_interest , all_skills , user_skills , company , job_des):
    job_skills = []
    common_skills = []
    final_output = {}   
    recommended_courses = []
    global mycursor
    for value in all_skills:
        if value in job_des:
            job_skills.append(value)
    # print('job_skills = ', job_skills)
    # print(job_skills)
    for skill in user_skills:
        if skill in job_skills:
            # print(skill)
            common_skills.append(skill)
    # print('common_skills =  ', common_skills)
    if len(user_skills) == 0:
        for i in common_skills:
            query = "SELECT name , MAX(rating) as rate FROM courses where name like %(name)s group by name;"
            mycursor.execute(query , {'name': '%'+i+'%'})
            result = mycursor.fetchall()
            for course in result:
                recommended_courses.append(course[0])
                break
        final_output[company] = [user_interest , 'missing' , common_skills , len(common_skills) , 'recommended_courses' ,  recommended_courses]
    elif job_skills == common_skills:
        final_output[company] = [user_interest , 'Qualified']
        # print('final_output =  ', final_output , '\n')
    else:
        for skill in common_skills:
            job_skills.remove(skill)

        for i in job_skills:
            query = "SELECT name , MAX(rating) as rate FROM courses where name like %(name)s group by name;"
            mycursor.execute(query , {'name': '%'+i+'%'})
            result = mycursor.fetchall()
            for course in result:
                recommended_courses.append(course[0])
                break
        # print('recommended_courses = ', recommended_courses)
        # print('job_skills after removing common skills ', job_skills)
        final_output[company] = [user_interest , 'missing' , job_skills , len(job_skills) , 'recommended_courses' ,  recommended_courses]
    # final_output = sorted(final_output.items(), key=lambda item: item[1])
    # return final_output
    print('final_output =  ', final_output , '\n')

mydb = pymysql.connect(host="127.0.0.1",
                       database="lms",
                       user="root",
                       password="", )
mycursor = mydb.cursor()

#getting active_user id
# userId = sys.argv[1]
userId = '4e994d60-4af0-11ed-bb93-b07b258218c6'

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
# print(user_skills)
# user_skills = ['client-side applications' , 'JavaScript' , 'c++' , 'algorithms']    
final_output = {}
# query = "select interestId from userinterests where userId = %s"
# mycursor.execute(query , [userId])
# result = mycursor.fetchall()
# for interest in result:
#     user_interests.append(interest)
# print(user_interests)
for i in user_interests:
    query = "select companyId , categoryId , describtion from jobdescribtions where categoryId = %s"
    mycursor.execute(query , i)
    result = mycursor.fetchall()
    for company , interest , describtion in result:
        selected_job_qualifications(interest , all_skills , user_skills , company , describtion)
        # final_output[company] = [interest , describtion]
        # print(final_output)
        # # print([company , interest , describtion])
        # company_list = list(final_output.keys())
        # describtion_list = list(final_output.values())
    # print(company_list , '\n' , describtion_list)
    # selected_job_qualifications( i , all_skills , user_skills , company_list , describtion_list)
