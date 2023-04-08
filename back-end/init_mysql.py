# 用于数据库的初始化
# 用管理员模式运行此代码
# 使用前确保已经安装pymysql模块
# 默认localhost

name = input("请输入数据库的用户名：")
password = input("请输入数据库的密码：")
database = input("请输入数据库的名称：")
port_ = int(input("请输入数据库的端口号："))
if database == None:
    print('数据库将自动建立')
    
    
import pymysql
db = pymysql.connect(host='localhost', user=name,
                             passwd=password, port=port_)
cur = db.cursor() 
try:
    db 
    print('连接成功！')
except:
    print('连接错误')

cur = db.cursor() 
if not database:
    print('数据库将自动建立')
    cur.execute('CREATE DATABASE test_db')
    cur.execute('USE test_db')
    print('数据库已建立')
else:
    cur.execute('USE '+ database)
    
cur.execute('CREATE TABLE IF NOT EXISTS html_data (id int(10) NOT NULL, html_data MEDIUMBLOB)')
print('数据表已建立')

# cur.execute('select * from html_data')
    