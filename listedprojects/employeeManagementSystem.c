#include<stdio.h>
#include<string.h>
struct employeeManagement {
    int employeeId;
    char name[30];
    char department[50];
    float salary;
    int yearsOfService;

};

int main(){

    struct employeeManagement employees[10];

    for(int i = 1; i<=2; i++){
        printf("Enter ID of Employee %d : ", i);
        scanf("%d", &employees[i].employeeId);
        while(getchar() != '\n');

        printf("Enter the name of the Employee %d : ", i);
        fgets(employees[i].name, sizeof(employees[i].name), stdin);
        employees[i].name[strcspn(employees[i].name, "\n")] = '\0';

        printf("Enter the department of Employee %d : ", i);
        fgets(employees[i].department, sizeof(employees[i].department), stdin);
        employees[i].department[strcspn(employees[i].department, "\n")] = '\0';


        printf("Enter the salary of Employee %d : ", i);
        scanf("%f", &employees[i].salary);

        printf("Enter the years of service of Employee %d : ", i);
        scanf("%d", &employees[i].yearsOfService);
        printf("\n");
    }
    printf("\n");

    for(int j = 1; j<=2; j++){
        printf("\n-----EMPLOYEE %d-----\n",j);
        printf("\nID : %d\n", employees[j].employeeId);
        printf("Name : %s\n", employees[j].name);
        printf("Department : %s\n", employees[j].department);
        printf("Salary : $%.3f\n", employees[j].salary);
        printf("Years of Service : %dyrs\n", employees[j].yearsOfService);
    }
}