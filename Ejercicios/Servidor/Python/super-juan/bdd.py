import mysql.connector

mydb= mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="supermercado"
)

mycursor=mydb.cursor()