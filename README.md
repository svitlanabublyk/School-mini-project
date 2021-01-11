# School-mini-project

## Compile project

```
tsc -t es5 src/app.ts
```

## Prepare database 

```sql
CREATE TABLE Teachers (
    id int AUTO_INCREMENT NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    DateOfBirth DATE,
    Subject varchar(255),
    PRIMARY KEY (id)
);

insert into Teachers (LastName, FirstName, DateOfBirth, Subject) values ('Vasylenko', 'Oksana', '1981-01-11' , 'History');
insert into Teachers (LastName, FirstName, DateOfBirth, Subject) values ('Kotenko', 'Veniamin', '1956-12-1' , 'Biology');
insert into Teachers (LastName, FirstName, DateOfBirth, Subject) values ('Vlasova', 'Olena', '1989-05-09' , 'Math');
insert into Teachers (LastName, FirstName, DateOfBirth, Subject) values ('Murova', 'Snizhana', '1983-02-01' , 'Physics');
insert into Teachers (LastName, FirstName, DateOfBirth, Subject) values ('Ivanova', 'Maria', '1986-05-30' , 'Math');
```

## Run application

1. Add database connection parameters to `src/db.ts`
2. Run command

```
node src/app.js
```
