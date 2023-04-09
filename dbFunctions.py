import sqlite3


def get_db_connection():
    """
    Эта функция создаст подключение к базе данных database.db
    и установит режим получения результатов запросов в виде словаря Row,
    что позволит обращаться к столбцам базы данных по их именам.
    """
    conn = sqlite3.connect('database.db')
    # conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db_connection()
    conn.execute('CREATE TABLE IF NOT EXISTS phone_numbers '
                 '(phone TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)')
    conn.close()


def insert_DATA_in_DB(data):
    conn = get_db_connection()
    # a = conn.execute('select count(*) from phone_numbers').fetchone()
    if conn.execute('select count(*) from phone_numbers').fetchone()[0] == 0:
        for el in data:
            conn.execute(
                f'INSERT INTO phone_numbers (phone, name, email) VALUES ("{el["phone"]}", "{el["name"]}", "{el["email"]}")')
        #print(conn.execute('select * from phone_numbers').fetchall())
        conn.commit()
    conn.close()


def get_data_from_DB():
    data = ''
    conn = get_db_connection()
    if not conn.execute('select count(*) from phone_numbers').fetchone()[0] == 0:
        data = conn.execute('select * from phone_numbers').fetchall()
        print(data)
    conn.close()

    return data